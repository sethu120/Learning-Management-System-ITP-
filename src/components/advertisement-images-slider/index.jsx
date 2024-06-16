import './advertisement-image-slider.scss'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Autoplay } from 'swiper'
import {useEffect, useState} from 'react'
import axios from "axios";

const AdvertisementImagesSlider = () => {

    const [activeThumb, setActiveThumb] = useState()
    const [advertisement, setAdvertisement] =useState([]);
    useEffect(() =>{
        console.log("activeThumb : ", activeThumb)
    }, [activeThumb])

    useEffect(async () => {
        const getAdvertisement = () => {
            /* get all advertisement data */
            axios.get("http://localhost:8070/advertise/")
                .then(async (res) => {
                    console.log(res.data)
                    setAdvertisement(res.data)
                }).catch(() => {
                alert("No data")
            })
        }
        getAdvertisement();
        console.log("advertisement : ")
    }, [])
    return <>
        <Swiper
            autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs, Autoplay]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className='product-images-slider'
        >
            {
                advertisement.map((value) => (
                    <SwiperSlide key={value._id}>
                        <img src={require(`../../assets/uploads/${value.image}`)} alt="product images" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className='product-images-slider-thumbs'
        >
            {
                advertisement.map((value) => (
                    <SwiperSlide key={value._id}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={require(`../../assets/uploads/${value.image}`)} alt="product images" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </>
}


export default AdvertisementImagesSlider
