import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadderTwo from '../components/common/LoadderTwo';

const PageNotFound = React.lazy(() => import("../pages/PageNotFound"));
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Works = React.lazy(() => import("../pages/Works"));
const ProjectDetails = React.lazy(() => import("../pages/ProjectDetails"));


const MainRoutes = () => {
    return (
        <Suspense fallback={<LoadderTwo />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/works' element={<Works />} />
                <Route path='/detail/:id' element={<ProjectDetails />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </Suspense>
    )
}

export default MainRoutes