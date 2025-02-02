function addBar() {
    const heightInput = document.getElementById("input");
    const height = parseInt(heightInput.value, 10);

    if (isNaN(height) || height <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter a valid name for the expense.");
        return;
    }

    const graphContainer = document.getElementById("graphContainer");

    
    const barGroup = document.createElement("div");
    barGroup.classList.add("barGroup");

    
    const graphBar = document.createElement("div");
    graphBar.classList.add("graphBar");
    graphBar.style.height = `${height}px`;

    
    const barLabel = document.createElement("div");
    barLabel.classList.add("barLabel");
    barLabel.textContent = name;

    
    barGroup.appendChild(graphBar);
    barGroup.appendChild(barLabel);

    
    graphContainer.appendChild(barGroup);

    
    heightInput.value = "";
    nameInput.value = "";
}

