import React from 'react';
// import ViewSessions from '../Views/Settings/Session/ViewSessions';
import Loadable from 'react-loadable';
import Loading from '../spinner'
import { Colors } from '../scss/theme';

export const styleProps ={
    color:Colors.blueSecondary,
    height:50,
    width:50,
    className:'spinner-background-opt',
}

export const Slides = Loadable ({
    loader: () => import('../Carousel'),
    loading:() => <Loading/>,
    delay: 3000, // 0.3 seconds
    timeout:10000,
});

export const Slide1 = Loadable ({
    loader: () => import('../components/Slides/Slide1'),
    loading:() => <Loading/>,
});
export const Dashboard = Loadable ({
    loader: () => import('../Views/Dashboard/Dashboard'),
    loading:() => <Loading/>,
});
const routes = [
    {path:'/', exact:true, key:'home', name:"home", component:Dashboard},
    {path:'/dashboard',key:'Dashboard', name:"Dashboard", component:Dashboard},
    // {path:'/slide',key:'Slide1', name:"Slide1", component:Slide1},
];

export default routes