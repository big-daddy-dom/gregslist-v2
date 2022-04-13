import {House} from "../Models/House.js"



export function getHouseForm(house) {
 
 
  // @ts-ignore
  house = house || new House({})
  return /*html*/ `
  <form onsubmit="app.housesController.handleSubmit('${house.id}') ">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="bedrooms" class="form-label">Rooms</label>
        <input type="number" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="bedrooms"
          placeholder="Rooms..." required value="${house.bedrooms}">
      </div>
      <div>
        <label for="bathrooms" class="form-label">Bathrooms</label>
        <input type="number" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="bathrooms"
          placeholder="Bathrooms..." required value="${house.bathrooms}">
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="levels" class="form-label">levels</label>
        <input type="number" class="form-control" name="levels" id="levels" aria-describedby="levels"
          placeholder="levels"  required value="${house.levels}">
      </div>
     
      <div>
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
          placeholder="Price..." min='1' required value="${house.price}">
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="img" class="form-label">Image Url</label>
        <input type="url" class="form-control" name="img" id="img" aria-describedby="img"
          placeholder="Image Url..." required value = "${house.imgUrl}">
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="year" class="form-label">Year Built</label>
        <input type="number" class="form-control" name="year" id="year" aria-describedby="year"
          placeholder="Year..." required value = "${house.year}">
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="description" class="form-label">Description</label>
        <textarea type="text" class="form-control" name="description" id="description"
          aria-describedby="description" placeholder="Description..." min="5" max="250" required> ${house.description} </textarea>
      </div>
    </div>
    
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">${house.id ? 'Save' : 'Create'}</button>
    </div>
  </form>`
}
