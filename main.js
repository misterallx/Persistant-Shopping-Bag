
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


let curTitle; //access to Title and Url
let curUrl;
let newVal;
let strUrl;
chrome.tabs.query({active: true, currentWindow: true }, function (tab) {
curTitle = tab[0].title.toString();
curUrl = tab[0].url;
strUrl = '';
  for (let i = 0; i < curUrl.length; i++) {
    if (curUrl[i] === '/') {
      strUrl += '\\'
    }
    else {
      strUrl += curUrl[i]
    }
  }
newVal = curTitle + strUrl;
})

  chrome.storage.sync.set({'curUrl': newVal}, function() {
        });

chrome.storage.sync.get(null, function(data2) {
  console.log(data2, 'data2')
})
/*
let allLinks = {} //Creating accessible object in Chrome Storage
chrome.storage.sync.get(['curUrl'], function(data) {
  console.log('Im Second')
  if (data) {
    console.log(data, 'Data')
    allLinks = data;
  } else {
    allLinks[Object.keys(allLinks).length] = [curUrl, curTitle];
    console.log(allLinks[Object.keys(allLinks).length], 'Long Console Log')
  }
})
*/
/*chrome.storage.sync.set({'allLinks': allLinks}, function() {
  // Notify that we saved.
  console.log('Settings saved');
});
*/




/*
  chrome.storage.sync.get(null, function(items) {
    if (Object.keys(items).length > 0) {
  Object.keys(items).forEach(element => {
    let curUrl;
    let curTitle;
    let item_url = document.createElement("a");
    let list_item = document.createElement("li");
    console.log(element, 'Element')
    chrome.storage.sync.get(['element'], function(result){
      console.log(result, 'REsult')
      item_url.href = result.element
    //  item_url.innerHTML = curTitle;
      console.log(element[0], 'ELEMENT')
    //  list_item.appendChild(item_url);
    })
  })
  }
})





document.querySelector('#add_link').addEventListener("click", function(){
      chrome.storage.sync.set({curUrl: [curUrl, curTitle]}, function() {
        console.log(chrome.storage)
        console.log(curUrl, curTitle, 'URL AND TITLE')
        let item_url = document.createElement("a")
        let list_item = document.createElement("li");
        item_url.href = curUrl;
        item_url.innerHTML = curTitle;
        list_item.appendChild(item_url);
        document.querySelector('ol').append(list_item)
       });
    });
*/
