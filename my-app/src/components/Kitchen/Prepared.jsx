function Prepared({ order }) {
  const productValue = Object.values(order)
  const products = productValue[2]

  let productData = []
  products.forEach((element) => {
    productData.push(
      <p className="product-qtys" key={element.product.id}>
        ({element.quantity}) {element.name}
      </p>
    )
  })

  const prepatationTime = (
    (order.dataProcessedMil - order.dataEntryMil) /
    60000
  ).toFixed()

  return (
    <>
      <tr>
        <td>
          <div className="container-order-prepared">
            <div className="order-colum">
              <div className="seccion-order">
                <h1 className="number-table"> Table: {order.table}</h1>
                <div className="box-cout-product">{productData}</div>
              </div>
            </div>
            <div className="order-colum">
              <div className="mgs-Box">
                <h1 className="mgs-preparation-time">
                  Preparation time: {prepatationTime}min
                </h1>
                <h2 className="mgs-delivered">
                  Delivered: {order.dataProcessedStr}{' '}
                </h2>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}

export default Prepared
