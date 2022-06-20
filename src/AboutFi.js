import React, { useEffect } from "react";
import gsap from "gsap";

const AboutFi = () => {
  useEffect(() => {
    gsap.timeline(
      gsap.defaults({ ease: "slow" }),
      gsap.from("#aboutHeader", { y: -10, opacity: 0, stagger: 0.5 }),
      gsap.from("#aboutMain", { y: -10, delay: 0.8, opacity: 0, stagger: 0.5 }),
      gsap.from("hr", { delay: 0.5, duration: 2, scale: 0, opacity: 0 }),
      gsap.from("#aboutList", { y: 10, delay: 1.8, opacity: 0, stagger: 0.15 })
    );
  }, []);
  return (
    <div className="content">
      <title>Neal Fisher</title>
      <div className="Header" id="aboutHeader">
        <h1>Minusta</h1>
        <hr />
      </div>
      <div>
        <p className="Main" id="aboutMain">
          Nimeni on Neal Fisher - synnyin ja kasvoin Keskilännessä, tällä
          hetkellä Memphisissä, Tennesseen osavaltiossa. Olen itseoppinut
          ohjelmoija, joka työskentelee tällä hetkellä Javascriptin ja
          HTML/CSS:n parissa. Olen myös erittäin kiinnostunut C#:n ja C++:n
          oppimisesta – tavoitteenani on oppia käyttämään Unrealia ja Unitya.
        </p>
        <p className="Main" id="aboutMain">
          Kiinnostukseni ovat pääasiassa taiteellisia ja viihdekeskeisiä, mutta
          totta puhuen – nautin vain uusien asioiden oppimisesta, olivatpa ne
          luonteeltaan ilmeisen taiteellisia vai eivät. Koodaamisen oppiminen ei
          ole ollut minulle helppoa, mutta se on ollut <i>erittäin</i>{" "}
          palkitsevaa.
        </p>
      </div>
      <div className="List" id="aboutList">
        <p>Tässä joitain muita kiinnostuksen kohteitani--</p>
        <ul>
          <li id="aboutList">Graafinen suunnittelu</li>
          <li id="aboutList">Pelin suunnittelu</li>
          <li id="aboutList">Kirjoittaminen</li>
          <li id="aboutList">Musiikki</li>
          <li id="aboutList">Näytteleminen ja teatteri</li>
          <li id="aboutList">Kielitiede</li>
        </ul>
      </div>
      <div className="Main" id="aboutMain">
        <p>
          Tämä sivusto on osoitus taidoistani HTML-, CSS-ja
          Javascript-ohjelmissa, ja se on paikka esitellä muutamia projekteja,
          joissa olen työskennellyt yksin ja muiden kanssa.
        </p>
      </div>
    </div>
  );
};

export default AboutFi;
