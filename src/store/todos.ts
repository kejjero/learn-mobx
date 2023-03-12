import {makeAutoObservable} from "mobx"
import {ITodoList} from "../components/list";

class Todos {
  list: ITodoList[] = []

  constructor() {
    makeAutoObservable(this)
  }


  getTodos(data: ITodoList[]) {
    this.list = data.slice(0, 20)
  }

  changeCompleted(id: number) {
    this.list = this.list.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
  }

  removeItem(id: number) {
    this.list = this.list.filter(item => item.id !== id)
  }
}

export default new Todos()