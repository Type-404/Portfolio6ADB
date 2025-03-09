window.addEventListener("load", () => {
    // Test Database skills
    fetch("http://localhost:5000/skills")
    .then(response => response.json())
    .then(data => {
        const skillsList = document.getElementById("Skills");
        skillsList.innerHTML = "";

        data.forEach(skill => {
            const listItem = document.createElement("li");
            listItem.innerText = `${skill.name} - ${skill.type}`;
            skillsList.appendChild(listItem);
        });

        console.log('dataRetrieved', data);
    })
    .catch(error => {
        console.error("Fout bij ophalen van skill data:", error);
        document.getElementById("Skills").innerText = "Fout bij laden van gegevens.";
    });
});  