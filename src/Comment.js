import React from 'react';

const styles ={
  root: {
    width: '20%',
    margin: 'auto',
    marginTop: 16,
    padding: 16,
    textAlign: 'left',
    backgroundColor: 'white',
    borderRadius: 16,
  },

}
class Comment extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <div>
          <img src="" alt=""/>
        </div>
        <div>
          <div>
            {this.props.name}
          </div>
          <span>
            {this.props.content}
          </span>
        </div>
        
      </div>
    )
  }
}

export default Comment;