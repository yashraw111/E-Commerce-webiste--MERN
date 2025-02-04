import React, { useEffect } from 'react'
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
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onTouched' }) // Validate on touch
  const dispatch = useDispatch()
  const { CateList } = useSelector((state) => state.Category)

  useEffect(() => {
    dispatch(ViewCateList())
  }, [dispatch])

  const regist = async (data) => {
    try {
      const formData = new FormData()
      formData.append('file', data.image[0])
      formData.append('upload_preset', 'project')
      formData.append('cloud_name', 'dd8jcqy60')

      const cloudinaryResponse = await axios.post(
        'https://api.cloudinary.com/v1_1/dd8jcqy60/image/upload',
        formData
      )

      const payload = {
        productName: data.productName,
        CateGory: data.CateGory,
        WithoutDiscountPrice: data.WithoutDiscountPrice,
        productPrice: data.productPrice,
        productImage: cloudinaryResponse.data.secure_url,
        rate: data.rate,
        description: data.description,
        alreadySold: data.alreadySold,
        available: data.available,
        discount: data.discount,
      }

      dispatch(Createpr(payload))
      reset()
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  return (
    <CRow className="justify-content-center">
      <CCol xs={12} md={8} lg={6}>
        <CCard className="mb-4 shadow-lg">
          <CCardHeader className="text-center bg-dark text-white py-3">
            <strong className="fs-3">Create Product</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="p-3" onSubmit={handleSubmit(regist)}>
              <CFormLabel className="fw-bold">Category</CFormLabel>
              <CFormSelect className="mb-3" {...register('CateGory', { required: 'Category is required' })}>
                <option value="">Select Category</option>
                {CateList.map((ele, index) => (
                  <option key={index} value={ele.cat_name}>
                    {ele.cat_name}
                  </option>
                ))}
              </CFormSelect>
              {errors.CateGory && <p className="text-danger">{errors.CateGory.message}</p>}

              <CFormLabel className="fw-bold">Product Name</CFormLabel>
              <CFormInput type="text" className="mb-3" placeholder="Enter Product Name"
                {...register('productName', { required: 'Product name is required', minLength: { value: 3, message: 'Minimum 3 characters required' } })}
              />
              {errors.productName && <p className="text-danger">{errors.productName.message}</p>}

              <CFormLabel className="fw-bold">Product Price</CFormLabel>
              <CFormInput type="number" className="mb-3" placeholder="Enter Product Price"
                {...register('productPrice', { required: 'Price is required', min: { value: 1, message: 'Price must be positive' } })}
              />
              {errors.productPrice && <p className="text-danger">{errors.productPrice.message}</p>}

              <CFormLabel className="fw-bold">Without Discount Price</CFormLabel>
              <CFormInput type="number" className="mb-3" placeholder="Enter Without Discount Price"
                {...register('WithoutDiscountPrice', { required: 'Price is required', min: { value: 1, message: 'Price must be positive' } })}
              />
              {errors.WithoutDiscountPrice && <p className="text-danger">{errors.WithoutDiscountPrice.message}</p>}

              <CFormLabel className="fw-bold">Rate</CFormLabel>
              <CFormInput type="number" className="mb-3" placeholder="Enter Rate (1-5)"
                {...register('rate', { required: 'Rate is required', min: { value: 1, message: 'Minimum 1' }, max: { value: 5, message: 'Maximum 5' } })}
              />
              {errors.rate && <p className="text-danger">{errors.rate.message}</p>}

              <CFormLabel className="fw-bold">Description</CFormLabel>
              <CFormTextarea className="mb-3" placeholder="Enter Description"
                {...register('description', { required: 'Description is required', minLength: { value: 10, message: 'Minimum 10 characters required' } })}
              />
              {errors.description && <p className="text-danger">{errors.description.message}</p>}

              <CFormLabel className="fw-bold">Already Sold</CFormLabel>
              <CFormInput type="number" className="mb-3" placeholder="Enter Already Sold Quantity"
                {...register('alreadySold', { required: 'Enter sold quantity', min: { value: 0, message: 'Cannot be negative' } })}
              />
              {errors.alreadySold && <p className="text-danger">{errors.alreadySold.message}</p>}

              <CFormLabel className="fw-bold">Available Quantity</CFormLabel>
              <CFormInput type="number" className="mb-3" placeholder="Enter Available Quantity"
                {...register('available', { required: 'Enter available quantity', min: { value: 0, message: 'Cannot be negative' } })}
              />
              {errors.available && <p className="text-danger">{errors.available.message}</p>}

              <CFormLabel className="fw-bold">Discount (%)</CFormLabel>
              <CFormInput type="number" className="mb-3" placeholder="Enter Discount Percentage"
                {...register('discount', { required: 'Discount is required', min: { value: 0, message: 'Cannot be negative' }, max: { value: 100, message: 'Max 100%' } })}
              />
              {errors.discount && <p className="text-danger">{errors.discount.message}</p>}

              <CFormLabel className="fw-bold">Product Image</CFormLabel>
              <CFormInput type="file" className="mb-3" {...register('image', { required: 'Image is required' })} />
              {errors.image && <p className="text-danger">{errors.image.message}</p>}

              <div className="text-center">
                <CButton type="submit" color="success" className="px-4 py-2 fw-bold">
                  Submit Product
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CreateProduct
