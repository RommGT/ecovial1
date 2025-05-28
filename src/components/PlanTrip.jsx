import SelectCourse from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import StartDriving from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Planifica tu formación profesional</h3>
              <h2>Escuela de conductores profesionales</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCourse} alt="icon_img" />
                <h3>Elige tu Curso</h3>
                <p>
                  Ofrecemos cursos especializados para conductores 
                  profesionales. El programa perfecto para tus necesidades.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contacta con Instructor</h3>
                <p>
                  Instructores certificados listos para ayudarte con 
                  cualquier pregunta sobre tu formación.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={StartDriving} alt="icon_img" />
                <h3>Conduce Profesionalmente</h3>
                <p>
                  Obtén tu certificación profesional y comienza tu carrera 
                  como conductor especializado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;