import Head from "next/head"
import { FC } from "react"
import Navbar from "../ui/Navbar";

type Props = { 
    children?: React.ReactNode | undefined;
    title?: string;
}

export const Layout: FC<Props>= ({children,title}) => {
  return (
    <>
    <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Gaston Corimayo"/>
        <meta name="description" content={`Informacion sobre el pokemon ${title}`}/>
        <meta name="keywords" content={`${title}, pokemon , pokede`}/>
    </Head>
      {/* Navbar */}
      <Navbar></Navbar>
      <main style={{ 
        padding:'0px 20px'
       }}>
        {children}
      </main>
    </>
  )
}

  
