document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Brick-Breaker-Game",
            description: "A Java game using Swing and AWT with paddle, ball, and brick collision mechanics, featuring dynamic movement and smooth user-controlled gameplay.",
            link: "https://github.com/sandeshshinde03/Brick-Breaker-Game",
            image: "Brick Breaker Game.png"
        },
        {
            title: "Car Rental System",
            description: "The system allows users to browse available cars, rent cars for a specified period, manage car reservations, and payment",
            link: "https://github.com/sandeshshinde03/CarRentalSystem",
            image: "Car Rental System.png"
        },
        {
            title: "Portfolio",
            description: "Developed a dynamic and responsive personal portfolio using HTML, CSS, JavaScript, and Bootstrap to showcase projects, skills, and experience",
            link: "https://sandeshshinde03.github.io/",
            image: "Portfolio.png"
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
