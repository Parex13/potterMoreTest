<template>
    <ion-radio value="{{ answerValue }}" />{{ content }} <br>
</template>
  
<script lang="ts">
import { IonRadio } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Answer',
    components: {
        IonRadio,
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

</style>
  