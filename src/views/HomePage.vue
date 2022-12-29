<template>
  <ion-page>
    <ion-header class="ion-no-border" :translucent="true">
      <div class="content">
        <ion-thumbnail><img src="assets\icon\choixpeau.png" /></ion-thumbnail>
        <ion-title>{{ appName }}</ion-title>
      </div>
    </ion-header>

    <ion-content :scroll-y="false">
      <swiper>
        <swiper-slide v-for="(questionAnswers, index) in questionsAnswers" :key=index>
          <QuestionAnswers :id="index + 1" :content="questionAnswers.content"
            :answers="questionAnswers.answersAndHouseScore.map((obj) => { return obj.name })" />
        </swiper-slide>
        <ion-toolbar>
          <ButtonSlide slot="start" id="prevButton" :isNext="false">
          </ButtonSlide>
          <ButtonSlide slot="end" id="nextButton" :isNext="true"></ButtonSlide>
        </ion-toolbar>
      </swiper>
      <ion-modal ref="modal" trigger="resultButton">
        <ion-content>
          Votre maison est : {{ house }}
        </ion-content>
      </ion-modal>
    </ion-content>

    <ion-progress-bar :value="dynamicResponses.length / questionsAnswers.length"></ion-progress-bar>

    <ion-footer class="ion-no-border">
      <div class="content">
        <ion-button expand="block" :disabled="dynamicResponses.length < questionsAnswers.length" id="resultButton"
          @click="submit">{{
    resultButtonContent
          }}</ion-button>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonThumbnail, IonToolbar, IonFooter, IonProgressBar, IonModal } from '@ionic/vue';
import { defineComponent } from 'vue';
import QuestionAnswers from './QuestionAnswers.vue';
import ButtonSlide from './ButtonSlide.vue';
import { appName, questionsAnswers, resultButtonContent, dynamicResponses } from '../common';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonThumbnail,
    IonToolbar,
    IonFooter,
    IonModal,
    QuestionAnswers,
    IonButton,
    ButtonSlide,
    Swiper,
    SwiperSlide,
    IonProgressBar
  },
  data() {
    return {
      appName,
      questionsAnswers,
      dynamicResponses,
      resultButtonContent,
      house: ""
    }
  },
  methods: {
    submit() {
      const totalScore = {
        gryffindor: 0,
        ravenclaw: 0,
        hufflepuff: 0,
        slytherin: 0
      };
      dynamicResponses.map((answer) => {
        totalScore.gryffindor += answer.housesScore.gryffindor;
        totalScore.ravenclaw += answer.housesScore.ravenclaw;
        totalScore.hufflepuff += answer.housesScore.hufflepuff;
        totalScore.slytherin += answer.housesScore.slytherin;
      })
      let house = "";
      let maxScore = 0;
      Object.entries(totalScore).map(([key, value]) => {
        if (value > maxScore) {
          maxScore = value;
          house = key;
        }
      })
      switch (house) {
        case "gryffindor": this.house = "Gryffondor"; break
        case "ravenclaw": this.house = "Poufsouffle"; break
        case "hufflepuff": this.house = "Serdaigle"; break
        case "slytherin": this.house = "Serpentard"; break
      }
    },
  }
});
</script>
<style lang="scss" scoped>
ion-header .content {
  display: flex;
  background: #dcdcdc;
  border-radius: 15px;
  height: 70px;

  ion-thumbnail>img {
    margin: 10px;
  }

  ion-title {
    text-align: center;
    color: #000000
  }

}

ion-content {
  --background: #f8f8ff;

  ion-toolbar {
    width: fix-content;
    --background: #f8f8ff;
    --padding-start: 25%;
    --padding-end: 30%;
    --min-height: 64px;
  }
}

ion-button#resultButton {
  --background: #778899;
  --color: #FFFFFF;
}
</style>