import { useState } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";
import { Link } from "react-router-dom";

function Models() {
  const [modal, setModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const coursesData = {
    'Licencia Tipo C': {
      title: 'Licencia Tipo C - Carga Pesada',
      description: 'Capacítate para conducir vehículos de carga pesada con peso bruto superior a 3.5 toneladas. Ideal para quienes desean trabajar en transporte de mercancías y logística.',
      requirements: [
        'Edad mínima: 21 años',
        'Licencia tipo B vigente por mínimo 2 años',
        'Certificado médico actualizado',
        'Certificado de antecedentes penales'
      ],
      includes: [
        'Clases teóricas de código de tránsito',
        'Prácticas en vehículos de carga pesada',
        'Simulador de conducción',
        'Certificado oficial al aprobar'
      ],
      duration: '6 semanas - 48 horas académicas',
      schedule: 'Lunes a Viernes: 8:00 AM - 12:00 PM o 2:00 PM - 6:00 PM',
      price: '$480'
    },
    'Licencia Tipo C1': {
      title: 'Licencia Tipo C1 - Carga Media',
      description: 'Perfecta para conducir vehículos de carga media entre 3.5 y 7.5 toneladas. Ideal para delivery, mudanzas y transporte comercial urbano.',
      requirements: [
        'Edad mínima: 18 años',
        'Licencia tipo B vigente por mínimo 1 año',
        'Certificado médico actualizado',
        'Certificado de antecedentes penales'
      ],
      includes: [
        'Teoría especializada en carga media',
        'Prácticas con camiones medianos',
        'Técnicas de carga y descarga',
        'Certificado oficial'
      ],
      duration: '4 semanas - 32 horas académicas',
      schedule: 'Lunes a Viernes: 8:00 AM - 12:00 PM o 2:00 PM - 6:00 PM',
      price: '$380'
    },
    'Licencia Tipo D': {
      title: 'Licencia Tipo D - Autobuses',
      description: 'Formación integral para conductores de autobuses de servicio público. Incluye atención al cliente y normativas del transporte público.',
      requirements: [
        'Edad mínima: 23 años',
        'Licencia tipo B vigente por mínimo 3 años',
        'Certificado médico y psicológico',
        'Certificado de antecedentes penales'
      ],
      includes: [
        'Normativas de transporte público',
        'Prácticas en autobuses reales',
        'Atención al cliente',
        'Primeros auxilios básicos'
      ],
      duration: '8 semanas - 64 horas académicas',
      schedule: 'Lunes a Viernes: 7:00 AM - 11:00 AM o 3:00 PM - 7:00 PM',
      price: '$520'
    },
    'Licencia Tipo D1': {
      title: 'Licencia Tipo D1 - Minibuses',
      description: 'Especialízate en conducción de minibuses hasta 16 pasajeros. Perfecta para transporte turístico, escolar y ejecutivo.',
      requirements: [
        'Edad mínima: 21 años',
        'Licencia tipo B vigente por mínimo 2 años',
        'Certificado médico actualizado',
        'Certificado de antecedentes penales'
      ],
      includes: [
        'Manejo de grupos pequeños',
        'Prácticas en minibuses',
        'Rutas turísticas',
        'Certificado especializado'
      ],
      duration: '6 semanas - 48 horas académicas',
      schedule: 'Lunes a Viernes: 8:00 AM - 12:00 PM o 2:00 PM - 6:00 PM',
      price: '$420'
    },
    'Licencia Tipo E': {
      title: 'Licencia Tipo E - Taxi',
      description: 'Conviértete en conductor profesional de taxi. Incluye conocimiento de la ciudad, tarifas y excelente servicio al cliente.',
      requirements: [
        'Edad mínima: 21 años',
        'Licencia tipo B vigente por mínimo 2 años',
        'Certificado médico actualizado',
        'Certificado de antecedentes penales'
      ],
      includes: [
        'Geografía urbana',
        'Tarifas y regulaciones',
        'Servicio al cliente',
        'Modalidad semi-presencial'
      ],
      duration: '4 semanas - 32 horas académicas',
      schedule: 'Flexible: Presencial y virtual',
      price: '$320'
    },
    'Licencia Tipo E1': {
      title: 'Licencia Tipo E1 - Transporte Escolar',
      description: 'Especialización en transporte escolar e institucional. Enfoque en seguridad infantil y responsabilidad social.',
      requirements: [
        'Edad mínima: 21 años',
        'Licencia tipo B vigente por mínimo 2 años',
        'Certificado médico y psicológico',
        'Antecedentes penales limpios'
      ],
      includes: [
        'Seguridad infantil',
        'Primeros auxilios',
        'Psicología infantil básica',
        'Certificado especializado'
      ],
      duration: '5 semanas - 40 horas académicas',
      schedule: 'Lunes a Viernes: 8:00 AM - 12:00 PM',
      price: '$380'
    }
  };

  const openModal = (courseTitle) => {
    setSelectedCourse(coursesData[courseTitle]);
    setModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModal(false);
    setSelectedCourse(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className="models-section">
        {/* Modal Overlay */}
        <div
          onClick={closeModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <HeroPages name="Nuestros Cursos" />
        <div className="container">
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg1} alt="course_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Licencia Tipo C</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$480</h4>
                      <p>curso completo</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-truck"></i> &nbsp; Carga Pesada
                    </span>
                    <span style={{ textAlign: "right" }}>
                      6 semanas &nbsp; <i className="fa-solid fa-clock"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-user"></i> &nbsp; 21+ años
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Presencial &nbsp; <i className="fa-solid fa-chalkboard-teacher"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn" onClick={() => openModal("Licencia Tipo C")}>
                    Ver Detalles
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg2} alt="course_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Licencia Tipo C1</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$380</h4>
                      <p>curso completo</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-truck"></i> &nbsp; Carga Media
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4 semanas &nbsp; <i className="fa-solid fa-clock"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-user"></i> &nbsp; 18+ años
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Presencial &nbsp; <i className="fa-solid fa-chalkboard-teacher"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn" onClick={() => openModal("Licencia Tipo C1")}>
                     Ver Detalles
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg3} alt="course_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Licencia Tipo D</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$520</h4>
                      <p>curso completo</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-bus"></i> &nbsp; Autobuses
                    </span>
                    <span style={{ textAlign: "right" }}>
                      8 semanas &nbsp; <i className="fa-solid fa-clock"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-user"></i> &nbsp; 23+ años
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Presencial &nbsp; <i className="fa-solid fa-chalkboard-teacher"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn" onClick={() => openModal("Licencia Tipo D")}>
                    Ver Detalles
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg4} alt="course_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Licencia Tipo D1</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$420</h4>
                      <p>curso completo</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-bus"></i> &nbsp; Minibuses
                    </span>
                    <span style={{ textAlign: "right" }}>
                      6 semanas &nbsp; <i className="fa-solid fa-clock"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-user"></i> &nbsp; 21+ años
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Presencial &nbsp; <i className="fa-solid fa-chalkboard-teacher"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn" onClick={() => openModal("Licencia Tipo D1")}>
                      Ver Detalles
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg5} alt="course_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Licencia Tipo E</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$320</h4>
                      <p>curso completo</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-taxi"></i> &nbsp; Taxi
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4 semanas &nbsp; <i className="fa-solid fa-clock"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-user"></i> &nbsp; 21+ años
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Semi-presencial &nbsp; <i className="fa-solid fa-laptop"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn" onClick={() => openModal("Licencia Tipo E")}>
                     Ver Detalles
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg6} alt="course_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Licencia Tipo E1</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$380</h4>
                      <p>curso completo</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-school-bus"></i> &nbsp; Escolar
                    </span>
                    <span style={{ textAlign: "right" }}>
                      5 semanas &nbsp; <i className="fa-solid fa-clock"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-user"></i> &nbsp; 21+ años
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Presencial &nbsp; <i className="fa-solid fa-chalkboard-teacher"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn" onClick={() => openModal("Licencia Tipo E1")}>
                    Ver Detalles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Details Modal */}
        {modal && selectedCourse && (
          <div className="booking-modal active-modal">
            <div className="booking-modal__title">
              <h2>{selectedCourse.title}</h2>
              <i onClick={closeModal} className="fa-solid fa-xmark"></i>
            </div>
            
            <div className="booking-modal__message">
              <h4>
                <i className="fa-solid fa-circle-info"></i> Descripción del Curso
              </h4>
              <p>{selectedCourse.description}</p>
            </div>

            <div className="booking-modal__car-info">
              <div className="dates-div">
                <div className="booking-modal__car-info__dates">
                  <h5>Requisitos</h5>
                  <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    {selectedCourse.requirements.map((req, index) => (
                      <li key={index} style={{ marginBottom: '5px' }}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="booking-modal__car-info__dates">
                  <h5>El curso incluye</h5>
                  <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    {selectedCourse.includes.map((item, index) => (
                      <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="booking-modal__car-info__dates">
                  <h5>Detalles del curso</h5>
                  <p><strong>Duración:</strong> {selectedCourse.duration}</p>
                  <p><strong>Horarios:</strong> {selectedCourse.schedule}</p>
                  <p><strong>Precio:</strong> {selectedCourse.price}</p>
                </div>
              </div>
            </div>

            <div className="reserve-button" style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={closeModal} style={{ marginRight: '10px', backgroundColor: '#ccc' }}>
                Cerrar
              </button>
              <button onClick={() => window.scrollTo(0, 0)}>
                Inscribirse Ahora
              </button>
            </div>
          </div>
        )}

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
      </section>
    </>
  );
}

export default Models;