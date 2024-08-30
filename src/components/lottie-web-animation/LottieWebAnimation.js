import React from "react";
import LottieView from "react-lottie";
import LottieNoDataAnimation from "../../assets/lottie/no-data.json";


export const LottieNoData = ({style}) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LottieNoDataAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return(
        <div style={style}>
            <LottieView options={defaultOptions} />
        </div>
    )
}