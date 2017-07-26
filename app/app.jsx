const React = require('react');
const ReactDOM = require('react-dom');
const {Route, HashRouter} = require('react-router-dom');
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
    <HashRouter>
        <div>
            <Route path="/" component={Main}/>
            <Route exact path="/" component={Weather}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/examples" component={Examples}/>
        </div>
    </HashRouter>,
    document.getElementById('app')
);