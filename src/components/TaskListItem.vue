<template>
  <b-list-group>
    <b-list-group-item href="#" class="flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h1>Tarea</h1>
        <small class="text-muted"><b-button variant="danger" @click="deleteTask" >Eliminar</b-button></small>
      </div>
         <p class="display-4" > {{task}}</p>
     </b-list-group-item>
  </b-list-group>
</template>


<script>

import TaskNew from '@/components/TaskNew.vue'
import TaskList from '@/components/TaskList.vue'
import TaskContainer from '@/components/TaskContainer.vue'
import{mapState,mapMutations} from 'vuex';
import { bus } from '../main'


  export default {
    name: 'TaskListItem',    
      components: {
    },

    props:{
        task:String,
        id:Number
    },
    methods: {

    //emitimos delete-task pasando id (lo vamos a recibir en TaskContainer)
    deleteTask() {
      if (confirm('Eliminar tarea')) {
      bus.$emit('delete-task', this.id)}
    }
                                      
  }
}

</script>
