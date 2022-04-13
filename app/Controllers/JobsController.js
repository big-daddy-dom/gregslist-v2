import { ProxyState } from "../AppState.js";
import { getJobform } from "../components/JobForm.js";
import { jobsService } from "../Services/JobsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawJobs() {
  let jobsCardsTemplate = ''

  ProxyState.jobs.forEach(job => jobsCardsTemplate += job.CardTemplate)

  document.getElementById('listings').innerHTML = `
    <div class="row cars">
      ${jobsCardsTemplate}
    </div>
  `

  document.getElementById('listing-modal-form-slot').innerHTML = getJobform()
  document.getElementById('add-listing-modal-label').innerText = 'Add Job '
}

export class JobsController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('jobs', _drawJobs)
    // _drawJobs()
  }

  addJob() {
    // DO THIS like always
    try {
      event.preventDefault()
      /**@type {HTMLFormElement} */
      // @ts-ignore
      const formElem = event.target
      const formData = {
        company: formElem.company.value,
        position: formElem.position.value,
        
        salary: formElem.salary.value,
        hours: formElem.hours.value,
        duties: formElem.duties.value,
        
        logo: formElem.logo.value,
      }
      jobsService.addJob(formData)

      formElem.reset()
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()

    } catch (error) {
      // show this to the user
      console.error('[ADD_JOB_FORM_ERROR]', error)
      Pop.toast(error.message, 'error')
    }
  }

  drawJobs() {
    _drawJobs()
    // @ts-ignore
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
}