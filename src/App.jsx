
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Hero from './pages/Hero'
import RootLayout from './Layouts/RootLayout'
import Login from './pages/Users-counsellor/Login'
import Signup from './pages/Users-counsellor/Signup'
import PostingForm from './pages/Users-counsellor/PostingForm'
import UserDashboardLayout from './Layouts/UserDashboardLayout'
import Selfassessment from './pages/dashboard/Selfassessment'
import Contents from './pages/dashboard/Contents'
import Settings from './pages/dashboard/Settings'
import Mood from './pages/dashboard/Mood'
import Counseling from './pages/dashboard/Counseling'
import Helpline from './pages/dashboard/Helpline'
import CommunitySupport from './pages/dashboard/CommunitySupport'

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
      path: "/selfassessment",
      element: <Selfassessment/>
    },
    {
      path: "/userdashboard",
      element: <UserDashboardLayout/>,
      children: [
        { index: true, element: <Contents/> },
        { path:"settings", element:<Settings/> },
        { path:"mood", element:<Mood/>},
        { path:"counseling", element:<Counseling/>},
        { path:"helpline", element:<Helpline/>},
        { path:"communitysupport", element:<CommunitySupport/>}
      ]
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
