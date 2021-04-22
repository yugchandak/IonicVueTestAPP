<template>
    <ion-list>
        <!-- <ion-item>ArcticFox</ion-item>
                <ion-item>ArcticFox</ion-item>
                <ion-item>ArcticFox</ion-item> -->
        <memoriesListItem 
        v-for="memory in memories" 
        :key="memory.id" 
        :memory="memory">{{memory.title}}</memoriesListItem>
    </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import memoriesListItem from "./memoriesListItem";
export default {
    props: ["memories"],
    components: {
        IonList,
        memoriesListItem,
    },
};
</script>

<style></style>
