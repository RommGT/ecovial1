import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="Nosotros" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="escuela-conduccion"
            />
            <div className="about-main__text">
              <h3>Nuestra Escuela</h3>
              <h2>Tu formación profesional comienza aquí</h2>
              <p>
                Con más de 15 años de experiencia, formamos conductores 
                profesionales con los más altos estándares de calidad y 
                seguridad. Nuestros instructores certificados te guiarán 
                paso a paso para obtener tu licencia profesional y 
                desarrollar las habilidades necesarias para una carrera 
                exitosa en el transporte.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="curso-icon" />
                  <span>
                    <h4>12</h4>
                    <p>Tipos de Cursos</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="instructor-icon" />
                  <span>
                    <h4>25</h4>
                    <p>Instructores Certificados</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="estudiante-icon" className="last-fk" />
                  <span>
                    <h4>850+</h4>
                    <p>Estudiantes Graduados</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Inscríbete contactándonos directamente</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(593) 2-555-0123</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;