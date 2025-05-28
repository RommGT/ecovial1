import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA  } from "./CarData";

function PickCar() {
  const [active, setActive] = useState("LicenseC");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Tipos de Licencias</h3>
              <h2>Formación Profesional</h2>
              <p>
                Elige el tipo de licencia profesional que necesitas según 
                la normativa ecuatoriana para iniciar tu carrera en el transporte
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick license */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("LicenseC");
                    btnID("btn1");
                  }}
                >
                  Licencia Tipo C
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("LicenseC1");
                    btnID("btn2");
                  }}
                >
                  Licencia Tipo C1
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("LicenseD");
                    btnID("btn3");
                  }}
                >
                  Licencia Tipo D
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("LicenseD1");
                    btnID("btn4");
                  }}
                >
                  Licencia Tipo D1
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("LicenseE");
                    btnID("btn5");
                  }}
                >
                  Licencia Tipo E
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("LicenseE1");
                    btnID("btn6");
                  }}
                >
                  Licencia Tipo E1
                </button>
              </div>

              {active === "LicenseC" && <CarBox data={CAR_DATA} licenseID={0} />}
              {active === "LicenseC1" && <CarBox data={CAR_DATA} licenseID={1} />}
              {active === "LicenseD" && <CarBox data={CAR_DATA} licenseID={2} />}
              {active === "LicenseD1" && <CarBox data={CAR_DATA} licenseID={3} />}
              {active === "LicenseE" && <CarBox data={CAR_DATA} licenseID={4} />}
              {active === "LicenseE1" && <CarBox data={CAR_DATA} licenseID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;