/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { wpAppInstance, wpAuthInstance } from 'src/core/axios/wp-axios'
import { APIS } from 'src/core/utils/api'
import { useDispatch } from 'react-redux'
import { setLoader, setToaster } from 'src/redux/app/app.actions'
import './ProfileStyle.scss'
import { handleUpdateProfile } from './utils'

const Profile = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({})
  const [editableFields, setEditableFields] = useState(['name'])
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    if (!user.name) {
      fetchUserData();
    }
  }, [!user.name]);

  const fetchUserData = () => {
    dispatch(setLoader(true, 'Getting your profile'));
    setEditMode(false);
    wpAppInstance.get(APIS.GET.MY_PROFILE).then((res) => {
      dispatch(setLoader(false))
      setUser(res?.data || null)
    }).catch(err => {
      dispatch(setLoader(false));
      dispatch(setToaster({
        title: 'ERROR!',
        content: err?.response?.data?.message || 'Error. Please try again.',
        type: 'DANGER'
      }));
    });
  }

  const handleEditMode = () => {
    setEditMode(!editMode)
  }

  const handleFieldUpdate = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="bg-col">
      <div className=" justify-content-end d-flex">
        {!editMode ? (
          <button className="button" onClick={handleEditMode}>
            Edit
          </button>
        ) : (
          <div className="button_container">
            <button
              className="button"
              onClick={() => handleUpdateProfile(dispatch, user, handleEditMode)}
            >
              Update
            </button>
            <button className="button" onClick={fetchUserData}>
              Cancel
            </button>
          </div>
        )}
      </div>
      <div className="d-flex flex-row align-items-center">
        <div className="row container page_container">
          <div className="col-6 profile_left_col">
            <div className="mx-auto">
              <div>
                <img
                  className="profile_pic_container"
                  src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  alt="profile pic"
                />
              </div>
              <div>
                {editMode ? (
                  <input
                    type="text"
                    className="form-control textFields profile_name active_edit"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={user.name}
                    name="name"
                    onChange={handleFieldUpdate}
                  />
                ) : (
                  <div className="profile_name">{user?.name}</div>
                )}
              </div>
            </div>
          </div>
          <div className="col-6 profile_right_col">
            <div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  Email :-
                </span>
                <input
                  type="text"
                  className="form-control textFields"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={user.email}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  Created at :-
                </span>
                <input
                  type="text"
                  className="form-control textFields"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  readOnly={!editableFields.includes('created_at')}
                  value={user.created_at}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  Varified at :-
                </span>
                <input
                  type="text"
                  className="form-control textFields"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  readOnly={!editableFields.includes('email_verified_at')}
                  value={user.email_verified_at}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
