//useState-without refreshing the browser we can rerender a state(when a button click done)
//useEffect-a life cycle hook (when component load/update this will trigger)this use to call a changing state
import React ,{useState , useEffect} from 'react';
//Material Design for Bootstrap use to design the cards
import { 
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTableBody,
  MDBTable,
  MDBIcon,
  MDBCardTitle,
} from 'mdb-react-ui-kit';

import axios from 'axios';
import Swal from 'sweetalert2';

//this use to save the data even refresh the page
import {reactLocalStorage} from 'reactjs-localstorage';

//this use get to the app.js imports
export default function TeacherBankAccountList() {

  //capture the data from frontend and send data to the backend using variable 
  const [amount,setAmount] = useState("");
  const [SelectedBankAccount,setSelectedBankAccount] = useState("");
  const [accountNumber,setaccountNumber] = useState("");
  const [bankName,setbankName] = useState("");
  const [branch,setbranch] = useState("");
//from this we can get the data using teacher id from data base
  const [bankAccounts,setBankAccount] = useState([]);
  var teacherId= "1";
  useEffect(() => {
            axios.get('http://localhost:8070/bank_account/allBankAccount/'+teacherId)
            .then(res => setBankAccount(res.data))
            .catch(error => console.log(error));
  })
//edit bank account function button
  function editBankAccount(id,accountNumber ,bankName , branch , accountHolder){

    //send as the local
    reactLocalStorage.setObject("AccountEdit", [id,accountNumber, bankName, branch, accountHolder]);
    window.location.href = "/EditBankAccount";
  }
//delete the saved bank account details
  function deleteBankAccount(id){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are You Sure?',
      text: "Do You want To Delete Result?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("http://localhost:8070/bank_account/deleteBankAccount/"+id).then(() =>{
          Swal.fire({  
              title: "Success!",
              text: "Bank Account Deleted",
              icon: 'success',
              confirmButtonText: "OK",
              type: "success"})
  
      }).catch((err)=>{
          Swal.fire({  
              title: "Error!",
              text: "Bank Account Not Delete",
              icon: 'error',
              confirmButtonText: "OK",
              type: "success"})
      })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Deleting cancel',
          'error'
        )
      }
    })
  }
//add new bank account function button
  function addNewBankAccoutBtn(){
    window.location.href = "/AddBankAccount";
  }

//withdraw money function  
  function withdraw(e){
    e.preventDefault();
    var teacherId= "1";

    if(accountNumber === ""){
      Swal.fire({  
        title: "Error!",
        text: "Please Select Bank Account to Money Withdraw.",
        icon: 'error',
        confirmButtonText: "OK",
        type: "success"});
    }else{
        const withdraw ={teacherId, accountNumber, bankName, branch, amount}

          axios.post("http://localhost:8070/teacher_withdraw/addWithdraw",withdraw).then(() =>{

          Swal.fire({  
          title: "Success!",
          text: "Money Withdrawing Success!",
          icon: 'success',
          confirmButtonText: "OK",
          type: "success"}).then(okay => {
          if (okay) {
            setaccountNumber("");
            setbankName("");
            setbranch("");
            window.location.href = "/TeacherBankAccountList";
          }
          });

          
        }).catch((err)=>{

            Swal.fire({  
            title: "Error!",
            text: "Money Withdrawing Not Success",
            icon: 'error',
            confirmButtonText: "OK",
            type: "success"})
        })
    }
  }
//radio button to select the account
  function radioOnClick(accountNumber, bank, branch){
    setaccountNumber(accountNumber);
    setbankName(bank);
    setbranch(branch);
  }
  
  return (
    <div className="Pagebg">

        <MDBRow style={{paddingTop: '5%' , marginBottom: '5%' , paddingBottom: '5%'}}>
          <MDBCol sm='1'> </MDBCol>
          <MDBCol sm='10'>
            <MDBCard className=" bg-light">
              <MDBCardBody>
                <MDBCardTitle className='text-dark text-left ' style={{fontSize: '28px'}}>ADD BANK TRANSFER</MDBCardTitle>
                <p style={{lineHeight:'8px'}}>Saved Account Details</p>
                <hr/>
                <MDBRow className="mb-4">
                    <MDBCol sm='12'>
                        <div className="text-end mt-4">
{/*Add new bank account button */}
                          <MDBBtn href='#' onClick={addNewBankAccoutBtn}  style={{ letterSpacing:'1px'}} outline color="dark" className='shadow-0 btn-sm'   >Add New Bank Account</MDBBtn>&nbsp;&nbsp;
{/*View all withdrawals button */}                          
                          <MDBBtn href='./ViewTeacherWidraw'  style={{ letterSpacing:'1px'}}  color="dark" className='shadow-0 btn-sm'   >View All Withdrawals</MDBBtn>
                        </div>
                        <MDBTable className="mt-1">
                          
                          <MDBTableBody className="p-3" style={{backgroundColor:'white'}}>
                          {bankAccounts.map((bankAccount,key) => (
									
                            <tr>
                              <td>
                                <h6>{bankAccount.accountNumber}</h6>
                                <p style={{lineHeight:'0px'}} className="pt-2 text-capitalize">{bankAccount.bankName} </p><p style={{lineHeight:'0px'}} className="text-capitalize" >{bankAccount.branch} </p><p className="text-capitalize" style={{lineHeight:'4px'}}>{bankAccount.accountHolder} </p>
                              </td>
                              <td style={{verticalAlign: 'middle'}}>
            {/*Delete bank account button */}                    
                                  <button type="button" class="btn btn-danger btn-sm d-letter-spacing shadow-0" onClick={()=>deleteBankAccount(bankAccount._id)}><MDBIcon fas icon="trash" /></button>&nbsp;&nbsp;
            {/*Edit bank account button */}                      
                                  <button type="button" class="btn btn-success btn-sm d-letter-spacing shadow-0" onClick={()=>editBankAccount(bankAccount._id,bankAccount.accountNumber , bankAccount.bankName , bankAccount.branch , bankAccount.accountHolder)}><MDBIcon fas icon="pen" /></button>&nbsp;&nbsp;
                              </td>
                              <td style={{verticalAlign: 'middle'}}>
                                  <input class="form-check-input" type="radio" onClick={()=>radioOnClick(bankAccount.accountNumber , bankAccount.bankName , bankAccount.branch)} name="bank_account_radio" value={SelectedBankAccount}  onChange={(e) =>{
                                      setSelectedBankAccount(e.target.value);
                                  }}/>
                              </td>
                            </tr>
                          ))}
                          </MDBTableBody>
                        </MDBTable>
                        <div class="mb-3 row mt-5">
{/*Amount field */}  
                          <label for="inputPassword" class="col-sm-1 col-form-label">Amount</label>
                          <div class="col-sm-4">
                            <input type="number" class="form-control"  onChange={(e) =>{
                                setAmount(e.target.value);
                            }}/>
                          </div>
                          <div class="col-sm-1">
      {/*Withdraw button */}                      
                              <MDBBtn href='#' onClick={withdraw} style={{backgroundColor:'#565656' , letterSpacing:'1px'}} className='shadow-0'   >Withdraw</MDBBtn>
                          </div>
                        </div>
                    </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol sm='1'> </MDBCol>
        </MDBRow>
                            
    </div>
  );
}