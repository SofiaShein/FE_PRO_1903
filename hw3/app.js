let currenciesBackup = [];

function renderCurrencies(currencies) {
    let htmlStr = ``;

    for( let currency of currencies) {
        htmlStr += ` <tr>
            <td>${currency.txt}</td>
            <td>${currency.cc}</td>
            <td>${currency.rate}</td>
            </tr>`;
    }
    document.querySelector('#currenсies-table tbody').innerHTML = htmlStr;
}

function filterCurrencies(rawValue) {
    const value = rawValue.toLowerCase().trim();
    let filteredCurrencies = [];
    for (let currency of currenciesBackup) {
        const currencyName = currency.txt?.toLowerCase().trim();
        const currencyCC = currency.cc?.toLowerCase().trim();
        if (currencyName.includes(value) || currencyCC.includes(value)) {
            filteredCurrencies.push(currency);
        }
    }
    renderCurrencies(filteredCurrencies);
}

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20240409&json')
    .then(function (response) {
        return response.json();
    }).then(function (currencies) {
        currenciesBackup = currencies;
        renderCurrencies(currencies);
    })

document.querySelector('.search-cuurencies').onkeyup = function(event) {
    const value = event.target.value;
    filterCurrencies(value);

}