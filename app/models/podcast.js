import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string'),
  copyright: DS.attr('string'),
  author: DS.attr('string'),
  block: DS.attr('boolean'),
  imageUrl: DS.attr('string'),
  explicit: DS.attr('boolean'),
  complete: DS.attr('boolean'),
  subtitle: DS.attr('string'),
  summary: DS.attr('string'),
  owner: DS.attr('string'),
  ownerEmail: DS.attr('string'),
  episodes: DS.hasMany('episode'),
  categories: DS.hasMany('category')
});
