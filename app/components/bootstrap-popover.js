import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement: function() {
    this.$().popover({
      title: "<i class=\"fa fa-" + this.get("icon") + "\"></i> " + this.get("title"),
      container: "body",
      trigger: this.get("action"),
      selector: this.get("selector"),
      placement: this.get("placement"),
      content: this.get("content"),
      html: true
    });
  }
});
