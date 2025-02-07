let iconClick = document.querySelector('.icon-hamberger')
let  media = document.querySelector('.media')

let flag = true

iconClick.addEventListener('click', event =>{
console.log('dkjf')
if(flag){
    media.style.cssText = 'transform: translateX(0px);'
flag = false
}
else{
 media.style.cssText = 'transform: translateX(-250px);'
    flag = true 
}
})





