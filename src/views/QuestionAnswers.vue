<template>
    <div id=main-content>
        <ion-text>
            <h2><a @click="canOpenPopover($event)">{{ id }} - {{ isCrop && indexOfSplit <
        content.split(" ").length - 1 ? content.split(" ").slice(0, indexOfSplit).join(" ") + '[...]' : content
}}</a></h2>
        </ion-text>
        <ion-popover :is-open="isOpen" :event="event" @didDismiss="isOpen = false" size="cover">
                        <ion-content class="ion-padding">{{ '...' + content.split(" ").slice(indexOfSplit,
        content.length).join(" ")
}}</ion-content>
                        </ion-popover>
                        <ion-radio-group>
                            <ion-list lines="none">
                                <Answer v-for="(answer, index) in answers" :key="index"
                                    :answerValue="id + '-' + (index + 1)" :content="answer" @update-pick=udpatePick />
                            </ion-list>
                        </ion-radio-group>
    </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IonText, IonList, IonRadioGroup, IonPopover, IonContent } from '@ionic/vue';
import Answer from './Answer.vue';
import { dynamicResponses, questionsAnswers } from '../common';

const MAX_LENGTH_POPOVER = 90

export default defineComponent({
    name: 'QuestionAnswers',
    components: {
        Answer,
        IonText,
        IonList,
        IonRadioGroup,
        IonPopover,
        IonContent
    },
    props: {
        id: { required: true, type: Number },
        content: { required: true, type: String },
        answers: {
            type: Array as PropType<string[]>,
            default: () => [
                "Default Answer"
            ]
        },
    },
    data() {
        return {
            MAX_LENGTH_POPOVER,
            // Cette objet fait reference a la constant 'dynamicResponses' du fichier common, c'est un Proxy
            dynamicResponses,
            indexOfSplit: 0,
            isOpen: false,
            event: null,
            isCrop: this.content.length > MAX_LENGTH_POPOVER
        }
    },
    created() {
        if (this.isCrop) {
            let countCaract = 0
            this.content.split(" ").every((word, index) => {
                if (index == this.content.split(" ").length - 1 || countCaract > MAX_LENGTH_POPOVER) {
                    this.indexOfSplit = index
                    return false
                }
                countCaract += word.length + 1
                return true
            })

        }
    },
    methods: {
        udpatePick(r: string) {
            const qValue = Number(r.split('-')[0]);
            const aValue = Number(r.split('-')[1]);
            let questionIsInclude = false;
            //On effectue des operations sur le Proxy
            this.dynamicResponses.map((qa) => {
                if (qa.idQuestion == qValue) {
                    qa.housesScore = questionsAnswers[qValue - 1].answersAndHouseScore[aValue - 1];
                    questionIsInclude = true;
                }
            })
            if (!questionIsInclude) {
                this.dynamicResponses.push({
                    idQuestion: qValue,
                    housesScore: questionsAnswers[qValue - 1].answersAndHouseScore[aValue - 1]
                })
            }
        },
        canOpenPopover(e: Event) {
            if (this.isCrop && this.indexOfSplit < this.content.split(" ").length - 1) {
                //@ts-ignore
                this.event = e
                this.isOpen = true
            }
        }
    }
});     
</script>
<style lang="scss" scoped>
div#main-content {
    height: 550px;
    display: grid;
    align-content: center;

    ion-text {
        margin: 0px 20px 0 20px;
        text-align: justify;

        a {
            color: inherit;
        }
    }

    ion-list {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

}
</style>