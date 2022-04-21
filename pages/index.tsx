import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#C8E7F5] text-white select-none flex flex-col justify-between`,
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>  
    <Header />
    <Main />
    {/* <h2>TransactionHistory</h2>   */}
    </div>
  )
}

export default Home
