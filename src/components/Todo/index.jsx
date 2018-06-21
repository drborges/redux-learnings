import React from "react"

const Todo = ({ completed, text, onClick }) => {
  const styles = {
    textDecoration: completed ? 'line-through' : 'none'
  }

  return (
    <li style={styles} onClick={onClick}>{text}</li>
  )
}

export default Todo