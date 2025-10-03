function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startSimulation() {
    const input = document.getElementById("choices").value;
    const output = document.getElementById("output");
    output.innerHTML = "";

    if (!input.trim()) {
        output.textContent = "Please enter some choices.";
        return;
    }

    const choices = input.split(",").map(c => c.trim()).filter(c => c !== "");
    if (choices.length === 0) {
        output.textContent = "Please enter valid choices.";
        return;
    }

    const y = Math.floor(Math.random() * (6 - 3)) + 3;
    let z = 0;

    while (z < y) {
        output.textContent = "Choosing" + ".".repeat(z + 1);
        await sleep(500);
        z += 1;
    }

    const x = choices[Math.floor(Math.random() * choices.length)];
    output.textContent = "The choice is: " + x;
}
