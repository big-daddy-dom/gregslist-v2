import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

class JobsService {
    addJob(formData) {
        const newJob = new Job(formData)
        ProxyState.jobs = [newJob, ...ProxyState.jobs]
    }
}
export const jobsService = new JobsService()