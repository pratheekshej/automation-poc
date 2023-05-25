/* eslint-disable react-hooks/exhaustive-deps */
import { CCol, CRow } from '@coreui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoader, setToaster } from 'src/redux/app/app.actions'
import { APIS } from 'src/core/utils/api'
import { wpAppInstance } from 'src/core/axios/wp-axios'
import { useEffect } from 'react'
import InputField from '../../../components/commom/Input'
import './ssh.scss'
const SSHKey = () => {
  const [sshKey, setSshKey] = useState('')

  const dispatch = useDispatch()
  useEffect(() => {
    handleGetSshKey()
  }, [])

  //===============handle get ssh key submit=================
  const handleGetSshKey = () => {
    dispatch(setLoader(true, 'Logging you out'))
    wpAppInstance
      .get(APIS.GET.GET_SSH)
      .then((res) => {
        // SecurityService.logout()
        dispatch(setLoader(false))
        setSshKey(res.data)
      })
      .catch((err) => {
        dispatch(setLoader(false))
      })
  }

  //===============copy ssh key =================

  const copyKey = () => {
    navigator.clipboard.writeText(sshKey)
    dispatch(
      setToaster({
        title: 'Success',
        content: 'Copied successfully',
        type: 'SUCCESS',
      }),
    )
  }
  return (
    <>
      {/* <CRow> */}
      {/* <CCol sm="6"> */}
      <CRow className="field_spacing">
        <CCol className="label_container" sm="1">
          SSH keys
        </CCol>
        <CCol sm="11">
          <InputField
            name="ssh_keys"
            type="text"
            disable={true}
            value={sshKey}
            callBack={(e) => {}}
          />
        </CCol>
      </CRow>
      <div className="button_container">
        <button className="submit_button" onClick={copyKey}>
          Copy
        </button>
      </div>
    </>
  )
}
export default SSHKey
