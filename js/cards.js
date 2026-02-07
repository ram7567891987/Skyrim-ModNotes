/* Finding Elements and Creating  Variable */
const btnSave = document.querySelector("[data-modal-save]");

const modList = document.querySelector("#modList");
const modForm = document.querySelector(".modalSection");

const nameInput = document.querySelector("#name");
const linkInput = document.querySelector("#link");
const authorInput = document.querySelector("#auth");
const infoTextArea = document.querySelector("#info");

modForm.addEventListener("submit", (event) => {
  event.preventDefault(); /* Delete some default options in browser */

  // console.log(nameInput.textContent);
  // console.log(nameInput.value);

  const name = nameInput.value;
  const link = linkInput.value;
  const auth = authorInput.value;
  const info = infoTextArea.value;

  const mods = {
    modName: name,
    modLink: link,
    modAuth: auth,
    modInfo: info,
  };

  const modCardHTML = `
    <div class="group border-2 border-slate-500 rounded-2xl p-4 hover:bg-slate-700/30 transition-colors cursor-pointer flex gap-3 min-h-[120px]">
        <div class="w-1/2 border-r-2 border-slate-600 pr-3 flex flex-col justify-center">
            <div class="font-bold text-lg truncate">${mods.modName}</div>
                <div class="text-blue-400 text-xs truncate underline mt-1">
                    ${mods.modLink}
                </div>
                <div class="text-slate-400 text-xs mt-auto pt-2">
                    Auth: ${mods.modAuth}
                </div>
            </div>
            <div class="w-1/2 pl-1">
                <div class="text-xs text-slate-400">Description</div>
                    <p class="text-xs text-slate-300 mt-1 leading-snug line-clamp-4">
                        ${mods.modInfo}
                    </p>
                </div>
            </div>    
            `;

  modList.insertAdjacentHTML('beforeend', modCardHTML);

  nameInput.value = "";
  linkInput.value = "";
  authorInput.value = "";
  infoTextArea.value = "";

  const modal = document.querySelector('[data-modal]');
  modal.classList.add('hidden');
});
// modForm.addEventListener('click', () => {
//     console.log("click!!");

// })
