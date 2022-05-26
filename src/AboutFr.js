import React, { useEffect } from "react";
import gsap from "gsap";

const AboutFr = () => {
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
        <h1>Sur Moi</h1>
        <hr />
      </div>
      <div>
        <p className="Main" id="aboutMain">
          Je m'appelle Neal Fisher - je suis né et j'ai grandi dans le Midwest,
          et je vis actuellement à Memphis, TN. Je suis programmeur autodidacte
          qui travaille actuellement en Javascript et HTML/CSS - bien que cela
          changera avec le temps car je suis aussi très intéressé par
          l'apprentissage du C# et du C++ - mon objectif ultime, d'apprendre à
          utiliser Unreal et Unity.
        </p>
        <p className="Main" id="aboutMain">
          Mes interêts sont primairement artistique et centrée sur
          l'entertainment, mais vraiment - j'aime simplement d'apprendre des
          nouveaux choses, qu'elles soient liées à l'art ou non. Apprendre à
          coder n'a pas été facile, mais cela a été <i>très</i> enrichissant.
        </p>
      </div>
      <div className="List" id="aboutList">
        <p>Mes autres intérêts incluent--</p>
        <ul>
          <li id="aboutList">Conception Graphique</li>
          <li id="aboutList">Conception des Jeux</li>
          <li id="aboutList">L'Écriture</li>
          <li id="aboutList">La Musique</li>
          <li id="aboutList">Le Theàtre</li>
          <li id="aboutList">Linguistique</li>
        </ul>
      </div>
      <div className="Main" id="aboutMain">
        <p>
          Cette site est pour demonstrer mes compétences en HTML, CSS et
          Javascript - et aussi une vitrine pour mes projets personnels et avec
          les autres.
        </p>
      </div>
    </div>
  );
};

export default AboutFr;
