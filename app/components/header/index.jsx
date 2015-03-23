var React = require("react");

var styles = {
    header: {
        textAlign: "center",
        backgroundColor: "#433411",
        height: "100%"
    },
    logo: {
        height: "100%"
    }
};

var Header = React.createClass({
    propTypes: {
    },
    render: function () {
        return (
            <div style={styles.header}>
                <img style={styles.logo} src="assets/images/logo.jpg" />
            </div>
        );
    }
});

module.exports = Header;
