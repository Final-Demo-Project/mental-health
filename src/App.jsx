
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Hero from './pages/Landing page/Hero'
import RootLayout from './Layouts/RootLayout'
import Login from './pages/Users-counsellor/Login'
import Signup from './pages/Users-counsellor/Signup'
import PostingForm from './pages/Users-counsellor/PostingForm'
import UserDashboardLayout from './Layouts/UserDashboardLayout'
import Selfassessment from './pages/dashboard/Selfassessment'
import Contents from './pages/dashboard/Contents'
import Settings from './pages/dashboard/Settings'
import Counseling from './pages/dashboard/Counseling'
import CommunitySupport from './pages/dashboard/CommunitySupport'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes'
import MoodTracker from './pages/dashboard/MoodTracker'
import Helpline from './pages/dashboard/Helpline'
import livechat from './component/LiveChat'
import Livechat from './component/LiveChat'
import Forgotten from './pages/Users-counsellor/Forgotten'
import Profile from './components/Profile'
import AdminDashboardLayout from './Layouts/AdminDashboardLayout'
import UserManagement from './pages/admindashboard/UserManagement'
import CounselorManagement from './pages/admindashboard/CounselorManagement'
import Appointments from './pages/admindashboard/Appointments'
import ContentManagement from './pages/admindashboard/ContentManagement'
import MoodTrackingInsights from './pages/admindashboard/MoodTrackingInsights'
import HelplineResources from './pages/admindashboard/HelplineResources'
import AnalyticsReports from './pages/admindashboard/AnalyticsReports'
import FeedbackSurveys from './pages/admindashboard/FeedbackSurveys '
import Educationals from './pages/dashboard/Educationals'
import SingleView from './pages/Landing page/SingleView'
import EditContentForm from './pages/Users-counsellor/EditContent'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true, element: <Hero />,
        },

      ]
    },
    
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/postingForm",
      element: <PostingForm />,
    },
    {
      path: "selfassessment",
      element: <Selfassessment/>
    },
    {
      path: "/livechat",
      element: <Livechat />
    },
    {
      path: "/forgotten",
      element: <Forgotten/>
  },
  { 
    path: "/helpline",
    element: <Helpline/>
  },
  {
    path: "/educationals/:id",
    element: <SingleView/>
  },
  {
   path: "/editeducationalform/:_id",
   element: <EditContentForm/>
  },
  // {
  //   path: "/educationals",
  //   element: <Educationals/>
  // },
 

    {
      path: "/userdashboard",
      element: <UserDashboardLayout/>,
      children: [
        { index: true, element: <Contents/> },
        { path:"settings", element:<Settings/> },
        { path:"mood", element:<MoodTracker/>},
        { path:"counseling", element:<Counseling/>},
        { path:"helpline", element:<Helpline/>},
        { path:"communitysupport", element:<CommunitySupport/>},
        {path: "selfassessment", element: <Selfassessment/>},
        { path: "profile", element: <Profile/>},
        // { path:"/livechat", element:<Livechat /> }

      ]
    },
    {
    path: "/admindashboard",
    element: <AdminDashboardLayout/>,
    children: [
      { index: true, element: <UserManagement/>},
      { path: "counselor-management", element: <CounselorManagement/>},
      { path: "appointments", element: <Appointments/>},
      { path: "content-management", element: <ContentManagement/>},
      { path: "community-support", element: <CommunitySupport/>},
      { path: "mood-tracking-insights", element: <MoodTrackingInsights/>},
      { path: "helpline-resources", element: <HelplineResources/>},
      { path: "analytics-reports", element: <AnalyticsReports/>},
      { path: "feedback-surveys", element: <FeedbackSurveys/>},
      { path: "postingform", element: <PostingForm/>}
    ]
  },
  ])

  return (
    <>
    <Theme>
      <RouterProvider router={router} />
      <ToastContainer
          position="top-right" // Adjust position
          autoClose={3000} // Auto close after 3 seconds
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" // You can change the theme to 'light', 'dark', etc.
        />
      </Theme>
    </>
  )
}

export default App
