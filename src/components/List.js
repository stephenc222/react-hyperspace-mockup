import React from 'react'
import './List.css'

const renderListItem = (item) => <li>{item}</li>

const List = ({ isOrdered, listData, listClassName = '' }) => {
  if (isOrdered) {
    return (
      <ol className={listClassName}>
        {listData.map(renderListItem)}
      </ol>
    )
  }
  return (
    <ul className={listClassName}>
      {listData.map(renderListItem)}
    </ul>
  )
}

export default List