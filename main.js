element = document.querySelector('#ResidentButton').addEventListener('click', function() {
    console.log(this.innerHTML)
    getDetail();
})

function getDetail() {
    var apiURL = "https://swapi.dev/api/planets/?search=Alderaan";
    axios.get(apiURL).then(function(response) {
      showDetail(response.data);
    });
  }

  function showDetail(data) {
    for (i = 0; i < data.results.length; i++) {
      for (let j = 0; j < data.results[i].residents.length; j++) {
          const element = data.results[i].residents[j];   
          axios.get(element).then(function(response) {
              console.log(response.data.name);
          });
      }
    }
  }