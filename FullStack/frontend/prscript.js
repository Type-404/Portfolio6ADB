window.addEventListener("load", () => {
    // Fetch and display all projects
    fetch("http://localhost:5000/projects")
    .then(response => response.json())
    .then(data => {
        const projectsList = document.getElementById("projects");
        projectsList.innerHTML = "";

        data.forEach(project => {
            const listItem = document.createElement("li");
            listItem.innerText = `${project.name} - ${project.description} - ${project.url}`;
            projectsList.appendChild(listItem);
        });

        console.log('dataRetrieved', data);
    })
    .catch(error => {
        console.error("Fout bij ophalen van Project data:", error);
        document.getElementById("projects").innerText = "Fout bij laden van gegevens.";
    });
});
