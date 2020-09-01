import React,{Component} from 'react';
import axios from 'axios';
import imgBrands from '../img/brands/fishop-brands.png'

class About extends Component{
    state={
        contact:{},
    }
    componentDidMount(){
        try {
            //axios.get(`http://localhost:8000/store/${storeid}/`)
            axios.get(`http://localhost:3006/dummy/about.json`)
            .then(res => {
              const response = res.data;
              //this.setState({stores:response})
              this.setState({contact:response});
              //console.log(response);
            })
          } catch (error) {
            console.error(error);
          }
    }
    render(){
        return(
          <main className="main" role="main" className="about-pageXXX container mt-5">
                <h1>About Foreat</h1>

{/**/}
<p>{this.state.contact.description}</p>

                <p>Our brands :</p>
                <div className="about-brands-frame">
                    <img className="img-fluid" alt="" src={imgBrands} />
                </div>
            </main>
        )
    }
}

export default About;
