document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Project One",
            description: "A brief description of Project One.",
            link: "#",
            image: "https://via.placeholder.com/300"
        },
        {
            title: "Project Two",
            description: "A brief description of Project Two.",
            link: "#",
            image: "https://via.placeholder.com/300"
        },
        {
            title: "Project Three",
            description: "A brief description of Project Three.",
            link: "#",
            image: "https://via.placeholder.com/300"
        }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-md-4 mb-4';
        projectCard.innerHTML = `
            <div class="card project-card">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="${project.link}" class="btn btn-primary">View Project</a>
                </div>
            </div>
        `;
        projectList.appendChild(projectCard);
    });
});
