import React from 'react'
import Section from './Section'
import Table from '../../components/Table'
import Header from '../../components/Header'

const TABLE_ONE_COLUMNS = [
  { key: 'name', label: 'Name' },
  { key: 'description', label: 'Description' },
  { key: 'price', label: 'Price' },
]
const TABLE_ONE_DATA = [
  { name: 'Item One', description: 'Ante turpis integer aliquet porttitor.', price: '29.99' },
  { name: 'Item Two', description: 'Vis ac commodo adipiscing arcu aliquet.', price: '19.99' },
  { name: 'Item Three', description: ' Morbi faucibus arcu accumsan lorem.', price: '29.99' },
  { name: 'Item Four', description: 'Vitae integer tempus condimentum.', price: '19.99' },
  { name: 'Item Five', description: 'Ante turpis integer aliquet porttitor.', price: '29.99' }
]

const TABLE_ONE_SUMMARY_DATA = 100.00

const TableSection = () => {
  return (
    <Section header='Table'>
      <div className='table-section-content' >
        <Header priority='3'>Default</Header>
        <Table
          columns={TABLE_ONE_COLUMNS}
          data={TABLE_ONE_DATA}
          formatSummaryData={dataValue => parseInt(dataValue) && dataValue.toFixed(2)}
          summaryValue={TABLE_ONE_SUMMARY_DATA}
        />
        <Header priority='3'>Alternate</Header>
        <Table
          columns={TABLE_ONE_COLUMNS}
          data={TABLE_ONE_DATA}
          formatSummaryData={dataValue => parseInt(dataValue) && dataValue.toFixed(2)}
          summaryValue={TABLE_ONE_SUMMARY_DATA}
          tableClassName='alt'
        />
      </div>
    </Section>
  )
}

export default TableSection
