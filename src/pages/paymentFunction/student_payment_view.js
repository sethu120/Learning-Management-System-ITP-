//useState-without refreshing the browser we can rerender a state(when a button click done)
//useEffect-a life cycle hook (when component load/update this will trigger)this use to call a changing state 
import React, { useState , useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBCardTitle ,MDBTableHead,MDBTabs, MDBTabsItem, MDBTabsLink ,MDBTabsContent,MDBIcon ,MDBTabsPane , MDBTableBody, MDBCol, MDBRow ,MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';

//import moment npm package use to get the date & time
import moment from 'moment';
import Swal from 'sweetalert2';

function StudentPaymentView() {
    const [fillActive, setFillActive] = useState('tab1');
    const handleFillClick = (value: string) => {
       if (value === fillActive) {
         return;
       }
   
       setFillActive(value);
     };

   var studentID = 1;

   //this function get data as a array
   const [AllVisaPayment,setAllVisaPayment] = useState([]);
   const [AllMasterPayment,setAllMasterPayment] = useState([]);
   const [AllBankPayments,setAllBankPayments] = useState([]);

    //data search based on student id
    //,[] top loading useEffect function continuesly
   useEffect(() => {
       axios.get("http://localhost:8070/student_card_payment/allVisaPayment/"+studentID)
       .then(res => setAllVisaPayment(res.data))
       .catch(error => console.log(error));
   },[]);

   useEffect(() => {
    axios.get("http://localhost:8070/student_bank_payment/allBankPayment/"+studentID)
    .then(res => setAllBankPayments(res.data))
    .catch(error => console.log(error));
   },[]);



   useEffect(() => {
    axios.get("http://localhost:8070/student_card_payment/allMasterPayment/"+studentID)
    .then(res => setAllMasterPayment(res.data))
    .catch(error => console.log(error));
   },[]);
 //use to get a view of the uploaded bank slip
 //use the cloudinary api
   function viewImage(image){
    Swal.fire({
        imageUrl: 'https://res.cloudinary.com/dq3ntie80/image/upload/v1650092971/'+image, //image id goes here
        imageWidth: '100%',
      })
   }

    return (
        <div className="Pagebg">
        <div class="dashboard-wrapper">
            <div class="container" style={{paddingTop:'3%',paddingLeft:'2%', width:'98%'}}>
                 
                  <MDBRow  style={{marginTop:'3%'}}>
                    <MDBCol sm='12'>
                         <MDBCard className=" square border-bottom border-5 border-light bg-white pb-5" style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardBody className="border-0">
                                 <MDBCardTitle className='text-dark text-left ' style={{fontSize: '28px'}}>Student's Transactions </MDBCardTitle>
                                 <p style={{lineHeight:'9px'}}>View your classes payments</p>
                                 <hr/>
                                 <div className="text-end mt-4">
                                    <MDBBtn href='./Student_payment' outline  style={{ letterSpacing:'1px'}}  color="dark" className='shadow-0 btn-sm'   >Back</MDBBtn>
                                 </div>
                                 <MDBTabs fill className='mb-3 mt-2  bg-light square border'>
{/*Visa card tab*/}                                     
                                    <MDBTabsItem>
                                        <MDBTabsLink style={{padding:'0%'}} onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                                        <img src='./images/visa.png' className='img-fluid ' style={{width:'13%'}} alt='...' />
                                        </MDBTabsLink>
                                    </MDBTabsItem>
{/*Master card tab */}                                    
                                    <MDBTabsItem>
                                        <MDBTabsLink style={{padding:'0%'}} onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                                        <img src='./images/master.png' className='img-fluid ' style={{width:'13%'}} alt='...' />
                                        </MDBTabsLink>
                                    </MDBTabsItem>
{/*Bank slip uploaded tab */}                                  
                                    <MDBTabsItem>
                                        <MDBTabsLink style={{padding:'0%'}} onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                                        <img src='./images/deposit.png' className='img-fluid ' style={{width:'13%'}} alt='...' />
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                 </MDBTabs>
 {/*Master card payment details table  */}                                
                                 <MDBTabsContent>
                                    <MDBTabsPane  show={fillActive === 'tab2'}>
                                            <MDBTable className='mt-1'>
                                            <MDBTableHead>
                                                <tr style={{backgroundColor:'#3A3A3A'}}>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Month</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Class</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Amount</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Card Number</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Card Holder</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Date</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                            {AllMasterPayment.map((MasterPayment,key) => (
                                            
                                                <tr>
                                                    <td >{moment(MasterPayment.timeStamp).format("YYYY MMMM ")}</td>
                                                    <td >{MasterPayment.class_id}</td>
                                                    <td >{MasterPayment.amount}</td>
                                                    <td >{MasterPayment.cardNumber}</td>
                                                    <td >{MasterPayment.Holder}</td>
                                                    <td >{MasterPayment.timeStamp}</td>
                                                </tr>
                                            ))}
                                            </MDBTableBody>
                                            </MDBTable>
                                    </MDBTabsPane>
{/*Visa card payment details table  */}                                        
                                    <MDBTabsPane  show={fillActive === 'tab1'}>
                                            <MDBTable className='mt-1'>
                                            <MDBTableHead>
                                                <tr style={{backgroundColor:'#3A3A3A'}}>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Month</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Class</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Amount</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Card Number</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Card Holder</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Date</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                            {AllVisaPayment.map((VisaPayment,key) => (
                                            
                                                <tr>
                                                    {/* generate month using moment npm */}
                                                    <td >{moment(VisaPayment.timeStamp).format("YYYY MMMM ")}</td>
                                                    <td >{VisaPayment.class_id}</td>
                                                    <td >{VisaPayment.amount}</td>
                                                    <td >{VisaPayment.cardNumber}</td>
                                                    <td >{VisaPayment.Holder}</td>
                                                    <td >{VisaPayment.timeStamp}</td>
                                                </tr>
                                            ))}
                                            </MDBTableBody>
                                            </MDBTable>
                                    </MDBTabsPane>
                                    <MDBTabsPane  show={fillActive === 'tab3'}>
 {/*Bank slip upload payment details table  */}    
                                    <MDBTable className='mt-1'>
                                            <MDBTableHead>
                                                <tr style={{backgroundColor:'#3A3A3A'}}>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Month</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Class</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Amount</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Pay By</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Account Number</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Image Name</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Date</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                            {AllBankPayments.map((BankPayment,key) => (
                                            
                                                <tr>
                                                    <td >{moment(BankPayment.timeStamp).format("YYYY MMMM ")}</td>
                                                    <td >{BankPayment.class_id}</td>
                                                    <td >{BankPayment.amount}</td>
                                                    <td >{BankPayment.name}</td>
                                                    <td >{BankPayment.accountNumber}</td>
                                                    {/*Onclick method to view image */}
                                                    <td ><MDBIcon size='1x' fas icon="eye" onClick={() => viewImage(BankPayment.imageName)}  /></td>
                                                    <td >{BankPayment.timeStamp}</td>
                                                </tr>
                                            ))}
                                            </MDBTableBody>
                                            </MDBTable>
                                    </MDBTabsPane>
                                 </MDBTabsContent>
                                 
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    </div>
      )
};


export default StudentPaymentView;