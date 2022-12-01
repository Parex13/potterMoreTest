<template>
    <ion-item>
        <input type="radio" slot=start :id="'response' + answerValue" name="answer" :value=answerValue
            @focus="$emit('update:pick', $event.target.value)" />
        <ion-label :for="'response' + answerValue">{{ content }}</ion-label> <br>
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
        answerValue: String,
        pick: String,
        content: String,
        isCheck: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:pick']
});
</script>
  
<style scoped>
ion-item {
    --background-hover: none;
}
</style>  