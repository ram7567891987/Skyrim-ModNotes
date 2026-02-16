/* Finding ALLLL id elements with name Full... etc */
const fullName = document.querySelector('#fullModName');
const fullLink = document.querySelector('#fullModLink');
const fullAuth = document.querySelector('#fullModAuth');
const fullInfo = document.querySelector('#fullModInfo');



modList.addEventListener("click", (event) => {
    const card = event.target.closest('[data-id]');
    
    if (card) {
        // const allCards = modList.querySelectorAll(".group");
        // allCards.forEach((item) => {
        //     item.classList.remove("border-blue-500");
        // });
        // card.classList.add("border-blue-500");

        const id = Number(card.dataset.id);
        const selectedMod = allModsArray.find((element) => element.id === id)

        updateShowingMod(selectedMod)
        // const firstCard = modList.querySelector(".group")
        // fullName.textContent = selectedMod.modName;
        // fullInfo.textContent = selectedMod.modInfo;
        // fullAuth.textContent = selectedMod.modAuth;

        // fullLink.href = selectedMod.modLink;
        // fullLink.textContent = "Open on Nexus";
    }
});

function updateShowingMod(mod) {
        fullName.textContent = mod.modName;
        fullInfo.textContent = mod.modInfo;
        fullAuth.textContent = mod.modAuth;

        fullLink.href = mod.modLink;
        fullLink.textContent = "Open on Nexus";
}

renderAllMods()

if (allModsArray.length > 0) { /* Фикс проблемы с показом инфы о карточках в случае удаления или отсутствия */
    updateShowingMod(allModsArray[0])
} else {
        fullName.textContent = ""
        fullInfo.textContent = ""
        fullAuth.textContent = ""

        fullLink.href = ""
        fullLink.textContent = "No Mods Available";
}


// selectedMod.addEventListener('click', () => {
//     console.log("click!!!");
    
// })

