<template>
    <baselayout title="Add memory" DefaultLink="/memories">
        <CreateMemoryForm @save-memory="saveMemory"> </CreateMemoryForm>
    </baselayout>
</template>

<script>
import baselayout from "../component/baselayout.vue";
import CreateMemoryForm from "./CreateMemoryForm";
// import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from "@ionic/vue";

export default {
    components: {
        baselayout,
        CreateMemoryForm,
    },
    methods: {
        saveMemory(memoryData) {
            this.$store.dispatch("addMemory", memoryData);
            this.$router.replace('/memories')
        },
    },
};
</script>

<style></style>
