// import axios from 'axios';

// export const fetchCountries = name => {
//   return axios
//     .get(`https://restcountries.eu/rest/v2/name/${name}`)
//     .then(r => r.data)
//     .catch(error =>
//       console.log('Упс, что-то пошло не так. Корректно введите запрос'),
//     );
// };

export default function fetchCountries(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(data => {
      if (name) {
        return data;
      } else {
        return;
      }
    })

    .catch(error => {
      if (name !== '') {
        console.log(
          alert('Упс, что-то пошло не так. Корректно введите запрос'),
        );
      }
    });
}

// function fetchCountries(searchQuery) {
//   const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

//   return fetch(url)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//     })
//     .catch(error => {
//       alert('Упс, что-то пошло не так. Корректно введите запрос');
//     });
// }
