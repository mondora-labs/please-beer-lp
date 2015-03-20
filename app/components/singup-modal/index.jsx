var React = require("react");
var Bootstrap = require("react-bootstrap");

var actions = require("lib/actions");

var ModalBody = React.createClass({
    closeModal: function () {
        actions.closeSignupModal();
    },
    submit: function () {
        console.warn("TODO: HTTP request to log signup");
        console.log("Email: %s", this.refs.email.getValue());
        console.log("Number: %s", this.refs.number.getValue());
        this.closeModal();
    },
    render: function () {
        return (
            <div>
                <div className="modal-body">
                    {"Get notified as soon as it's available"}
                    <br />
                    <br />
                    <form className="form-horizontal">
                        <Bootstrap.Input
                            ref="email"
                            type="email"
                            placeholder="email@example.com"
                            label="Email"
                            labelClassName="col-xs-2"
                            wrapperClassName="col-xs-10"
                        />
                        <Bootstrap.Input
                            type="text"
                            ref="number"
                            placeholder="+39 333 333 3333"
                            label="WhatsApp"
                            labelClassName="col-xs-2"
                            wrapperClassName="col-xs-10"
                        />
                    </form>
                </div>
                <div className="modal-footer">
                    <Bootstrap.Button onClick={this.submit}>
                        Submit
                    </Bootstrap.Button>
                </div>
            </div>
        );
    }
});

var SignupModal = React.createClass({
    mixins: [Bootstrap.OverlayMixin],
    closeModal: function () {
        actions.closeSignupModal();
    },
    renderOverlay: function () {
        if (!this.props.open) {
            return <span/>;
        }
        return (
            <Bootstrap.Modal
                title="We are launching please.beer"
                onRequestHide={this.closeModal}
            >
                <ModalBody />
            </Bootstrap.Modal>
        );
    },
    render: function () {
        return null;
    }
});

module.exports = SignupModal;
