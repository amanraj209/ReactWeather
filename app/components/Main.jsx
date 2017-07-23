const React = require('react');
const Nav = require('Nav');

// let Main = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <Nav/>
//             </div>
//         );
//     }
// });

// Stateless functional component (These functions only define render method and they don't maintain any state)
let Main = (props) => {
    return (
        <div>
            <Nav/>
        </div>
    );
};

module.exports = Main;