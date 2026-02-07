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
        const selectedMod = allModsArray[id];

        fullName.textContent = selectedMod.modName;
        fullName.textContent = selectedMod.modName;

        fullInfo.textContent = selectedMod.modInfo;
        fullAuth.textContent = selectedMod.modAuth;

        fullLink.href = selectedMod.modLink;
        fullLink.textContent = "Open on Nexus";
    }
});
// selectedMod.addEventListener('click', () => {
//     console.log("click!!!");
    
// })

