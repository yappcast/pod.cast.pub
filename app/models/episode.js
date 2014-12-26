import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  block: DS.attr('boolean'),
  imageUrl: DS.attr('string'),
  mediaUrl: DS.attr('string'),
  explicit: DS.attr('boolean'),
  isClosedCaptioned: DS.attr('boolean'),
  duration: DS.attr('string'),
  order: DS.attr('string'),
  subtitle: DS.attr('string'),
  summary: DS.attr('string'),
  podcast: DS.belongsTo('podcast')
});