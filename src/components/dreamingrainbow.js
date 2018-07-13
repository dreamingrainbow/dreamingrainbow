import React, { Component } from 'react';
import './style.css';
class DreamingRainbow extends Component {
  constructor(props){
    super(props);
    this.colorArray = ["Red","Orange","Yellow","Green","Blue","Purple"];
    this.colorString = { "color" : this.colorArray[0] };
    this.timerEvent = setInterval(this.forceUpdate.bind(this), 9000);
    this.state = {
      seconds : 0
    }
  }

  setColor(i) {
    this.colorString = {"color" : this.colorArray[i]};
  }

  splitByLetters(str) {
    let arr = str.split('')
    const mid = Math.floor(arr.length/2);
    const leftArray = arr.slice(0,mid);
    const rightArray = arr.slice(mid);
    const leftSectionSize = Math.ceil(leftArray.length/3);
    const rightSectionSize = Math.ceil(rightArray.length/3);
    if (str.length <= 1) return {'0':str};
    
    const sections = [];
    const x = (arr, mid, SectionSize, sections) => {
      const SplitSize = Math.floor(mid/SectionSize);
      for(let i = 0;i <= SplitSize; i++){
        if(i===0) {
          sections.push(arr.slice(0, SectionSize).join('')) //dr
        } else {
          const t = arr.slice(SectionSize * i);
          sections.push(t.slice(0, SectionSize).join(''));
        }
      }
      return sections;
    }
    x(leftArray, mid, leftSectionSize, sections);
    x(rightArray, mid, rightSectionSize, sections);    
    return sections;
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 9000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const items = this.splitByLetters(this.props.phrase).map((section, i) => {
      this.setColor(i);      
      const myStyle = {animationName: 'fadeInOut',
        animationDelay:`${.5 + i}s`,
        animationDuration:`${1.5}s`};
      return <span style={Object.assign(this.colorString, myStyle)}  key={`section_${i}_${this.state.seconds}`}>
        {section}</span>
    });        
    return(items);
  }
}

export default DreamingRainbow;
