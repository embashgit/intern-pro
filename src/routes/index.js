import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../spinner';


   
const Slides = Loadable ({
    loader: () => import('../Carousel'),
    loading:() => <Loading/>,
    delay: 3000, // 0.3 seconds
    timeout:10000,
});

const Slide1 = Loadable ({
    loader: () => import('../components/Slides/Slide1'),
    loading:() => <Loading/>,
});



 const routes = [
    {path:'/', exact: true, key:"Slides", name:"Slides", component:Slides },
    {path:'/slide1',key:"slideTest",  name:"slideTest", component:Slide1 },
]

export default routes;
