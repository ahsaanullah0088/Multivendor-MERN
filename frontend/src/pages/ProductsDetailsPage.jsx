import React, { useEffect } from 'react'
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer'
import ProductDetails from '../Components/ProductDetails/ProductDetails.jsx'
import { productData } from '../static/data.jsx'

const ProductsDetailsPage = () => {
        const {name} = useParams();
    const [data, setData] = React.useState(null);
    const productName = name.replace(/-/g, " ");

    useEffect(() => {
        const data = productData.find((i)=> i.name === productName);
        setData(data);
    },[])
  return (
    <div>
        <Header/>
        <ProductDetails/>
        <Footer/>
    </div>
  )
}

export default ProductsDetailsPage
