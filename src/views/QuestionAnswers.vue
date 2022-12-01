<template>
    <ion-text mode="md">
        <h2>{{ id }} - {{ content }}</h2>
    </ion-text>
    <fieldset>
        <ion-list>
            <Answer v-for="(answer, index) in answers" :key="index" :answerValue="id + '-' + (index + 1)"
                :content="answer" v-model:pick="picked" />
        </ion-list>
    </fieldset>
    Answer picked : {{ picked }} <br>
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
        },
        picked: String
    },
    data() {
        return {
            picked: ''
        }
    }
});     
</script>