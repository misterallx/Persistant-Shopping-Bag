
/*
class List_item {
  constructor(curUrl, curTitle) {
    this.url = curUrl;
    this.title = curTitle;
    this.listItem = document.createElement("li")
  }
}*/
//console.log(curUrl)
//console.log(curTitle)
const storage = {

}


function add_item() {
  let curUrl = window.location.href
  let curTitle = document.title

  let item_url = document.createElement("a")
  let list_item = document.createElement("li");
  item_url.href = curUrl;
  item_url.innerHTML = curTitle;
  list_item.appendChild(item_url);
  document.querySelector('ol').append(list_item)


  console.log('Running function!')
}
