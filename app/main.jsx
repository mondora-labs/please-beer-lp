var React = require("react/addons");
var Reflux = require("reflux");

var components = require("components");
var stores = require("lib/stores");

var styles = {
    header: {
        position: "fixed",
        height: "80px",
        width: "100%",
        top: "0px",
        zIndex: "9"
    },
    content: {
        width: "100vw",
        padding: "90px 0",
        textAlign: "center"
    },
    wrap: {
        backgroundColor: "#f8b600",
        minHeight: "100vh",
        position: "relative",
        color: "#FFF"
    }
};

var App = React.createClass({
    mixins: [Reflux.ListenerMixin],
    getStateFromStore: function () {
        return {
            signupModalIsOpen: stores.signupStore.getStatus()
        };
    },
    getInitialState: function () {
        return this.getStateFromStore();
    },
    onSignupStoreChange: function () {
        this.setState(this.getStateFromStore());
    },
    componentDidMount: function () {
        this.listenTo(stores.signupStore, this.onSignupStoreChange);
    },
    render: function () {
        return (
            <div style={styles.wrap}>
                <div style={styles.header}>
                    <components.Header />
                </div>
                <div style={styles.content}>
                    <components.Content />
                </div>
                <components.Footer />
                <components.SignupModal open={this.state.signupModalIsOpen} />

            </div>
        );
    }
});

React.render(<App />, document.body);
