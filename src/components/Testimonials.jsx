import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Opiniones de Nuestros Estudiantes</h4>
              <h2>Testimonios de Graduados</h2>
              <p>
                Descubre el impacto positivo que hemos tenido en nuestros estudiantes 
                leyendo sus testimonios. Nuestros graduados han experimentado nuestra 
                formación profesional y están ansiosos por compartir sus experiencias 
                exitosas contigo.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "Me inscribí en Ecovial Ecuador para obtener mi licencia tipo C 
                  y fue una experiencia increíble. Los instructores son muy 
                  profesionales y la formación es de excelente calidad."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>María González</h4>
                      <p>Quito</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "Gracias a la formación que recibí aquí, ahora trabajo como 
                  conductor profesional. La escuela me preparó muy bien para 
                  mi carrera. ¡Totalmente recomendado!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Carlos Ramírez</h4>
                      <p>Guayaquil</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;