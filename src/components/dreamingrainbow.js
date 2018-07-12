import React, { Component } from 'react';

class DreamingRainbow extends Component {
  constructor(props){
    super(props);
    this.colorArray = ["Red","Orange","Yellow","Green","Blue","Purple"];
    this.colorString = { "color" : this.colorArray[0] };
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

  componentWillMount() {
    
  }

  render() {
    //Initial Render Rainbow Text and Blackbackground
    return(<div style={this.colorString}>{this.splitByLetters(this.props.phrase).map((section, i) => {
      this.setColor(i);
      return <span style={this.colorString} key={i}>{section}</span>
    })}</div>)
  }
}

export default DreamingRainbow;
