import React from 'react'

const styles = {
  horizontal: {height: 1},
  vertical: {width: 1}
}

export default React.createClass({
  propTypes: {
    direction: React.PropTypes.oneOf(Object.keys(styles)).isRequired
  },

  render() {
    return (
      <div style={{backgroundColor: '#bbb', ...styles[this.props.direction]}} />
    )
  }
})
