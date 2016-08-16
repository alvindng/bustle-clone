import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      articles: this.store.findAll('article'),
      authors: this.store.findAll('author')
    });
  },
  actions: {
    update(article, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          article.set(key,params[key]);
        }
      });
      article.save();
      this.transitionTo('admin');
    },

    save(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('admin');
    }
  }
});
