import { useEffect, useState } from "react";
import Currency from "./Currency";
import Table from 'react-bootstrap/Table';

function Currencies() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(res => res.json())
      .then(data => {
        setCurrencies(data);
      });
  }, []);

  return <>
    <h1>Currencies</h1>
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>Name</th>
        <th>Code</th>
        <th>Rate</th>
      </tr>
      </thead>
      <tbody>
      {currencies.map(currency => <Currency currency={currency} key={currency.cc} />)}
      </tbody>
    </Table>
  </>
}

export default Currencies;