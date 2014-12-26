import DS from 'ember-data';

export default DS.Model.extend({
  categoryId: DS.attr('number'),
  title: DS.attr('string'),
  podcast: DS.belongsTo('podcast')
});