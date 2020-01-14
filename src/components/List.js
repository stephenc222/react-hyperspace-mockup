import React from 'react'
import PropTypes from 'prop-types'
import './List.css'

const renderListItem = (item, index) => <li key={`li_c${index}`}>{item}</li>

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

List.propTypes = {
  isOrdered: PropTypes.bool,
  listData: PropTypes.array.isRequired,
  listClassName: PropTypes.string
}

export default List
