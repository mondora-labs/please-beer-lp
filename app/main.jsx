var React = require("react/addons");
var Reflux = require("reflux");

var components = require("components");
var stores = require("lib/stores");

var styles = {
    header: {
        position: "absolute",
        width: "100%",
        height: 100
    },
    content: {
        position: "absolute",
        top: 100,
        width: "100%",
        height: "calc(100% - 50px)"
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
            <div>
                <div style={styles.header}>
                    <components.Header />
                </div>
                <div style={styles.content}>
                    <components.Content />
                </div>
                <components.SignupModal open={this.state.signupModalIsOpen} />
            </div>
        );
    }
});

React.render(<App />, document.body);
