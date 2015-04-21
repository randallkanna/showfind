import Ember from 'ember';

var hash = Ember.RSVP.hash;

export default Ember.Route.extend({
  // model() {
  //   var promiseConcert = new Ember.RSVP.Promise(function(resolve, reject) {
  //     Ember.$.ajax({
  //       type: 'GET',
  //       url: 'https://api.bandsintown.com/events/search.json?location=Sacramento,CA',
  //       success: function(response) {
  //         resolve(response)
  //       },
  //       error: reject
  //     })
  //   });

  //   return hash({
  //     concerts: promiseConcert
  //   })
  // }
});