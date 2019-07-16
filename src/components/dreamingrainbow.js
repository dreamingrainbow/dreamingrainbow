import React from 'react';
export default function DreamingRainbow(props) {
  
  var colorArray = ["Red","Orange","Yellow","Green","Blue","Purple"];
  var colorString = { "color" : colorArray[0] };
  function setColor(i) {
    colorString = {"color" : colorArray[i]};
  }

  function splitByLetters(str) {
    var arr = JSON.parse(JSON.stringify(str)).toString().split('');
    
    var mid = Math.floor(arr.length/2);
    
    var leftArray = arr.slice(0,mid);
    var rightArray = arr.slice(mid);
    
    var leftSectionSize = Math.ceil(leftArray.length/3);
    var rightSectionSize = Math.ceil(rightArray.length/3);
    
    if (str.length <= 1) return {'0':str};
    
    var sections = [];
    var x = (arr, mid, SectionSize, sections) => {
        var SplitSize = Math.floor(mid/SectionSize);
        for(let i = 0;i <= SplitSize; i++){
          if(i===0) {
              sections.push(arr.slice(0, SectionSize).join('')); //dr
           } else {
              var t = arr.slice(SectionSize * i);
               sections.push(t.slice(0, SectionSize).join(''));
            };
          }
          return sections;
    };
    x(leftArray, mid, leftSectionSize, sections);
    x(rightArray, mid, rightSectionSize, sections);   
  };
  var DrEaMiNgRaInBoWD0TCoM = splitByLetters(props.phrase).concat((section, i) => {
    setColor(i);
    return (<span style={colorString}>{section}</span>);
   });
   
   return(<main>{DrEaMiNgRaInBoWD0TCoM}</main>);
  
}

export DreamingRainbow as DreamingRainbows;
export DreamingRainbow as Words2Rainbows;

