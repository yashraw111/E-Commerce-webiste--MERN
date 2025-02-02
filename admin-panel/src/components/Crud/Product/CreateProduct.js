import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Createpr } from '../UserSlice'
import { ViewCateList } from '../CategorySlice'

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const dispatch = useDispatch()
  const {CateList}= useSelector((state)=>state.Category)
  console.log(CateList)

  useEffect(() => {
    dispatch(ViewCateList())
  }, [dispatch])

    const regist = async (data) => {
      try {
        const formData = new FormData();
        formData.append('file', data.image[0]);
        formData.append('upload_preset', 'project');
        formData.append('cloud_name', 'dd8jcqy60');
         const cloudinaryResponse = await axios.post(
          'https://api.cloudinary.com/v1_1/dd8jcqy60/image/upload',
          formData
        );
        const payload = {
          // id: Date.now(),
          productName: data.productName,
          CateGory: data.CateGory,
          productPrice: data.productPrice,
          productImage: cloudinaryResponse.data.secure_url,
        };
        dispatch(Createpr(payload))
        // console.log(payload)
        reset();
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CForm novalidate className="form shadow text-center" onSubmit={handleSubmit(regist)}>
            <CCardHeader className="text-start">
              <strong className="fs-2">Create Product</strong>
            </CCardHeader>
            <CCardBody>
              <CFormSelect  aria-label="Default select example" {...register('CateGory')}>
                <option>Open this select menu</option>
                {CateList.map((ele) => {
                  return (
                    <>
                      <option value={ele.cat_name}>{ele.cat_name}</option>
                    </>
                  )
                })}
              </CFormSelect>
              <CFormInput
                type="text"
                size="sm"
                className="mt-3"
                placeholder="Enter  Product Name"
                {...register('productName', { required: 'Product name is required' })}
              />
              {errors.name && <p className="text-danger">{errors.name.message}</p>}
              <br />
              <CFormInput
                type="number"
                size="sm"
                placeholder="Enter  Product Price"
                {...register('productPrice', { required: 'Price is required' })}
              />
              {errors.price && <p className="text-danger">{errors.price.message}</p>}
              <br />
              
              <CFormInput type='file' {...register("image", { required: "Image is required" })}  />
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

export default CreateProduct    


