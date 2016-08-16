import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(article) {
      var params = {
        headline: this.get('headline'),
        category: this.get('category'),
        time: this.get('time'),
        image: this.get('image'),
        body: this.get('body')
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
