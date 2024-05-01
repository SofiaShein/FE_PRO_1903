let currenciesBackup = [];

function renderCurrencies(currencies = []) {
  let currenciesHtml = '';
  for (let currency of currencies) {
    currenciesHtml += `<tr>
      <td>${currency.txt}</td>
      <td>${currency.cc}</td>
      <td>${currency.rate.toFixed(2)}</td>
    </tr>`;
  }
  document.querySelector('.currencies-table tbody').innerHTML = currenciesHtml;
  document.querySelector('.currencies-table tbody').onclick = function (event) {
    event.target.classList.toggle('bg-warning');
    event.stopPropagation();
  }
}

document.querySelector('a').onclick = event => event.stopPropagation();

function filterCurrencies(rawValue = '') {
  const value = rawValue.trim().toLowerCase();
  const filteredCurrencies = [];
  for (let currency of currenciesBackup) {
    const { txt: currencyName, cc: currencyCode } = currency;
    if(currencyName.toLowerCase().includes(value) || currencyCode.toLowerCase().includes(value)) {
      filteredCurrencies.push(currency);
    }
  }
  renderCurrencies(filteredCurrencies);
}

function getCurrencies(date) {
  fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${ date }&json`)
    .then(res => res.json())
    .then((currencies = []) => {
      currenciesBackup = currencies;
      renderCurrencies(currencies);
    })
}

document.querySelector('.search-currencies').onkeyup = function(event) {
  const value = event.target.value;
  filterCurrencies(value);
};

document.querySelector('.select-date').onchange = function(event) {
  const value = event.target.value;
  document.querySelector('.search-currencies').value = '';
  getCurrencies(value.replaceAll('-', ''));
}

window.onload = function() {
  const currentDate = moment().format('YYYY-MM-DD');
  document.querySelector('.select-date').value = currentDate;
  getCurrencies(currentDate.replaceAll('-', ''));
}

