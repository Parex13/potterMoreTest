<template>
    <div id=main-content>
        <ion-text mode="md">
            <h2>{{ id }} - {{ content }}</h2>
        </ion-text>
        <ion-radio-group>
            <ion-list lines="none">
                <Answer v-for="(answer, index) in answers" :key="index" :answerValue="id + '-' + (index + 1)"
                    :content="answer" @update-pick=udpatePick />
            </ion-list>
        </ion-radio-group>
    </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IonText, IonList, IonRadioGroup } from '@ionic/vue';
import Answer from './Answer.vue';
import { dynamicResponses } from '../common';

export default defineComponent({
    name: 'QuestionAnswers',
    components: {
        Answer,
        IonText,
        IonList,
        IonRadioGroup
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
            const qValue = Number(r.split('-')[0]);
            const aValue = Number(r.split('-')[1]);
            let questionIsInclude = false;
            //ON effectue des operations sur le Proxy
            this.dynamicResponses.map((qa) => {
                if (qa.idQuestion == qValue) {
                    qa.idAnswer = aValue;
                    questionIsInclude = true;
                }
            })
            if (!questionIsInclude) {
                this.dynamicResponses.push({
                    idQuestion: qValue,
                    idAnswer: aValue
                })
            }
        }
    },
    data() {
        return {
            // Cette objet fait reference a la constant 'dynamicResponses' du fichier common, c'est un Proxy
            dynamicResponses,
        }
    }
});     
</script>
<style lang="scss" scoped>
div#main-content {
    height: 550px;
    display: grid;
    align-content: center;

    ion-list {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

}
</style>