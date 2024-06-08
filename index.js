document.getElementById("closenav").addEventListener("click", function(){
    document.getElementById("offer-box").style.display = "none"
})

const container = document.querySelector('.container')
const btns = document.querySelectorAll('.btn')
const imagesList = ["slide1", "slide2", "slide3"]

let index = 0
btns.forEach((button)=>{
    button.addEventListener('click', ()=>{
        if(button.classList.contains('.btn-left')){
            index--
            if(index<0){
                index = imagesList.length-1
            }
            container.style.background = `url("images/${imagesList[index]}.jpg" center/cover fixed no-repeat)`
        }
        else{
            index++
            if(index===imagesList.length){
                index = 0
            }
            container.style.background = `url("images/${imagesList[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})