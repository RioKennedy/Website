const APIKEY = 'pub_60107391a893e3ed2a5cdec7e656d2a0a38ea';

const get_element_button = document.getElementById('tombol-goto');
const get_title_elements = document.getElementById('new-title').innerHTML.split(" ");
const get_title_element = get_title_elements[get_title_elements.length - 1];




// for (let i of get_element_button) {
//     console.log(i);
// get_element_button.addEventListener("click", () => {
// $.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${APIKEY}`, function(data, status){
//     alert("Data: " + data + "\nStatus: " + status);
//   });




$(document).ready(function () {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: `https://newsdata.io/api/1/latest?apikey=${APIKEY}&qInTitle="${get_title_element}"&category=technology`,

        success: function (data) {

            let htmlCardContent = "";
            for (let i = 0; i < data["results"].length; i++) {
                addCard = `
                        
          <div class="col-4 mt-5">
            <div class="card h-100 bg-white rounded" style="opacity:0.85">
              <img src="${data["results"][i]["image_url"] == null ? "images/new-project.jpg" : data["results"][i]["image_url"]}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${data["results"][i]["title"]}</h5>
                <p class="card-text">${descriptionFunction(data,i)}  
                </p>
                <a href="newspage.html?article_id=${data["results"][i]["article_id"]}&title=${get_title_element}" class="btn btn-primary" id="tombol-goto">Look For News</a>
              </div>
            </div>
          </div>
           `
                htmlCardContent += addCard;

            }

            document.getElementById("new-container").innerHTML = htmlCardContent;







            // console.log(data["results"][0]);
        },
        error: function (error) {
            console.log(error);
        }

    });
});




// });
// };

function descriptionFunction (data, index){
    let isi = "";
    if (data["results"][index]["description"] == null) {
        isi = "No Description";
        return isi;
    }
    if ((data["results"][index]["description"].length) > 100) {
        isi = data["results"][index]["description"].substring(100, 0) + "[..]";
        return isi;
    }
    else {
        isi = data["results"][index]["description"];
        return isi;
    }
}
