import './App.css';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import React, {useState} from 'react';
import {render} from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Profile from './pages/register/profile';
import Student_payment from './pages/paymentFunction/student_payment';
import AddBankAccount from './pages/paymentFunction/add_bank_acount';
import ViewTeacherWidraw from './pages/paymentFunction/teacher_withdraw';
import StudentPaymetView from './pages/paymentFunction/student_payment_view';
import TeacherBankAccountList from './pages/paymentFunction/teacher_bank_account_list';
import EditBankAccount from './pages/paymentFunction/edit_bank_acount';
import Login from './pages/register/login';
import StudentRegistration from "./pages/register/studentRegistration";
import TeacherRegistration from "./pages/register/teacherRegistration";
import AddQuizzes from './pages/quiz/addQuizzes';
import Header from './components/header/header';


import SubjectActivities from "./pages/courses/subjectActivities";
import CreateActivity from "./pages/courses/createActivity";
import AdvertisementHome from "./pages/advertise/advertisementHome";
import CreateAdvertisement from "./pages/advertise/createAdvertisement";
import AdvertiserProfile from "./pages/advertise/advertiserProfile";
import CreateAdDetails from "./pages/advertise/createAdDetails";
import EditProfile from "./pages/register/editProfile";
import CreateQuiz from "./pages/quiz/teacher/createQuiz";
import EditQuiz from "./pages/quiz/teacher/editQuiz";
import QuizProfile from "./pages/quiz/teacher/quizProfile";
import EditAdvertisement from "./pages/advertise/editAdvertisement";
import NavBar from "./components/header/navBar";


function App() {

    const [userId, setUserId] = useState("001");
    const [userType, setUserType] = useState("TEACHER");

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>

                {/* user function (Namila) */}
                <Route path="/" element={<Header/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/edit_profile" element={<EditProfile/>}/>
                <Route path="/student_registration" element={<StudentRegistration/>}/>
                <Route path="/teacher_registration" element={<TeacherRegistration/>}/>

                {/* payment function */}
                <Route path="/Student_payment" element={<Student_payment/>}/>
                <Route path="/ViewTeacherWidraw" element={<ViewTeacherWidraw/>}/>
                <Route path="/AddBankAccount" element={<AddBankAccount/>}/>
                <Route path="/StudentPaymetView" element={<StudentPaymetView/>}/>
                <Route path="/TeacherBankAccountList" element={<TeacherBankAccountList/>}/>
                <Route path="/EditBankAccount" element={<EditBankAccount/>}/>

                {/* quiz fucntion */}
                <Route path="/add_quiz" element={<AddQuizzes/>}/>
                <Route path="/create_quiz" element={<CreateQuiz userId={userId} userType={userType}/>}/>
                <Route path="/edit_quiz" element={<EditQuiz userId={userId} userType={userType}/>}/>
                <Route path="/my_quiz" element={<QuizProfile userId={userId} userType={userType}/>}/>

                {/*---courses(chalani)*/}
                <Route path="/subject_activities" element={<SubjectActivities/>}/>
                <Route path="/create_activity" element={<CreateActivity/>}/>

                {/*---advertise(malith)*/}
                {userType === "STUDENT" ?
                    <Route path="/advertisement" element={<AdvertisementHome userId={userId} userType={userType}/>}/>
                    :
                    <>
                        <Route path="/advertisement" element={<AdvertisementHome userId={userId} userType={userType}/>}/>
                        <Route path="/create_advertisement"
                               element={<CreateAdvertisement userId={userId} userType={userType}/>}/>
                        <Route path="/edit_advertisement"
                               element={<EditAdvertisement userId={userId} userType={userType}/>}/>
                        <Route path="/my_advertisement"
                               element={<AdvertiserProfile userId={userId} userType={userType}/>}/>
                        <Route path="/advertisement_summery" element={<CreateAdDetails/>}/>
                    </>
                }

            </Routes>
        </BrowserRouter>
    );
}

export default App;
