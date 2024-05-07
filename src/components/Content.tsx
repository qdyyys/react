import weatherImage from '../../public/project_images/weather.png'
import binanceImage from '../../public/project_images/binance.png'
import panel from '../../public/project_images/panel.png'
import devops from '../../public/project_images/devops.png'
let slideImages = [binanceImage, weatherImage, panel, devops]
import SwiperComp from "./SwiperComp"
import Product from './Product'
import { products } from '../data/products'

 
const Content = ()=>{
    return (
        <div className='flex flex-col items-center gap-10'>
            
            <SwiperComp effect='cube' images={slideImages}/>

            <button

             className='text-white font-bold bg-lightRed-red py-2 px-6 duration-700'>2
            </button>

            <Product product={products[0]}/>
            <Product product={products[1]}/>
        </div>
    )
}
export default Content