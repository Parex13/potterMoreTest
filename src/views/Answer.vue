<template>
    <ion-item>
        <ion-radio slot=start :value=answerValue @ionFocus="$emit('updatePick', $event.target.value)" />
        <ion-label class="ion-text-wrap" :for="'response' + answerValue">{{ content }}</ion-label> <br>
    </ion-item>
</template>
  
<script lang="ts">
import { IonItem, IonLabel, IonRadio } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Answer',
    components: {
        IonItem,
        IonLabel,
        IonRadio
    },
    props: {
        answerValue: String,
        pick: String,
        content: String,
        isCheck: {
            type: Boolean,
            default: false
        }
    },
    emits: ['updatePick']
});
</script>
  
<style scoped>
ion-item {
    --background-activated: none;
    --background-hover: none;
    --background: #f8f8ff;
}
</style>  