document.querySelectorAll('.input-row').forEach(row => {
    const input = row.querySelector('input, textarea');
    const label = row.querySelector('label');

    if (input) {
        // Apply different transformations based on the input type
        input.addEventListener('focus', () => {
            row.style.border = '2px solid black';
            if (input.tagName.toLowerCase() === 'input') {
                label.style.transform = 'translate(-8px,-12px) scale(0.65)';
            } else if (input.tagName.toLowerCase() === 'textarea') {
                label.style.transform = 'translate(-11px,-20px) scale(0.65)'; // Adjust as needed for textarea
                input.style.paddingBlockStart = '0';
            }
            label.style.transition = 'transform 0.3s ease';
        });

        // Reset the label if the field is empty when it loses focus
        input.addEventListener('blur', () => {
            row.style.border = '1px solid rgba(26, 26, 26, 0.12)';
            if (input.value === '') {
                label.style.transform = 'scale(1) translate(0, 0)';
            }
        });
    }
});
const li = document.getElementsByClassName('list-btn');
let s = -1;
for(let i=0;i<li.length;i++) {
    li[i].addEventListener('click',()=> {
        if(s!=-1) {
            li[s].style.borderLeft= "2px solid #f2f2f2";
            li[s].firstChild.style.color= "#737373";
            console.log(li);
        }
        li[i].style.borderLeft= "2px solid #737373";
        li[i].firstChild.style.color = "rgb(26,26,26)"
        s = i;
        console.log(s);
    })
}
const tableContent = document.getElementById('table-content');
const dropdown = document.getElementById('content-list-dropdown');
const tableArrow = document.getElementById('table-arrow');
let isRotate = false;
tableContent.addEventListener('click',()=> {
    if(isRotate)
    {
        tableArrow.style.transform = "rotate(135deg)";
        dropdown.style.display = "none";
        tableContent.style.borderRadius= "10px";

    }
    else
    {
        tableArrow.style.transform = "rotate(-45deg)";
        dropdown.style.display = "block";
        tableContent.style.borderBottomRightRadius = "0px";
        tableContent.style.borderBottomLeftRadius = "0px";    
    } 
    isRotate = !isRotate
})
const dropdownList = document.getElementsByClassName('dropdown-list-btn');
let k = -1;
for(let i=0;i<dropdownList.length;i++) {
    dropdownList[i].addEventListener('click',()=> {
        if(k!=-1) {
            dropdownList[k].firstChild.style.color= "#737373";
            console.log(dropdownList);
        }
        dropdownList[i].firstChild.style.color = "rgb(26,26,26)"
        k = i;
        console.log(k);
    })
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}