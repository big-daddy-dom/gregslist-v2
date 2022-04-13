import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { sandboxApi } from "./AxiosService.js";

class CarsService {
  async getAllCars(params = {}) {
    const res = await sandboxApi.get("cars", { params });
    const cars = res.data.map((c) => new Car(c));
    ProxyState.cars = cars;
  }

  async addCar(formData) {
    const res = await sandboxApi.post("cars", formData);
    const newCar = new Car(res.data);
    // REVIEW Immutable State
    ProxyState.cars = [newCar, ...ProxyState.cars];
  }

  async editCar(formData) {
    const res = await sandboxApi.put("cars/" + formData.id, formData);
    const car = new Car(res.data);
    const index = ProxyState.cars.findIndex((c) => c.id == car.id);
    ProxyState.cars.splice(index, 1, car);
    ProxyState.cars = ProxyState.cars;
  }

  async removeCar(id) {
    const res = await sandboxApi.delete("cars/" + id);
    ProxyState.cars = ProxyState.cars.filter((c) => c.id !== id);
  }
}

export const carsService = new CarsService();
