import DS from "ember-data";

export default DS.ActiveModelAdapter.extend({
  host: 'http://localhost:4000/api'
});
