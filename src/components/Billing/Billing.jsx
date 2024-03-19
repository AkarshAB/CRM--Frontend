import React, { useEffect, useState } from 'react'
import './Billing.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Cash from './Cash.jsx';
import UPI from './UPI.jsx';
import Card from './Card.jsx';

const DISCOUNT = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {



  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.22),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = DISCOUNT * invoiceSubtotal;
const invoiceTotal = invoiceSubtotal - invoiceTaxes;
function Billing() {
  const [billingData, setBillingData] = useState([])


  useEffect(() => {
    const fetchBillingData = async () => {
      const token = localStorage.getItem('token')
      try {
        const response = await axios.get('',
          {
            headers: {
              Authorization: `Token ${token}`
            }
          })
        console.log(response);
        setBillingData(response.data)
      }

      catch (error) {
        console.log('Error:', error);
      }
    }
    fetchBillingData();
  }, [])

  const [isCash, setIsCash] = useState(false)
  const [isUpi, setIsUpi] = useState(false)
  const [isCard, setIsCard] = useState(false)



  const handleCash = () => {
    document.getElementById('cash').click()
    const cash = document.getElementById('cashDiv')
    const upi = document.getElementById('upiDiv')
    const card = document.getElementById('cardDiv')


    cash.style.backgroundColor = 'lightblue'
    upi.style.backgroundColor = ''
    card.style.backgroundColor = ''


    setIsCash(true)
    setIsUpi(false)
    setIsCard(false)
  }



  const handleUpi = () => {
    document.getElementById('upi').click()

    const cash = document.getElementById('cashDiv')
    const upi = document.getElementById('upiDiv')
    const card = document.getElementById('cardDiv')


    cash.style.backgroundColor = ''
    upi.style.backgroundColor = 'lightblue'
    card.style.backgroundColor = ''
    setIsUpi(true)
    setIsCash(false)
    setIsCard(false)

  }


  const handleCard = () => {
    document.getElementById('card').click()

    const cash = document.getElementById('cashDiv')
    const upi = document.getElementById('upiDiv')
    const card = document.getElementById('cardDiv')


    cash.style.backgroundColor = ''
    upi.style.backgroundColor = ''
    card.style.backgroundColor = 'lightblue'
    setIsCard(true)
    setIsUpi(false)
    setIsCash(false)


  }





  return (
    <>
      <div className='container-fluid ms-5'>
        <p>Name : </p>
        <p>Contact : </p>

      </div>
      <TableContainer className='p-5 ' component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Discount</TableCell>
              <TableCell align="right">{`${(DISCOUNT * 100).toFixed(0)} %`}</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div className="payment m-5 text-center">
        <h3 className='mb-4'>Payment Method</h3>
        <div className='paymentMethods'>
          <div className="paymentCash" onClick={handleCash} id='cashDiv'>
            <input type="radio" name="paymentMethod" id="cash" required />
            <label htmlFor="cash" className='ms-3'>Cash</label>
          </div>
          <div className="paymentUpi" onClick={handleUpi} id='upiDiv'>
            <input type="radio" name="paymentMethod" id="upi" required />
            <label htmlFor="upi" className='ms-3'>UPI</label>
          </div>
          <div className="paymentCard" onClick={handleCard} id='cardDiv'>
            <input type="radio" name="paymentMethod" id="card" required />
            <label htmlFor="card" className='ms-3'>Card</label>
          </div>

        </div>
      </div>
      {
        isCash ? <Cash /> : ''
      }
      {
        isUpi ? <UPI /> : ''
      }
      {
        isCard ? <Card /> : ''
      }
    </>
  )
}

export default Billing