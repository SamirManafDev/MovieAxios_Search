let getId=window.location.search.slice(4)
//console.log(getId)

// axios.get(`https://api.tvmaze.com/shows/`+getId)
// .then(function (response) {
//     console.log(response.data);
//   })

let main=document.querySelector("main")
  axios.get(`https://api.tvmaze.com/shows/`+getId)
  .then(function (element) {
    main.innerHTML+=`
    <section class="about-us">
    <div class="about">
    <img class="card-img-top" style="width: 360px;height :480px;"src="${element.data.image.original}" alt="Card image cap">
      <div class="text">
        <h2>${element.data.name}</h2>
        <h5>Type:${element.data.type}</h5>
        <h5>County:${element.data.network.country.name}</h5>
        <h5>Language:${element.data.language}</h5>
        <h5>Genre:${element.data.genres}</h5>
        <h5>⭐:${element.data.rating?.average}</h5>
        <h5>Summary:${element.data.summary}</h5>
        
        <div class="data">
        <a href="${element.data.officialSite}" class="hire"><b>OfficialSite</b></a>
        </div>
      </div>
    </div>
  </section>
      `
      
    })

