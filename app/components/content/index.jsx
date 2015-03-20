var React = require("react");
var Bootstrap = require("react-bootstrap");

var components = require("components");
var beers = require("beers");

var styles = {
    beers: {
        textAlign: "center"
    }
};

var Content = React.createClass({
    render: function () {
        return (
            <div style={styles.content}>
                <br />
                <Bootstrap.Col sm={8}>
                    <div style={styles.beers}>
                        {beers.map(function (beer) {
                            return <components.BeerCard beer={beer} key={beer.id} />;
                        })}
                    </div>
                </Bootstrap.Col>
                <Bootstrap.Col sm={4}>
                    <components.Description />
                </Bootstrap.Col>
            </div>
        );
    }
});

module.exports = Content;
