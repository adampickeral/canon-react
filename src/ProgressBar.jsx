var StatusClasses = {
  'ok': 'rs-status-ok',
  'error': 'rs-status-error',
  'warning': 'rs-status-warning',
  'info': 'rs-status-info'
};

var TypeClasses = {
  'solid': 'rs-bar-solid',
  'striped': 'rs-bar-striped'
};

var ProgressBar = React.createClass({
  getDefaultProps: function () {
    return {
      progress: 0,
      status: 'ok',
      type: 'solid'
    };
  },

  _getStatusClass: function () {
    var statusClass;

    statusClass = ['rs-bar'];
    statusClass.push(StatusClasses[this.props.status]);
    statusClass.push(TypeClasses[this.props.type]);
    return statusClass.join(' ');
  },

  render: function () {
    var style, width, statusClass;

    width = this.props.progress + '%';
    style = { 'width': width };

    statusClass = this._getStatusClass();

    return (
      <div className="rs-progress">
        <div className="rs-progress-inner">
          <div className="rs-segment" style={style}>
            <div className={statusClass}></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProgressBar;
