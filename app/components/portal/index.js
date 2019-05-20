import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Portal extends Component {
  static defaultProps = {
    root: document.body,
    auto: true
  };

  static propTypes = {
    root: PropTypes.node,
    auto: PropTypes.bool,
    container: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
      .isRequired
  };

  constructor(props) {
    super(props);

    this.handleCreateContainer = this.handleCreateContainer.bind(this);
    this.handleAutoCreateContainer = this.handleAutoCreateContainer.bind(this);
  }

  componentDidMount() {
    const { auto } = this.props;

    if (!auto) {
      return this.handleCreateContainer();
    }

    this.handleAutoCreateContainer();
  }

  handleCreateContainer() {
    const { container } = this.props;
    this._container = container();

    this.forceUpdate();
  }

  handleAutoCreateContainer() {
    const { root } = this.props;
    const name = 'shadow';
    const element = 'div';

    this._container = document.querySelector(`#${name}`);

    if (!this._container) {
      this._container = document.createElement(element);
      this._container.setAttribute('id', name);
      root.appendChild(this._container);
    }

    this.forceUpdate();
  }

  render() {
    const { children } = this.props;
    return !this._container
      ? null
      : ReactDOM.createPortal(children, this._container);
  }
}
