function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>ECOVIAL</span> Ecuador
              </li>
              <li>
                Formamos conductores profesionales con los más altos estándares 
                de calidad y seguridad. Tu carrera en el transporte comienza aquí.
              </li>
              <li>
                <a href="tel:+59322550123">
                  <i className="fa-solid fa-phone"></i> &nbsp; (593) 2-255-0123
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ecovialecuador.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; info@ecovialecuador.com
                </a>
              </li>
              
            </ul>

            <ul className="footer-content__2">
              <li>Empresa</li>
              <li>
                <a href="#home">Facebook</a>
              </li>
              <li>
                <a href="#home">Instagram</a>
              </li>
              <li>
                <a href="#home">TikTok</a>
              </li>
           
            </ul>

            <ul className="footer-content__2">
              <li>Horarios de Atención</li>
              <li>Lun - Vie: 9:00AM - 6:00PM</li>
              <li>Sáb: 9:00AM - 2:00PM</li>
              <li>Dom: Cerrado</li>
            </ul>

            <ul className="footer-content__2">
              <li>Suscripción</li>
              <li>
                <p>Suscríbete para recibir noticias y novedades sobre nuestros cursos.</p>
              </li>
              <li>
                <input type="email" placeholder="Ingresa tu correo electrónico"></input>
              </li>
              <li>
                <button className="submit-email">Suscribirse</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;