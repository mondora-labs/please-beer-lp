var React = require("react");
var Bootstrap = require("react-bootstrap");

var components = require("components");
var actions = require("lib/actions");

var styles = {
    beers: {
        textAlign: "center"
    },
    grey: {
        textDecoration: "none",
        width: "286px",
        display: "block",
        backgroundColor: "#3d3c40",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        textIndent: "0",
        display: "inline-block",
        color: "#f1f1f1 !important",
        fontFamily: "'Pathway Gothic One', sans-serif",
        fontSize: "30px",
        cursor: "pointer",
        fontStyle: "normal",
        height: "41px",
        textDecoration: "none",
        textAlign: "center",
        padding: "0",
        textTransform: "uppercase",
        border: "0",
        minWidth: "286px",
        marginTop: "10px"
    }
};

var Content = React.createClass({
    onClick: function () {
        actions.openSignupModal();
        console.warn("TODO: HTTP request to log beer choice");
        console.log("Click on beer %s", this.props.beer.short_description);
    },
    render: function () {
        var styleWrap = (window.innerWidth >= 780) ?  "60%" : "100%";
        return (
            <div style={styles.content}>
                <img src="../assets/images/crowfunding.png" width={styleWrap}/>
                <a style={styles.grey} onClick={this.onClick} >Stay in touch</a>
            </div>
        );
    }
});

module.exports = Content;
