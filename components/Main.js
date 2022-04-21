import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import walletlogo from '../assets/wallet-connect.png'
import { useContext, useState } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import Modal from 'react-modal'

// import axios from 'axios'

const style = {
  wrapper: `w-screen flex items-center justify-center mt-14`,
  content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
  transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-center `,
  transferPropInput: `bg-transparent justify-center placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
  currencySelector: `flex w-full`,
  mintDateInput: `#FFFFFF`,
  currencySelectorContent: `w-full h-min flex justify-center items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  confirmButton: `bg-[#E75480] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
}

const color = `#FFFFFF`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}

const Main = () => {
  const [_mintDateTime, setmintDateTime] = useState(
    new Date('2022-04-01T00:00:00.000Z'), );

  const [formData, setFormData] = useState({  
    mintDateTime: '',
    executeData: '',
    ContractAddress: '',
    MintPrice: '',
    Network: 0,
    keyIndex: '',
    quantity: ''
  })

  const handleSubmit = async (e) => {

    formData.Network = 5
    formData.mintDateTime = _mintDateTime

    // console.log(`Current DataField: ${Object.keys(formData).forEach((prop)=> console.log(formData[prop]))}`)
    try{
      fetch('https://snipeboybackend.herokuapp.com/snipenow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
    }catch(err){
      alert(`Fetch error: ${err}`)
    }
    
    e.preventDefault()

  }
  // const handlePreTx = async(e) => {
  //   const signature = await ethereum.request({ method: 'personal_sign', params: [ message, account ] });
  // }

  const handleChange = (e, name) => {
    // const {name, value} = e.target
    setFormData(prevState => ({ ...prevState, [name]: e.target.value }))
  }

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>SnipeBOY</div>
          <div>
            <RiSettings3Fill />
          </div>
        </div>
        <div className={style.transferPropContainer}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props}
                
                sx={{
                  
                  input: { color },
                  label: { color },
                  svg :{color},
                  alignContent:"flex-start",
                  textAlign:"start"
                }}
                />}
                label="mint Date and Time"
                value={_mintDateTime}
                onChange={(newValue) => {
                  setmintDateTime(newValue);
                }}
                />
            </LocalizationProvider>
          
        </div>
        <div className={style.transferPropContainer}>
        <input
            type='text'
            className={style.transferPropInput}
            placeholder='Mint Data(HEX): 0x1249c58b'
            pattern='^[0-9]*[.,]?[0-9]*[a-z]$'
            onChange={e => handleChange(e, 'executeData')}
          />
        </div>
        <div className={style.transferPropContainer}>
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='Contract Address'
            pattern='^[0-9]*[.,]?[0-9]*[a-z]$'
            onChange={e => handleChange(e, 'ContractAddress')}
          />
        </div>
        <div className={style.transferPropContainer}>
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='MintPrice: 0.03'
            pattern='^[0-9]*[.,]?[0-9]*$'
            onChange={e => handleChange(e, 'MintPrice')}
          />
        </div>
        <div className={style.transferPropContainer}>
        <div className={style.currencySelector}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                <Image src={walletlogo} alt='eth logo' height={20} width={20} />
              </div>
              <div className={style.currencySelectorTicker}>Select Wallet</div>
              <AiOutlineDown className={style.currencySelectorArrow} />
            </div>
          </div>
        </div>
        <div onClick={e => handleSubmit(e)} className={style.confirmButton}>
          SNIPE
        </div>
        <div  className={style.confirmButton}>
          PRESIGN TX
        </div>
      </div>
    </div>
  )
}

export default Main