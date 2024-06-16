//without refreshing the browser we can rerender a state(when add,update done)
import React ,{useState} from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardTitle,
} from 'mdb-react-ui-kit';

import axios from 'axios';
import Swal from 'sweetalert2';


//this use get to the app.js imports
export default function AddBankTransfer() {
//capture the data from frontend and send data to the backend using variable 
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [bankName, setBankName] = useState("");
  const [branch, setBanch] = useState("");

//function to get the call from model class
  function submitBankDetails(e)
  {
      e.preventDefault();
      var teacherId= "1";
      const addAccount ={teacherId, accountNumber, accountHolder, bankName,branch}
  //post method to transfer the data to the backend
        axios.post("http://localhost:8070/bank_account/addBankAccount",addAccount).then(() =>{
  
        Swal.fire({  
        title: "Success!",
        text: "Bank Account Adding Success!",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"}).then(okay => {
        if (okay) {
          window.location.href = "/TeacherBankAccountList";
        }
        });
  
        
    }).catch((err)=>{
  
          Swal.fire({  
          title: "Error!",
          text: "Bank Account Adding Not Success",
          icon: 'error',
          confirmButtonText: "OK",
          type: "success"})
      })
    }

  return (
    <div className="Pagebg">
        <MDBRow style={{paddingTop: '5%'  , marginBottom: '5%'}}>
          <MDBCol sm='3'> </MDBCol>
          <MDBCol sm='6'>
            <MDBCard className=" bg-light border">
              <MDBCardBody className="p-5">
                <MDBCardTitle className='text-dark text-left ' style={{fontSize: '28px'}}>ADD BANK TRANSFER</MDBCardTitle>
                <p style={{lineHeight:'8px'}}>Add New Account Details</p>
                <hr/>
                <div class="mb-3 mt-5">
                    <label  class="form-label">Account Number </label>
                    <input class="form-control"  onChange={(e) =>{
                            setAccountNumber(e.target.value);
                         }}/>
                </div>  
                <div class="mb-3 ">
                    <label  class="form-label">Holder's Name </label>
                    <input class="form-control"   onChange={(e) =>{
                            setAccountHolder(e.target.value);
                         }}/>
                </div> 
                <div class="mb-3 ">
                    <label  class="form-label">Bank Name </label>
                    <input class="form-control" list="bankList" onChange={(e) =>{
                            setBankName(e.target.value);
                         }}/>
                         {/* there are all banks in sri lanka */}
                    <datalist id="bankList">
                      <option value="Amana Bank"/>
                      <option value="Bank of Ceylon"/>
                      <option value="Bank of China"/>
                      <option value="Cargills Bank"/>
                      <option value="Citibank"/>
                      <option value="Commercial Bank of Ceylon"/>
                      <option value="Deutsche Bank"/>
                      <option value="DFCC Bank"/>
                      <option value="HBL Pakistan"/>
                      <option value="Hatton National Bank"/>
                      <option value="Indian Bank"/>
                      <option value="Indian Overseas Bank"/>
                      <option value="MCB Bank"/>
                      <option value="National Development Bank"/>
                      <option value="Nations Trust Bank"/>
                      <option value="Pan Asia Banking Corporation"/>
                      <option value="People's Bank"/>
                      <option value="Public Bank Berhad"/>
                      <option value="Sampath Bank"/>
                      <option value="Seylan Bank"/>
                      <option value="Standard Chartered Bank"/>
                      <option value="State Bank of India"/>
                      <option value="Hong Kong and Shanghai Banking Corporation (HSBC)"/>
                      <option value="Union Bank of Colombo"/>
                      <option value="National Savings Bank"/>
                      <option value="Regional Development Bank"/>
                      <option value="Sri Lanka Savings Bank"/>
                      <option value="Housing Development Finance Corporation Bank of Sri Lanka (HDFC)"/>
                      <option value="Sanasa Development Bank"/>
                    </datalist>
                </div> 
                <div class="mb-3">
                  <label  class="form-label">Branch </label>
                  <input class="form-control"  onChange={(e) =>{
                            setBanch(e.target.value);
                         }}/>
                </div>  
                <div className='text-end'>
                  <MDBBtn color='dark' href='./TeacherBankAccountList' className='shadow-0 me-2' >
                    Back
                  </MDBBtn>
                  <MDBBtn href='#' color="success" className='shadow-0' onClick={submitBankDetails}  >Submit</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol sm='3'> </MDBCol>
        </MDBRow>
    </div>
  );
}