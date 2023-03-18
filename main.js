let form = document.getElementById('form')
let item = document.getElementById('item')
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  let name = document.getElementById('name').value
  let amount = document.getElementById('amount').value
  let des = document.getElementById('des').value
  let cat = document.getElementById('cat').value
  let obj ={
'name':name,
 'amount':amount,
 'des':des,
 'cat':cat
  }
  
  window.localStorage.setItem(obj.name, JSON.stringify(obj))
  showOndisplay()
  
})

// Refresh on the screen
window.addEventListener("DOMContentLoaded",()=>{
showOndisplay()
})

function showOndisplay(){
  let list = document.getElementById('item')
  while (list.lastChild) {
    list.removeChild(list.lastChild);
  }
  let localdata = Object.keys(localStorage)
localdata.forEach((ele)=>{
  let object = window.localStorage.getItem(ele)
  let obj =JSON.parse(object)
  let list = document.getElementById('item')
  let li = document.createElement('li');
  li.className = "list-group-item"
  li.textContent = `Name : ${obj.name}  Expences Amount : ${obj.amount}  Descriptation :${obj.des} Catagory : ${obj.cat}`
  // create Delete Button
  let deletebutton = document.createElement('button');
  deletebutton.textContent ='Delete'
  deletebutton.className ='btn btn-danger float-right'
  // Create Edit Button
  let editbtn = document.createElement('button')
  editbtn.textContent = 'Edit'
  editbtn.className ='btn btn-primary float-right'
  deletebutton.onclick=()=>{
      localStorage.removeItem(obj.name)
      list.removeChild(li)
  }
  editbtn.onclick=()=>{
      localStorage.removeItem(obj.name)
      list.removeChild(li)
      let name = document.getElementById('name')
      let amount = document.getElementById('amount')
      let des = document.getElementById('des')
      let cat = document.getElementById('cat')
      name.value = obj.name
      amount.value = obj.amount
      des.value = obj.des
      cat.value = obj.cat
  }
  li.appendChild(editbtn)
  li.appendChild(deletebutton)
  list.appendChild(li)
})
}