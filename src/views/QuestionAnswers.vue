<template>
    <div id=main-content>
        <ion-text mode="md">
            <h2>{{ id }} - {{ content }}</h2>
        </ion-text>
        <fieldset>
            <ion-list lines="none">
                <Answer v-for="(answer, index) in answers" :key="index" :answerValue="id + '-' + (index + 1)"
                    :content="answer" @update-pick=udpatePick />
            </ion-list>
        </fieldset>
    </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IonText, IonList } from '@ionic/vue';
import Answer from './Answer.vue';
import { dynamicResponses } from '../common';

export default defineComponent({
    name: 'QuestionAnswers',
    components: {
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
    },
    methods: {
        udpatePick(r: string) {
            dynamicResponses[Number(r.split('-')[0])] = r.split('-')[1];
            console.log(dynamicResponses);
        }
    },
    data() {
        return {
            picked: '',
            dynamicResponses
        }
    }
});     
</script>
<style lang="scss" scoped>
div#main-content {
    height: 550px;
    display: grid;
    align-content: center;

    >fieldset {
        ion-list {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    }
}
</style>