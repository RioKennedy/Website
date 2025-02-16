const APIKEY = 'pub_60107391a893e3ed2a5cdec7e656d2a0a38ea';


const urlParams = new URLSearchParams(window.location.search);
const article_id = urlParams.get('article_id');
const title = urlParams.get('title');
console.log(typeof(article_id));

const get_container_newspage = document.getElementById("container-newspage");


$(document).ready(function () {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: `https://newsdata.io/api/1/latest?apikey=${APIKEY}&id=${article_id}`,

        success: function (data) {
            console.log(data);
            get_container_newspage.innerHTML = `
                <div class="container my-5">
        <div class="col-12 newsbox mb-5">
          <h6>NEWS</h6>
        </div>
        <div class="col-md-10 col-sm-10 col-12 mx-auto">
          <h2 class="mb-3">${data["results"][0]["title"]}</h2>
          <div class="text-end mb-3 news-time">發佈時間： ${data["results"][0]["pubDate"].split(" ")[0]}</div>
          <img src=${data["results"][0]["image_url"] == null ? "images/new-project.jpg" : data["results"][0]["image_url"]} class="card-img-top" alt="...">
          <p class="mt-3 mb-5">${data["results"][0]["description"]}</p>
          <a href="news.html?title=${title}" class="backbtn">Back</a>
        </div>
      </div>
            `
        },
        error: function (error) {
            console.log(error);
        }

    });
});