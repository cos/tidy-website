import ReactDOM from 'react-dom';
import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

var FixList = React.createClass({
  render: function() {
    var fixes = this.props.data.map(function(fix){
      return (
        <Fix fix={fix} key={"fix" + fix.id}>
          {fix.text}
        </Fix>
      )
    })
    return (
      <div className="fixList ui styled fluid accordion">
      {fixes}
      </div>
    );
  }
});

var FixBox = React.createClass({
  loadCommentsFromServer: function() {
     $.ajax({
       url: this.props.url,
       dataType: 'json',
       cache: false,
       success: function(data) {
         this.setState({data: data});
       }.bind(this),
       error: function(xhr, status, err) {
         console.error(this.props.url, status, err.toString());
       }.bind(this)
     });
   },
  getInitialState: function() {
     return {data: []};
   },
   componentDidMount: function() {
     this.loadCommentsFromServer();
     // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
   },
  render: function() {
    return (
      <div className="fixBox ui container">
        <h1>Fixes</h1>
        <FixList data={this.state.data} />
      </div>
    );
  }
});
var Fix = React.createClass({
  render: function() {
    var fix = this.props.fix
    return (
      <div>
        <div className="fix title">
          <div className="ui grid">
            <div className="eight wide column"> 
              <i className="dropdown icon"></i> {fix.description} 
            </div>
            <div className="right floated right aligned six wide column"> 
              <a href="#"> {fix.file}#{fix.startLine} </a>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="transition hidden"> 
              <div className="ui horizontal divider"></div>
                <AceEditor mode="javascript" theme="github" name={"before"+fix.id}
                  editorProps={{$blockScrolling: true}} 
                  setOptions={{firstLineNumber: fix.startLine, showPrintMargin:false}}
                  minLines={1} maxLines={15}
                  width="95%"
                  readOnly={true}
                  value={fix.beforeCode} />
                  
          <div className="ui horizontal divider header"><div width="15px"></div><i className="fitted arrow down icon"></i></div>
                  
                <AceEditor mode="javascript" theme="github" name={"after"+fix.id}
                  editorProps={{$blockScrolling: true}} 
                  setOptions={{firstLineNumber: fix.startLine, showPrintMargin:false}}
                  highlightActiveLine={true}
                  minLines={1} maxLines={15}
                  width="95%"
                  value={fix.afterCode} />
          </div>
          <div className="ui divider"></div>
          <div className="ui center aligned container">
                  <div className="ui large slider checkbox">
                    <input type="checkbox" name="always"/>
                    <label>Always apply this fix</label>
                  </div>
          <br/><br/>
          <div className="ui four float buttons">
                  <div className="ui green button" tabindex="2">
                    <i className="checkmark icon"></i>  
                    Accept
                  </div>
                  <div className="or"></div>
                  <div className="ui red button" tabindex="1">
                    <i className="remove icon"></i>  
                    Reject
                  </div>
          </div>
              <div className="ui horizontal divider"></div>
          </div>
        </div>
      </div>
    );
  }
});
ReactDOM.render(
  <FixBox url="file:///Users/cos/workspaces/tidy/tidy-interface/src/data.js" />,
  document.getElementById('app')
);

$('.ui.accordion').accordion('setting', {exclusive: false});