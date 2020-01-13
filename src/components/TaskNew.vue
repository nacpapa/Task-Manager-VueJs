<template>
 <div>
    <div class="list-group " >
      <div class="align-self-center" >
      <form>
        <b-row >
          <b-col md="4">
            <b-alert v-model="alert" variant="danger" dismissible style="width: 600px ">Tarea vacía</b-alert>
            <b-alert v-model="success" variant="success" dismissible style="width: 600px ">Creada correctamente</b-alert>
            <h5><span class="badge badge-info">Nueva tarea</span></h5>
            <b-form-textarea placeholder="Ingrese tarea" :state="validation" v-model="task" type="text" style="width: 600px " />
          </b-col>
        </b-row>
      </form>
      </div>
      <div class="align-self-center pt-4"> <b-button style="width: 600px " block variant="success" @click="newTask" v-on:submit.prevent="newTask"> Agregar</b-button> </div>
    </div>
    
  
  </div>
</template>


<script>

import{mapState,mapMutations} from 'vuex';


export default {

 data(){
    return{
      task:this.$store.state.task,
      tasks:this.$store.state.tasks,
      alert:false, // mensaje de tarea vacia desactivada. Se podra activar en newTask
      success:false // mensaje de tara creada con exito desactivado. Se podra activar en newTask
    }
  },
  
  state:{
  },
  props: {
  },
  
 computed: {
   //validacion de textarea. En rojo al ser menor o igual a cero
   validation(){
    return this.task.length >0 ? true : false
    },
  },
  methods:{

    newTask: function(){

     if (this.task){
     this.$emit("new",this.task)
     console.log(JSON.stringify(this.task)); //nos muestra en consola la lista de tareas
     this.success=true //muestra mensaje de creacion correcta
     this.task=''}

     else {this.alert=true} //muestra mensaje de error al crear
    }
       
   }
        
    
}
</script>