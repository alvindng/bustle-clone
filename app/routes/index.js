import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      articles: this.store.findAll('article'),
      authors: this.store.findAll('author')
    });
  }
});
