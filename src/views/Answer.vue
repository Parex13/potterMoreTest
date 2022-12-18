<template>
    <ion-item @touchstart=touchOnHold @touchend=simpleTouch>
        <ion-radio slot=start :value=answerValue @ionFocus="$emit('updatePick', $event.target.value)" />
        <ion-label class="ion-text-wrap" :for="'response' + answerValue">
            {{ content.length > MAX_LENGTH_POPOVER
                    ? content.slice(0, MAX_LENGTH_POPOVER).replace(/ \S*$/, '[...]') : content
            }}
        </ion-label> <br>
    </ion-item>
    <ion-popover :is-open="isOpen" @didDismiss="isOpen = false" :event="event" size="auto">
        <ion-content class="ion-padding">{{ content }}</ion-content>
    </ion-popover>
</template>
  
<script lang="ts">
import { IonItem, IonLabel, IonRadio, IonPopover, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

const MAX_LENGTH_POPOVER = 85

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
            timer: 0
        }
    },
    methods: {
        touchOnHold(e: Event) {
            this.timer = setTimeout(() => {
                if (this.content.length > MAX_LENGTH_POPOVER) {
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
  
<style lang="scss">
ion-item {
    --background-hover: none;
    --background: #f8f8ff;
    --ripple-color: transparent;
}
</style>