import React,{Component} from 'react';
import imgBrands from '../img/brands/fishop-brands.png'

class About extends Component{
    render(){
        return(
          <main className="main" role="main" className="about-pageXXX container mt-5">
                <h1>About Foreat</h1>

                <p>
                Foreat is a high-end grocery store that specialises in selling seafood (fresh or frozen), meat, frozen food and other kinds of ingredients essential for cooking!
                </p>

                <p>
                Our brick-and-mortar store is located at the harbour of Muara Baru, Jakarta Utara. Specifically, on the first floor of a grey building that also houses many of our other establishments - Sushi Masa, Shabu Masa and Rodin Pâtisserie.
                </p>

                <p>
                We are very much looking forward to making our store and goods more available to those who don't live in the vicinity of our neighbourhood and thus this website was launched in late March 2020! At the same time, we are also always exploring the possibility of opening another Fishop store, so if you think your neighbourhood would welcome our presence drop us a message!
                </p>

                <p>Our brands :</p>
                <div className="about-brands-frame">
                    <img className="img-fluid" alt="" src={imgBrands} />
                </div>
            </main>
        )
    }
}

export default About;
