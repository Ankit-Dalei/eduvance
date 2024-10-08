import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import Moderate from './pages/Teacher/ExamSession/contestsection/Moderate';
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
import CountryCity from './pages/Teacher/ExamSession/common/CountryCity';
import PrivateRoute from './Service/otpRoute/PrivateRoute';
import OrmQuestionLayout from './pages/Teacher/ExamSession/omrsection/OrmQuestionLayout';
import OrmQuestion from './pages/Teacher/ExamSession/omrsection/OrmQuestion';
import Admindegree from './pages/Admin/AdminTable/Admindegree';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/ResetPassWord' element={<ResetPassWordPage />} />

          {/* Admin Routes */}
          <Route path='/Admin' element={<PrivateRoute element={Adminlayout} requiredRole="AD" />}>
            <Route index element={<Adminhome />} />
            <Route path='University' element={<Adminuniversity />} />
            <Route path='Campus' element={<Admincampus />} /> 
            <Route path='Management' element={<Adminmanagement />} />
            <Route path='degree' element={<Admindegree />} />
            <Route path='Notification' element={<Adminnotify />} />
            <Route path='notificationDisplay' element={<Adminnotifyshow />} />
            <Route path='message' element={<Adminnotifycreate />} />
          </Route>

          {/* Management Routes */}
          <Route path='/Management' element={<PrivateRoute element={Managementlayout} requiredRole="MT" />}>
            <Route index element={<Managementhome />} />
            <Route path='School' element={<Managementschool />} />
            <Route path='Branch' element={<Managementbranch />} />
            <Route path='Course' element={<Managementcourse />} />
            <Route path='Teacher' element={<Managementteacher />} />
            <Route path='Student' element={<Managementstudent />} />
            <Route path='Section' element={<Managementsection />} />
            <Route path='notification' element={<Managementnotify />} />
            <Route path='notificationDisplay' element={<Managementnotifyshow />} />
            <Route path='message' element={<Managementnotifycreate />} />
            <Route path='ChooseRoll' element={<Managemententrypanal />} >
              <Route index element={<Managementaddschool />} />
              <Route path='addBranch' element={<Managementaddbranch />} />
              <Route path='addCourse' element={<Managementaddcourse />} />
              <Route path='addTeacher' element={<Managementaddteacher />} />
              <Route path='addStudent' element={<Managementaddstudent />} />
            </Route>
          </Route>

          {/* Teacher Routes */}
          <Route path='/teacher' element={<PrivateRoute element={Dashboard} requiredRole="FT" />} />
          <Route path='/teacher/*' element={<PrivateRoute element={QuestionLayout} requiredRole="FT"/>}>
            <Route path="add-contest" element={<AddContest />} />
            <Route path="add-question" element={<AddQuestion />} />
          </Route>
          <Route path="/questionform" element={<PrivateRoute element={AddQuestionform} requiredRole="FT"/>} />
          <Route path="/contestform" element={<PrivateRoute element={AddContestform} requiredRole="FT"/>} />

          {/* Base Layout for Contest */}
          <Route path="/baselayout" element={<PrivateRoute element={BaseLayout} requiredRole="FT"/>}>
            <Route path="details" element={<Details />} />
            <Route path="challenge" element={<Challenge />} />
            <Route path="advanced" element={<Advance />} />
            <Route path="moderate" element={<Moderate />} />
            <Route path="notification" element={<Notification />} />
            <Route path="statistic" element={<Statistics />} />
          </Route>

          {/* Base Layout for Question */}
          <Route path="/questionbaselayout" element={<PrivateRoute element={BaseLayoutQuestion} requiredRole="FT"/>}>
            <Route path="details" element={<QDetails />} />
            <Route path="moderate" element={<QModerate />} />
            <Route path="testcase" element={<TestCase />} />
            <Route path="code" element={<CodeSube />} />
            <Route path="language" element={<Language />} />
            <Route path="setting" element={<Setting />} />
            <Route path="editorial" element={<Editoral />} />
            <Route path="custom" element={<CustomCheaker />} />
            <Route path="orm" element={<Orm />} />
          </Route>
          <Route path="/ormqustionlayout" element={<PrivateRoute element={OrmQuestionLayout} requiredRole="FT"/>}>
          <Route path="ormquestion" element={<OrmQuestion />} />
</Route>
          <Route path='/testing' element={<PrivateRoute element={CountryCity} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
