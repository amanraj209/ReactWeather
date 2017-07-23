const React = require('react');

// let About = React.createClass ({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

// Stateless functional component (These functions only define render method and they don't maintain any state)
let About = (props) => {
    return (
        <h3>About Component</h3>
    );
};

module.exports = About;