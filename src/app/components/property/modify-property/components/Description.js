import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';

export default class Description extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: RichTextEditor.createEmptyValue(),
      init: true
    }
  }

  onChange = (value) => {
    console.log(value)
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  componentWillReceiveProps(newProps) {
    if (newProps.value && this.state.init) {
      let editor  = this.state.value;
      editor._cache.html = newProps.value;
      console.log(editor)
      this.onChange(editor)
      this.setState({
        init: false
      })
    }
  }

  render() {
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}
