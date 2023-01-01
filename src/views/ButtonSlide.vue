<template>
    <ion-button @click="isNext ? swiper.slideNext() : swiper.slidePrev()">
        <ion-icon slot="icon-only"
            :src="isNext ? 'assets/icon/caret-forward-circle.svg' : 'assets/icon/caret-back-circle.svg'"></ion-icon>
    </ion-button>
</template>

<script lang="ts">
import { IonButton, IonIcon } from '@ionic/vue';
import { useSwiper } from 'swiper/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ButtonSlide',
    components: {
        IonIcon,
        IonButton,
    },
    props: {
        isNext: Boolean
    },
    setup() {
        const swiper = useSwiper();

        return {
            swiper,
        };
    },
});
</script>
<style lang="scss">
ion-button {
    --background: none;
    --box-shadow: none;
    --ripple-color: transparent;
    --color: #000000;
    height: 64px;
    width: auto;

    ion-icon {
        font-size: 64px;
    }
}
</style>