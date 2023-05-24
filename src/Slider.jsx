import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'

export default function Slider({items}){
    return(
        <Swiper
        modules={[ Scrollbar ]}
        spaceBetween = {350}
        slidesPerView = {1}
        pagination = {{clickable: true}}
        >
            <div>
                {items.map(item =>{
                    return (
                        <SwiperSlide key = {item.id}>
                            <div>
                                <img src={item.url} />
                            </div>
                            <p>{item.opis}</p>
                        </SwiperSlide>
                    )
                })}
            </div>
        </Swiper>
    );
}