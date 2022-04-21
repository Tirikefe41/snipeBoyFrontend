import Image from 'next/image'
import { useEffect, useState, useContext } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import snipelogo from '../assets/snipelogo.png'
import Web3 from 'web3'

const style = {
  wrapper: `p-4 w-screen flex justify-between items-center`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center`,
  navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `bg-[#20242A]`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}

// let window;

const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')
  const [connectWallet, setconnectWallet] = useState(false)
  const [web3, setWeb3] = useState(new Web3(null));
  const [web3Provider, setWeb3Provider] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  
  useEffect(() => {
    (async () => {
      if (window.ethereum.isMetaMask) {
        setWeb3Provider(window.ethereum)
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
  
          // if (window.ethereum.web3.eth.net.getId() != 1){
          //   await window.ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0x1'}]});
          // }
        } catch (error) {
          console.error("User denied account access, reason: " +error);
        }
        setWeb3(new Web3(web3Provider))
        setUserAddress(ethereum.selectedAddress)
      }
    })()
  }, [connectWallet])



  const walletconnect = function (){
    setconnectWallet(true)      
  } 

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={snipelogo} alt='uniswap' height={40} width={40} />
      </div>
      <div className={style.nav}>
        <div className={style.navItemsContainer}>
          <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Enter Snipe Parameters
          </div>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <Image src={snipelogo} alt='eth logo' height={20} width={20} />
          </div>
          <div onClick={() => walletconnect()} className={style.confirmButton}>          
            CONNECT
          </div>
            
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={`${style.buttonIconContainer} mx-2`}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header