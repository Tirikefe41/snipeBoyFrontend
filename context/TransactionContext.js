import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'

export const TransactionContext = React.createContext()



export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  
  

  const handleChange = (e, name) => {
    setFormData(prevState => ({ ...prevState, [name]: e.target.value }))
  }

 

  /**
   * Executes a transaction
   * @param {*} metamask Injected MetaMask code from the browser
   * @param {string} currentAccount Current user's address
   */
  const snipeNFT = async (formData
  ) => {
    try {
      const { mintDateTime, executeData, ContractAddress,
        MintPrice,  Network, keyIndex, quantity} = formData

      // const parsedAmount = ethers.utils.parseEther(amount)

      // await metamask.request({
      //   method: 'eth_sendTransaction',
      //   params: [
      //     {
      //       from: connectedAccount,
      //       to: addressTo,
      //       gas: '0x7EF40', // 520000 Gwei
      //       value: parsedAmount._hex,
      //     },
      //   ],
      // })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <TransactionContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        snipeNFT
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}