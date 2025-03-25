import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Navbarpage from './Navbarpage'
import ContentPage from './ContentPage'
import FooterPage from './FooterPage'
import Bike1 from './Bike1'
import Bike2 from './Bike2'
import Bike3 from './Bike3'
import Car from './Car'
import LibraryNew from './LibraryNew'
import LibraryOld from './LibraryOld'
import LoginPage from './LoginPage'
import Users from './Users'

export default function RouterPage() {

    // REACT ROUTER

    //        Router Package name => { react - router - dom }

    // 1. BrowserRouter
    // 2. Routes
    // 3. Route
    // 4. Link
    // 5. Two Hooks => 
    //     1. useNavigate
    //     2. useParams



    return (
        <div className='justify-content-center align-items-center'>
            {/* <h1>Welcome To RouterPage</h1> */}



            <h1> <Link to={'/'}>NavabarPage</Link> </h1>
            <h1> <Link to={'/content'}>Content</Link> </h1>
            <h1> <Link to={'/foot'}>Footer</Link> </h1>
            <h1> <Link to={'/Bookstore/Old'}>LibraryOld</Link> </h1>
            <h1> <Link to={'/Bookstore/new'}>LibraryNew</Link> </h1>
            <h1> <Link to={'/Login'}>LOgin</Link> </h1>
            <h1> <Link to={'/user/1'}>User-1</Link> </h1>
            <h1> <Link to={'/user/2'}>User-2</Link> </h1>
            <h1> <Link to={'/user/3'}>User-3</Link> </h1>

            <Routes>
                <Route path='/' element={<Navbarpage />} />
                <Route path='/content' element={<ContentPage />} />
                <Route path='/foot' element={<FooterPage />} />
                <Route path='/Login' element={<LoginPage />} />
                <Route path='/User/:id' element={<Users />} />

                <Route path='/Bookstore'>

                    <Route path='New' element={<LibraryNew />} />
                    <Route path='Old' element={<LibraryOld />} />

                </Route>

            </Routes>

            {/* <Routes>
                <Route path='/Bike1' element={<Bike1 />} />
                <Route path='/Bike2' element={<Bike2 />} />
                <Route path='/Bike3' element={<Bike3 />} />
                <Route path='/Car' element={<Car />} />
            </Routes> */}


        </div>
    )
}
