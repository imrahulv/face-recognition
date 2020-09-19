import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
      <div className='center ma'>
        <div className='absolute mt2'>
        {/* An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).      agar yaha pe absolute nhi laga rhe to dikkat ho rhi . wo dom ke according us size ko le le rha  so absolute laga diye taaki image ke according wo face dekhe*/}
          <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
          <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
      </div>
    );
  }
export default FaceRecognition;