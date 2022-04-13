export function getJobform() {
    return /*html*/ `
    <form onsubmit="app.jobsController.addJob()">
      <div class="mb-3 d-flex justify-content-between">
        <div>
          <label for="company" class="form-label">Company</label>
          <input type="text" class="form-control" name="company" id="company" aria-describedby="company"
            placeholder="company..." required>
        </div>
        <div>
          <label for="position" class="form-label">Position</label>
          <input type="text" class="form-control" name="position" id="position" aria-describedby="position"
            placeholder="position..." required>
        </div>
      </div>
      <div class="mb-3 d-flex justify-content-between">
        <div>
          <label for="salary" class="form-label">Year</label>
          <input type="number" class="form-control" name="salary" id="salary" aria-describedby="salary"
            placeholder="Salary..." min="20000" max="999999" required>
        </div>
        <div>
          <label for="hours" class="form-label">Hours</label>
          <input type="number" class="form-control" name="hours" id="hours" aria-describedby="hours" required>
        </div>
        
      </div>
      <div class="mb-3">
        <div>
          <label for="logo" class="form-label">Image Url</label>
          <input type="url" class="form-control" name="logo" id="logo" aria-describedby="logo"
            placeholder="Image Url..." required>
        </div>
      </div>
      <div class="mb-3">
        <div>
          <label for="duties" class="form-label">Duties</label>
          <textarea type="text" class="form-control" name="duties" id="duties"
            aria-describedby="duties" placeholder="Duties" min="5" max="250" required> </textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Create</button>
      </div>
    </form>`
  }