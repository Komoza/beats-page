import './reviews.scss';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const ReviewsComponent = () => {
    return (
        <section className="reviews">
            <div className="reviews__title">What the Experts are Saying</div>

            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={8}
                pagination={{
                    type: 'bullets',
                    el: '.reviews__pagination',
                    bulletClass: 'swiper-custom-bullet',
                    bulletActiveClass: 'swiper-custom-bullet-active',
                    clickable: true,
                }}
                modules={[Pagination]}
                className="reviews__cards"
            >
                <SwiperSlide className="reviews__card">
                    <p className="reviews__card-text">
                        “How do they sound on phone calls? These headphones
                        sound great.”
                    </p>

                    <div className="reviews__card-bottom-wrapper">
                        <img
                            className="reviews__card-youtube-logo"
                            src="/image/youtube-logo.svg"
                            alt="youtube logo"
                        />
                        <p className="reviews__card-name">
                            @PayetteForward <br /> Tech Reviewer
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="reviews__card">
                    <p className="reviews__card-text">
                        “The noise cancellation on these earbuds is easily top
                        tier.”
                    </p>

                    <div className="reviews__card-bottom-wrapper">
                        <img
                            className="reviews__card-youtube-logo"
                            src="/image/youtube-logo.svg"
                            alt="youtube logo"
                        />
                        <p className="reviews__card-name">
                            @FlossyCarter <br /> Tech Reviewer
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="reviews__card">
                    <p className="reviews__card-text">
                        “These deliver superior audio experience across all
                        frequency ranges.”
                    </p>

                    <div className="reviews__card-bottom-wrapper">
                        <img
                            className="reviews__card-youtube-logo"
                            src="/image/youtube-logo.svg"
                            alt="youtube logo"
                        />
                        <p className="reviews__card-name">
                            @DailyTekk <br /> Tech Reviewer
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="reviews__pagination"></div>
        </section>
    );
};
