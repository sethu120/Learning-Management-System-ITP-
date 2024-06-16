import React, {useState} from 'react';
import axios from 'axios';

import {
    Button,
    Chip, FormControl,
    FormControlLabel,
    Grid, InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {BoxWithShadow, CustomBoxes} from "../../components/CustomBoxes";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {useTheme} from '@mui/material/styles';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const names = [
    'Maths',
    'Physics',
    'Chemistry',
    'English',
    'Art',
    'Music'
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function StudentRegistration() {

    const theme = useTheme();
    const [Name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [gender, setGender] = useState('');
    const [nic, setNic] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [privetNumber, setPrivetNumber] = useState('');
    const [homeNumber, setHomeNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [subject, setSubject] = useState([]);
    const [grade, setGrade] = useState('');
    const [school, setSchool] = useState('');
    const [district, setDistrict] = useState('');
    const [additionalComment, setAdditionalComment] = useState('');
    const [registerDate, setRegisterDate] = useState(new Date());
    const [signature, setSignature] = useState('');
    const type = "student";

    const [personName, setPersonName] = React.useState([]);

    const handleChange = (e) => {
        setSubject(e.target.value);
    };


    const handleChangeSubjects = (e) => {
        const {
            target: {value},
        } = e;
        setSubject(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    function submitStudent(e) {
        console.log("Name ,", Name);
        console.log("Date Of birth ,", dateOfBirth);
        console.log("Gender ,", gender);
        console.log("nic ,", nic);
        console.log("address ,", address);
        console.log("email ,", email);
        console.log("privetNumber ,", privetNumber);
        console.log("homeNumber ,", homeNumber);
        console.log("userName ,", userName);
        console.log("password ,", password);
        console.log("confirmPassword ,", confirmPassword);
        console.log("subject ,",subject);
        console.log("grade ,",grade);
        console.log("school ,", school);
        console.log("district ,", district);
        console.log("additionalComment ,", additionalComment);
        console.log("register date ,", registerDate);
        console.log("signature ,", signature);
        e.preventDefault();
        const student_register = {
            Name,
            dateOfBirth,
            gender,
            nic,
            address,
            email,
            privetNumber,
            homeNumber,
            userName,
            password,
            confirmPassword,
            subject,
            grade,
            school,
            district,
            additionalComment,
            registerDate,
            signature,
            type
        }

        axios.post("http://localhost:8070/student_register/addStudent", student_register)
            .then((res) => {

                console.log("respond : ", res.data)
                setName("");
                setDateOfBirth("");
                setGender("");
                setNic("");
                setAddress("");
                setEmail("");
                setPrivetNumber("");
                setHomeNumber("");
                setUserName("");
                setPassword("");
                setConfirmPassword("");
                setSubject("");
                setGrade("");
                setSchool("");
                setDistrict("");
                setAdditionalComment("");
                setRegisterDate("");
                setSignature("");

            }).catch((err) => {
            alert(err);
        })
    }

    return (

        <Box py={4} sx={{bgcolor: "#F8F9FD", minHeight: "100vh"}}>
            <BoxWithShadow sx={{bgcolor: "#FBFBFB",}}>
                <form onSubmit={submitStudent} encType={"multipart/form-data"}>
                    <Grid container direction={"column"}>

                        <Grid item align={"center"} paddingY={5}>
                            <Typography variant={"h3"}>Student Registration Form</Typography>
                        </Grid>
                        <Grid item pl={3}>
                            <Typography variant={"subtitle1"}>Fill out the form carefully for registration</Typography>
                        </Grid>
                        <Grid item sx={{borderBottom: "2px solid #222"}} pl={3}>
                            <Typography variant={"subtitle1"}>*Required</Typography>
                        </Grid>


                        {/* ------------------ Student Name -------------------- */}

                        <Grid container direction={"row"} pb={2} pt={5} px={5}
                        >
                            <Grid item direction={"column"} lg={2}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                >* Student name</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10} sm={12} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"Name"}
                                           value={Name}
                                           onInput={(e) => {
                                               setName(e.target.value);
                                           }}/>
                            </Grid>

                        </Grid>

                        {/* ------------------ Birth Of Date -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >* Birth Date</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        disableFuture
                                        label="Date Of Birth"
                                        openTo="year"
                                        views={['year', 'month', 'day']}
                                        value={dateOfBirth}
                                        onInput={(newValue) => {
                                            setDateOfBirth(newValue);
                                        }}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>

                        {/* ------------------ Gender -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >Gender</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel onChange={(e) => setGender(e.target.value)} value="female" control={<Radio/>} label="Female"/>
                                    <FormControlLabel onChange={(e) => setGender(e.target.value)} value="male" control={<Radio/>} label="Male"/>
                                </RadioGroup>
                            </Grid>
                        </Grid>

                        {/* ------------------ NIC -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >NIC</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"NIC"}
                                           value={nic}
                                           onInput={e => setNic(e.target.value)}/>
                            </Grid>
                        </Grid>

                        {/* ------------------ Address -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >* Address</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10} sm={12} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"Address"}
                                           value={address}
                                           onInput={e => setAddress(e.target.value)}/>
                            </Grid>
                        </Grid>

                        {/* ------------------ Student Email -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >Student Email</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10} sm={12} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"Student Email"}
                                           type={"email"}
                                           value={email}
                                           onInput={e => setEmail(e.target.value)}/>
                            </Grid>
                        </Grid>


                        {/* ------------------ Phone Number -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >Phone Number</Typography>
                            </Grid>
                            <Grid item container direction={"row"} md={5}
                                // sx={{bgcolor: "#8d9b13"}}
                            >
                                <Grid item direction={"column"}
                                      md={4} sm={4} xs={2}
                                    // sx={{bgcolor: "#139b8b"}}
                                      px={1} container
                                      justifyContent="center">
                                    <Typography variant={"h6"}
                                        // sx={{bgcolor: "#0034ff"}}
                                                align={"right"}>Private</Typography>
                                </Grid>
                                <Grid item direction={"column"} md={8} sm={8} xs={12}
                                    // sx={{bgcolor: "#139b8b"}}
                                      px={1}>
                                    <TextField margin="dense" id="outlined-basic"
                                               sx={{}}
                                               fullWidth
                                               variant="outlined"
                                               label={"Phone Number"}
                                               value={privetNumber}
                                               onInput={e => setPrivetNumber(e.target.value)}/>
                                </Grid>
                            </Grid>
                            <Grid item container direction={"row"} md={5}
                                // sx={{bgcolor: "#8d9b13"}}
                            >
                                <Grid item direction={"column"} md={4} sm={4} xs={2}
                                    // sx={{bgcolor: "#139b8b"}}
                                      px={1} container
                                      justifyContent="center">
                                    <Typography variant={"h6"}
                                        // sx={{bgcolor: "#0034ff"}}
                                                align={"right"}>Home</Typography>
                                </Grid>
                                <Grid item direction={"column"} md={8} sm={8} xs={12}
                                    // sx={{bgcolor: "#139b8b"}}
                                      px={1}>
                                    <TextField margin="dense" id="outlined-basic"
                                               sx={{}}
                                               fullWidth
                                               variant="outlined"
                                               label={"Phone Number"}
                                               value={homeNumber}
                                               onInput={e => setHomeNumber(e.target.value)}/>
                                </Grid>
                            </Grid>
                        </Grid>


                        {/* ------------------ User Name -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >* User Name</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"User Name"}
                                           value={userName}
                                           onInput={e => setUserName(e.target.value)}/>
                            </Grid>
                        </Grid>


                        {/* ------------------ Password -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >* Password</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"Password"}
                                           value={password}
                                           type={"password"}
                                           onInput={e => setPassword(e.target.value)}/>
                            </Grid>
                        </Grid>

                        {/* ------------------ Confirm Password -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >* Confirm Password</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"Confirm Password"}
                                           value={confirmPassword}
                                           type={"password"}
                                           onInput={e => setConfirmPassword(e.target.value)}/>
                            </Grid>
                        </Grid>


                        {/* ------------------ Subject -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >* Subject</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12} px={1}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-multiple-chip-label">Subject</InputLabel>
                                    <Select
                                        labelId="demo-multiple-chip-label"
                                        id="demo-multiple-chip"
                                        multiple
                                        value={subject}
                                        defaultValue={["Maths"]}
                                        onChange={handleChangeSubjects}
                                        input={<OutlinedInput id="select-multiple-chip" label="Subject"/>}
                                        renderValue={(selected) => (
                                            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value}/>
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>


                        {/* ------------------ Grade -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >* Grade</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <FormControl fullWidth>
                                    <InputLabel id="test-select-label2">Grade</InputLabel>
                                    <Select
                                        value={grade}
                                        required
                                        onChange={(e) => setGrade(e.target.value)}
                                        labelId="test-select-label2"
                                        label="Grade"
                                        fullWidth
                                    >
                                        <MenuItem key={1} value={"Grade 6"}>Grade 6</MenuItem>
                                        <MenuItem key={2} value={"Grade 7"}>Grade 7</MenuItem>
                                        <MenuItem key={3} value={"Grade 8"}>Grade 8</MenuItem>
                                        <MenuItem key={4} value={"Grade 9"}>Grade 9</MenuItem>
                                        <MenuItem key={5} value={"Grade 10"}>Grade 10</MenuItem>
                                        <MenuItem key={6} value={"Grade 11"}>Grade 11</MenuItem>
                                        <MenuItem key={7} value={"Grade 12"}>Grade 12</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        {/* ------------------ School -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >* School</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10} sm={6} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"School"}
                                           value={school}
                                           onInput={e => setSchool(e.target.value)}/>
                            </Grid>
                        </Grid>

                        {/* ------------------ District -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                // sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >* District</Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10} sm={6} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <TextField margin="dense" id="outlined-basic"
                                           sx={{}}
                                           fullWidth
                                           variant="outlined"
                                           label={"District"}
                                           value={district}
                                           onInput={e => setDistrict(e.target.value)}/>
                            </Grid>
                        </Grid>

                        {/* ------------------ Additional Comments -------------------- */}

                        <Grid container direction={"column"} pb={1} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >

                            <Typography variant={"h6"}
                                // sx={{bgcolor: "#0034ff"}}
                            >Additional Comment</Typography>

                        </Grid>
                        <Grid container direction={"row"} pb={2} px={5}
                            // sx={{bgcolor: "#2eff00"}}
                        >

                            <TextField rows={8} rowsMax={10} multiline id="outlined-basic" label="Additional Comment"
                                       variant="outlined"
                                       fullWidth
                                       value={additionalComment}
                                       onInput={e => setAdditionalComment(e.target.value)}/>
                        </Grid>

                        {/* ------------------ Register Date -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                            //sx={{bgcolor: "#2eff00"}}
                        >
                            <Grid item direction={"column"} md={2}
                                //sx={{bgcolor: "#9b1313"}}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h6"}
                                    // sx={{bgcolor: "#0034ff"}}
                                >
                                    Date
                                </Typography>
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={6} xs={12}
                                // sx={{bgcolor: "#139b8b"}}
                                  px={1}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        disableFuture
                                        label="Date"
                                        openTo="year"
                                        views={['year', 'month', 'day']}
                                        value={registerDate}
                                        onInput={(newValue) => {
                                            setRegisterDate(newValue);
                                        }}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>

                        </Grid>

                        {/* ------------------ Signature -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                        >
                            <Grid item direction={"column"} md={2}
                                  container
                                  justifyContent="center"
                            >
                                {/*<Typography variant={"h6"} sx={{bgcolor: "#0034ff"}}>* Signature</Typography>*/}
                            </Grid>
                            <Grid item direction={"column"} md={10 / 3} sm={12} xs={12}
                                  px={1}>
                                <TextField rows={5} rowsMax={10} multiline id="outlined-basic" label="Signature"
                                           variant="outlined"
                                           fullWidth
                                           value={signature}
                                           onInput={e => setSignature(e.target.value)}/>
                            </Grid>
                        </Grid>

                        {/* ------------------ Cancel & Submit Button -------------------- */}

                        <Grid container direction={"row"} pb={2} px={5}
                              justifyContent={"space-between"}>
                            <Grid item direction={"column"} md={2} sm={6} xs={12}
                                  container
                                  justifyContent="center" px={1} py={1}
                            >
                                <Button variant={"contained"}
                                        sx={{padding: "15px", backgroundColor: "#262626"}}>Cancel</Button>
                            </Grid>
                            <Grid item direction={"column"} md={2} sm={6} xs={12}
                                  container
                                  justifyContent="center" px={1} py={1}
                            >
                                <Button type='submit' variant={"contained"}
                                        sx={{padding: "15px", backgroundColor: "#00B74A"}}>Submit</Button>
                            </Grid>

                        </Grid>

                    </Grid>
                </form>
            </BoxWithShadow>
        </Box>
    )
        ;


};
