//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push, onValue, remove  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL:" https://realtime-81ff8-default-rtdb.europe-west1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const reference = ref(database, "foods")


// const shopBtn = document.getElementById('shopBtn')
// const inputEl = document.getElementById('inputEl')
// const shopListEl = document.getElementById('shopListEl')


// shopBtn.addEventListener('click', function(){
//     let inputElValue = inputEl.value
//     push(reference, inputElValue)
    
// })

// onValue(reference, function(snapshot){
//     let arrayValuesData = Object.entries(snapshot.val()) 
//     clearList()
//     for (let i = 0; i < arrayValuesData.length; i++){
//         let itemvalues = arrayValuesData[i]
//         let itemvaluesID = arrayValuesData[0]
//         let itemvaluesvalue= arrayValuesData[1]
//         addElementToList(itemvalues)
//     }

// })

// function clearList(){
//     shopListEl.innerHTML = ""
// }


// function addElementToList(arrayValues){
//     let itemId = arrayValues[0]
//     let itemValues = arrayValues[1]

//     let ElemetLi = document.createElement('li')

//     ElemetLi.textContent = itemValues

    

//     ElemetLi.addEventListener('click', function(){
//         let removeListItem = ref(database, `foods/${itemId}`)
//         remove(removeListItem)
//     })

//     shopListEl.append(ElemetLi)
   
// }

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

