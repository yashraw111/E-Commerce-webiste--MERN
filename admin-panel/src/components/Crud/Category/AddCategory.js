import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { CreateCate, ViewCateList } from '../CategorySlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const AddCategory = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const dispatch = useDispatch()


  const {CateList}= useSelector((state)=>state.Category)
  useEffect(() => {
    dispatch(ViewCateList())
  }, [dispatch]);

  async function AddCategory(data) {

    const isCategoryExists = CateList.some((cat) => cat.cat_name.toLowerCase() === data.cat_name.toLowerCase());
    if (isCategoryExists) {
      toast.error('Category already exists!', {
        position: 'top-center',
        autoClose: 3000,
      });
      reset()
      return;
    }
    try {
      dispatch(CreateCate(data))
      toast.success('Category added successfully!', {
        position: 'top-center',
        autoClose: 3000,
      });
      reset(); 
      Show();
    } catch (error) {
      console.error("Error adding category:", error);
    }


  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CForm className="form shadow text-center" onSubmit={handleSubmit(AddCategory)}>
              <CCardHeader className="text-start">
                <strong className="fs-2">Create Category</strong>
              </CCardHeader>
              <CCardBody>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Enter Product Category"
                  {...register("cat_name", {
                     required:{
                      value:true,
                      message: "Category is required"
                     }
                     })}
                />
         { <p className="text-danger">{errors.category?.message}</p>}
                {/* {errorMsg && <p className="text-danger">{errorMsg}</p>} */}
                <br />
                {/* <CFormInput type='file' {...register("img")} ></CFormInput> */}

                <CButton type="submit" className="btn btn-success text-center mt-2">
                  Submit
                </CButton>
              </CCardBody>
            </CForm>
          </CCard>
        </CCol>
      </CRow>
      <ToastContainer />
    </>
  )
}

export default AddCategory;   