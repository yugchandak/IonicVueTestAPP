<template>
    <baselayout pageTitle="Memories">
        <template v-slot:actions-end>
            <ion-button router-link="/memories/add">
                <ion-icon slot="icon-only" :icon="add"></ion-icon>
            </ion-button>
        </template>
        <memoriesList :memories="memories"></memoriesList>
    </baselayout>
</template>

<script>
// import { IonList, IonItem,IonImg ,IonThumbnail,
// //  IonLable
//  }
//   from "@ionic/vue";
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import memoriesList from "../component/memoriesList";
export default {
    components: {
        memoriesList,
        IonButton,
        IonIcon,
    },
    data() {
        return {
            add,
        };
    },
    computed: {
        memories() {
            console.log(this.$store.getters.memories);
            return this.$store.getters.memories;
        },
    },
};
</script>
<style scoped>
.ml {
    margin-left: 10px;
}
</style>
