const btnLike1 = document.getElementById("btnLike1")
const  countLike1 = document.getElementById("countLikes1")
const btnLike2 = document.getElementById("btnLike2")
const  countLike2 = document.getElementById("countLikes2")

function clikeLike1(){
    let totalLikes1 = ;parseInt(countLikes1.value) + 1
    countLikes1.textContent = totalLikes1.toString()


}

function clikeLike2(){
    let totalLikes2 = ;parseInt(countLikes2.value) + 2
    countLikes2.textContent = totalLikes2.toString()
    
btnLike1.addEventListener("Click",ClikeLike1)
btnLike2.addEventListener("Click",ClikeLike2)
