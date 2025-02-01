import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateProduct, ViewList } from '../UserSlice'
import { ViewCateList } from '../CategorySlice'
import axios from 'axios'

const UpdateProject = () => {
  const { id } = useParams()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const { ProductList } = useSelector((state) => state.product)
  const { CateList } = useSelector((state) => state.Category)
  const singleProduct = ProductList.find((ele) => {
    return ele._id == id
  })
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ViewList())
    dispatch(ViewCateList())
    reset(singleProduct)
  }, [dispatch])
  const redirect = useNavigate()
  const Update = async (data) => {
    try {
      let imageUrl = singleProduct.productImage;
    if (data.productImage.length == 1) {
      const formData = new FormData();
      formData.append('file', data.productImage[0]);
      formData.append('upload_preset', 'project');
      formData.append('cloud_name', 'dd8jcqy60');

      const cloudinaryResponse = await axios.post(
        'https://api.cloudinary.com/v1_1/dd8jcqy60/image/upload',
        formData
      );

      imageUrl = cloudinaryResponse.data.secure_url; 
    }

      const payload = {
        id: singleProduct._id,
        productName: data.productName,
        CateGory: data.CateGory,
        productPrice: data.productPrice,
        productImage: imageUrl , 
      }
      
      dispatch(UpdateProduct(payload))
      redirect('/base/ViewList')
      reset()
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CForm className="form shadow text-center" onSubmit={handleSubmit(Update)}>
              <CCardHeader className="text-start">
                <strong className="fs-2">Update Product</strong>
              </CCardHeader>
              <CCardBody>
                {/* <br></br> */}
                <CFormSelect aria-label="Default select example" {...register('CateGory')}>
                  <option>Open this select menu</option>
                  {CateList.map((ele) => {
                    return (
                      <>
                        <option value={ele.cat_name}>{ele.cat_name}</option>
                      </>
                    )
                  })}
                </CFormSelect>
                <br></br>

                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Enter  Product Name"
                  {...register('productName', { required: 'Product name is required' })}
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
                <br />
                <CFormInput
                  type="number"
                  size="lg"
                  placeholder="Enter  Product Price"
                  {...register('productPrice', { required: 'Price is required' })}
                />
                {errors.price && <p className="text-danger">{errors.price.message}</p>}
                <br />
                {/* <CFormTextarea
                  size="lg"
                  placeholder="Enter  Product Description"
                  {...register('productDescription', { required: 'Description is required' })}
                />
                {errors.des && <p className="text-danger">{errors.des.message}</p>}
                <br /> */}
                <CFormInput  type="file" {...register('productImage')} />

                <CButton type="submit" className="btn btn-success text-center mt-2">
                  Submit
                </CButton>
              </CCardBody>
            </CForm>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UpdateProject
