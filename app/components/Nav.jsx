const React = require('react');
const {NavLink} = require('react-router-dom');

// let Nav = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</NavLink>
//                 <NavLink exact to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
//                 <NavLink exact to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
//             </div>
//         );
//     }
// });

// Stateless functional component (These functions only define render method and they don't maintain any state)
let Nav = (props) => {
    return (
        <div>
            <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</NavLink>
            <NavLink exact to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
            <NavLink exact to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
        </div>
    );
};

module.exports = Nav;