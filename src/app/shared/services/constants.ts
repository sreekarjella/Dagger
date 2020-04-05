export const LIST_MOVIES_PARAMETERS = {
    QUALITY_720P: '720p',
    QUALITY_1080P: '1080p',
    QUALITY_2160P: '2160P',
    QUALITY3D: '3D',
    GENRE: {
        COMEY: 'COMEDY',
        SCI_FI: 'SCI-FI',
        HORROR: 'HORROR',
        ROMANCE: 'ROMANCE',
        ACTION: 'ACTION',
        THRILLER: 'THRILLER',
        DRAMA: 'DRAMA',
        MYSTERY: 'MYSTERY',
        CRIME: 'CRIME',
        ANIMATION: 'ANIMATION',
        ADVENTURE: 'AVENTURE',
        FANTASY: 'FANTASY',
        COMEDY_ROMANCE: 'COMEDY-ROMANCE',
        ACTION_COMEDY: 'ACTION-COMEDY',
        SUPERHERO: 'SUPERHERO',
    },
    SORT_BY: {
        TITLE: 'title',
        YEAR: 'year',
        RATING: 'rating',
        PEERS: 'peers',
        SEEDS: 'seeds',
        DOWNLOAD_COUNT: 'download_count',
        LIKE_COUNT: 'like_count',
        DATE_ADDED: 'date_added'
    },
    ORDER_BY: {
        AESC: 'asc',
        DESC: 'DESC'
    },
    WITH_RATINGS: {
        TRUE: 'true',
        FALSE: 'false'
    }
};

export const bannerSlideOptions = {
    slidesPerView: 3,
    autoplay: {
        delay: 2000,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    on: {
        beforeInit() {
            const swiper = this;

            swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
            swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
        },
        setTranslate() {
            const swiper = this;
            const {
                width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
            } = swiper;
            const params = swiper.params.coverflowEffect;
            const isHorizontal = swiper.isHorizontal();
            const transform$$1 = swiper.translate;
            const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
            const rotate = isHorizontal ? params.rotate : -params.rotate;
            const translate = params.depth;
            // Each slide offset from center
            for (let i = 0, length = slides.length; i < length; i += 1) {
                const $slideEl = slides.eq(i);
                const slideSize = slidesSizesGrid[i];
                const slideOffset = $slideEl[0].swiperSlideOffset;
                const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

                let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                // var rotateZ = 0
                let translateZ = -translate * Math.abs(offsetMultiplier);

                let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

                // Fix for ultra small values
                if (Math.abs(translateX) < 0.001) { translateX = 0; }
                if (Math.abs(translateY) < 0.001) { translateY = 0; }
                if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
                if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
                if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

                // tslint:disable-next-line: max-line-length
                const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                $slideEl.transform(slideTransform);
                $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (params.slideShadows) {
                    // Set shadows
                    // tslint:disable-next-line: max-line-length
                    let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    // tslint:disable-next-line: max-line-length
                    let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if ($shadowBeforeEl.length === 0) {
                        $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                        $slideEl.append($shadowBeforeEl);
                    }
                    if ($shadowAfterEl.length === 0) {
                        $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                        $slideEl.append($shadowAfterEl);
                    }
                    if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
                    if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
                }
            }

            // Set correct perspective for IE10
            if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                const ws = $wrapperEl[0].style;
                ws.perspectiveOrigin = `${center}px 50%`;
            }
        },
        setTransition(duration) {
            const swiper = this;
            swiper.slides
                .transition(duration)
                .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                .transition(duration);
        }
    }
};

export const movieCatalogSLideOptions = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 50,
    centeredSlides: false,
};