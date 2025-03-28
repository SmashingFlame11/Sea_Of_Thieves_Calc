// Loot values for each chest
const lootValues = {
    gold_hoarder: 100, // Example value
    castaway: 50,      // Example value
    reaper: 200,       // Example value
};

// Function to update loot fields based on faction
function updateLootFields() {
    const faction = document.getElementById("faction").value;
    const lootFields = document.getElementById("lootFields");

    // Hide loot fields initially
    lootFields.style.display = "block";

    // Based on the selected faction, show relevant fields
    if (faction === "gold_hoarder") {
        document.getElementById("gold_hoarder").style.display = "inline-block";
        document.getElementById("castaway").style.display = "none";
        document.getElementById("reaper").style.display = "none";
    } else if (faction === "reaper") {
        document.getElementById("gold_hoarder").style.display = "none";
        document.getElementById("castaway").style.display = "none";
        document.getElementById("reaper").style.display = "inline-block";
    } else {
        document.getElementById("gold_hoarder").style.display = "inline-block";
        document.getElementById("castaway").style.display = "inline-block";
        document.getElementById("reaper").style.display = "inline-block";
    }
}

// Function to calculate the loot value based on the input values
function calculateLoot() {
    const faction = document.getElementById("faction").value;
    let totalLoot = 0;

    // Get the number of chests from input fields
    const castawayCount = parseInt(document.getElementById("castaway").value) || 0;
    const goldHoarderCount = parseInt(document.getElementById("gold_hoarder").value) || 0;
    const reaperCount = parseInt(document.getElementById("reaper").value) || 0;

    // Calculate loot based on the faction
    if (faction === "gold_hoarder") {
        totalLoot = goldHoarderCount * lootValues.gold_hoarder;
    } else if (faction === "reaper") {
        totalLoot = reaperCount * lootValues.reaper;
    } else {
        totalLoot = (castawayCount * lootValues.castaway) +
                    (goldHoarderCount * lootValues.gold_hoarder) +
                    (reaperCount * lootValues.reaper);
    }

    // Display the result
    document.getElementById("lootValue").innerText = totalLoot;
}
