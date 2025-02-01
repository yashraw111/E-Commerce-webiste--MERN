import { CButton, CCol, CFormInput, CFormSelect, CInputGroup, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableRow } from '@coreui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Deletepr, ViewList } from '../UserSlice'
import { NavLink } from 'react-router-dom'
import { ViewCateList } from '../CategorySlice'
import Swal from 'sweetalert2'
const ViewProductList = () => {
  const[Search,SetSearch]=useState("")
  const[cate,SetCate]=useState("")
  // console.log(Search);

  const{ProductList} = useSelector((state)=>state.product)
  const dispatch = useDispatch()
  // console.log(ProductList);

  const CateList = ProductList.map((ele) => {
    return ele.CateGory
})

const uniqueCate = new Set(CateList);
const finalCate = [...uniqueCate]
  // const filterdata = ProductList
  // .filter((ele)=>{
  //    const Searched = Search.toUpperCase()
  //    const Category = ele.name.toUpperCase()

  //    return  Category.includes(Searched)

  // })
  // .filter((ele)=>{
  //   return ele.CateGory.includes(cate)
  // })
  // console.log(filterdata);
  
  useEffect(() => {
    dispatch(ViewList())
    dispatch(ViewCateList())
  }, [dispatch])

  async function trash(id) {

     Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",  
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              
              dispatch(Deletepr(id))
            }
          });
  }

 
  return (
    <>
        <CRow>
          <CCol xs={12}>
      <h1>ViewList</h1>
      {/* <CRow className='mb-3'>
        <CCol xs={4}>
      <CFormInput onChange={(e)=>SetSearch(e.target.value)} className='form-control' placeholder='enter username'></CFormInput>
       <CFormSelect aria-label="Default select example" onChange={(e)=>SetCate(e.target.value)} >
                      <option value="">Open this select menu</option>
                      {finalCate.map((ele) => {
                        return (
                          <>
                            <option value={ele}>{ele}</option>
                          </>
                        )
                      })}
                    </CFormSelect>

      </CCol>
        <CCol xs={4}>
      <CFormInput onChange={(e)=>SetSearch(e.target.value)} className='form-control' placeholder='enter username'></CFormInput>
      </CCol>
        <CCol xs={4}>
      <CFormInput onChange={(e)=>SetSearch(e.target.value)} className='form-control' placeholder='enter username'></CFormInput>
      </CCol> */}
      {/* </CRow> */}
      <CTable className="table table-bordered ">
        <CTableRow className="">
          <CTableDataCell scope="col">SNO</CTableDataCell>
          <CTableDataCell scope="col">Category</CTableDataCell>
          <CTableDataCell scope="col">PrName</CTableDataCell>
          <CTableDataCell scope="col">price</CTableDataCell>
          <CTableDataCell scope="col">image</CTableDataCell>
          {/* <CTableDataCell scope="col">des</CTableDataCell> */}
          <CTableDataCell scope="col">Action</CTableDataCell>
        </CTableRow>
        <CTableBody>
          {ProductList.length > 0 ? (
            ProductList.map((ele, index) => {
              return (
                <>
                  <CTableRow className=''>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell>{ele.category}</CTableDataCell>
                    <CTableDataCell>{ele.productName}</CTableDataCell>
                    <CTableDataCell>{ele.productPrice}</CTableDataCell>
                    <CTableDataCell><img  width={100} src={ele.url} alt="" /></CTableDataCell>
                    {/* <CTableDataCell>{ele.des}</CTableDataCell> */}
                    <CTableDataCell>
                      <CButton
                        className="btn btn-danger"
                        onClick={() => {
                          trash(ele.id)
                        }}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </CButton>
                      <NavLink to={`/UpdateProduct/${ele.id}`}  className='ms-2 btn btn-success' ><i class="fa-solid fa-pen-to-square"></i></NavLink>
                    </CTableDataCell>
                  </CTableRow>
                </>
              )
            })
          ) : (
            <p>loading .....</p>
          )}
        </CTableBody>
      </CTable>
      </CCol>
      </CRow>
    </>
  )
}

export default ViewProductList
