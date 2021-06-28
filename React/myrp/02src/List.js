import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  }
  static defaultProps = {
    list: ['n', 'p', 'm'],
  }
  render() {
    return (
      <ul>
        {this.props.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
}
