import React, { Component } from 'react'
import AutoRotatingCarousel from './AutoRotatingCarousel'
import Slide1 from './components/Slides/Slide1';
import Slide3 from './components/Slides/Slide3';
import Slide2 from './components/Slides/Slide2';
import Slide4 from './components/Slides/Slide4';
import Slide5 from './components/Slides/Slide5';


class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
        }
    }
    render() {
        return (
            <div>
                <div style={{ position: 'relative', width: '100%', height: 500 }}>
                    <AutoRotatingCarousel
                        label='View Task'
                        mobile={true}
                        open={this.state.open}
                    >
                    <Slide1/>
                    <Slide3/>
                    <Slide2/>
                    <Slide4/>
                    <Slide5/>
                    </AutoRotatingCarousel>
                </div>
            </div>
        )
    }
}

export default Carousel
