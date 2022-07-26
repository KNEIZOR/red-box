export default class Modal {
    constructor (modal) {
        this.modal = modal
    }

    openModal(modal) {
        modal.current.classList.add("modal")
    }
    
    closeModal(modal) {
        modal.current.classList.remove("modal")
    }
}