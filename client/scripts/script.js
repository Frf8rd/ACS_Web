const projectForm = document.getElementById("projectForm");
const projectsContainer = document.getElementById("projectsContainer");

projectForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("projectTitle").value;
    const description = document.getElementById("projectDescription").value;

    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;

    projectsContainer.appendChild(card);

    projectForm.reset();
});