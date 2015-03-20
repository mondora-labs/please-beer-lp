var React = require("react");
var Bootstrap = require("react-bootstrap");

var Description = React.createClass({
    render: function () {
        return (
            <div>
                {"Please beer is a crowdfunding platform where MICROBREWERIES do..."}
                <ol>
                    <li>{"sponsor for a beer"}</li>
                    <li>{"reach the volume"}</li>
                    <li>{"beer making"}</li>
                    <li>{"delivery"}</li>
                    <li>{"prosit"}</li>
                </ol>
            </div>
        );
    }
});

module.exports = Description;
