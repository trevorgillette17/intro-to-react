import React, { Component } from 'React';

class ToDo extends Component {
render() {
	return (
		<li>
		<input type="checkbox" checked={ this.props.IsCompleted } />
		<span>{ this.props.description } </span>
		</li>
	);
}
}

export default ToDo;
