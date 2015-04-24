import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['index'],

  actions: {
    submitLocation: function(params) {
      var controller = this;

      var promiseConcert = new Ember.RSVP.Promise(function(resolve, reject) {
        Ember.$.ajax({
          type: 'GET',
          url: `https://api.bandsintown.com/events/search.json?location=${params}&app_id=randallkanna`,
          dataType: 'jsonp',
          success: function(response) {
            resolve(response)
          },
          error: reject
        })
      }).then(function(response) {
        controller.set('controllers.index.userLocation', response);
      });
    }
  }
});