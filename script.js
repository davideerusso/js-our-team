const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const TeamContainer = document.getElementById("Team-container");
const photo = document.getElementById("photo");
const name = document.getElementById("name");
const job = document.getElementById("job");
const email = document.getElementById("email");

let cardsHTML = ``;
for (const members of teamMembers) {
  const { name, role, email, img } = members;
  cardsHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card  mb-3">
            <div class="row g-0">
              <div class="col-md-4 col-sm-6">
                <img
                  id="photo"
                  src="./${img}"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8 col-sm-6">
                <div class="card-body">
                  <h5 id="name" class="card-title">${name}</h5>
                  <p id="job" class="card-text">${role}</p>
                  <p id="email" class="card-text">
                    <small class="text-body-secondary"
                      >${email}</small
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
`;
}
TeamContainer.innerHTML = cardsHTML;
