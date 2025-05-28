import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contacto" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>¿Necesitas información adicional?</h2>
              <p>
                Somos una escuela especializada en formación de conductores 
                profesionales con más de 15 años de experiencia. Nuestros 
                instructores certificados te guiarán hacia el éxito profesional 
                en el sector del transporte.
              </p>
              <a href="tel:+59322550123">
                <i className="fa-solid fa-phone"></i>&nbsp; (593) 2-255-0123
              </a>
              <a href="mailto:info@ecovialecuador.com">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                info@ecovialecuador.com
              </a>
              <a href="https://maps.google.com">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Quito, 
                Pichincha, Ecuador
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Nombre Completo <b>*</b>
                </label>
                <input type="text" placeholder='Ej: "Juan Pérez"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="tucorreo@ejemplo.com"></input>

                <label>
                  Teléfono <b>*</b>
                </label>
                <input type="tel" placeholder="0999123456"></input>

                <label>
                  Tipo de Licencia de Interés
                </label>
                <select>
                  <option>Selecciona una opción</option>
                  <option>Licencia Tipo C - Carga Pesada</option>
                  <option>Licencia Tipo C1 - Carga Media</option>
                  <option>Licencia Tipo D - Autobuses</option>
                  <option>Licencia Tipo D1 - Minibuses</option>
                  <option>Licencia Tipo E - Taxi</option>
                  <option>Licencia Tipo E1 - Transporte Escolar</option>
                  <option>Información General</option>
                </select>

                <label>
                  Cuéntanos sobre tu consulta <b>*</b>
                </label>
                <textarea placeholder="Escribe aquí tu consulta sobre nuestros cursos..."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Enviar
                  Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Inscríbete contactándonos directamente</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(593) 2-255-0123</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;