import { useState } from "react";

function CardBox({ data, licenseID }) {
  const [licenseLoad, setLicenseLoad] = useState(true);
  return (
    <>
      {data[licenseID].map((license, id) => (
        <div key={id} className="box-cars">
          {/* license image */}
          <div className="pick-car">
            {licenseLoad && <span className="loader"></span>}
            <img
              style={{ display: licenseLoad ? "none" : "block" }}
              src={license.img}
              alt="license_img"
              onLoad={() => setLicenseLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${license.price}</span>/ curso completo
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Tipo</span>
                <span>{license.type}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Vehículo</span>
                <span>{license.vehicle}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Duración</span>
                <span>{license.duration}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Edad Mínima</span>
                <span>{license.minAge}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Modalidad</span>
                <span>{license.modality}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Horarios</span>
                <span>{license.schedule}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Certificación</span>
                <span>{license.certification}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Inscribirse Ahora
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardBox;