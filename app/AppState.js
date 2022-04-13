import { Car } from "./Models/Car.js";
import { Job } from "./Models/Job.js";
import { House } from "./Models/House.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  /**@type {import ('./Models/Job').Job[]} */
  jobs = []

  /**@type {import ('./Models/House').House[]} */
  houses = []

  /** @type {import('./Models/Car').Car[]} */
  cars = [];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
