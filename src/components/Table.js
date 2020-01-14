import React from 'react'
import PropTypes from 'prop-types'
import './Table.css'

const TableHeadCell = ({ label }) => {
  return <th>{label}</th>
}
const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map(({ label }, index) => <TableHeadCell key={`sc_th_${index}`} label={label} />)}
      </tr>
    </thead>
  )
}

const TableBodyCell = ({ value }) => {
  return (
    <td>{value}</td>
  )
}

const TableBodyRow = ({ columns, item }) => {
  return (
    <tr>
      {columns.map(({ key }) => <TableBodyCell key={key} value={item[key]} />)}
    </tr>
  )

}

const TableBody = ({ columns, data }) => {
  return (
    <tbody>
      {data.map((item, index) => <TableBodyRow key={`sc_tb_${index}`} columns={columns} item={item} />)}
    </tbody>
  )
}

const TableFooter = ({ summaryValue, formatSummaryData }) => {
  const formattedSummaryData =
    formatSummaryData && typeof formatSummaryData === 'function'
      ? formatSummaryData(summaryValue)
      : summaryValue
  return (
    <tfoot>
      <tr>
        <td colSpan='2'></td>
        <td>{formattedSummaryData}</td>
      </tr>
    </tfoot>
  )
}

const Table = ({ columns, data, summaryValue, tableClassName = '', formatSummaryData }) => {
  return (
    <div className='table-wrapper'>
      <table className={tableClassName}>
        <TableHead columns={columns} data={data} />
        <TableBody columns={columns} data={data} />
        <TableFooter formatSummaryData={formatSummaryData} summaryValue={summaryValue} />
      </table>
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  summaryValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tableClassName: PropTypes.string,
  formatSummaryData: PropTypes.func.isRequired
}

export default Table
