import React, { Component } from 'react'

export default function WithForm(WrappedForm) {
  return class extends React.Component {
    state = {
      username: '',
      password: '',
      repassword: '',
    }

    fn = (type) => (e) => {
      this.setState({
        [type]: e.target.value,
      })
    }
    render() {
      return <WrappedForm {...this.state} fn={this.fn}></WrappedForm>
    }
  }
}
