
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
        // { path:"/livechat", element:<Livechat /> }

      ]
    }

  ])

  return (
    <>
    <Theme>
      <RouterProvider router={router} />
      </Theme>
    </>
  )
}

export default App
