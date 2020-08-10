import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useRef } from 'react'
import { makeWidget } from '@typeform/embed'

export default function Home() {
  let typeformRef = useRef()
  useEffect(() => {
    if (typeformRef.current && typeof window !== undefined) {
      typeformEmbed.makeWidget(
        typeformRef.current,
        `https://bombinate.typeform.com/to/tPx1BQQm?productId=${brandOrder.products[0].sku.productID}&brand=${brandOrder.products[0].brand.name}`,
        {
          hideScrollbars: true,
        }
      )
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className="typeform" ref={typeformRef} />
    </div>
  )
}
