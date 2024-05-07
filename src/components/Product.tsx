import { useState } from "react"


interface productProps {
    product: {
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: {
        count: number,
        rate: number,
    }
    }
}

const Product = (props: productProps) =>{

    const [desc, setDesc] = useState(false)
    function showDesc() {
        if(desc === false) {
            setDesc(true)
            console.log(desc)
        } else {
            setDesc(false)
            console.log(desc)
        }
    }
    return (
        <div className="text-white border py-4 px-12 w-1/3 flex flex-col items-center gap-10 font-custom">
            <img className="w-1/4" src={props.product.image} alt="" />
            <h1 className="text-center">{props.product.title}</h1>
            {desc && <p className="text-center">{props.product.description}</p>}
            <span className="text-bold pointer-events-none">{props.product.price} $</span>

            <button 
                onClick={showDesc}
                className="bg-lightRed-red px-6 text-2xl uppercase hover:scale-105 duration-200"> 
                View More
            </button>
            
        </div>
    )
}

export default Product