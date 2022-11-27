<template>
    <ion-text mode="md">
        <h2>{{ id }} - {{ content }}</h2>
    </ion-text>
    <ion-list>
        <ion-radio-group>
            <Answer v-for="(answer, index) in answers" :key="index" :answerValue="index" :content="answer" />
        </ion-radio-group>
    </ion-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonRadioGroup, IonText, IonList } from '@ionic/vue';
import { PropType } from 'vue';
import Answer from './Answer.vue';

export default defineComponent({
    name: 'QuestionAnswers',
    components: {
        IonRadioGroup,
        Answer,
        IonText,
        IonList
    },
    props: {
        id: { required: true, type: Number },
        content: String,
        answers: {
            type: Array as PropType<string[]>,
            default: () => [
                "Default Answer"
            ]
        }
    }
});     
</script>