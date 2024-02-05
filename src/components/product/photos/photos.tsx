import { useEffect, useState } from 'react';

//swiper
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import './photos.scss';
import { dataImages } from '../../../data';

interface Photo {
    url: string;
    alt: string;
}

interface PhotosComponentsProps {
    currentColor: string;
}

export const PhotosComponents: React.FC<PhotosComponentsProps> = ({
    currentColor,
}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [currImage, setCurrImage] = useState<Photo[] | null>(null);

    useEffect(() => {
        if (currentColor)
            switch (currentColor) {
                case 'grey':
                    setCurrImage(dataImages.grey);
                    return;

                case 'black':
                    setCurrImage(dataImages.black);
                    return;

                case 'pink':
                    setCurrImage(dataImages.pink);
                    return;

                case 'white':
                    setCurrImage(dataImages.white);
                    return;

                default:
                    return;
            }
    }, [currentColor]);

    return (
        currImage && (
            <div className="photos">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{
                        swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed
                                ? thumbsSwiper
                                : null,
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="photos__main-slide"
                >
                    {currImage.map((img, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <img
                                    className="photos__main-slide-img"
                                    src={img.url}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <Swiper
                    onSwiper={(e) => {
                        if (e) {
                            setThumbsSwiper(e);
                        }
                    }}
                    loop={false}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="photos__swiper-slide "
                >
                    {currImage.map((img, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <img
                                    className="photos__swiper-slide-img"
                                    src={img.url}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        )
    );
};
