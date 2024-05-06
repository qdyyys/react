import weatherImage from '../../public/project_images/weather.png'
import binanceImage from '../../public/project_images/binance.png'
import panel from '../../public/project_images/panel.png'
import devops from '../../public/project_images/devops.png'
let slideImages = [binanceImage, weatherImage, panel, devops]
import SwiperComp from "./SwiperComp"


const Content = ()=>{

    function Hello(){
        alert('hello!')
    }
    return (
        <div className='h h-screen flex flex-col items-center gap-10'>
            <SwiperComp effect='cube' images={slideImages}></       SwiperComp>
            <button onClick={Hello} className='text-white font-bold bg-lightRed-red py-2 px-6'>Нажать</button>
        </div>
    )
}
export default Content