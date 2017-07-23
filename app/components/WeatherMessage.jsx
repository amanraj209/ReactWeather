const React = require('react');

// let WeatherMessage = React.createClass({
//     render: function () {
//         let {temp, location} = this.props ;
//         return (
//             <h4>It's {temp} in {location}!</h4>
//         );
//     }
// });

// Stateless functional component (These functions only define render method and they don't maintain any state)
let WeatherMessage = ({temp, location}) => {
    // let {temp, location} = props ;
    return (
        <h4>It's {temp} in {location}!</h4>
    );
};

module.exports = WeatherMessage;