// scripts.js
document.getElementById('lootForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    let loot1 = parseInt(document.getElementById('loot1').value) || 0;
    let loot2 = parseInt(document.getElementById('loot2').value) || 0;
    let loot3 = parseInt(document.getElementById('loot3').value) || 0;
    let loot4 = parseInt(document.getElementById('loot4').value) || 0;

    // Calculate total loot for each faction
    let totalLootFaction1 = loot1 + loot2;
    let totalLootFaction2 = loot3 + loot4;

    // Calculate overall total
    let totalLoot = totalLootFaction1 + totalLootFaction2;

    // Display the result
    let resultText = `
        <h3>Total Loot:</h3>
        <p>Gold Hoarders Loot: ${totalLootFaction1}</p>
        <p>Merchant Alliance Loot: ${totalLootFaction2}</p>
        <p>Overall Total Loot: ${totalLoot}</p>
    `;
    document.getElementById('result').innerHTML = resultText;
});

function scrollToSection(sectionId) {
    // Show the specific section based on the faction
    const allFactions = document.querySelectorAll('.faction');
    allFactions.forEach(faction => faction.style.display = 'none'); // Hide all factions
    document.getElementById(sectionId).style.display = 'block'; // Show the selected faction

    // Scroll to the section
    document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
}

function backToMain() {
    // Hide all faction sections
    const allFactions = document.querySelectorAll('.faction');
    allFactions.forEach(faction => faction.style.display = 'none');
    
    // Optionally, you can reset the form when going back to the main
    document.getElementById('lootForm').reset();
    
    // Show the main form again (optional)
    window.scrollTo(0, 0);
}
