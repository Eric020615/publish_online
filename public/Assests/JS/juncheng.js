// select the element with class wrapper and it return a node (div)
const circular_slider = document.querySelector('.wrapper'),
    // select the element with class name slides and it return a nodelist
    slides = document.querySelectorAll('.slides'),
    member_name = document.querySelector('.member-name'),
    descriptions_item = document.querySelectorAll('.descriptions_item'),
    images = document.querySelectorAll('.slides img');

// loopping the nodelist
slides.forEach((slide,i)=>{
    
    slide.onclick = ()=>{
        circular_slider.style.transform= `rotateZ(-${360 / 5 * (i + 4)}deg)`;
        member_name.classList.remove('active');
        setTimeout(()=>{
            member_name.textContent = descriptions_item[i].querySelector('h1').textContent
            member_name.classList.add('active');
        }, 800);
        images.forEach((img,i)=>{
            img.style.setProperty('--img-no', 2);
            img.classList.remove('active');
            descriptions_item[i].classList.remove('active');
        })
        descriptions_item[i].classList.add('active');
        slide.querySelector('img').classList.add('active');
    }
});

function login(){
    open("login.hbs","_self");
}

function register(){
    open("signup.hbs","_self");
}

const text_show = document.querySelectorAll(".text-show");
const part_show = document.querySelectorAll(".part-show");
for(let x in text_show){
    text_show[x].style.color = "#ff0000";
    text_show[x].addEventListener('click', () => {
        text_show[x].classList.add("show");
        part_show[x].classList.add("show");
    });
}


