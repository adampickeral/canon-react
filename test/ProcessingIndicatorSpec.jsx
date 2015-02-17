var ProcessingIndicator = require('../transpiled/ProcessingIndicator');
var TestUtils = React.addons.TestUtils;

describe('ProcessingIndicator', function () {
  var processingIndicator;

  beforeEach(function () {
    processingIndicator = TestUtils.renderIntoDocument(
      <ProcessingIndicator></ProcessingIndicator>
    );
  });

  it('has the rs-processing-indicator class', function () {
    expect(processingIndicator.getDOMNode()).toHaveClass('rs-processing-indicator');
  });

  it('renders an icon tag', function () {
    expect(TestUtils.findRenderedDOMComponentWithTag(processingIndicator, 'i')).not.toBeNull();
  });
});
