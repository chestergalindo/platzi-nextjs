import React from 'react'

const HomePage = () => {
  const [productList, setProductList] = React.useState<TProduct[]>([])

  React.useEffect(() => {
    fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data: productList }) => {
        setProductList(productList)
      })
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </div>
        )
      })}
    </div>
  )
}

export default HomePage
