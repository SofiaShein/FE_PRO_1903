console.log(countries);

var selectedCountryName = prompt("Enter Country Name").toLowerCase().trim();

var countriesHtml = '';
var regionsHtml = '';
var sameRegions = [];

function toFindCountry(countryName) {
    var foundCountry = countries.find(country => country.name.official.toLowerCase() === selectedCountryName);

    if (foundCountry) {

        countriesHtml += `<tr>
      <td>${ foundCountry.population }</td>
      <td>${ foundCountry.area }</td>
      <td>${ foundCountry.region }</td>
      <td><img class="flag-size" src="${ foundCountry.flags.png }" alt="${ foundCountry.name.common }"></td>
      </tr>`;
} else {
    console.log("Country not found");

}
        return foundCountry; 
}

var selectedCountry = toFindCountry(selectedCountryName);

function toAddSameRegion() {
    for (var countryRegion of countries) {

        if (countryRegion.region === selectedCountry.region) {
            regionsHtml += `<tr>
      <td>${countryRegion.name.official}</td>
      <td>${countryRegion.area}</td>
      <td>${countryRegion.population}</td>
      <td><img class="flag-size" src="${countryRegion.flags.png}" alt="${countryRegion.name.common}"></td>
      </tr>`;
        
            sameRegions.push(countryRegion);
        }
        else {
            null;
        }
    }
    console.log(sameRegions);
}

toAddSameRegion();

document.getElementById('same-region-title').innerHTML = "Also in " + selectedCountry.region + ":";
document.getElementById('same-region-countries').innerHTML = regionsHtml;
document.getElementById('selected-country-title').innerHTML = "Selected Country: " + selectedCountryName.toUpperCase();
document.querySelector('#selected-country-data tbody').innerHTML = countriesHtml;

/**
 * сразу по загрузке страницы попросит ввести название страны.
 * далее в selectedCountryName и будет храниться это название
 * при этом, вся таблица (массив Array) стран хранится в переменной countries
 *
 * ДЗ:
 * необходимо:
 * 1. найти данные страны по введенному названию страны (необходимую страну из массива countries по selectedCountryName).
 * полученный объект выдать в консоль
 * 2. также из полученного объекта составить верстку с использованием данных из предыдущей домашки
 * (название страны, population, area, region, flag)
 * верстка может быть в формате таблицы, div, ul или любой другой удобный формат.
 * в html файле я добавил div с id="selected-country-data", можно использовать его для
 * document.getElementById().
 *
 * 2. в index.html есть h2 c id="selected-country-title".
 * там нужно вставить текст: Selected Country <название, которое ввел пользователь через prompt>
 * (например, текст будет "Selected Country: Ukraine")
 *
 * 3. найти из countries информацию по всем странам в этом же регионе
 * (поле region у них будет такое же, как и в уже выбранной стране)
 * сформировать из этих данных массив и отобразить в таблице
 * для этого я создал в index.html таблицу с tbody id="same-region-countries", можно использовать его.
 *
 * 4. схоже с пунктом #2. в элемент id="same-region-title" нужно вставить текст
 * Also in <тут название региона>:
 * (например, Also in Europe:)
 *
 *  5. поиск страны должен быть гибким.
 *  если пользователь введет название страны: Ukraine, UKRAINE, ukraine, uKrAiNe - такая страна должна успешно найтись
 *  если пользователь ввел неправильное или неполное название -
 *  показываем сообщение о том, что такая страна не найдена, в консоль.
 */