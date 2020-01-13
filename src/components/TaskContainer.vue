<template>
  <div>
      <div class=" d-flex justify-content-center pt-3" >
          <h3>Gestion de tareas</h3>
      </div>
      <TaskNew v-on:new="add"/>
      <TaskList :tasks="getTasks"/>
      
  </div>
</template>


<script>
import TaskNew from '@/components/TaskNew.vue'
import TaskList from '@/components/TaskList.vue'
import TaskListItem from '@/components/TaskListItem.vue'
import{mapGetters} from 'vuex';
import { bus } from '../main'


export default {
  name: 'TaskContainer',
    components: {
    TaskNew,
    TaskList
  },

  //Recie funcion delete-task (de TaskListItem)
  created: function () {
  bus.$on('delete-task', this.deleteTask)},


  computed: {
  ...mapGetters(['getTasks'])},

  //creamos la propiedad task
  props: ['tasks'],

  methods: { 

  //llamamos a la funcion add crada en la store
  add: function (task) {
  this.$store.commit("add", task)},

  //llamamos a la funcion deleteTask de la store
  deleteTask: function (id) {
  this.$store.commit("deleteTask", id)}
  }
}
</script>
