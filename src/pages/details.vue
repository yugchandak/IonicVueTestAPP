<template>
    <baselayout :pageTitle="LoadedMemory ? LoadedMemory.title : 'loading...'" DefaultLink="/memories">

        <ion-content fullscreen>
      <ion-card>
        <img :src="LoadedMemory.image" />
        <ion-card-header>
          <ion-card-subtitle class="ion-text-center">{{LoadedMemory.title}}</ion-card-subtitle>
          <!-- <ion-card-title>Madison, WI</ion-card-title> -->
        </ion-card-header>
        <ion-card-content class="ion-text-center">
          {{LoadedMemory.description}}
          {{LoadedMemory.description}}
          {{LoadedMemory.description}}
          {{LoadedMemory.description}}
          {{LoadedMemory.description}}
          {{LoadedMemory.description}}
          {{LoadedMemory.description}}
        </ion-card-content>
      </ion-card>
    </ion-content>
    </baselayout>
</template>

<script>
import { IonCard, IonCardContent, IonCardSubtitle } from "@ionic/vue";

export default {
    components: {
        IonCard,
        IonCardContent,
        IonCardSubtitle,

    },
    data() {
        return {
            memoryId: this.$route.params.id,
        };
    },
    computed: {
        LoadedMemory() {
            return this.$store.getters.memory(this.memoryId);
        },
    },
    // watch:{
    //     '$route'(currentRoute){
    //         this.memoryID = currentRoute.param.id
    //     }
    // },
};
</script>
