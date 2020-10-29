/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! namespace exports */
/*! export addlistEnter [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addlistEnter": () => /* binding */ addlistEnter
/* harmony export */ });
head.insertAdjacentHTML('beforeend',`<button id="yes" >Yes</button>`)
yes.style.display="none";

// export function addlist(){
//     add.addEventListener('click',function(){
//         list.insertAdjacentHTML('beforeend',`
//         <li>
//         <input type="checkbox" class="checkbox"><label for="checkbox"> ${text.value} </label>
//         <button class"edit">edit</button>
//         <button class="del"><i class="fa fa-trash"></i></button>
//         </li>`)
//         text.value = ""
//         for(let i=0;i<window.del.length;i++){
//             window.del[i].addEventListener('click',function(e){
//                 e.target.parentElement.remove()
//             })
//         }
//     })
    
// }

function addlistEnter(){
    var name = []
    text.addEventListener("keyup",function(e){
        if(e.keyCode ===13){
            list.insertAdjacentHTML('beforeend',`
            <li>
            <input type="checkbox" class="checkbox"><label for="checkbox"><p class="content"> ${text.value} </p></label>
            <button class="edit">edit</button>
            <button class="del">x</button>
            </li>`)
            text.value = ""
            name.push(text.value)
        }
        deletelistEnter()
        editlistEnter()
    })
    function deletelistEnter(){
        for(let j=0;j<window.del.length;j++){
            window.del[j].addEventListener('click',function(e){
                e.target.parentElement.remove()
            })
        }
    }
    function editlistEnter(){
        for(let k=0;k<window.edit.length;k++){
            window.edit[k].addEventListener('click',function(e){
                console.log(e.target)
                let p=document.getElementsByTagName("p")
                console.log(p[k].innerHTML)
                text.value = name[k]
                yes.style.display = "block";                     
                yes.addEventListener('click',function(){
                    window.content[k].innerHTML = text.value
                    yes.style.display = "none";
                })
            })
        }
    }
     
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
const {addlistEnter} = __webpack_require__(/*! ./functions */ "./src/functions.js")

let head = document.getElementById("head")
let text = document.getElementById("text")
let add = document.getElementById("add")
let list = document.getElementById("list")
window.del = document.getElementsByClassName("del")
window.edit = document.getElementsByClassName("edit")
window.content = document.getElementsByClassName("content")
let yes= document.getElementById("yes")



addlistEnter()

})();

/******/ })()
;
//# sourceMappingURL=somefunnystuff.js.map