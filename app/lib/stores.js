var Reflux = require("reflux");

var actions = require("lib/actions");

exports.signupStore = Reflux.createStore({
    init: function () {
        this.listenTo(actions.openSignupModal, this.onOpen);
        this.listenTo(actions.closeSignupModal, this.onClose);
        this.isOpen = false;
    },
    onOpen: function () {
        this.isOpen = true;
        this.trigger(this.isOpen);
    },
    onClose: function () {
        this.isOpen = false;
        this.trigger(this.isOpen);
    },
    getStatus: function () {
        return this.isOpen;
    }
});
