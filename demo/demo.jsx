var Button = require('./Button');
var ButtonGroup = require('./ButtonGroup');
var ProcessingIndicator = require('./ProcessingIndicator');

(function () {
  React.render(
    <div>
      <ButtonGroup>
        <Button type='primary' enabled={true}>Primary</Button>
        <Button type='secondary' enabled={true}>Secondary</Button>
        <Button type='login' enabled={true}>Login</Button>
        <Button type='link' enabled={true}>Cancel</Button>
        <Button type='delete' enabled={true}>Delete</Button>
        <Button type='edit' enabled={true}>Edit</Button>
        <Button type='plus' enabled={true}>Plus</Button>
        <ProcessingIndicator></ProcessingIndicator>
      </ButtonGroup>
    </div>,
    document.getElementById('content')
  );
})();
