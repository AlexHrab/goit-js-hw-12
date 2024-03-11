import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const loader = document.querySelector(".loader")
import {getPicture} from "./js/pixabay-api"
import {rendering} from "./js/render-function"
export const list = document.querySelector(".gallery")
const form = document.querySelector("form")
const input = document.querySelector("input")

function showLoader() {
  loader.classList.remove("is-hidden");
  }

  function hideLoader() {
    loader.classList.add("is-hidden");
    }

const modal = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: '250'
})

form.addEventListener("submit", forListener)

function forListener(e){
  e.preventDefault()
  showLoader()
  list.innerHTML = ""
   const inputValue = e.currentTarget.elements.field.value
 if(inputValue){ 
  getPicture(inputValue).then((result) =>{ 
    if(result.total !== 0){
    rendering(result.hits)
    modal.refresh()
    input.value = ""
 }else{
  iziToast.warning({
    message: 'Sorry, there are no images matching your search query. Please try again!', position: "center", close: false, closeOnClick: true, progressBar: false, messageSize: 30, timeout: false, displayMode: 1
})
input.value = ""
 }
})
     .catch(eror => {
      iziToast.warning({
        message: 'Ups, something wrong bad. Please try again!', position: "center", close: false, closeOnClick: true, progressBar: false, messageSize: 30, timeout: false, displayMode: 1
    })   
     }).finally(() => {hideLoader()})
     
}else{iziToast.warning({
  message: 'Please enter the name of the picture!', position: "center", close: false, closeOnClick: true, progressBar: false, messageSize: 30, timeout: false, displayMode: 1
})
}
}








  






