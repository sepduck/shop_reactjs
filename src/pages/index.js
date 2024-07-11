// const handleAddProduct = (productIdd) => {
//     const onAddProduct = (productId) => {
//         // setAddCart({...addCart, productId});  // Cập nhật productId vào stat
//         let data = {
//             productId,
//         }
//         console.log(data.productId)
//         const headers = {
//             'Authorization': 'Bearer ' + localStorage.getItem('token'),
//         }
//         axios.post('/cart/add/' + productIdd, {headers: headers})
//             .then(() => {
//                 console.log(`${data.productId} đã được thêm vào giỏ hàng`);
//             })
//             .catch((error) => {
//                 console.error('Lỗi khi thêm sản phẩm vào giỏ hàng', error);
//             })
//
//     }
//     onAddProduct(productIdd)


//------------------------------------------------------------------------------------------------------------------
//     const [cartItems, setCartItems] = useState([]);
//     const onListCart = async () => {
//         const token = localStorage.getItem('token')
//         try {
//             const data = await getListProduct(token)
//             setCartItems(data)
//         } catch (err) {
//             console.log(err)
//         }
// const headers = {
//     'Authorization': 'Bearer ' + localStorage.getItem('token')
// }
// axios.get('/product', {headers: headers})
//     .then(resp => {
//         setCartItems(resp.data.data)
//     })
//     .catch(e => {
//         console.log(e)
//     })
// }




// <MDBContainer>
//     <MDBRow>
//         <MDBCol md={2}></MDBCol>
//         <MDBCol md={8} className='mt-5 bg-white rounded-5'>
//             <MDBContainer>
//                 <MDBRow>
//                     <MDBCol className='mt-3 ms-3 mb-4'>
//                         <h4><b>Sửa hàng</b></h4>
//                     </MDBCol>
//                 </MDBRow>
//                 <MDBRow>
//                     <MDBCol md="7" className='mt-3'>
//                         <MDBRow>
//                             <MDBCol md="4" className="ps-5 mt-2">
//                                 <h6><b>Tên hàng</b></h6>
//                             </MDBCol>
//                             <MDBCol md="8">
//                                 <MDBInput name={'productName'}
//                                           value={productEdit.productName}
//                                           onChange={inputData}
//                                           className="form-control"
//                                           type='text'/>
//                             </MDBCol>
//                         </MDBRow>
//                     </MDBCol>
//                     <MDBCol md="5" className='mt-3'>
//                         <MDBRow>
//                             <MDBCol md="4" className="ps-5 mt-2">
//                                 <h6><b>Giá vốn</b></h6>
//                             </MDBCol>
//                             <MDBCol md="8">
//                                 <MDBInput name={'capitalPrice'}
//                                           value={productEdit.capitalPrice}
//                                           onChange={inputData}
//                                           className="form-control"
//                                           type='number'/>
//                             </MDBCol>
//                         </MDBRow>
//                     </MDBCol>
//                 </MDBRow>
//                 <MDBRow>
//                     <MDBCol md="7" className="mt-4">
//                         <MDBRow>
//                             <MDBCol md="4" className="ps-5 mt-2">
//                                 <h6><b>Nhóm hàng</b></h6>
//                             </MDBCol>
//                             <MDBCol md="8">
//                                 <select
//                                     onChange={inputData}
//                                     name='groupProductId'
//                                     value={productEdit.groupProductId}
//                                     className={'form-control'}
//                                     required
//                                 >
//                                     {listGroupProduct.map((groupProduct) => (
//                                         <option
//                                             key={groupProduct.groupProductId}
//                                             value={groupProduct.groupProductId}>
//                                             {groupProduct.groupProductName}
//                                         </option>))}
//                                 </select>
//                             </MDBCol>
//                         </MDBRow>
//
//                     </MDBCol>
//                     <MDBCol md="5" className="mt-4">
//                         <MDBRow>
//                             <MDBCol md="4" className="ps-5 mt-2">
//                                 <h6><b>Giá bán</b></h6>
//                             </MDBCol>
//                             <MDBCol md="8">
//                                 <MDBInput name={'price'}
//                                           value={productEdit.price}
//                                           onChange={inputData}
//                                           className="form-control"
//                                           type='number'/>
//                             </MDBCol>
//                         </MDBRow>
//                     </MDBCol>
//                 </MDBRow>
//                 <MDBRow>
//                     <MDBCol md="7" className="mt-4">
//                         <MDBRow>
//                             <MDBCol md="4" className="ps-5 mt-2">
//                                 <h6><b>Thương hiệu</b></h6>
//                             </MDBCol>
//                             <MDBCol md="8">
//                                 <select
//                                     onChange={inputData}
//                                     name='trademarkId'
//                                     value={productEdit.trademarkId}
//                                     className={'form-control'}
//                                     required
//                                 >
//                                     {listTrademark.map((trademark) => (
//                                         <option
//                                             key={trademark.trademarkId}
//                                             value={trademark.trademarkId}>
//                                             {trademark.trademarkName}
//                                         </option>))}
//                                 </select>
//                             </MDBCol>
//                         </MDBRow>
//
//                     </MDBCol>
//                     <MDBCol md="5" className="mt-4">
//                         <MDBRow>
//                             <MDBCol md="4" className="ps-5 mt-2">
//                                 <h6><b>Tồn kho</b></h6>
//                             </MDBCol>
//                             <MDBCol md="8">
//                                 <MDBInput name={'inventory'}
//                                           value={productEdit.inventory}
//                                           onChange={inputData}
//                                           className="form-control"
//                                           type='number'/>
//                             </MDBCol>
//                         </MDBRow>
//                     </MDBCol>
//                 </MDBRow>
//                 <MDBRow>
//                     <MDBCol md="7" className="mt-4">
//                         <MDBRow>
//                             <MDBCol md="4" className="ps-5 mt-2">
//                                 <h6><b>Vị trí</b></h6>
//                             </MDBCol>
//                             <MDBCol md="8">
//                                 <select
//                                     onChange={inputData}
//                                     name='locationId'
//                                     value={productEdit.locationId}
//                                     className={'form-control'}
//                                     required
//                                 >
//                                     {listLocation.map((location) => (
//                                         <option
//                                             key={location.locationId}
//                                             value={location.locationId}>
//                                             {location.locationName}
//                                         </option>))}
//                                 </select>
//
//                             </MDBCol>
//                         </MDBRow>
//
//                     </MDBCol>
//                     <MDBCol md="5" className="mt-4">
//                         <MDBRow>
//                             <MDBCol md="4" className="ps-5 mt-2">
//                                 <h6><b>Trọng lượng</b></h6>
//                             </MDBCol>
//                             <MDBCol md="8">
//                                 <MDBInput name={'weight'}
//                                           value={productEdit.weight}
//                                           onChange={inputData}
//                                           className="form-control"
//                                           type='number'/>
//                             </MDBCol>
//                         </MDBRow>
//                     </MDBCol>
//                 </MDBRow>
//                 <MDBRow>
//                     <MDBCol md="7" className="2">
//                         <MDBRow>
//                             <MDBCol md="4" className="ps-5 mt-2">
//                                 <h6><b>Thuộc tính</b></h6>
//                             </MDBCol>
//                             <MDBCol md="8">
//                                 <select
//                                     onChange={inputData}
//                                     name='propertiesId'
//                                     value={productEdit.propertiesId}
//                                     className={'form-control'}
//                                     required
//                                 >
//                                     {listProperties.map((properties) => (
//                                         <option
//                                             key={properties.propertiesId}
//                                             value={properties.propertiesId}>
//                                             {properties.propertiesName}
//                                         </option>))}
//                                 </select>
//
//                             </MDBCol>
//                         </MDBRow>
//                         <MDBRow>
//                             <MDBCol md="4" className="ps-5 mt-4">
//                                 <h6><b>Đơn vị cơ bản</b></h6>
//                             </MDBCol>
//                             <MDBCol md="8" className='mt-4'>
//                                 <select
//                                     onChange={inputData}
//                                     name='unitId'
//                                     value={productEdit.unitId}
//                                     className={'form-control'}
//                                     required
//                                 >
//                                     {listUnit.map((unit) => (
//                                         <option
//                                             key={unit.unitId}
//                                             value={unit.unitId}>
//                                             {unit.unitName}
//                                         </option>))}
//                                 </select>
//
//                             </MDBCol>
//                         </MDBRow>
//                     </MDBCol>
//                 </MDBRow>
//                 <MDBRow>
//                     <MDBCol md="7" className="2">
//                         <MDBRow>
//                             <MDBCol md="4" className="ps-5 mt-2">
//                                 <h6><b>Thuộc tính</b></h6>
//                             </MDBCol>
//                             <MDBCol md="8">
//                                 <MDBInput type='text' onChange={inputData} name='categoryId' value={productEdit.categoryId}/>
//
//                             </MDBCol>
//                         </MDBRow>
//                     </MDBCol>
//                 </MDBRow>
//                 <MDBRow>
//                     <MDBCol className='mt-5 mb-5 d-flex justify-content-end'>
//                         <MDBBtn color='success' onClick={onSave}><b>Lưu</b></MDBBtn>
//                         <Link to={'/product'} className='btn btn-dark ms-2'>
//                             <b>Bỏ qua</b>
//                         </Link>
//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>
//         </MDBCol>
//         <MDBCol md={2}></MDBCol>
//     </MDBRow>
// </MDBContainer>