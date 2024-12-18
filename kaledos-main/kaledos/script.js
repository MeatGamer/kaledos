let slaptasTekstas = "";
const slaptasZodis = "69"; // Slaptas žodis

document.addEventListener("keydown", function(event) {
    slaptasTekstas += event.key.toLowerCase();
    console.log(slaptasTekstas);


    if (slaptasTekstas.includes(slaptasZodis)) {
        document.getElementById("easter-egg").classList.remove("hidden");
        slaptasTekstas = "";
    }


    if (slaptasTekstas.length > 7) {
        slaptasTekstas = slaptasTekstas.slice(-7);
    }
});