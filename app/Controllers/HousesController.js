import { ProxyState } from "../AppState.js";
import { getHouseform } from "../components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawHouses() {
  let houseCardsTemplate = ''

  ProxyState.houses.forEach(house => houseCardsTemplate += house.CardTemplate)

  document.getElementById("listings").innerHTML = `
    <div class="row houses">
      ${houseCardsTemplate}
    </div>
  `

  document.getElementById("listing-modal-form-slot").innerHTML = getHouseform();
  document.getElementById("add-listing-modal-label").innerText = "Add House 🏠";
}

async function _getAllHouses(){
  try {
    await housesService.getAllHouses()
  } catch (error) {
    console.error(error)
    Pop.toast(error.message, 'error')
  }
}

export class HousesController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('houses', _drawHouses);
    _getAllHouses
  }

  async handleSubmit(id) {
    // DO THIS like always
    try {
      event.preventDefault();
      /**@type {HTMLFormElement} */
      //@ts-ignore
      const formElem = event.target;
      const formData = {
        sqfootage: formElem.sqfootage.value,
        rooms: formElem.rooms.value,
        price: formElem.price.value,
        color: formElem.color.value,
        yearbuilt: formElem.yearbuilt.value,
        description: formElem.description.value,
        img: formElem.img.value,
      }
      if (id == 'undefined'){

        await housesService.addHouse(formData)
      }else{
        formData.id = id
        await housesService.editHouse(formData)

      }

      formElem.reset()
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()

      
      
    } catch (error) {
      console.error("[ADD_HOUSE_FORM_ERROR]", error);
      Pop.toast(error.message, "error")
    }
  }
  drawHouses() {
    _drawHouses()
    // REVIEW [epic=Mark] How could we refactor this?
    // @ts-ignore
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
openEditor(id){
  let house = ProxyState.houses.find(h=>h.id==id)
  if (!house) {
    Pop.toast("Invalid House Id", 'error')
    return
  }
  document.getElementById("listing-modal-form-slot").innerHTML = getHouseform(house);
  // @ts-ignore
  bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).show()


}

async removeHouse(id){
  try {
    if (await Pop.confirm()){
      await housesService.removeHouse(id)
    }
  } catch (error) {
    console.error(error)
    Pop.toast(error.message, "error")
  }
}

}
