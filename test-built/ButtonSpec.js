var Button  = require('../transpiled/Button');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('Button', function () {
  var button, clickFunction;

  beforeEach(function () {
    clickFunction = jasmine.createSpy('clickFunction');

    button = TestUtils.renderIntoDocument(
      React.createElement(Button, {id: "button-id", className: "rs-primary", onClick: clickFunction}, "Button Text")
    );    
  });

  afterEach(function () {
    button.unmountComponent();
  });

  it('is enabled by default', function () {
    expect(button.props.enabled).toBe(true);
    expect(button.getDOMNode()).not.toHaveClass('disabled');
  });

  it('renders a button', function () {
    expect(TestUtils.findRenderedDOMComponentWithTag(button, 'button')).not.toBeNull();
  });

  it('has the rs-btn class', function () {
    expect(button.getDOMNode()).toHaveClass('rs-btn');
  });

  it('keeps the passed in classes', function () {
    expect(button.getDOMNode()).toHaveClass('rs-primary');
  });

  it('keeps all passed in properties', function () {
    expect(button.getDOMNode().id).toBe('button-id');
  });

  it('renders the text of the button', function () {
    expect(button.getDOMNode().textContent).toBe('Button Text');
  });

  it('executes the click function when clicked', function () {
    TestUtils.Simulate.click(button.getDOMNode());

    expect(clickFunction).toHaveBeenCalled();
  });

  describe('when disabled', function () {
    beforeEach(function () {
      button = TestUtils.renderIntoDocument(
        React.createElement(Button, {enabled: false, onClick: clickFunction}, "Button text")
      );
    });

    it('adds a disabled class to the button', function () {
      expect(button.getDOMNode()).toHaveClass('disabled');
    });

    it('does not execute the click function when clicked', function () {
      TestUtils.Simulate.click(button.getDOMNode());

      expect(clickFunction).not.toHaveBeenCalled();
    });
  });
});
