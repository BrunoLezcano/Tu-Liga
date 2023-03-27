const ligaPropia = new createLigue("Tu Propia Liga", "./escudoLiga.png");

const thebody = document.getElementById("bodyPage");

const theheader = document.createElement("header");
const themain = document.createElement("main");
const thefooter = document.createElement("footer");

thebody.append(theheader, themain, thefooter);

function viewHeader(dom, newLigue) {
  const navbar = document.createElement("nav");
  navbar.classList.add("navPage");
  navbar.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="${newLigue.iconLigue}" id="imageLogo" alt="escudoLiga"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <h1 class="nav-link active" aria-current="page" href="#">${newLigue.nameLigue}</h1>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tus Ligas</a>
        </li>
        <li class="nav-item">
      </ul>
    </div>
  </div>
</nav>
`;

  dom.appendChild(navbar);
}

function viewMain(dom) {
  const introPage = document.createElement("div");
  introPage.classList.add("welcomePage");
  introPage.innerHTML = `
    <h2 class="bienvenida" > Bienvenido a tus ligas</h2>
    <p>Aqui podras crear tu tipo de torneo, ya sea en modo liga. ingresa tus equipos y compruebalo</p>
    `;

  const givemeTeam = document.createElement("div");
  givemeTeam.classList.add("giveTeam");
  givemeTeam.innerHTML = `
   <form class="row g-3">
        <div class="col-md-6">
            <label for="validationDefault01" class=" form-label" >Nombre de la Liga</label>
            <input type="text" class="form-control" id="validationDefault01" required>
        </div>
    
        </div>
        <div class="col-md-3">
            <label for="validationDefault02" class="form-label" >Cantidad de Equipos</label>
            <input type="number" class="form-control" id="validationDefault02"  required>
        </div>

        <div class="col-12">
            <button class="btn btn-primary" id="btnCreateLigue" type="reset">Confirma</button>
        </div>
    </form>`;

  dom.appendChild(introPage);
  dom.appendChild(givemeTeam);

  const buttonConfirm = document.getElementById("btnCreateLigue");

  buttonConfirm.addEventListener("click", () => {
    const nombreLiga = document.getElementById("validationDefault01").value;
    const canti = document.getElementById("validationDefault02").value;
    buildLigue(themain, nombreLiga, canti);
  });
}

function buildLigue(dom, nameLigue, howManyTeams) {
  const container = document.createElement("div");

  const newLigueForm = document.createElement("form");
  newLigueForm.classList.add("row", "g-3");
  const titleLigue = document.createElement("div");
  titleLigue.classList.add("titleLigue");
  titleLigue.innerHTML = `
  <h3>El nombre de tu torneo será : ${nameLigue}</h3>
  `;

  for (let index = 0; index < howManyTeams; index++) {
    const newInput = document.createElement("div");
    newInput.classList.add("col-md-4");
    newInput.innerHTML = `
        <label for="validationCustom${index + 1}" class="form-label">Equipo ${
      index + 1
    }</label>
        <input type="text" class="form-control" id="validationCustom01" required>
        <div class="valid-feedback">
            Looks good!
        </div>
    
    `;
    newLigueForm.appendChild(newInput);
  }
  const cierreFormulario = document.createElement("div");
  cierreFormulario.classList.add("col-12");
  cierreFormulario.innerHTML = `
    <button class="btn btn-primary" type="reset">Submit form</button>
  `;

  newLigueForm.appendChild(cierreFormulario);
  container.appendChild(titleLigue);
  container.appendChild(newLigueForm);
  dom.appendChild(container);
}

function refreshViewApp() {
  viewHeader(theheader, ligaPropia);
  viewMain(themain);
}

refreshViewApp();
