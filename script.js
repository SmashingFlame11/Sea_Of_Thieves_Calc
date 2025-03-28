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
        <p>Faction 1 Loot: ${totalLootFaction1}</p>
        <p>Faction 2 Loot: ${totalLootFaction2}</p>
        <p>Overall Total Loot: ${totalLoot}</p>
    `;
    document.getElementById('result').innerHTML = resultText;
});
