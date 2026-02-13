let allModsArray = [];

/* Finding Elements and Creating  Variable */
const btnSave = document.querySelector("[data-modal-save]");

const modList = document.querySelector("#modList");
const modForm = document.querySelector(".modalSection");
const modID = document.querySelector("[data-id]");

const nameInput = document.querySelector("#name");
const linkInput = document.querySelector("#link");
const authorInput = document.querySelector("#auth");
const infoTextArea = document.querySelector("#info");
const inputs = document.querySelectorAll("[data-input]");

// inputs.addEventListener('click', () => {
//     console.log("meeeee!!");
// });

// selectedMod.addEventListener('click', () => {
//     console.log("click!!!");

// })

modForm.addEventListener("submit", (event) => {
  event.preventDefault(); /* Delete some default options in browser */

  // console.log(nameInput.textContent);
  // console.log(nameInput.value);

  const name = nameInput.value;
  const link = linkInput.value;
  const auth = authorInput.value;
  const info = infoTextArea.value;

  if (
    name.trim() === "" ||
    link.trim() === "" ||
    auth.trim() === "" ||
    info.trim() === ""
  ) {
    alert("You need to write something!");
    return;
  }

  const mods = {
    id: allModsArray.length,
    modName: name,
    modLink: link,
    modAuth: auth,
    modInfo: info,
  };

  allModsArray.push(mods);
  // <div data-id="${mods.id}" class="group border-2 border-slate-500 rounded-2xl p-4 hover:bg-slate-700/30 transition-colors cursor-pointer flex gap-3 min-h-[120px]">
  //     <div class="w-1/2 border-r-2 border-slate-600 pr-3 flex flex-col justify-center">
  //         <div class="font-bold text-lg truncate">${mods.modName}</div>
  //             <div class="text-blue-400 text-xs truncate underline mt-1">
  //                 ${mods.modLink}
  //             </div>
  //             <div class="text-slate-400 text-xs mt-auto pt-2">
  //                 Auth: ${mods.modAuth}
  //             </div>
  //         </div>
  //         <div class="w-1/2 pl-1">
  //             <div class="text-xs text-slate-400">Description</div>
  //                 <p class="text-xs text-slate-300 mt-1 leading-snug line-clamp-4">
  //                     ${mods.modInfo}
  //                 </p>
  //             </div>
  //         </div>    
  
  const modCardHTML = `

            <div
            data-id="${mods.id}"
            class="group relative border-2 border-slate-500 rounded-2xl p-4 bg-slate-800/40 transition-colors flex gap-3 min-h-[120px]"
          >
            <div class="w-1/2 border-r-2 border-slate-600 pr-3 flex gap-3">
              <div
                class="flex-grow flex flex-col justify-center cursor-pointer overflow-hidden"
              >
                <div class="font-bold text-lg truncate text-white">${mods.modName}</div>
                <div class="text-blue-400 text-xs truncate underline mt-1">
                  ${mods.modLink}
                </div>
                <div class="text-slate-400 text-xs mt-2">Auth: ${mods.modAuth}</div>
              </div>

              <div class="flex flex-col gap-2 justify-center">
                <button
                  class="p-2 bg-slate-700/60 border border-slate-500 rounded-lg text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-400 active:scale-95 transition-all shadow-md"
                  title="Edit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>

                <button
                  class="p-2 bg-slate-700/60 border border-slate-500 rounded-lg text-red-400 hover:bg-red-500 hover:text-white hover:border-red-400 active:scale-95 transition-all shadow-md"
                  title="Delete"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="w-1/2 pl-1 cursor-pointer">
              <div class="text-xs text-slate-500 uppercase font-semibold">
                Description
              </div>
              <p class="text-xs text-slate-300 mt-1 leading-snug line-clamp-4">
                ${mods.modInfo}
              </p>
            </div>
          </div>
            `;

  modList.insertAdjacentHTML("beforeend", modCardHTML);

  nameInput.value = "";
  linkInput.value = "";
  authorInput.value = "";
  infoTextArea.value = "";

  //   const modal = document.querySelector('[data-modal]');
  modal.classList.add("hidden");
  //   console.log(mods.id);
});

/* 
    Создать глобальный массив: Тебе нужно место, где будут храниться все объекты модов, которые ты создаешь. Назовем его, например, allModsArray. 

    Присвоить ID при создании: Когда ты формируешь объект mods, добавь ему уникальное свойство (например, id: Date.now()). Это будет «личный номер» мода. 

    Передать ID в HTML: В шаблоне карточки (modCardHTML) добавь к главному тегу атрибут data-id="${mods.id}". Теперь каждая карточка на экране «знает», какому объекту в массиве она соответствует.

    Настроить «прослушку» кликов: Повесь обработчик событий click на весь список modList. Внутри используй метод event.target.closest('.mod-card'), чтобы понять, на какую именно карточку нажал пользователь. 🖱️

    Найти данные и отобразить: Зная id нажатой карточки, найди нужный объект в allModsArray и вставь его данные (имя, описание, ссылку) в правую секцию. 
*/
