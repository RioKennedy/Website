var styles = `
    
    @media (min-width: 992px) {
    .dropdown-menu {
            display: none;
            position: absolute;
            background-color: #f1f1f1;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
        }

        .dropdown-menu a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }

      .dropdown:hover .dropdown-menu{
        display: block;
      }

}

  @media (max-width:992px){
    .build-center{
      text-align:center;
    }
  }

  body{
    padding-top:57px;
  }


`

var styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);


let get_nav_layout_element = document.getElementById('nav-layout');

get_nav_layout_element.innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid justify-content-lg-center mx-auto">
        <a class="navbar-brand text-danger" href="index.html">
        <img src="logo/logo1.png" width="30" height="30" class="d-inline-block align-top" alt="">
        </a>
        <button class="navbar-toggler ml-20" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul class="navbar-nav text-center">
            <li class="nav-item mx-5">
              <a class="nav-link fw-bold" onmouseover="this.style.textDecoration='underline';" onmouseout="this.style.textDecoration='none';" aria-current="page" href="index.html"><object data="logo/home.svg" width="15" height="15"></object>Home</a>
            </li>
            <li class="nav-item dropdown mx-5 my-auto" >
                <a class="nav-link btn dropdown-toggle bg-transparent border-0 fw-bold" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" onmouseover="this.style.textDecoration='underline';" onmouseout="this.style.textDecoration='none';">
                  <object data="logo/news.svg" width="15" height="15"></object> News
                </a>
                <div class="dropdown-menu bg-dark bg-gradient bg-opacity-75 border-0 w-25 mx-auto" aria-labelledby="dropdownMenuLink" >
                  <a class="dropdown-item bg-transparent build-center text-white" href="news.html?title=laptop" onmouseover="this.style.textDecoration='underline';" onmouseout="this.style.textDecoration='none';"><object data="logo/laptop.svg" width="15" height="15"></object> Laptop</a>
                  <a class="dropdown-item bg-transparent build-center text-white" href="news.html?title=smartphone" onmouseover="this.style.textDecoration='underline';" onmouseout="this.style.textDecoration='none';"><object data="logo/handphone.svg" width="15" height="15"></object> Smartphone</a>
                  <a class="dropdown-item bg-transparent build-center text-white" href="news.html?title=headset" onmouseover="this.style.textDecoration='underline';" onmouseout="this.style.textDecoration='none';"><object data="logo/headset.svg" width="15" height="15"></object> Headset</a>
                  <a class="dropdown-item bg-transparent build-center text-white" href="news.html?title=speaker" onmouseover="this.style.textDecoration='underline';" onmouseout="this.style.textDecoration='none';"><object data="logo/speaker.svg" width="15" height="15"></object> Speaker</a>

                </div>
            </li>
            <li class="nav-item mx-5">
              <a class="nav-link fw-bold" onmouseover="this.style.textDecoration='underline';" onmouseout="this.style.textDecoration='none';" href="product.html" tabindex="-1" ><object data="logo/product.svg" width="15" height="15"></object>Product</a>
            </li>
            <li class="nav-item mx-5">
              <a class="nav-link fw-bold" onmouseover="this.style.textDecoration='underline';" onmouseout="this.style.textDecoration='none';" href="about.html"><object data="logo/about.svg" width="15" height="15"></object>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
`;


const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
        link.classList.add('text-primary')
    }
});



{/* <a class="nav-link fw-bold" onmouseover="this.style.textDecoration='underline';" onmouseout="this.style.textDecoration='none';" id="new_nav" href="index.html#new_focus"><object data="logo/news.svg" width="15" height="15"></object>News</a> */}

