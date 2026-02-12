let allModsArray = [];

/* Finding Elements and Creating  Variable */
const btnSave = document.querySelector("[data-modal-save]");

const modList = document.querySelector("#modList");
const modForm = document.querySelector(".modalSection");
const modID = document.querySelector('[data-id]')

const nameInput = document.querySelector("#name");
const linkInput = document.querySelector("#link");
const authorInput = document.querySelector("#auth");
const infoTextArea = document.querySelector("#info");
const inputs = document.querySelectorAll("[data-input]");

// for (let i = 0; i < inputs.length; i++) {
//     const element = inputs[i];
//     element.addEventListener('click', () => {
//         // console.log('meeee!!!!');
//     if (nameInput.trim() === "" || linkInput.trim() === "" || authorInput.trim() ==="" || infoTextArea.trim() === "" ) {
//         alert('Заполните все поля, Шепард!');
//         inputs.classList.add('border-color-red');
//         return;
//     } else {
//         inputs.classList.remove('border-color-red');

//     }
    
//     })
    
// }

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

  const mods = {
    id: allModsArray.length,
    modName: name,
    modLink: link,
    modAuth: auth,
    modInfo: info,
  };

  allModsArray.push(mods);

  const modCardHTML = `
    <div data-id="${mods.id}" class="group border-2 border-slate-500 rounded-2xl p-4 hover:bg-slate-700/30 transition-colors cursor-pointer flex gap-3 min-h-[120px]">
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

//   const modal = document.querySelector('[data-modal]');
  modal.classList.add('hidden');
//   console.log(mods.id);
});



/* 
    Создать глобальный массив: Тебе нужно место, где будут храниться все объекты модов, которые ты создаешь. Назовем его, например, allModsArray. 

    Присвоить ID при создании: Когда ты формируешь объект mods, добавь ему уникальное свойство (например, id: Date.now()). Это будет «личный номер» мода. 

    Передать ID в HTML: В шаблоне карточки (modCardHTML) добавь к главному тегу атрибут data-id="${mods.id}". Теперь каждая карточка на экране «знает», какому объекту в массиве она соответствует.

    Настроить «прослушку» кликов: Повесь обработчик событий click на весь список modList. Внутри используй метод event.target.closest('.mod-card'), чтобы понять, на какую именно карточку нажал пользователь. 🖱️

    Найти данные и отобразить: Зная id нажатой карточки, найди нужный объект в allModsArray и вставь его данные (имя, описание, ссылку) в правую секцию. 
*/

