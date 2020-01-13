<template>
  <div  >
    <div class=" d-flex justify-content-center pt-4" > <h4>Lista de tareas</h4></div>
    <TaskListItem  v-for="(task,index) in tasks" :key="index" :task="task" :id="index" > </TaskListItem>
  </div>
</template>

<script>

import TaskListItem from '@/components/TaskListItem.vue'
export default {

  name: 'TaskList',
  props: {
    tasks:Array
  },
  components: {
  TaskListItem
  },
}

</script>
