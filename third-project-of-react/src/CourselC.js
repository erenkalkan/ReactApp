import React from 'react'
import {Carousel} from 'react-bootstrap';
import './CourselC.css';

function CourselC() {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imgfinans.milliyet.com.tr/i/haber/f_koc_774971463318.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media-cdn.t24.com.tr/media/library/2019/07/1562578228265-23323232.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdntr1.img.sputniknews.com/img/104068/85/1040688531_0:0:1200:650_1000x541_80_0_0_6ad659d350288e8d97a1e343a607968f.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default CourselC
