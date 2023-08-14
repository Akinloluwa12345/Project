const submitBtn= document.getElementById('submit')
const item= document.getElementById('item')
const form= document.querySelector('.form')

const addFunc= function(e){
    e.preventDefault()

    const htmlEl= `<ul> 
    <li class='list-class'>
    <h3>${item.value}</h3>  
    <button class='btn-done'>Done</button> 
    <button class='btn-done'>X</button></li> 
    </ul>`

    function delEl(e){
        e.preventDefault()
        this.parentElement.remove()
    }

    form.insertAdjacentHTML("beforeend", htmlEl )
    item.value=''
    document.querySelectorAll('.btn-done').forEach(el=>el.addEventListener('click',delEl))
}
submitBtn.addEventListener('click', addFunc)