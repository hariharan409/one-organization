

export const sliderProps = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 1520, // For screens smaller than 1520px
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1300, // For screens smaller than 1300px
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1000, // For screens smaller than 1000px
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 668, // For screens smaller than 668px
            settings: {
                slidesToShow: 1
            }
        }
    ]
};