<template>
   <form class="ion-padding">
            <ion-list>
                <ion-item>
                    <ion-label position="floating">Title</ion-label>
                    <ion-input type="text" required v-model="title"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-thumbnail slot="start">
                        <img :src="CameraPic" alt="" srcset="">
                    </ion-thumbnail>
                    
                    <ion-button fill="clear" @click="takePhoto" type="button"> <ion-icon :icon="camera" slot="start"></ion-icon>Take Photo</ion-button>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">description</ion-label>
                    <ion-textarea rows="6" v-model="descrip"></ion-textarea>
                </ion-item>
            </ion-list>
        </form>
        <ion-button expand="block" class="ion-padding" fill="outline" @click="submitForm()">Save</ion-button>
</template>

<script>
// import baselayout from "../component/baselayout.vue";
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton,IonThumbnail,IonIcon } from "@ionic/vue";
import {camera} from 'ionicons/icons'
import { Plugins ,CameraResultType,CameraSource } from '@capacitor/core';
const { Camera } = Plugins;

export default {
    emits:['save-memory'],
    components: {  IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton,IonThumbnail,IonIcon },
    data(){
        return{
            title:'',
            Url:'',
            descrip:'',
            camera,
            CameraPic:''
        }
    },
    methods:{
       async takePhoto(){
            const photo = await Camera.getPhoto({
                resultType:CameraResultType.Uri,
                source :CameraSource.Camera,
                quality : 60
            });
            this.CameraPic= photo.webPath;
        },
        submitForm(){
            const memoryData={
                title :this.title,
                image :this.CameraPic,
                description :this.descrip,
            }
            console.log(memoryData)
            this.$emit('save-memory' , memoryData)
        }
    }
};
</script>

<style>

</style>