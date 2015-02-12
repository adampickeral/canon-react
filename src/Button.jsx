var React = require('react');

Button = React.createClass({
  propTypes: {
    enabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    type: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      enabled: true
    };
  },

  render: function () {
    return (
      <button {...this.props} className={this._classes()} onClick={this._handleClick}>
        {this.props.children}
      </button>
    );
  },

  _classes: function () {
    var classes, buttonTypes;

    buttonTypes = {
      'primary': 'rs-btn-primary',
      'link': 'rs-btn-link'
    };

    classes = ['rs-btn'];
    classes.push(this.props.className);

    if (!this.props.enabled) {
      classes.push('disabled');
    }

    if (this.props.type && buttonTypes[this.props.type]) {
      classes.push(buttonTypes[this.props.type]);
    }

    return classes.join(' ');
  },

  _handleClick: function (e) {
    if (this.props.enabled) {
      this.props.onClick(e);
      return e;
    }
    e.preventDefault();
  }
});

module.exports = Button;
