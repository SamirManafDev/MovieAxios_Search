const won = document.getElementsByClassName("row footer")[0]
const input=document.getElementsByClassName("cus-input")[0]
const btn=document.getElementsByClassName("cus-btn")[0]

btn.onclick=function(){

  axios.get("https://api.tvmaze.com/search/shows?q="+input.value)
  .then(function(find){
      won.innerHTML=""
      find.data.forEach(element =>{
        won.innerHTML+=`
        <div class="col-3 p-4">
        <div class="card" style="width: 240px;height :550px;background-color:transparent;">
        <img class="card-img-top" style="width: 240px;height :320px;"src="${element.show.image?.medium}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${element.show.name}</h5>
        <p class="card-text">Language:${element.show.language}</p>
        <p class="card-num">Type:${element.show.type}</p>
        <p class="card-text">Genre:${element.show.genres}</p>
        <p >⭐${element.show.rating?.average}</p>
        <a href="${element.show.url}" class="btn btn-primary">Movie</a>
  
  
  
  
        <a href="details.html?id=${element.show.id}" class="btn btn-primary addMore">More</a>
        </div>
        </div>
        </div>
        `
      })
    })
  }
//------------------AJAX------------------
// $.ajax({
//     method:"GET",
//     url:"https://api.tvmaze.com/search/shows?q="+input.value
//   }).done((data)=>{
//     won.innerHTML=""
//     data.forEach(element =>{
//       won.innerHTML+=`
//       <div class="col-3 p-4">
//       <div class="card" style="width: 240px;height :550px;background-color:transparent;">
//       <img class="card-img-top" style="width: 240px;height :320px;"src="${element.show.image?.medium}" alt="Card image cap">
//       <div class="card-body">
//       <h5 class="card-title">${element.show.name}</h5>
//       <p class="card-text">Language:${element.show.language}</p>
//       <p class="card-num">Type:${element.show.type}</p>
//       <p class="card-text">Genre:${element.show.genres}</p>
//       <p >⭐${element.show.rating?.average}</p>
//       <a href="${element.show.url}" class="btn btn-primary">Movie</a>




//       <a href="details.html?id=${element.show.id}" class="btn btn-primary addMore">More</a>
//       </div>
//       </div>
//       </div>
//       `
//     })
//   })
// }



// const body=document.querySelector("row")
fetch("https://api.tvmaze.com/show")
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
      won.innerHTML += `
      <div class="col-3 p-4">
      <div class="card" style="width: 240px;height :550px;background-color:transparent;">
      <img class="card-img-top" style="width: 240px;height :320px;"src="${element.image.medium}" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">Language:${element.language}</p>
      <p class="card-num">Type:${element.type}</p>
      <p class="card-text">Genre:${element.genres}</p>
      <p >⭐${element.rating?.average}</p>
      <a href="${element.url}" class="btn btn-primary">Movie</a>




      <a href="details.html?id=${element.id}" class="btn btn-primary addMore">More</a>
      </div>
      </div>
      </div>
      `
    })
  })




let buttons = document.querySelectorAll('.nav-active');
buttons.forEach(button => {
  button.addEventListener('click', function () {
    buttons.forEach(btn => btn.classList.remove('active-class'));
    this.classList.add('active-class');
  });
});
