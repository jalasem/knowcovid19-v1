<template>
  <div class="widget risk-checker no-select">
    <div v-if="quizStart" class="questions">
      <p
        v-if="currentQuestion.title"
        class="text-2xl font-medium mb-1"
        v-text="currentQuestion.title"
      />
      <p class="text-xl" v-text="currentQuestion.text" />
      <button
        v-for="(option, optionIndex) in currentQuestion.options"
        :key="
          `risk-check_question-${currentQuestionIndex}_option-${optionIndex}`
        "
        class="btn"
        @click="fillQuestion(option.value)"
        v-text="option.text"
      />
    </div>

    <div
      v-else-if="!quizStart && currentQuestionIndex > 0"
      class="corona-result"
    >
      <p class="capitalize">{{ riskLevel }} risk</p>
      <template v-if="riskLevel === 'high'">
        <p class="text-2xl font-medium">
          You are at high risk for COVID-19.
        </p>
        <p class="text-xl font-medium">
          Please do the following:
        </p>

        <ul>
          <li>Stay calm</li>
          <li>Isolate yourself from family and friends</li>
          <li>
            Call the following Numbers and you will be told what to do next:
          </li>
        </ul>
        <p class="my-1">
          For Nigeria: 08000CORONA 08023169485, 08033565529, 08052817243
        </p>
        <p class="my-1">
          For Ghana: +233 55 843 9868 / +233 50 949 7700
        </p>
        <p class="my-1">
          For Kenya: 0729 471414 and 0732 353535
        </p>
        <p class="my-1">
          For Gambia: 1025
        </p>
        <p class="my-1">
          For Cameroon: 1510
        </p>

        <p class="my-2">
          Share Knowcovid19 with friend and family to keep them safe
        </p>
        <div class="social">
          <a href="#">
            <img src="/vectors/twitter.svg" alt="twitter" class="icon" />
          </a>
          <a href="#">
            <img src="/vectors/facebook.svg" alt="fb" class="icon" />
          </a>
          <a href="#">
            <img src="/vectors/linkedin.svg" alt="linkedin" class="icon" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="whatsapp://send?text=Take%20this%20simple%20test%20to%20find%20out%20your%20COVID-19%20Risk%20factor on https://knowvid19.now.sh"
          >
            <img src="/vectors/whatsapp.svg" alt="whatsapp" class="icon" />
          </a>
        </div>
      </template>
      <template v-if="riskLevel === 'medium'">
        <p class="text-2xl font-medium">
          Kindly watch yourself carefully and if you have difficulty in
          breathing please call the appropriate number.
        </p>

        <p class="my-1">
          For Nigeria: 08000CORONA 08023169485, 08033565529, 08052817243
        </p>
        <p class="my-1">
          For Ghana: +233 55 843 9868 / +233 50 949 7700
        </p>
        <p class="my-1">
          For Kenya: 0729 471414 and 0732 353535
        </p>
        <p class="my-1">
          For Gambia: 1025
        </p>
        <p class="my-1">
          For Cameroon: 1510
        </p>

        <p class="my-2">
          Share Knowcovid19 with friend and family to keep them safe
        </p>
        <div class="social">
          <a href="#">
            <img src="/vectors/twitter.svg" alt="twitter" class="icon" />
          </a>
          <a href="#">
            <img src="/vectors/facebook.svg" alt="fb" class="icon" />
          </a>
          <a href="#">
            <img src="/vectors/linkedin.svg" alt="linkedin" class="icon" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="whatsapp://send?text=Take%20this%20simple%20test%20to%20find%20out%20your%20COVID-19%20Risk%20factor on https://knowvid19.now.sh"
          >
            <img src="/vectors/whatsapp.svg" alt="whatsapp" class="icon" />
          </a>
        </div>
      </template>
      <template v-if="riskLevel === 'low'">
        <p class="text-2xl font-medium">
          Stay safe and healthy. Please follow the advice on COVID19 prevention.
        </p>

        <p class="my-2">
          Share Knowcovid19 with friend and family to keep them safe
        </p>
        <div class="social">
          <a href="#">
            <img src="/vectors/twitter.svg" alt="twitter" class="icon" />
          </a>
          <a href="#">
            <img src="/vectors/facebook.svg" alt="fb" class="icon" />
          </a>
          <a href="#">
            <img src="/vectors/linkedin.svg" alt="linkedin" class="icon" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="whatsapp://send?text=Take%20this%20simple%20test%20to%20find%20out%20your%20COVID-19%20Risk%20factor on https://knowvid19.now.sh"
          >
            <img src="/vectors/whatsapp.svg" alt="whatsapp" class="icon" />
          </a>
        </div>
      </template>
    </div>

    <div v-else class="text-center">
      <p class="text-xl font-medium mb-3">
        <!-- Answer the following questions to determine your Coronavirus risk factor
        and determine if you need the Corona helpline or not -->
        Click this template to know if you are at risk <br />
        <sub class="font-normal"
          >Determine if you need the Corona helpline or not</sub
        >
      </p>
      <button
        class="px-10 py-1 rounded-full bg-indigo-800 text-white my-4 font-medium text-xl start"
        @click="start"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    quizStart: false,
    currentQuestionIndex: 0,
    scores: [],
    riskLevel: null,
    questions: [
      {
        options: [
          { text: 'Yes', value: 1 },
          { text: 'No', value: 0 }
        ],
        title: 'Do you have fever?',
        text:
          'Fever is body temperature above 37 degrees centigrade or 98.6  degrees Fahrenheit'
      },
      {
        options: [
          { text: 'Yes', value: 1 },
          { text: 'No', value: 0 }
        ],
        text: 'Do you have a cough?'
      },
      {
        options: [
          { text: 'Yes', value: 3 },
          { text: 'No', value: 0 }
        ],
        text: 'Do you have difficulty breathing?'
      },
      {
        options: [
          { text: 'Yes', value: 3 },
          { text: 'No', value: 0 }
        ],
        text:
          'In the past 14 days have you or anyone you have come in contact with traveled to China, Iran, UK, Italy, Spain, USA or any country with over 1000 cases?'
      },
      {
        options: [
          { text: 'Yes', value: 5 },
          { text: 'No', value: 0 }
        ],
        text:
          'In the past 14 days have you or anyone you have come in contact with had close contact with a confirmed case of nCOV (coronavirus) infection?'
      },
      {
        options: [
          { text: 'Yes', value: 1 },
          { text: 'No', value: 0 }
        ],
        text:
          'In the past 14 days have you or anyone you have come in contact with been in the vicinity of a suspected nCOV (coronavirus) case?'
      },
      {
        options: [
          { text: 'Yes', value: 2 },
          { text: 'No', value: 0 }
        ],
        text:
          'In the past 14 days have you or anyone you have come in contact with been exposed to a healthcare facility in a country where hospital associated nCOV (coronavirus) infections have been reported?'
      }
    ]
  }),
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex]
    },
    totalScore() {
      return this.scores.reduce((prev, score) => prev + score, 0)
    }
  },
  methods: {
    start() {
      this.quizStart = true
      this.currentQuestionIndex = 0
      this.scores = []
      this.riskLevel = null
    },
    fillQuestion(score) {
      this.scores.push(score)

      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex += 1
      } else {
        this.quizStart = false
        // calculate result
        this.riskLevel =
          this.totalScore > 4 ? 'high' : this.totalScore > 2 ? 'medium' : 'low'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.risk-checker {
  @apply px-2;

  .btn {
    @apply px-5 rounded-lg bg-indigo-800 text-white my-4 font-medium text-xl mr-2;
  }

  .social {
    @apply flex items-center my-2;

    .icon {
      @apply w-5 mr-2;
    }
  }

  ul {
    @apply my-3;
    li {
      @apply list-disc ml-6;
    }
  }
}
</style>
