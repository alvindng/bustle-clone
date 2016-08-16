import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  category: DS.attr(),
  headline: DS.attr(),
  time: DS.attr(),
  body: DS.attr(),
  image: DS.attr()
});
