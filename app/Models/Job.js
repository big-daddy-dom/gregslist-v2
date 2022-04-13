import { generateId } from "../Utils/generateId.js";
export class Job {
    constructor({
        id = generateId(),
        company,
        position,
        duties,
        salary,
        hours,
        requirements,
        description,
        logo,
    }){
// if (!company || !position || !salary){
//     throw new Error("You can't add a job without a salary, position, or company");

// }
if (salary <= 30000) {
throw new Error ("I CAN'T LIVE OFF THIS SHIT");
}
this.id = id;
this.company=company;
this.position=position;
this.duties=duties;
this.salary=salary;
this.hours=hours;
this.requirements=requirements;
this.description=description;
this.logo=logo;
    }
    get CardTemplate() {
        return /*html*/ `
        <div class="job col-md-4 p-4">
          <div class="bg-white shadow rounded">
            <img class="w-100 rounded-top" src="${this.logo}" alt="">
            <div class="p-3">
              <p class="text-center uppercase"><b>${this.company} - ${this.position} - $${this.salary}</b></p>
              <p class="m-0">Duties: ${this.duties}</p>
            </div>
            <div class="p-3 d-flex justify-content-between align-items-center">
              <p class="m-0">Hours Per Week: ${this.hours}</p>
              
              <i class="mdi mdi-delete selectable" onclick="app.carsController.removeCar('${this.id}')"></i>
            </div>
          </div>
        </div>`
      }

}