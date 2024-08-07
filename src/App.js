import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/Login/ForgotPassword';
import ResetPassWordPage from './pages/Login/ResetPassWordPage';
import Dashboard from './pages/Teacher/component/Dashboard';
import Managementlayout from './pages/Management/Managementlayout';
import Managementhome from './pages/Management/ManagementNavigation/Managementhome';
import Managementschool from './pages/Management/ManagementNavigation/Managementschool';
import Managementbranch from './pages/Management/ManagementNavigation/Managementbranch';
import Managementcourse from './pages/Management/ManagementNavigation/Managementcourse';
import Managementteacher from './pages/Management/ManagementNavigation/Managementteacher';
import Managementstudent from './pages/Management/ManagementNavigation/Managementstudent';
import Managementsection from './pages/Management/ManagementNavigation/Managementsection';
import Managementnotify from './pages/Management/Managementnotify';
import Tquestion from './pages/Teacher/ExamSession/common/Layout';
import AddContest from './pages/Teacher/ExamSession/contestsection/AddContest';
import QuestionLayout from './pages/Teacher/ExamSession/common/Layout';
import AddQuestion from './pages/Teacher/ExamSession/questionsection/AddQuestion';
import AddQuestionform from './pages/Teacher/ExamSession/questionsection/AddQuestionform';
import AddContestform from './pages/Teacher/ExamSession/contestsection/AddContestform';
import Managemententrypanal from './pages/Management/ManagementForms/Managemententrypanal';
import Managementaddschool from './pages/Management/ManagementForms/Managementaddschool';
import Managementaddbranch from './pages/Management/ManagementForms/Managementaddbranch';
import Managementaddcourse from './pages/Management/ManagementForms/Managementaddcourse';
import Managementaddteacher from './pages/Management/ManagementForms/Managementaddteacher';
import Managementaddstudent from './pages/Management/ManagementForms/Managementaddstudent';
import Managementnotifyshow from './pages/Management/Managementnotifyshow';
import Managementnotifycreate from './pages/Management/Managementnotifycreate';
import BaseLayout from './pages/Teacher/ExamSession/contestsection/BaseLayoutContest';
import Details from './pages/Teacher/ExamSession/contestsection/Details';
import Challenge from './pages/Teacher/ExamSession/contestsection/Challenge';
import Advance from './pages/Teacher/ExamSession/contestsection/Advance';
import { ToastContainer } from 'react-toastify';
import Moderate from './pages/Teacher/ExamSession/contestsection/Moderate';
import { Toaster } from 'react-hot-toast';
import Notification from './pages/Teacher/ExamSession/contestsection/Notification';
import Statistics from './pages/Teacher/ExamSession/contestsection/Statistics';
import Adminlayout from './pages/Admin/Adminlayout';
import Adminhome from './pages/Admin/AdminTable/Adminhome';
import Adminuniversity from './pages/Admin/AdminTable/Adminuniversity';
import Admincampus from './pages/Admin/AdminTable/Admincampus';
import Adminmanagement from './pages/Admin/AdminTable/Adminmanagement';
import Adminnotify from './pages/Admin/Adminnotify';
import Adminnotifyshow from './pages/Admin/Adminnotifyshow';
import Adminnotifycreate from './pages/Admin/Adminnotifycreate';
import Adminprofile from './pages/Admin/Adminprofile';
import BaseLayoutQuestion from './pages/Teacher/ExamSession/questionsection/BaseLayoutQuestion';
import QDetails from './pages/Teacher/ExamSession/questionsection/QDetails';
import QModerate from './pages/Teacher/ExamSession/questionsection/Moderate';
import TestCase from './pages/Teacher/ExamSession/questionsection/TestCase';
import CodeSube from './pages/Teacher/ExamSession/questionsection/CodeSube';
import Language from './pages/Teacher/ExamSession/questionsection/Language';
import Setting from './pages/Teacher/ExamSession/questionsection/Setting';
import Editoral from './pages/Teacher/ExamSession/questionsection/Editoral';
import CustomCheaker from './pages/Teacher/ExamSession/questionsection/CustomCheaker';
import Orm from './pages/Teacher/ExamSession/questionsection/Orm';
import { useContext, useEffect } from 'react';
import { Context } from '.';
import { getUser } from './Service/LogAuth';
import CountryCity from './pages/Teacher/ExamSession/common/CountryCity';

function App() {

  return (
    <div>
      
      <BrowserRouter>
      <Toaster 
        position="top-right" // Change the position here
        reverseOrder={false} // Optionally reverse the order of toasts
      />
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/ResetPassWord' element={<ResetPassWordPage/>}/>
          {/* admin */}
          <Route path='/Admin' element={<Adminlayout/>}>
            <Route index element={<Adminhome/>}/>
            <Route path='University' element={<Adminuniversity/>}/>
            <Route path='Campus' element={<Admincampus/>}/>
            <Route path='Management' element={<Adminmanagement/>}/>
            <Route path='Notification' element={<Adminnotify/>}/>
            <Route path='notificationDisplay' element={<Adminnotifyshow/>}/>
            <Route path='message' element={<Adminnotifycreate/>}/>
          </Route>
          {/* management */}
          <Route path='/Management' element={<Managementlayout/>}>
            <Route index element={<Managementhome/>}/>
            <Route path='School' element={<Managementschool/>}/>
            <Route path='Branch' element={<Managementbranch/>}/>
            <Route path='Course' element={<Managementcourse/>}/>
            <Route path='Teacher' element={<Managementteacher/>}/>
            <Route path='Student' element={<Managementstudent/>}/>
            <Route path='Section' element={<Managementsection/>}/>
            <Route path='notification' element={<Managementnotify/>}/>
            <Route path='notificationDisplay' element={<Managementnotifyshow/>}/>
            <Route path='message' element={<Managementnotifycreate/>}/>
            <Route path='ChooseRoll' element={<Managemententrypanal/>}>
              <Route index element={<Managementaddschool/>}/>
              <Route path='addBranch' element={<Managementaddbranch/>}/>
              <Route path='addCourse' element={<Managementaddcourse/>}/>
              <Route path='addTeacher' element={<Managementaddteacher/>}/>
              <Route path='addStudent' element={<Managementaddstudent/>}/>
            </Route>
          </Route>
          {/* teacher */}
          {/* <Route path='/teacher' element={<Layout/>}/> */}
          <Route path='/teacher' element={<Dashboard/>}/>
          <Route path='/' element={<QuestionLayout/>}>
        <Route path="teacher/add-contest" element={<AddContest />} />
        
        <Route path="teacher/add-question" element={<AddQuestion />} />
        <Route path="/"element={<AddQuestion />} exact />
     
        </Route>
        <Route path="/questionform" element={<AddQuestionform/>} />
        <Route path="/contestform" element={<AddContestform/>} />

        {/* baselayout for contest */}

        <Route path="/baselayout" element={<BaseLayout/>} >
        <Route path="details" element={<Details/>} />
        <Route path="challenge" element={<Challenge/>} />
        <Route path="advanced" element={<Advance/>} />
        <Route path="moderate" element={<Moderate/>} />
        <Route path="notification" element={<Notification/>} />
        <Route path="statistic" element={<Statistics/>} />
        </Route>
  {/* baselayout for question */}
        <Route path="/questionbaselayout" element={<BaseLayoutQuestion/>} >
        <Route path="details" element={<QDetails/>} />
        <Route path="moderate" element={<QModerate/>} />
        <Route path="testcase" element={<TestCase/>} />
        <Route path="code" element={<CodeSube/>} />
        <Route path="language" element={<Language/>} />
        <Route path="setting" element={<Setting/>} />
        <Route path="editorial" element={<Editoral/>} />
        <Route path="custom" element={<CustomCheaker/>} />
        <Route path="orm" element={<Orm/>} />
        

        </Route>
        <Route path='/testing' element={<CountryCity/>}/>
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
