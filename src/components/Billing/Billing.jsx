import React, { useEffect, useState } from 'react';
import './Billing.css';
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
import Select from 'react-select';

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

function Billing() {
  const [productsData, setProductsData] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [tableRows, setTableRows] = useState([]); // State to store table rows
  const [invoiceSubtotal, setInvoiceSubtotal] = useState(0); // State to store subtotal
  const [invoiceTaxes, setInvoiceTaxes] = useState(0); // State to store taxes
  const [invoiceTotal, setInvoiceTotal] = useState(0); // State to store total

  useEffect(() => {
    const fetchBillingData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://127.0.0.1:8000/shop_app/products/', {
          headers: {
            Authorization: `Token ${token}`
          }
        });
        console.log(response);
        setProductsData(response.data);
        setSelectedProducts(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchBillingData();
  }, []);

  const [isCash, setIsCash] = useState(false);
  const [isUpi, setIsUpi] = useState(false);
  const [isCard, setIsCard] = useState(false);

  const handleCash = () => {
    document.getElementById('cash').click();
    setIsCash(true);
    setIsUpi(false);
    setIsCard(false);
  };

  const handleUpi = () => {
    document.getElementById('upi').click();
    setIsUpi(true);
    setIsCash(false);
    setIsCard(false);
  };

  const handleCard = () => {
    document.getElementById('card').click();
    setIsCard(true);
    setIsUpi(false);
    setIsCash(false);
  };

  useEffect(() => {
    const transformedProducts = productsData.map(product => ({
      value: product.id,
      label: `${product.pro_company} - ${product.product_name}`,
      price: product.price // Include product price in the option
    }));
    setSelectedProducts(transformedProducts);
  }, [productsData]);

  const handleProductSelect = (selectedOptions) => {
    // Handle selection change
    console.log('Selected products:', selectedOptions);
    const selectedRows = selectedOptions.map(option =>
      createRow(option.label, 1, option.price)
    );
    const selectedSubtotal = subtotal(selectedRows);
    const selectedTaxes = DISCOUNT * selectedSubtotal;
    const selectedTotal = selectedSubtotal - selectedTaxes;

    // Update table rows and invoice totals
    setTableRows(selectedRows);
    setInvoiceSubtotal(selectedSubtotal);
    setInvoiceTaxes(selectedTaxes);
    setInvoiceTotal(selectedTotal);
  };

  return (
    <>
      {/* Shop details */}
      {/* Contact details */}
      {/* Product selection */}
      <div className='col-6 ms-5'>
        <Select
          isMulti
          name='colors'
          options={selectedProducts}
          className='basic-multi-select mt-3'
          classNamePrefix='select'
          placeholder='Select Products...'
          onChange={handleProductSelect}
        />
      </div>

      {/* Table for displaying selected products */}
      <TableContainer className='p-5 mt-3 ' component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='spanning table'>
          <TableHead>
            <TableRow>
              <TableCell align='center' colSpan={3}>
                Details
              </TableCell>
              <TableCell align='right'>Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Qty.</TableCell>
              <TableCell align='right'>Unit</TableCell>
              <TableCell align='right'>Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align='right'>{row.qty}</TableCell>
                <TableCell align='right'>{row.unit}</TableCell>
                <TableCell align='right'>{ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align='right'>{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Discount</TableCell>
              <TableCell align='right'>{`${(DISCOUNT * 100).toFixed(0)} %`}</TableCell>
              <TableCell align='right'>{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align='right'>{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Payment method selection */}
      {/* Payment component based on selected method */}
      <div className='p-4 d-flex justify-content-center'>
        <button className='btn btn-primary'>save</button>
      </div>
    </>
  );
}

export default Billing;
