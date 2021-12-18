import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Result from '../components/Result'
import request from '../util/request'

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header/>
    <Navigation/>
    <Result result={data}/>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  let data = {}
  let keyword = context.query.genre
  const url = request[keyword]?.url || request.fetchTrending.url
  try{
      const response = await axios.get(url)
      data = response.data
  }catch(e){
    console.log(url)
      return{
          notFound: true
      }
  }
  return {
      props:{
          data
      }
  }
}

