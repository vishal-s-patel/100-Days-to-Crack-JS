const root = document.getElementById("root");

var count = 0;
function add() {
    if (count == 0) {
        create();
    }
    count += 1;
}


function create(timer = 2) {
    const el = document.createElement("div");
    el.classList.add('progress-bar');
    el.style.transition = `width ${timer}s ease`;

    root.appendChild(el);
    setTimeout(() => {
        el.classList.add('fullwidth');
    },500);


    el.addEventListener('transitionend', () => {
        count -= 1;
        if (count >= 1) {
            create();
        }
    });

    el.removeEventListener('transitionend', () => {});
    
}