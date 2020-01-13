import Vue from 'vue'
import Vuex from 'vuex'
import TaskNew from '@/components/TaskNew.vue'
import TaskListItem from '@/components/TaskListItem.vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
      task:'' ,
      tasks:[]
    },

  getters: {
    //nos devuelve la lista de tareas. La vamos a capturar en TaskNew.
    getTasks(state){
    return state.tasks
    }
  },
  mutations: {
  //enviamos tarea a la lista de tareas (capturada en taskContainer)
  add(state, item) {
    state.tasks.push(item)
},
  //eliminamos una tarea (capturada en TaskContainer)
    deleteTask(state, id) {
    state.tasks.splice(id,1)
  },
},

  modules: {}
})
