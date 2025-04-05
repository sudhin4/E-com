import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Imagess from "../../Data/Product-image";
import "../PhoneImage/PhoneImage.css";
import { MobileTypeImage } from "../../Data/Product-image";
import { Routes, useNavigate } from "react-router-dom";
function PhoneImage({ Images, para }) {


  const navigate = useNavigate()
  function getindexnavigate(value){
    const route=[
      "/Mobiles",
      "/HomeAppliance",
      "/Shoes",
      "/Bags",
      "/Watches",
      "/Dresses",
      "/Perfumes",
    ]
    if(route[value])
      navigate(route[value])

  }
  
  return (
    <>
      <div className="slider_container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          Pagination={{ clickable: true }}
          loop={false}
          className="Swiper_slider"
        >
          <div className="SiwpeerMap">
            {Imagess.map((item,index)=>(
            <SwiperSlide key={index} onClick={()=>getindexnavigate(index)} >
            <img src={item.src} className="Mobile_size_imagee" ></img>

            <p className="MobilesizeproductParaaa">{item.para}</p>
          </SwiperSlide>
          ))}
          </div>
          
          
        </Swiper>
      </div>
    </>
  );
}
export default PhoneImage;
