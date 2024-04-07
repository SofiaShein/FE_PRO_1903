fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(function(countries) {
    console.log(countries);

    var countriesHtml = '';
    var totalPopulation = 0;
    var totalArea = 0;
  

    for (var index in countries) {
      var country = countries[index];

      countriesHtml += `<tr>
      <td>${ +index + 1 }</td>
      <td>${ country.name.official }</td>
      <td>${ country.population }</td>
      <td>${ country.region }</td>
      <td>${ country.area }</td>
      <td><img class="flag-size" src="${ country.flags.png }" alt="${ country.name.common }"></td>
      </tr>`;
      
      totalPopulation += country.population || 0;
      totalArea += country.area || 0;
    }

    countriesHtml += `<td class="fw-bold" colspan="2">Total</td>
      <td>${ totalPopulation.toFixed(0) }</td>
      <td></td>
      <td>${ totalArea.toFixed(0) }</td>
      <td></td>`;
    document.querySelector('#countries-table tbody').innerHTML = countriesHtml;
  })
