
import React, { Component } from 'react'
import Carousel from 'nuka-carousel';
import { styles } from '../styles/scss/custom';
import { withStyles, Typography } from '@material-ui/core';
import { Colors, Fonts } from '../styles/themes';

const {blue} = Colors
export const sliderItems = [
  {'topic':'Tax Assesment', 'description':'Taxman evaluates your business and accurately computes monthly and annual tax', 'img':require('../image/assesment.jpg')},
  {'topic':'Tax Collection', 'description':'With Taxman payment integration, tax payment becomes easier than ever', 'img':require('../image/moneybag1.png')},
  {'topic':'Accounting', 'description':'Taxman has been trained to carry out an error free accounting proccess', 'img':require('../image/accounting.jpg')},
  {'topic':'Statistical Report', 'description':'Taxman auto generates a well proccessed multidimentional informative reports in form of chart', 'img':require('../image/taxrecord.png')}  
];
export class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          slideIndex:0,
          dotIndex:0,
          autoplay: true
        }
        
      }
      
      gotoSlide=(id)=>{
        this.setState({slideIndex:id});
      }
      

      dotsSize = ()=>{ 
        const dots = <div className="dots "></div>
        return Array.from({length:sliderItems.length},x=>dots)  
      }
      render() {
        const {classes} = this.props;
        return (
            <div >

             <Carousel  
             speed={300}
             autoplay={this.state.autoplay}
             autoplayInterval={5000}
             slideIndex={this.state.slideIndex}
             afterSlide={slideIndex =>{
                 this.setState({ slideIndex ,dotIndex:slideIndex },()=>{
                   slideIndex===sliderItems.length-1? setTimeout(()=>this.setState({slideIndex:0}),4000): this.setState({ slideIndex ,dotIndex:slideIndex })
                 })} }
                 withoutControls={true}
             transitionMode={'fade'}
           width={260}
           wrapToIndex={true}
          className="carousel"
           >
          {sliderItems.map((item, i)=>{
            return(
            <div className="caroItem" key={i+item.topic}>
            <img className="sliderContainer"  width="250px" height="154px" src={item.img} alt={"image"+i}/>
            <div style={{color:Colors.blueSecondary,letterSpacing:.4,padding:2}}>{item.topic}</div>
            <Typography  className={classes.smallText}>{item.description}</Typography>
            </div>
            )
          })}
          </Carousel>
           <div className="dotsWrapper">
             {
              //  this.dotsSize()
            }
             {
               sliderItems.map((item, index) => {
                 return (
                  <div onClick={()=>this.gotoSlide(index)} className={`dots ${this.state.dotIndex !== index ? "dots" : "dots sliderIndex" }`}></div>
                 )
               })
             }
           </div>
            </div>
        );
      }
    }
  
export default withStyles(styles)(Slider)
