import React from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter()
  const [product, setProduct] = React.useState<TProduct>()

  React.useEffect(() => {
    setTimeout(() => {
      window.fetch(`/api/avo/${id}`).then(console.log)
      // .then((response) => response.json())
      // .then((product) => {
      //   setProduct(product)
      // })
    }, 1000)
  }, [])

  return (
    <section>
      <h1>Página producto: {id}</h1>
      <div>
        <h1>{product?.name}</h1>
        <p>{product?.price}</p>
      </div>
    </section>
  )
}

export default ProductPage
