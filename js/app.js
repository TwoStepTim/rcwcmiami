// Function to open the popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
  }
  
  // Function to close the popup
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
  }
  
  // Attach click event to the "View Bio" buttons
  document.querySelectorAll('.open-popup-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      var popupId = this.getAttribute('data-popup-id');
      openPopup(popupId);
    });
  });
  
"use strict";

var dateUpdater = $('#date');
var dateReminderRightContainer = $('#date-reminder-right-container');
var navbarDateUpdater = $('#navbar-brand-container-lower-heading');
console.log(dateUpdater);

var conferenceDate = new Date('01/24/2024');
var currentDate = new Date();
var dateDifference = conferenceDate.getTime() - currentDate.getTime();
var day = 1000 * 60 * 60 * 24;
dateDifference /= day;
dateDifference = Math.ceil(dateDifference);

if(dateDifference > 1) {
    dateUpdater.append( dateDifference );
    navbarDateUpdater.append(dateDifference + '<span class="navbar-brand-container-lower-heading-reminder">days left</span>');
    navbarDateUpdater.hide();
} else if(dateDifference === 1){
    dateUpdater.append( dateDifference );
    navbarDateUpdater.append(dateDifference + '<span class="navbar-brand-container-lower-heading-reminder">day left</span>');
    navbarDateUpdater.hide();
}
else {
    dateUpdater.hide();
    dateReminderRightContainer.hide();
    navbarDateUpdater.hide();
}

// Google Maps
function initializeMap() {
    var location = {
        lat: 25.711258201855323,
        lng:  -80.28372642210127
    };
    var api_key ='AIzaSyDaLNdW2DwXDOch4rEs9C0hP-Amc4RVYPE';
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 18,
        center: location
    });
    var markerIcon = 'Google_Maps_Pin.png';
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        visible: true,
        icon: markerIcon
    });
}


  