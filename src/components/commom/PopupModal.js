import { CModal, CModalHeader, CModalBody, CModalFooter } from '@coreui/react'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const PopupModal = ({ header, content, footer, visibility }) => {
  const [modal, setModal] = useState(true)

  const toggle = () => {
    setModal(!modal)
  }
  return (
    <>
      <CModal show={true} visible={visibility} onClose={toggle}>
        <CModalHeader closeButton>{header}</CModalHeader>
        <CModalBody>{content}</CModalBody>
        <CModalFooter>{footer}</CModalFooter>
      </CModal>
    </>
  )
}
PopupModal.propTypes = {
  visibility: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  footer: PropTypes.any.isRequired,
  // visibility,
}

PopupModal.defaultProps = {}
export default PopupModal
