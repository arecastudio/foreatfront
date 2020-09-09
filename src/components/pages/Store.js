import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import imgBanner from '../img/layout/sushi2.jpg';
import imgSalmon from '../img/layout/web-namasushi.jpg';

//import OwlCarousel from 'react-owl-carousel';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';

const Store=()=>{
    let dummy=[1,2,3,4,5,6];
    const {storeid}=useParams();
    const [data,setData]=useState({});
    const [promo,setPromo]=useState({});
    const [storepromo,setStorepromo]=useState([]);

    useEffect(()=>{

        try {
          axios.get(`http://dummy.foreat.co.id:8000/store/${storeid}/`)
          //axios.get(`http://localhost:3006/dummy/storeitem.json`)
          .then(res => {
            const response = res.data;
            //this.setState({stores:response})
            setData(response);
            //console.log(response);
            getStorepromo(response.id);
          })
        } catch (error) {
          console.error(error);
        }


    },[]);

    const getStorepromo=(x)=>{
      try {
        axios.get(`http://dummy.foreat.co.id:8000/storepromo`)
        //axios.get(`http://localhost:3006/dummy/storepromo.json`)
        .then(res => {
          const response = res.data;
          //this.setState({stores:response})
          let ret=response.filter(r=>r.storeid==x);
          ret=response;
          setStorepromo(ret);
          console.log(ret.length);
        })
      } catch (error) {
        console.error(error);
      }
    }

    const onPromo=(x)=>{
      console.log(`Promo clicked: ${x}`);
      setPromo(storepromo.find(el=>el.id==x));
    }

    const isStorePromo=()=>{
      if(storepromo.length>0){
        return (
          <div className="container" id="#store-promo-part">

          <h3>What you get</h3>
          <div className="row mx-0 justify-content-centerXXX bg-darkXXX align-item-stretch">
            {
                storepromo.map((x,i)=>{
                    return(
                      <div className="col-lg-4 p-3 mb-3 text-decoration-none" key={i} id={x.id}>

                          <div className="shadow rounded" data-toggle="modal" data-target="#exampleModal" style={{cursor:'pointer'}} onClick={()=>onPromo(x.id)}>
                            <div className="text-center">
                              <img className="img-fluid" alt="" src={x.picture}/>
                            </div>

                            <div className="p-3">
                              <h5 className="text-success">{x.title}</h5>
                            </div>
                            {/*<div className="p-3">
                              <p className="text-secondary">Every weekend</p>
                            </div>*/}
                          </div>
                      </div>
                    );
                })
            }
          </div>
      </div>
        );
      }else{
        return(
          <div className="py-3">&nbsp;</div>
        )
      }
    }

    return(
        <div className="store-page" id="topdiv">
          <div className="container-fluid px-0" style={{marginTop:-150,}}>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 store-banner img-bluring">
                &nbsp;
                </div>
              </div>
          </div>
            <div className="store-submenu"></div>
            <div className="container mt-4">

                <div className="store-desc">
                    <h3 className="text-uppercase">{data.title}</h3>
                    <div className="store-desc-address text-info"><i className="fas fa-map-marker-alt"></i>  {data.address}</div>
                    <p className="py-3 text-justify"><span dangerouslySetInnerHTML={{ __html: data.description }} /></p>
                </div>
            </div>


            {isStorePromo()}



            <div className="container" id="store-location-part">
                <h4>Location</h4>
                <iframe className="roundedXXX" title="21313dsdfsf" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6043.8084976707705!2d106.79800191572009!3d-6.101332395581961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dc953df9c91%3A0xf76033953c8acd11!2sSushi%20Masa!5e1!3m2!1sid!2sid!4v1596710537407!5m2!1sid!2sid" width="100%" height="300" frameBorder="0" style={{border:0,}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>



            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{promo.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="text-center">
                      <img src={promo.picture} className="img-fluid"/>
                    </div>
                    <div className="text-justify pt-3">
                      <div dangerouslySetInnerHTML={{ __html: promo.description }} />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    {/*<button type="button" className="btn btn-primary">Save changes</button>*/}
                  </div>
                </div>
              </div>
            </div>

        </div>
    )
}

export default Store;
