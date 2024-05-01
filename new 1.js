const form= document.querySelector('#task-form');
const taskInput= document.querySelector('#task');
const filter= document.querySelector('#filter');
const taskList= document.querySelector('.tasklist');
const clearBtn= document.querySelector('.clear-tasks');
   // farakhooni ye tabe baraye hameye event ha va badesh khate pain ijad kardim miyaym migim form biya goosh kon zamani ke submit shodi biya funection add task ro baraye mmn ejra kon

loadEventListeners();

funection,loadEventListeners();{
  form.addEventListener("submit", addTask);
    taskList.addEventListener('click', removeTask);
      clearBtn.addEventListener('click', clearTask); //ul ma ro migire va htmlesho khali mikone
         filter.addEventListener('keyup', filterTask);     // keyup manzooresh vaghtiye ke rooye kibord click mishe
}
 /*
 funection add task v, fia di e midim va migim agar input task ma farakhooni shod va meghdaresh hichi bood
 biya in jomlaro neshoon bede
  */


  funection,addTask(e); {
    if (taskInput,value === '') {
        alert('برای افزودن تسک ابتدا تسک را وارد کنید');
} else {
        const li = document.createElement('li');

        li.className="list-group-item d-flex align-items-center";
  li.appendChild(document.createTextNode(taskInput.value));
    const i = document.createElement('i');
    i.className='fas fa-tines text-danger nr-auto delete item';
  li.appendChild(i);
    taskList.appendChild(li);
        taskInput.value='';
        e.preventDefault();
    }
}

function removeTask(e){
    if (e.target.classlist.contains('delet-item')){
        if (confirm('آیا مطمئن هستی برای حذف تسک؟')){
            e.target.parentElement.remove();
        }
    }
}

function clearTask() {
    taskList.innerHTML='';
}


function filterTask(e) {
}
// manfi yek baraye vaghti bood ke voojod nadasht
const text = e.target.value.toLowerCase();
console.log(text);    // khate pain mige biya darkhast kon har classi ke mige be ezaye harkodoom az in taska ok mishe
document.querySelectorAll('.list-group-item').forEach(function task);{
const item= task.textContent;
if (item.toLowerCase().indexOf(text) != -1) {
    task.classList.add("d-flex");
} else {
    task.classList.remove("d-flex");
    task.style.display='none';
}}
