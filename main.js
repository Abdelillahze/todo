var light = document.getElementById("light");
var drk = document.getElementById("dark");
var sp = document.querySelectorAll("input + span");
var hh = true;
var cr = document.getElementById("create")

setInterval(() => {
    document.getElementById("length").innerHTML = `${document.querySelectorAll(".card .container .text").length} items left`;
    document.getElementById("lengthph").innerHTML = `${document.querySelectorAll(".card .container .text").length} items left`;
    document.getElementById("clear").onclick = function () {
        document.querySelectorAll(".card .container .text").forEach(e => e.parentNode.removeChild(e))
    }

    var to = document.querySelectorAll(".tools span")
    var ine = document.querySelectorAll(".card .text > span");
    var inp = document.querySelectorAll(".card .text")

    for (let k = 0; k < to.length; k++) {
        to[k].addEventListener('click', function() {
            to.forEach(e => e.classList.remove("active"))
            to[k].classList.add('active')
            for (let a = 0; a < ine.length; a++) {
                if (to[k] == to[1]) {
                    inp[a].style.display = 'block'
                    if (ine[a].classList.toString().includes("sp") == true) {
                        inp[a].style.display = 'none';
                    }
                } else if (to[k] == to[2]) {
                    inp[a].style.display = 'block'
                    if (ine[a].classList.toString().includes("sp") == false) {
                        inp[a].style.display = 'none';
                    }
                }  else {
                    inp[a].style.display = 'block';
                }
            }
        })
    }
    
})

cr.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("con").innerHTML += `<div class="text">
    <input type="text" value="${cr.value}" readonly>
    <span></span>
</div>`
        cr.value = '';
    }
}) 

for (let i = 0; i < sp.length; i++) {
    sp[i].addEventListener('click', function() {
        if (hh == true) {
            this.classList.add("sp");
            hh = false;
        } else {
            this.classList.remove("sp");
            hh = true;
        }
    })
}

light.onclick = function() {
    let current = document.documentElement.getAttribute("data-theme");

    if (current == 'light') {
        drk.style.display = 'none';
        light.style.display = 'block';
    } else {
        drk.style.display = 'block';
        light.style.display = 'none';
    }
    document.documentElement.setAttribute("data-theme", current == 'light' ? "dark" : "light")
}

drk.onclick = function() {
    let current = document.documentElement.getAttribute("data-theme");

    if (current == 'light') {
        drk.style.display = 'none';
        light.style.display = 'block';
    } else {
        drk.style.display = 'block';
        light.style.display = 'none';
    }
    document.documentElement.setAttribute("data-theme", current == 'light' ? "dark" : "light")
}


