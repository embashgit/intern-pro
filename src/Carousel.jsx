import React, { Component } from 'react'
import AutoRotatingCarousel from './AutoRotatingCarousel'
import Slide1 from './components/Slides/Slide1';
import Slide3 from './components/Slides/Slide3';
import Slide2 from './components/Slides/Slide2';
import Slide4 from './components/Slides/Slide4';
import Slide5 from './components/Slides/Slide5';
import {  Typography, Button } from '@material-ui/core';
import { Menu} from '@material-ui/icons'
import SwipeDrawer from './components/SwipeDrawer';
import AuthForm from './components/AuthForm';
import Media from 'react-media';

const customDrawerStyle = {
    width:400,
    backgroundColor: 'transparent',
  }

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
            drawerIsOpen:false,
            isMobile:false,
        }
    }
    handleToggleDrawer = () => {
        this.setState({ drawerIsOpen: !this.state.drawerIsOpen })
      }

    render() {
        const {isMobile,drawerIsOpen} =this.state;
        return (
            <>
            <Media query="(max-width: 992px)" onChange={matches => this.setState({ isMobile: matches })} />
            <div>
                
                {!drawerIsOpen && <div style={isMobile?{zIndex:3000,color:'#fff'}:{zIndex:10,color:'#fff'}} className="appbar">
                    <div>
                    <Typography  className="logo" style={{color:'#fff'}} variant="subheading">
                        Intern-pro
                    </Typography>
                    </div>
                    {!this.state.drawerIsOpen && <div style={{marginInlineEnd:20,cursor:'pointer'}}>
                       <Button onClick={this.handleToggleDrawer} variant="text"><Menu className="menu" style={{color:'#fff',zIndex:100,fontSize:29}}/></Button>
                    </div>}
                </div>}
                <div style={{zIndex:50000}}>
                <SwipeDrawer
                position="right"
                drawerStyles={{...customDrawerStyle,backgroundColor:'transparent'}}
                isOpen={this.state.drawerIsOpen}
                toggleDrawer={this.handleToggleDrawer}
              >
                  <AuthForm handleDrawer={this.handleToggleDrawer} />
                  </SwipeDrawer>
                </div>
                <div style={{ position: 'relative', width: '100%', height: 500 }}>
                    <AutoRotatingCarousel
                        handleDrawer={this.handleToggleDrawer}
                        label='Get Started'
                        mobile={true}
                        open={this.state.open}
                    >
                        <Slide1 />
                        <Slide2 />
                        <Slide3 />
                        <Slide4 />
                        <Slide5 />
                    </AutoRotatingCarousel>
                </div>
            </div>
            </>
        )
    }
}

export default Carousel
