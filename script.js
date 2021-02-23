class Modal {
	constructor(elem) {
    this._buttonElement = elem;
    
    const modalName = elem.dataset.modalOpen;
    if (!modalName) {
      throw new Error("modal toggle element required data-modal-open.")
    }
    
    this.modalWrapper = document.querySelector(`[data-modal=${modalName}]`);
    if (!this.modalWrapper) {
      throw new Error(`Modal with name ${modalName} is not found,`);
    }
    
    this.modalClose = document.querySelectorAll(`[data-modal-close]`);
    
    console.log(this.modalClose)
    
    this._isOpen = false;
    this._init();
  }
  
  _init() {
    this._buttonElement.addEventListener('click', (event) => {
      this._openModal();
    });
    
    if (!this.modalClose) return;
    
    this.modalClose.forEach(el => el.addEventListener('click', event => {
      this._closeModal();
    }));
  }
  
  get open() {
    return this._isOpen;
  }
  set open(value) {
    this._isOpen = value;
  }
  
  _openModal() {
    this.modalWrapper.style.display = 'flex';
    this.open = true;
  }
  _closeModal() {
    this.modalWrapper.style.display = 'none';
    this.open = false;
  }
}

function manage(txt) {
  var bt = document.getElementById('send-contact-message');
  var ele = document.getElementsByClassName('input'); 
  
  for (i = 0; i < ele.length; i++) {

    if ( ele[i].value == '') {
      bt.disabled = true;    
      return false;
    }
    else {
      bt.disabled = false;  
    }
  }
} 

document.addEventListener('DOMContentLoaded', () => {
  let buttonElement = document.querySelector('#modal-toggle');
	let modal = new Modal(buttonElement);
  
  
  let contactMessageButton = document.querySelector('#send-contact-message');
  
  contactMessageButton.addEventListener('click', (event) => {
    event.preventDefault();
    const form = event.target.closest('form');
    var formData = new FormData(form)

	
    const successView = form.parentElement.querySelector('.form-success');
    if (successView) {
     form.style.display = 'none';
     successView.style.display = 'block'; 
	 form.parentElement.querySelector('h2').style.display = 'none';
    }
  });
  
  
});