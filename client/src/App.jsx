import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Layout =()=>{
  return (
    <>
    <Navbar />
    <Outlet/>
    <Footer />
    </>
  )
}

/*Route*/
const router=createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/post/:id",
        element:<Post/>,
      } ,
       {
        path:"/editpost",
        element:<EditPost/>,
      },
    ],
  },
  {
    path:"/register",
    element:<Register/>,
  },
  {
    path:"/Login",
    element:<Login/>,
  }
]);

function App() {
  return (
    <div className="App">
      <div  className="container">
          <RouterProvider router={router} />
      </div>
      
    </div>
  );
}

export default App;
