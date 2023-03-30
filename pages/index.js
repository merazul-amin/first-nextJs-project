
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Link href={'/blog'}>Blog</Link>

      {/* <Image src={'/newphoto.jpg'} width={400} height={400} alt='Some image'></Image> */}

      {/* <button className="btn btn-primary text-4xl">Button</button> */}

    </>
  )
}
