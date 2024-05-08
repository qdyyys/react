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
    const btnBgClassName = desc ? 'bg-blue-600' : 'bg-lightRed-red'
    const btnClasses = ['text-white', 'px-6', 'text-2xl', 'uppercase', 'hover:scale-105', 'duration-200', btnBgClassName]


    fetch('https://test.orix.test.orbitvpn.dev/api/signin/app', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "grant_type": "client_credentials",
    "client_id": "admin",
    "client_secret": "admin"
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

    function showDesc() {
        if(desc === false) {
            setDesc(true)
        } else {
            setDesc(false)
        }
    }
    return (
        <div id="products" className="text-black border border-black bg-slate-500 bg-opacity-15 rounded-3xl py-4 px-12 w-1/3 flex flex-col items-center gap-10 font-custom">
            <img className="w-1/4" src={props.product.image} alt="" />
            <h1 className="text-center text-2xl">{props.product.title}</h1>
            {desc && <p className="text-center">{props.product.description}</p>}
            <span className="text-bold pointer-events-none">{props.product.price} $</span>

            <button 
                onClick={showDesc}
                className={btnClasses.join(' ')}> 
                {desc ? 'hide' : 'show'}
            </button>
            
        </div>
    )
}

export default Product