import React from "react";
import "./Home.css";
import Product from "./Product";
import logo from "./Rena.jpeg";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="123"
            title="Rena the Dog"
            price={69.99}
            image={logo}
            rating={5}
          />
          <Product
            id="223"
            title="Japanese Knife - Fancy AF"
            price={339.99}
            image="https://cdn.shopify.com/s/files/1/0449/9433/0781/products/Santoku-Stainless-Clad-Blue-steel-2-Kurouchi-Sakura-Fuji-Buffalo-Ebony-Handle-165mm-Bao-Ding-Musashi-Japanese-Kitchen-Knives_540x.jpg?v=1648718246"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="323"
            title="Mass Effect Legendary Edition - PlayStation 4"
            price={59.99}
            image="https://m.media-amazon.com/images/I/71leIiXxEOL._AC_SX425_.jpg"
            rating={4}
          />
          <Product
            id="423"
            title="Magic the Gathering: Teferi, Hero of Dominaria - Dominaria"
            price={39.99}
            image="https://c1.scryfall.com/file/scryfall-cards/large/front/5/d/5d10b752-d9cb-419d-a5c4-d4ee1acb655e.jpg?1562736365"
            rating={3}
          />
          <Product
            id="623"
            title="Razer DeathAdder V2 Pro Wireless Gaming Mouse: 20K DPI Optical Sensor - 3X Faster Than Mechanical Optical Switch - Chroma RGB Lighting - 70 Hr Battery Life - 8 Programmable Buttons - Classic Black"
            price={89.99}
            image="https://m.media-amazon.com/images/I/61C3xYVKtZL._AC_SX679_.jpg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id="523"
            title="Angels Envy American Bourbon 750 ml"
            price={89.99}
            image="https://cdn11.bigcommerce.com/s-b0811/images/stencil/500x659/products/1486/20079/angels_envy__95677.1633111351.jpg?c=2"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
