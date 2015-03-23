var React = require("react");

var styles = {
    footer: {
        height: "42px",
        backgroundColor: "#302f33",
        position: "absolute",
        bottom: "0",
        width: "100vw",
        textAlign: "center",
        left: "0"
    },
    footerCopy: {
        paddingTop: "14px"
    },
    logo: {
        height: "100%"
    }
};

var Footer = React.createClass({
    propTypes: {
    },
    render: function () {
        return (
            <div style={styles.footer}>
                <div style={styles.footerCopy}>
                    &copy; 2015 Please beer

                </div>
            </div>
            );
    }
});

module.exports = Footer;
