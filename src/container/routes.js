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

export const AdminLogin = Loadable ({
    loader: () => import('../Views/Dashboard/Administrature/Administrateur'),
    loading:() => <Loading/>,
});

export const Interns = Loadable ({
    loader: () => import('../Views/Staff/Interns/Intenrs'),
    loading:() => <Loading/>,
});

export const Supervisors = Loadable ({
    loader: () => import('../Views/Staff/Supervisors/Supervisor'),
    loading:() => <Loading/>,
});
export const InternDashboard = Loadable ({
    loader: () => import('../Views/InternDashboard/InternDashboard'),
    loading:() => <Loading/>,
});
export const Tasks = Loadable ({
    loader: () => import('../Views/SupervisorDashborad/Tasks'),
    loading:() => <Loading/>,
});

const routes = [
    {path:'/', exact:true, key:'home', name:"home", component:Dashboard},
    {path:'/dashboard',key:'Dashboard', name:"Dashboard", component:Dashboard},
    {path:'/administrateur',key:'Administrateur', name:"Administrateur", component:AdminLogin},
    {path:'/Interns',key:'Interns', name:"Interns", component:Interns},
    {path:'/supervisor',key:'Supervisors', name:"Supervisors", component:Supervisors},

    {path:'/internDashboard',key:'InternDashboard', name:"InternDashboard", component:InternDashboard},
    {path:'/tasks', key:'Tasks', name:"Tasks", component:Tasks},
    // {path:'/slide',key:'Slide1', name:"Slide1", component:Slide1},
];

export default routes