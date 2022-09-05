import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  static classes = [ "change" ]
  static targets = [ "hide" ] 

  toggle() {
    this.hideTarget.classList.toggle(this.changeClass)
  }
}