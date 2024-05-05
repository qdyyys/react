import weatherImage from '../../public/project_images/weather.png'
import binanceImage from '../../public/project_images/binance.png'
import panel from '../../public/project_images/panel.png'
import devops from '../../public/project_images/devops.png'

let slideImages = [binanceImage, weatherImage, panel, devops]
import SwiperComp from "./SwiperComp"
const Content = ()=>{
    return (
        <div className='h h-screen '>
            <SwiperComp effect='cube' images={slideImages}></SwiperComp>
        </div>
    )
}
export default Content