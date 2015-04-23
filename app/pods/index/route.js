import Ember from 'ember';

var hash = Ember.RSVP.hash;

export default Ember.Route.extend({
  model() {
    var promiseConcert = new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: 'GET',
        url: 'https://api.bandsintown.com/events/search.json?location=Sacramento,CA&app_id=randallkanna',
        dataType: 'jsonp',
        // url: `https://api.bandsintown.com/events/search.json?location=${userLocation}&app_id=randallkanna`
        success: function(response) {
          resolve(response)
          debugger
        },
        error: reject
      })
    });

    return hash({
      concerts: promiseConcert
    })
  }
});