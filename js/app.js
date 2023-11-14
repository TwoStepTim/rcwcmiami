"use strict";

var dateUpdater = $('#date');
var dateReminderRightContainer = $('#date-reminder-right-container');
var navbarDateUpdater = $('#navbar-brand-container-lower-heading');
console.log(dateUpdater);

var conferenceDate = new Date('10/23/2018');
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
    var api_key = 'AIzaSyDaLNdW2DwXDOch4rEs9C0hP-Amc4RVYPE ';
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 18,
        center: location
    });
    var markerIcon = 'google-map-marker.png';
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        visible: true,
        icon: markerIcon
    });
}