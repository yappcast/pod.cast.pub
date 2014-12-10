import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    signup: function() {
      var record = this.store.createRecord("user", {
        signature: this.get("username"),
        name: this.get("name"),
        username: this.get("username"),
        email: this.get("email"),
        password: this.get("password")
      });
      record.save().then(
        function successHandler(model) {
          this.get("session").authenticate("authenticator:cast-pub", {
            key: this.get("email"),
            secret: this.get("password")
          });
          this.transitionToRoute("users.show", model);
        }.bind(this),
        function failureHandler(reason) {
          console.log(reason);
        }.bind(this)
      );
    }
  }
});
