import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Footer=()=>{

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
  },[]);

    return(
        <footer id="footer">

    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>Enter you mail here to get more information about our new products</p>
            <form action="" method="post">
              <input type="email" name="email" /><input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Foreat</h3>
            <p>
            {contact.address}
            <br/><br/>
              <strong>Phone:</strong> {contact.phpne}<br/>
              <strong>Email:</strong> {contact.email}<br/>
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="social-links mt-3">
              <a href={contact.twitter} target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href={contact.facebook} target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href={contact.instagram} target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href={contact.phone} target="_blank" className="google-plus"><i className="bx bxl-whatsapp"></i></a>
              <a href={contact.linkedin} target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container py-4">
      <div className="copyright">
        &copy; Copyright <strong><span>Foreat@2020</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a>
      </div>
    </div>
  </footer>
    )
}
export default Footer;