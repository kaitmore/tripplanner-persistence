
// $(document).ready(function(){
var hotelProm, restaurantProm, activitiesProm; 
// console.log(hotels)
    hotelProm = $.get('/api/hotels')
.then(function (hotelsList) {
    // hotels = hotelsList; 
    // console.log('hotelslistt', hotels);
   return hotelsList;
})
.catch( console.error.bind(console) );



restaurantProm = $.get('/api/restaurants')
.then(function (restaurantsList) {
// restaurants=restaurantsList;
return restaurantsList;
})
.catch( console.error.bind(console) );

activitiesProm = $.get('/api/activities')
.then(function (activitiesList) {
// activities=activitiesList;
return activitiesList;
})
.catch( console.error.bind(console));

// }
// );