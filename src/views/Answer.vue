<template>
    <ion-item>
        <ion-label>{{ content }}</ion-label>
        <ion-radio slot=start :value=answerValue></ion-radio> <br>
    </ion-item>
</template>
  
<script lang="ts">
import { IonRadio, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Answer',
    components: {
        IonRadio,
        IonItem,
        IonLabel
    },
    props: {
        answerValue: {
            type: Number,
            default: 0
        },
        content: String,
        isCheck: {
            type: Boolean,
            default: false
        }
    }
});
</script>
  
<style scoped>
ion-item {
    --background-hover: none;
}
</style>
  