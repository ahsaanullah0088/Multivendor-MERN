import React, { useEffect } from 'react'
import Header from '../Components/Layout/Header'
import styles from '../styles/styles'
import { useSearchParams } from 'react-router-dom'
import { productData } from '../static/data'
import ProductCard from '../Components/Routes/ProductCard/ProductCard'

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categorydata = searchParams.get('category');
  const [data , setData] = React.useState([]);

  useEffect(() =>{
    if(categorydata === null){
      const d = productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(d);
    } else {
      const d = productData.filter((i) => i.category === categorydata);
      setData(d);
    }
  })
  return (
    <div>
      <Header/>
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {
            data && data.map((i, index)=> <ProductCard data={i} key={index}/>)
          }
        </div>
                  {
            data && data.length === 0 ?( <h1 className='text-center text-2xl font-semibold'>No Products Found</h1>
            ):null
          }
      </div>
    </div>
  )
}

export default ProductsPage
