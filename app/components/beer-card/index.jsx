var React = require("react");
var Bootstrap = require("react-bootstrap");

var actions = require("lib/actions");

var styles = {
    box: {
        position: "relative",
        display: "inline-block",
        height: 350,
        width: 220,
        cursor: "pointer",
        textAlign: "left"
    },
    picture: {
        position: "absolute",
        top: 20,
        left: 20,
        width: 180,
        height: 180
    },
    description: {
        position: "absolute",
        width: 180,
        left: 20,
        top: 200
    },
    firstLine: {
        textAlign: "right"
    },
    secondLine: {
        display: "inline-block",
        width: "100%"
    }
};

var BeerCard = React.createClass({
    propTypes: {
        beer: React.PropTypes.object.isRequired
    },
    onClick: function () {
        actions.openSignupModal();
        console.warn("TODO: HTTP request to log beer choice");
        console.log("Click on beer %s", this.props.beer.short_description);
    },
    render: function () {
        return (
            <div style={styles.box} onClick={this.onClick}>
                <img style={styles.picture} src={this.props.beer.thumbnail} />
                <div style={styles.description}>
                    <div style={styles.firstLine}>
                        {this.props.beer.type}
                        {" "}
                        {this.props.beer.volume + "%"}
                    </div>
                    <div>
                        {this.props.beer.short_description}
                    </div>
                    <Bootstrap.ProgressBar now={this.props.beer.progress} />
                    <div>
                        {"Progress "}
                        {this.props.beer.progress}
                        {"% funded"}
                    </div>
                    <div>
                        {"Time left: " + this.props.beer.timeLeft + " days"}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = BeerCard;
