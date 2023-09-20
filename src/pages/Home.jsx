import Header from "../components/header/header";
import heroLogo from '../assets/hero.png'
import img5 from '../assets/image5.png'
import img6 from '../assets/image6.png'
import img7 from '../assets/image7.png'
import img8 from '../assets/image8.png'
import person1 from '../assets/person1.png'
import person2 from '../assets/person2.png'
import person3 from '../assets/person3.png'
import analytics from '../assets/analytics.png'
import getapp from '../assets/getapp.png'
import { ButtonSolid,ButtonOutline,Button } from "../components/buttons/buttons";
import Card from "../components/card/card";

const Home = ()=>{
    const metaTag = document.createElement('meta')
    metaTag.setAttribute('name','viewport')
    metaTag.setAttribute('content','width=1224')
    document.head.append(metaTag)
    return(
        <>
        <Header/>
        <section className="home__section">
            <div className="home__content">
            <h2>discover and collect rare NFTs</h2>
         <p>The most secure marketplace for buying and selling unique crypto assets.</p>
         <div className="home__buttons">
         <ButtonSolid title="buy nfts"/>
         <ButtonOutline title="sell nfts"/>
         </div>
            </div>
            <div className="home__image">
         <img src={heroLogo} alt="" />
            </div>
        </section>
        <span className="circle"></span>
        <section className="featured">
            <div className="featured__text">
              <h4>Featured on</h4>
            </div>
            <div className="featured__logo">
             <img src={img6} alt="" />
             <img src={img5} alt="" />
             <img src={img7} alt="" />
             <img src={img8} alt="" />
            </div>
        </section>
        <section className="analytics">
        <div className="analytics__img">
            <img src={analytics} alt={''}/>
        </div>
        <div className="analytics__content">
            <h5>Analytics</h5>
            <h2>built-in analytics to track your nfts</h2>
            <p>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
            <ButtonSolid title="view our pricing"/>
        </div>
        </section>
        <section className="getapp">
        <div className="getapp__content">
        <h5>Get Our App</h5>
        <h2>Browse NFTs from your smartphone</h2>
        <p>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
        <ButtonSolid title="view our pricing"/>
        </div>
        <div className="getapp__content">
        <img src={getapp} alt="" />
        </div>
        <span className="circle2"></span>
        </section>
        <section className="testimonial">
        <div className="testimonial__title">
         <h5>testimonials</h5>
         <h2>read what othershave to say</h2>
        </div>
        <div className="testimonial__cards">
   <Card img={person1} title={'Olivia Cole'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. '}/>
   <Card img={person2} title={'Even White'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. '}/>
   <Card img={person3} title={'John Miller'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. '}/>
        </div>
        </section>
        <section className="banner">
            <div className="banner__container">
             <h3>are you ready?</h3>
             <h2>be a part of the next big thing</h2>
             <Button title="get started"/>
            </div>
        </section>
        <footer>
            <div className="footer__container">
            <div>
                <h2>Krypto</h2>
            </div>
            <div className="footer__col">
             <h4>Pages</h4>
             <ul>
                <li>Home</li>
                <li>About</li>
                <li>Buy NFTs</li>
                <li>Sell NFTs</li>
             </ul>
            </div>
            <div className="footer__col">
             <h4>Market</h4>
             <ul>
                <li>Browse NFTs</li>
                <li>Buy NFTs</li>
                <li>Sell NFTs</li>
             </ul>
            </div>
            <div className="footer__col">
             <h4>Contact</h4>
             <ul>
                <li>Email</li>
                <li>Linkedin</li>
                <li>Instagram</li>
                <li>Twitter</li>
             </ul>
            </div>
            <div className="newsletter">
                <h3>Join Our Newsletter</h3>
            <form>
                <div className="input__group">
                 <input type="text" placeholder="EMAIL ADDRESS"/>
                 <div className="news__btn">
                 <ButtonSolid title="Submit"/>
                 </div>
                </div>
            </form>
            </div>
            </div>
            <span className="circle3"></span>
        </footer>
        </>
    )
}

export default Home