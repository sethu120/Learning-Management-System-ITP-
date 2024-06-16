//useState-without refreshing the browser we can rerender a state(when a button click done)
//useEffect-a life cycle hook (when component load/update this will trigger)this use to call a changing state
import React, { useState , useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBCardTitle ,MDBTableHead, MDBTableBody, MDBCol, MDBRow ,MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
//import moment npm package use to get the date & time
import moment from 'moment';

function ViewTeacherWidraw() {
//call transfer details using teacher id
    var teacherId = 1;
   const [AllWidrawal,setAllWidrawal] = useState([]);
   useEffect(() => {
       axios.get("http://localhost:8070/teacher_withdraw/viewAllWidrawal/"+teacherId)
       .then(res => setAllWidrawal(res.data))
       .catch(error => console.log(error));
   },[])

 
    return (
        <div className="Pagebg">
        <div class="dashboard-wrapper">
            <div class="container" style={{paddingTop:'3%',paddingLeft:'2%', width:'98%'}}>
                 
                  <MDBRow  style={{marginTop:'3%'}}>
                    <MDBCol sm='12'>
                         <MDBCard className=" square border-bottom border-5 border-light bg-white pb-5" style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardBody className="border-0">
                                 <MDBCardTitle className='text-dark text-left ' style={{fontSize: '28px'}}>Teacher's Transactions </MDBCardTitle>
                                 <p style={{lineHeight:'9px'}}>Teacher's Money Withdrawing Details</p>
                                 <hr/>
                                 <div className="text-end mt-4">
{/*Back button to go back to the makin a transfer page*/}                                     
                                    <MDBBtn href='./TeacherBankAccountList' outline  style={{ letterSpacing:'1px'}}  color="dark" className='shadow-0 btn-sm'   >Back</MDBBtn>
                                 </div>
                                 <MDBTable className='mt-1'>
                                    <MDBTableHead>
                                        <tr style={{backgroundColor:'#3A3A3A'}}>
                                            <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Month</th>
                                            <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Amount</th>
                                            <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Bank</th>
                                            <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Branch</th>
                                            <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Date</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                    {AllWidrawal.map((widrawal,key) => (
									
                                    <tr>
                                      <td >{moment(widrawal.timeStamp).format("YYYY MMMM ")}</td>
                                      <td >{widrawal.amount}</td>
                                      <td >{widrawal.bankName}</td>
                                      <td >{widrawal.branch}</td>
                                      <td >{widrawal.timeStamp}</td>
                                    </tr>
                                  ))}
                                    </MDBTableBody>
                                    </MDBTable>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    </div>
      )
};


export default ViewTeacherWidraw;