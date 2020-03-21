<template>
  <div class="widget risk-checker">
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

    <div v-else-if="!quizStart && currentQuestionIndex > 0">
      <p>
        result: {{ totalScore }} =>
        {{
          totalScore > 4
            ? 'high risk'
            : totalScore > 2
            ? 'Medium Risk'
            : 'Low risk'
        }}
      </p>
      <button class="btn" @click="start">Start again</button>
    </div>

    <div v-else class="text-center">
      <p class="text-2xl">
        Answer the following questions to determine your Coronavirus risk factor
        and determine if you need the Corona helpline or not
      </p>
      <button class="btn start" @click="start">Start</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    quizStart: false,
    currentQuestionIndex: 0,
    scores: [],
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
    },
    fillQuestion(score) {
      this.scores.push(score)

      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex += 1
      } else {
        this.quizStart = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.risk-checker {
  @apply px-2;

  .btn {
    @apply px-10 py-2 rounded bg-indigo-800 text-white my-4 font-medium text-xl mr-2;
  }
}
</style>
