import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, Checkbox, FormControlLabel, Grid, Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import logo from "../../assets/svg/logo.svg";
import {styled} from "@mui/material/styles";
import {BoxWithoutShadow} from "../../components/CustomBoxes";
import Swal from 'sweetalert2';
import passwordValidator from 'password-validator';
import Cookies from 'js-cookie';

var schema = new passwordValidator();

export default function Login() {

    const [userName, setUserName] = useState(false);
    const [password, setPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [requestNewPassword, setRequestNewPassword] = useState(false);

    async function login(e){
       e.preventDefault();

       let item = {userName , password};
       let result = await fetch(global.APIUrl+"/user/login", {
         method: 'POST',
         headers:{
            "Content-Type" : "application/json",
            "Accept" : "application/json"
         },
         body:JSON.stringify(item)
      });
      result = await result.json();
      
      if( JSON.stringify(result.message) === 'true'){
          Cookies.set('user_name',userName, { expires: 70000, path: '' });

          	Swal.fire({  
			title: "Success!",
			text: "Login Success",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/Admin";
				}
			});
      }else{
          	Swal.fire({  
			title: "Error!",
			text: "Login Not Success",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
       }
    }
   

    function handleSubmit() {

    }

//     function handleSubmit(e){

//         constructor(props) {
//             super(props);
//             this.state = {
//                 username: '',
//                 password: ''
//               };
//         }
//         // const student_register ={
//         //     userName,
//         //     password
//         // }

//     const pwd = bcrypt.hashSync(this.state.password, salt);

//     axios.post('http://localhost:8070/login/login',student_register {
//       userName: this.state.userName,
//       password: pwd,
//     }).then((res) => {
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user_id', res.data.id);
//       this.props.history.push('/homepage');
//     }).catch((err) => {
//       if (err.response && err.response.data && err.response.data.errorMessage) {
//         swal({
//           text: err.response.data.errorMessage,
//           icon: "error",
//           type: "error"
//         });
//       }
//     });
//   }



    //background -> F8F9FD
    //box -> FBFBFB
    //dark btn -> #262626
    //green btn -> #00B74A
    return (
        <Box sx={{borderRadius: 0, bgcolor:"#F8F9FD"}}>
            <BoxWithoutShadow sx={{justifyContent: "center", alignItems: "center",}}>
                <Grid container direction={"row"}
                      sx={{height: "90vh", borderRadius: "10px"}}
                      component={Paper}>
                    <Grid container direction={"column"} justifyContent={"center"}
                          alignItems="center" item xl={5.9} lg={5.9} md={6}
                          sm={12} xs={12}
                          sx={{
                              bgcolor: "#262626",
                              borderRadius: "10px",
                          }}
                    >

                        <Grid item align={"center"} sx={{}}>
                            <img src={logo} style={{width:"300px"}}/>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="space-around"
                        // className={classes.test}
                          item lg={5.9} md={6} sm={12} xs={12} direction={"column"}

                          sx={{
                              height: "90vh",
                              // background: "#FBFBFB",
                              borderRadius: "10px",
                              padding: "5px 50px"
                          }}>
                        <Grid item align={"right"}>
                            {/*<ThemeSwitch checked={theme} setChecked={setTheme}/>*/}
                        </Grid>
                        <Grid item sx={{padding: "5px 0",}}>
                            <Typography variant={"h3"}
                                        sx={{color: "#262626", fontWeight: 500}}
                                        align={"left"}>Welcome Back!</Typography>
                            <Typography variant={"body1"}
                                        sx={{color: "#757575"}} align={"left"}>Login your
                                account</Typography>

                        </Grid>
                        <form action="#" method="post" >

                            {/* ------------------username--------------------- */}
                            <Grid container direction={"column"}>
                                <Grid item sx={{paddingTop: "20px"}}>
                                    {/*<Typography sx={{color: "#7b92ec",}}>Email</Typography>*/}
                                    <Grid item sx={{}}>
                                        <TextField margin="dense" id="outlined-basic"
                                                   sx={{width: "100%", minWidth: "150px"}}
                                                   variant="outlined"
                                                   label={"Username"}
                                                   value={userName}
                                                   onInput={(e) => setUserName(e.target.value)}/>
                                        {/*<CustomTextField/>*/}
                                    </Grid>
                                </Grid>

                                {/* -----------------------passowrd---------------------------- */}

                                <Grid container item direction={"column"}>
                                    <Grid item sx={{paddingTop: "20px"}}>
                                        {/*<Typography sx={{color: "#7b92ec",}}>Password</Typography>*/}
                                        <Grid item sx={{}}>
                                            <TextField margin="dense" id="outlined-basic"
                                                       sx={{width: "100%", minWidth: "150px"}}
                                                       variant="outlined" label={"Password"}
                                                       value={password}
                                                       onInput={(e) => setPassword(e.target.value)}/>
                                            {/*<CustomTextField/>*/}
                                        </Grid>
                                    </Grid>
                                </Grid>

                                
                                {requestNewPassword && <Grid container item direction={"column"}>
                                    <Grid item sx={{paddingTop: "20px"}}>
                                        {/*<Typography sx={{color: "#7b92ec",}}>Password</Typography>*/}
                                        <Grid item sx={{}}>
                                            <TextField margin="dense" id="outlined-basic"
                                                       sx={{width: "100%", minWidth: "150px"}}
                                                       variant="outlined" label={"New password"}
                                                       value={newPassword}
                                                       onInput={e => setNewPassword(e.target.value)}/>
                                            {/*<CustomTextField/>*/}
                                        </Grid>
                                    </Grid>
                                </Grid>}
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox/>}
                                    label={<Typography sx={{color: "#111", paddingTop: "5px"}}>Remember
                                        me</Typography>}
                                    labelPlacement="end"
                                />

                            </Grid>
                            <Grid sx={{paddingTop: "30px"}}>
                                {/*<Button variant={"contained"} sx={{width: "100%"}}>Login</Button>*/}
                                {/*<Link to="/dashboard">*/}
                                <Button onClick={login} variant={"contained"} color={"primary"}
                                        sx={{width: "100%", bgcolor:"#00B74A"}}>Sign in</Button>
                                {/*</Link>*/}
                            </Grid>
                        </form>
                    </Grid>
                </Grid>

            </BoxWithoutShadow>
        </Box>
    );
};


