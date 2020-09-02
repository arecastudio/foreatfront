import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Slider from './Slider';

const Home=()=>{

  const [stores,setStores]=useState([]);
  const [news,setNews]=useState([]);
  const [slider,setSlider]=useState([]);
  const [servis,setServis]=useState([]);
  const [gallery,setGallery]=useState([]);
  const [contact,setContact]=useState([]);

  useEffect(()=>{


    try {
      //axios.get(`http://localhost:8000/store/${storeid}/`)
      axios.get(`http://localhost:3006/dummy/foreatcontact.json`)
      .then(res => {
        const response = res.data;
        //this.setState({stores:response})
        setContact(response);
        //console.log(response);
      })
    } catch (error) {
      console.error(error);
    }

    try {
      //axios.get(`http://localhost:8000/store/?query={id, slug, title, cover, isActive}`)
      axios.get(`http://localhost:3006/dummy/store.json`)
      .then(res => {
        const response = res.data;
        setStores(response);
        //console.log(response);
      })
    } catch (error) {
      console.error(error);
    }

    try {
      //axios.get(`http://localhost:8000/store/?query={id, slug, title, cover, isActive}`)
      axios.get(`http://localhost:3006/dummy/foreatservice.json`)
      .then(res => {
        const response = res.data;
        setServis(response);
        //console.log(response);
      })
    } catch (error) {
      console.error(error);
    }



    try {
      //axios.get(`http://localhost:8000/news/?query={id, slug, title, cover, created, isActive}`)
      axios.get(`http://localhost:3006/dummy/news.json`)
      .then(res => {
        const response = res.data;
        setNews(response);
        //console.log(response);
      })
    } catch (error) {
      console.error(error);
    }

    try {
      //axios.get(`http://localhost:8000/foreatgallery/`)
      axios.get(`http://localhost:3006/dummy/foreatgallery.json`)
      .then(res => {
        const response = res.data;
        setGallery(response);
        //console.log(response);
      })
    } catch (error) {
      console.error(error);
    }

  },[]);


    return(
        <div className="page-home">
          <Slider/>
{/*
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="assets/img/gallery/gallery-9.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="assets/img/gallery/gallery-10.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="assets/img/gallery/gallery-11.jpg" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
*/}

{/*
        <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">

          <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active"><a href="index.html">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#team">Team</a></li>
              <li className="drop-down"><a href="">Drop Down</a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="drop-down"><a href="#">Deep Drop Down</a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact</a></li>

            </ul>
          </nav>

        </div>
      </header>



*/}

{/*
  <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>Creating websites that make you stop & stare</h1>
          <h2>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum.</h2>
          <div><a href="#about" className="btn-get-started scrollto">Get Started</a></div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img">
          <img src="assets/img/hero-img.png" className="img-fluid" alt=""/>
        </div>
      </div>
    </div>

  </section>

<main id="main">

*/}




{/*
    <section id="about" className="about">
      <div className="container">

        <div className="row">
          <div className="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch">
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

            <div className="icon-box">
              <div className="icon"><i className="bx bx-fingerprint"></i></div>
              <h4 className="title"><a href="">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>

            <div className="icon-box">
              <div className="icon"><i className="bx bx-gift"></i></div>
              <h4 className="title"><a href="">Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>

            <div className="icon-box">
              <div className="icon"><i className="bx bx-atom"></i></div>
              <h4 className="title"><a href="">Dine Pad</a></h4>
              <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

          </div>
        </div>

      </div>
    </section>
*/}


{/*
    <section id="counts" className="counts">
      <div className="container">

        <div className="text-center title">
          <h3>What we have achieved so far</h3>
          <p>Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p>
        </div>

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">232</span>
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">521</span>
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">1,463</span>
            <p>Hours Of Support</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">15</span>
            <p>Hard Workers</p>
          </div>

        </div>

      </div>
    </section>
*/}


    <section id="clients" className="clients">
      <div className="container">

        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">


        {
          stores.map((data,x)=>{
            if(data.isActive==true){
              return(
                <a href={`/eat-drink/${data.slug}`} className="col-lg-3 col-md-4 col-6" title={data.title} key={x}>
                  <div className="client-logo">
                    <img src={data.cover} className="img-fluid" alt=""/>
                  </div>
                </a>
              )
            }

          })
        }

{/*
  <div className="col-lg-3 col-md-4 col-6">
    <div className="client-logo">
      <img src="assets/img/clients/logo-namasushi.png" className="img-fluid" alt=""/>
    </div>
  </div>

  <div className="col-lg-3 col-md-4 col-6">
    <div className="client-logo">
      <img src="assets/img/clients/logo-namasushi.png" className="img-fluid" alt=""/>
    </div>
  </div>

  <div className="col-lg-3 col-md-4 col-6">
    <div className="client-logo">
      <img src="assets/img/clients/logo-namasushi.png" className="img-fluid" alt=""/>
    </div>
  </div>

  <div className="col-lg-3 col-md-4 col-6">
    <div className="client-logo">
      <img src="assets/img/clients/logo-namasushi.png" className="img-fluid" alt=""/>
    </div>
  </div>
  */}


{/*
          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src="assets/img/clients/client-5.png" className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src="assets/img/clients/client-6.png" className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src="assets/img/clients/client-7.png" className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src="assets/img/clients/client-8.png" className="img-fluid" alt=""/>
            </div>
          </div>
*/}

        </div>

      </div>
    </section>


    <section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
        </div>

        <div className="row">

        {
          servis.map((data,x)=>{
            if(data.isActive==true){
              return(
                <div className="col-lg-4 col-md-6" key={x}>
                  <div className="icon-box">
                    <div className="icon"><i className="las la-paperclip" style={{color: '#ff689b'}}></i></div>
                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
                )
            }

          })
        }

{/*
          <div className="col-lg-4 col-md-6">
            <div className="icon-box">
              <div className="icon"><i className="las la-paperclip" style={{color: '#ff689b'}}></i></div>
              <h4 className="title"><a href="">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box">
              <div className="icon"><i className="las la-book" style={{color: '#e9bf06'}}></i></div>
              <h4 className="title"><a href="">Dolor Sitema</a></h4>
              <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-wow-delay="0.1s">
            <div className="icon-box">
              <div className="icon"><i className="las la-file-alt" style={{color: '#3fcdc7'}}></i></div>
              <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-wow-delay="0.1s">
            <div className="icon-box">
              <div className="icon"><i className="las la-tachometer-alt" style={{color:'#41cf2e'}}></i></div>
              <h4 className="title"><a href="">Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-wow-delay="0.2s">
            <div className="icon-box">
              <div className="icon"><i className="las la-globe-americas" style={{color: 'd6ff22'}}></i></div>
              <h4 className="title"><a href="">Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-wow-delay="0.2s">
            <div className="icon-box">
              <div className="icon"><i className="las la-clock" style={{color: '#4680ff'}}></i></div>
              <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
              <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>
*/}
        </div>

      </div>
    </section>


   {/*

   <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  */}


    <section id="testimonials" className="testimonials">
      <div className="container">

        <div className="owl-carousel testimonials-carousel">

          <div className="testimonial-item">
            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

        </div>

      </div>
    </section>


    <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title">
          <h2>News</h2>
          <p>Stay update with our product and info here</p>
        </div>

        <div className="row justify-content-center">

        {
          news.slice(0,3).map((data,x)=>{
            if(true==true){
              return(
                <a href={`/news/${data.slug}`} key={x} className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="member">
                    <div className="member-img text-center">
                      <img src={data.cover} className="img-fluid" alt=""/>
                      {/*
                      <div className="social">
                        <a href="/"><i className="icofont-twitter">&nbsp;</i></a>
                        <a href="/"><i className="icofont-facebook"></i></a>
                        <a href="/"><i className="icofont-instagram"></i></a>
                        <a href="/"><i className="icofont-linkedin"></i></a>
                      </div>
                      */}
                    </div>
                    <div className="member-info">
                      <h4>{data.title}</h4>
                      <p className="text-justify text-secondary">
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                      </p>
                    </div>
                  </div>
                </a>
              )
            }

          })
        }

{/*
  <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
    <div className="member">
      <div className="member-img">
        <img src="assets/img/gallery/web-namasushi.jpg" className="img-fluid" alt=""/>
        <div className="social">
          <a href=""><i className="icofont-twitter"></i></a>
          <a href=""><i className="icofont-facebook"></i></a>
          <a href=""><i className="icofont-instagram"></i></a>
          <a href=""><i className="icofont-linkedin"></i></a>
        </div>
      </div>
      <div className="member-info">
        <h4>Walter White</h4>
        <span>Chief Executive Officer</span>
      </div>
    </div>
  </div>

  <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
    <div className="member">
      <div className="member-img">
        <img src="assets/img/gallery/web-namasushi.jpg" className="img-fluid" alt=""/>
        <div className="social">
          <a href=""><i className="icofont-twitter"></i></a>
          <a href=""><i className="icofont-facebook"></i></a>
          <a href=""><i className="icofont-instagram"></i></a>
          <a href=""><i className="icofont-linkedin"></i></a>
        </div>
      </div>
      <div className="member-info">
        <h4>Walter White</h4>
        <span>Chief Executive Officer</span>
      </div>
    </div>
  </div>

  <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
    <div className="member">
      <div className="member-img">
        <img src="assets/img/gallery/web-namasushi.jpg" className="img-fluid" alt=""/>
        <div className="social">
          <a href=""><i className="icofont-twitter"></i></a>
          <a href=""><i className="icofont-facebook"></i></a>
          <a href=""><i className="icofont-instagram"></i></a>
          <a href=""><i className="icofont-linkedin"></i></a>
        </div>
      </div>
      <div className="member-info">
        <h4>Walter White</h4>
        <span>Chief Executive Officer</span>
      </div>
    </div>
  </div>
  */}


        </div>

      </div>
    </section>


    <section id="gallery" className="gallery">
      <div className="container">

        <div className="section-title">
          <h2>Gallery</h2>
          <p>Here some of our product update</p>
        </div>

        <div className="row no-gutters">


        {
          gallery.map((data,x)=>{
            if(true==true){
              return(
                <div className="col-lg-3 col-md-4" key={x}>
                  <div className="gallery-item">
                    <a href={data.picture} className="venobox" data-gall="gallery-item">
                      <img src={data.picture} alt="" className="img-fluid"/>
                    </a>
                  </div>
                </div>
              )
            }

          })
        }

{/*
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/web-namasushi.jpg" className="venobox" data-gall="gallery-item">
                <img src="assets/img/gallery/web-namasushi.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/web-rodin.jpg" className="venobox" data-gall="gallery-item">
                <img src="assets/img/gallery/web-rodin.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/web-sabumasha.jpg" className="venobox" data-gall="gallery-item">
                <img src="assets/img/gallery/web-shabumasa.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/web-sushimasa.jpg" className="venobox" data-gall="gallery-item">
                <img src="assets/img/gallery/web-sushimasa.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/web-namasushi.jpg" className="venobox" data-gall="gallery-item">
                <img src="assets/img/gallery/web-namasushi.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/web-rodin.jpg" className="venobox" data-gall="gallery-item">
                <img src="assets/img/gallery/web-rodin.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/web-sabumasha.jpg" className="venobox" data-gall="gallery-item">
                <img src="assets/img/gallery/web-shabumasa.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/web-sushimasa.jpg" className="venobox" data-gall="gallery-item">
                <img src="assets/img/gallery/web-sushimasa.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
*/}

        </div>

      </div>
    </section>


    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Please feel free to contact us by filling the form bellow</p>
        </div>

        <div>
          <iframe style={{border:'0', width: '100%', height: 270}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.2178856507176!2d106.7979965512223!3d-6.1013323955602905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dc953df9c91%3A0xf76033953c8acd11!2sSushi%20Masa!5e0!3m2!1sid!2sid!4v1598608142766!5m2!1sid!2sid" frameBorder="0" allowFullScreen></iframe>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Location</h4>
                <p>{contact.address}</p>
              </div>

              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email</h4>
                <p>{contact.email}</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call</h4>
                <p>{contact.phone}</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="__blank" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="button" className="btn btn-info">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>

 {/*
 </main>




  <a href="/" className="back-to-top"><i className="icofont-simple-up"></i></a>
*/}


        </div>
    )
}
export default Home;
