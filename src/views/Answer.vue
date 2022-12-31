<template>
    <ion-item @touchstart=touchOnHold @touchend=simpleTouch>
        <ion-radio slot=start :value=answerValue @ionFocus="$emit('updatePick', answerValue)" />
        <ion-label class="ion-text-wrap" :for="'response' + answerValue">
            {{ isCrop && indexOfSplit < content.split(" ").length - 1
        ? content.split(" ").slice(0, indexOfSplit).join(" ") + '[...]' : content
}}
        </ion-label> <br>
    </ion-item>
    <ion-popover :is-open="isOpen" @didDismiss="isOpen = false" :event="event" size="auto">
                <ion-content class="ion-padding">{{ '...' + content.split(" ").slice(indexOfSplit,
        content.length).join(" ")
                    }}</ion-content>
                </ion-popover>
</template>
  
<script lang="ts">
import { IonItem, IonLabel, IonRadio, IonPopover, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

const MAX_LENGTH_POPOVER = 110

export default defineComponent({
    name: 'Answer',
    components: {
        IonItem,
        IonLabel,
        IonRadio,
        IonPopover,
        IonContent
    },
    props: {
        answerValue: String,
        content: { required: true, type: String },
    },
    emits: ['updatePick'],
    data() {
        return {
            MAX_LENGTH_POPOVER,
            isOpen: false,
            event: null,
            timer: 0,
            indexOfSplit: 0,
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
        touchOnHold(e: Event) {
            this.timer = setTimeout(() => {
                if (this.isCrop && this.indexOfSplit < this.content.split(" ").length - 1) {
                    //@ts-ignore
                    this.event = e
                    this.isOpen = true
                }
            }, 500)
        },
        simpleTouch() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        },
    }

});
</script>
  
<style lang="scss" scoped>
ion-item {
    --background-hover: none;
    --background: #f8f8ff;
    --ripple-color: transparent;
}

ion-popover {
    --offset-x: 50px;
    --offset-y: 25px;
}
</style>