

export const sliderProps = (appsLength) => {
    return {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: Math.min(appsLength,5),
        responsive: [
            {
                breakpoint: 1520, // For screens smaller than 1520px
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: Math.min(appsLength,4),
                }
            },
            {
                breakpoint: 1300, // For screens smaller than 1300px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: Math.min(appsLength,3),
                }
            },
            {
                breakpoint: 1000, // For screens smaller than 1000px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: Math.min(appsLength,2),
                }
            },
            {
                breakpoint: 668, // For screens smaller than 668px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: Math.min(appsLength,1),
                }
            }
        ]
    }
};