window.addEventListener("load", () => {
    // Fetch and display recent projects
    fetch("http://localhost:5000/projects")
    .then(response => response.json())
    .then(data => {
        const rprojectsList = document.getElementById("rprojects");
        rprojectsList.innerHTML = "";

        data.slice(0, 3).forEach(project => {
            const listItem = document.createElement("li");
            listItem.innerText = `${project.name} - ${project.description} - ${project.url}`;
            rprojectsList.appendChild(listItem);
        });

        console.log('dataRetrieved', data.slice(0, 3));
    })
    .catch(error => {
        console.error("Fout bij ophalen van Project data:", error);
        document.getElementById("rprojects").innerText = "Fout bij laden van gegevens.";
    });
});

