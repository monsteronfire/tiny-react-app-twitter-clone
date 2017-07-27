import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <label>
        {this.props.label}
        <input
         type='text'
         value={this.state.name}
         onChange={this.handleChange}
       />
     </label>
    )
  }
}

export default Input;
