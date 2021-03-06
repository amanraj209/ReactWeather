const React = require('react');

// let Examples = React.createClass({
//     render: function () {
//         return (
//             <h3>Examples Component</h3>
//         );
//     }
// });

// Stateless functional component (These functions only define render method and they don't maintain any state)
let Examples = (props) => {
    return (
        <div>
            <h3>Examples</h3>
            <p>Welcome to the Examples page!</p>
        </div>
    );
};

module.exports = Examples;