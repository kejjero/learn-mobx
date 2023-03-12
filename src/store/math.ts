import {makeAutoObservable} from "mobx";

class Math {
  count: number = 0
  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count = this.count + 1
  }

  decrement() {
    this.count = this.count - 1
  }

}

export default new Math()