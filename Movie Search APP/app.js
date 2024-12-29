let input = document.querySelector("input");
let btn = document.querySelector("button");
let showlist = document.querySelector(".results");

btn.addEventListener("click", function () {
  let searchData = input.value;
  fetchData(searchData);
  input.value = ""; // clear input but don't hide it
});

function fetchData(searchData) {
  // Clear previous results
  while(showlist.firstChild){
    showlist.firstChild.remove();
  }

  axios
    .get(`https://api.tvmaze.com/search/shows?q=${searchData}`)
    .then(function (res) {
      manipulateData(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function manipulateData(fetchData){
  for(let data of fetchData){
    let show = document.createElement('span');
    show.setAttribute('class', 'result-item')
    show.innerHTML = `
    <img src="${data.show.image.original}" alt="${data.show.name}">
    <h2>${data.show.name}</h2>
    <p><strong>Id</strong> : ${data.show.id}</p>
    <p><strong>Language</strong> : ${data.show.language}</p>
    <p><strong>Rating</strong> : ${data.show.rating.average}</p>
    `;
    showlist.append(show);
  }
}
