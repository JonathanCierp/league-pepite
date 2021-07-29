<template>
  <BaseRow class="items-center my-2 p-5">
    <div>
      <h3>{{ challenge.name }}</h3>
      <p class="mt-2 text-sm" :class="[informationsClass]" v-html="informations" />
    </div>
    <BaseSpacer />
    <BaseButton text @click="dialogChallengeDetailsIsOpen = true">Voir le challenge</BaseButton>
  </BaseRow>
  <hr class="border border-border" />
  <DialogChallengeDetails v-if="dialogChallengeDetailsIsOpen" v-model="dialogChallengeDetailsIsOpen" :challenge="challenge" />
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import BaseRow from '@/components/base/BaseRow.vue'
import BaseSpacer from '@/components/base/BaseSpacer.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import DialogChallengeDetails from './DialogChallengeDetails.vue'

export default defineComponent({
  name: 'challenge-item',
  components: { BaseRow, BaseSpacer, BaseButton, DialogChallengeDetails },
  props: {
    challenge: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const dialogChallengeDetailsIsOpen = ref(false)

    const informations = computed(() =>
      props.challenge.information ? props.challenge.information : 'Informations disponible à partir du début du challenge'
    )
    const informationsClass = computed(() => (props.challenge.information ? '' : 'underline'))

    return {
      dialogChallengeDetailsIsOpen,
      informations,
      informationsClass
    }
  }
})
</script>
