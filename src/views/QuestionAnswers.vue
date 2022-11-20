<template>
    <ion-text mode="md">
        <h2>{{ id }} - {{ content }}</h2>
    </ion-text>
    <ion-radio-group>
        <Answer v-for="(answer, index) in answers" :key=index :answerValue=index :content=answer></Answer>
    </ion-radio-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonRadioGroup, IonText } from '@ionic/vue';
import Answer from './Answer.vue';

export default defineComponent({
    name: 'QuestionAnswers',
    components: {
        IonRadioGroup,
        Answer,
        IonText
    },
    props: {
        id: { required: true, type: Number },
        content: String,
        answers: {
            type: Array.of(String),
            default: () => [
                "Default Answer"
            ]
        }
    }
});     
</script>