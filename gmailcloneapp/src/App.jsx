import Navbar from "./components/shared/Navbar"
import Sidebar from "./components/Sidebar"
import Inbox from "./components/Inbox"
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Body from "./components/Body"
import Mail from "./components/Mail"
import Sendmail from "./components/Sendmail"
import Login from "./components/login"
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element :  <Body/>,
      children : [
          {
            path : "/",
            element : <Inbox/>
          },
          {
            path:"/mail/:id",
            element :<Mail/>
          }
      ]
    }
  ])
  const { user }=  useSelector(store=>store.appSlice) ;


  return (
    <>


      <div className="bg-[#F6F8FC] h-screen w-full overflow-hidden">

        {
          !user ?(
            <Login/>
          ):(
            <>
              <Navbar/>
              <RouterProvider router={router}/>
              <div className="absolute w-[30%] bottom-0 right-20 z-10">
                <Sendmail/>
              </div>
            </>
          )
        }

        
      </div>


    </>
  )
}

export default App
