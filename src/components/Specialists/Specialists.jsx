import "./style.css";
function Specialists() {
  return (
    <>
      <section class="specialists-section" id="specialists">
        <div class="container">
          <h2 class="specialists-title font-bold font-big">Nasi specjaliści</h2>

          <section class="specialist-section">
            <div class="specialist-photo specialist-one-face"></div>
            <div class="specialist-info">
              <h3 class="specialist-name font-bold">Imię Nazwisko [ dział ]</h3>
              <p class="specialist-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel massa et lacus egestas cursus a non magna. Fusce scelerisque
                blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
                tempor elementum lorem in, varius pellentesque ligula. Duis
                efficitur lacinia enim, non tincidunt libero ultrices in.
              </p>
            </div>
          </section>
          <section class="specialist-section">
            <div class="specialist-photo specialist-two-face"></div>
            <div class="specialist-info">
              <h3 class="specialist-name font-bold ">
                Imię Nazwisko [ dział ]
              </h3>
              <p class="specialist-description ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel massa et lacus egestas cursus a non magna. Fusce scelerisque
                blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
                tempor elementum lorem in, varius pellentesque ligula. Duis
                efficitur lacinia enim, non tincidunt libero ultrices in.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
export default Specialists;
