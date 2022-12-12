<template>
    <ion-item>
        <input type="radio" slot=start :id="'response' + answerValue" name="answer" :value=answerValue
            @focus="$emit('updatePick', $event.target.value)" />
        <ion-label class="ion-text-wrap" :for="'response' + answerValue">{{ content }}</ion-label> <br>
    </ion-item>
</template>
  
<script lang="ts">
import { IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Answer',
    components: {
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
    emits: ['updatePick']
});
</script>
  
<style scoped>
ion-item {
    --background-hover: none;
    --background: #f8f8ff;
}
</style>  