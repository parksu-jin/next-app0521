
import CaseList from "@/components/CaseList";
import Layout from "@/components/Layout";
import Head from "next/head";



export default function Home({cast}) {
  return (
    <Layout>
      <Head>
       <title>title main</title>
      </Head>
      <main>
        <h1>cast member</h1>
        <CaseList cast={cast} />
      </main>
    </Layout>
  )
}

// async / getStaticProps 사용
export async function getStaticProps(){
  const str = await fetch('https://next-practice0520.s3.ap-northeast-2.amazonaws.com/data.json');
  const data = await str.json();
   return{
    props:{
      cast:data
    }
   }
}