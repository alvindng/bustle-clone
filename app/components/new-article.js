import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },
    save(){
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        category: this.get('category'),
        headline: this.get('headline'),
        image: this.get('image'),
        time: this.get('time')
      };
      this.set('addNewArticle', false);
      this.sendAction('save', params);
    }
  }
});
