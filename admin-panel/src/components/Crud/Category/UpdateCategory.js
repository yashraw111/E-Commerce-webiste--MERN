import React, { useEffect } from 'react'
// import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CRow,
} from '@coreui/react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ViewCateList, UpdateCate } from '../CategorySlice'

const UpdateCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const { CateList } = useSelector((state) => state.Category)
  const { id } = useParams('')
  const SingleCate = CateList.find((ele) => {
    return ele._id == id
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ViewCateList())
    reset(SingleCate)
  }, [dispatch])
  const redirect = useNavigate()

  function UpdateCateg(Data) {
    dispatch(UpdateCate(Data))
    // redirect('/base/viewCategory')
    // reset()
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CForm className="form shadow text-center" onSubmit={handleSubmit(UpdateCateg)}>
            <CCardHeader className="text-start">
              <strong className="fs-2">Update Category</strong>
            </CCardHeader>
            <CCardBody>
              <CFormInput
                type="text"
                size="lg"
                placeholder="Enter Product Category"
                {...register('cat_name', {
                  required: {
                    value: true,
                    message: 'Category is required',
                  },
                })}
              />
              {<p className="text-danger">{errors.category?.message}</p>}
              <br />
              <CButton type="submit" className="btn btn-success text-center mt-2">
                Submit
              </CButton>
            </CCardBody>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UpdateCategory
