import { generateId } from "../Utils/generateId.js";

export class House {
  constructor({
 id,
    bedrooms,
    bathrooms,
    levels,
    description,
    price,
    imgUrl,
    year,
  }) {
    if (!price || !bedrooms || !bathrooms) {
      throw new Error(
        "You can't add a house without a price, bedrooms and sq footage");
    }
    if (price <= 0) {
      throw new Error("Where my money");
    }
    this.id = id;
    this.bathrooms = bathrooms;
    this.bedrooms = bedrooms;
    this.description = description || "";
    this.levels = levels || "";
    this.price = price;
    this.imgUrl = imgUrl || "";
    this.year = year || "";
  }
  get CardTemplate() {
    return /*html*/ `
    <div class="house col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.imgUrl}" alt="">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.bedrooms} - ${this.bathrooms} - ${this.levels}</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
          <div class="d-flex align-items-center">
            <p class="m-0">Color:</p>
            <div> ${this.year}div>
          </div>
          <i class="mdi mdi-delete selectable" onclick="app.housesController.removeHouse('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }
}

