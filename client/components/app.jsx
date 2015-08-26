var React = require('react');

var App = React.createClass({

    render: function(){
      return (
        <div>
            <h1>Echo Suggest</h1>
            <input placeholder='artist name' ref='artistName' />
            <button >Search</button>
        </div>
      );
    }

  });

module.exports = App;