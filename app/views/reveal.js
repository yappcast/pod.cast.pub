import Ember from "ember";

export default Ember.View.extend({
  tagName: "i",
  classNames: ["fa"],
  classNameBindings: ["isRevealed:fa-eye:fa-eye-slash"],
  isRevealed: false,
  mouseEnter: function() {
    this.set("isRevealed", true);
    Ember.$(this.get("selector")).attr("type", "text");
  },
  mouseLeave: function() {
    this.set("isRevealed", false);
    Ember.$(this.get("selector")).attr("type", "password");
  }
});
