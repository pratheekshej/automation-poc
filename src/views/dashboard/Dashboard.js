/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CPagination,
  CPaginationItem,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
/* import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons' */

// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { tableExample, tableHeader } from './data'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const [tableData, setTableData] = useState(tableExample)

  const rowSize = 5
  const dataLength = tableExample.length

  return (
    <CCard className="mb-4">
      <CCardHeader>Updates on website traffic</CCardHeader>
      <CCardBody>
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead color="light">
            <CTableRow>
              {tableHeader.map((header) => (
                <CTableHeaderCell key={header.tabId} className={header.className}>
                  {header?.name}
                </CTableHeaderCell>
              ))}
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {tableData.map((item, index) => (
              <CTableRow v-for="item in tableItems" key={index}>
                <CTableDataCell>
                  <div>{item.user.name}</div>
                  <div className="small text-medium-emphasis">
                    <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                    {item.user.registered}
                  </div>
                </CTableDataCell>
                <CTableDataCell>
                  <div className="clearfix">
                    <div className="float-start">
                      <strong>{item.usage.value}%</strong>
                    </div>
                    <div className="float-end">
                      <small className="text-medium-emphasis">{item.usage.period}</small>
                    </div>
                  </div>
                  <CProgress thin color={item.usage.color} value={item.usage.value} />
                </CTableDataCell>
                <CTableDataCell>
                  <div className="small text-medium-emphasis">Last login</div>
                  <strong>{item.activity}</strong>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
      <CCardBody>
        {/* ---------------------------- PAGINATION ---------------------------- */}
        <CPagination aria-label="Page navigation">
          <CPaginationItem aria-label="Previous" disabled>
            <span aria-hidden="true">&laquo;</span>
          </CPaginationItem>
          <CPaginationItem active>1</CPaginationItem>
          <CPaginationItem>2</CPaginationItem>
          <CPaginationItem>3</CPaginationItem>
          <CPaginationItem aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </CPaginationItem>
        </CPagination>
        {/* ---------------------------- PAGINATION ---------------------------- */}
      </CCardBody>
    </CCard>
  )
}

export default Dashboard
