<template>
    <div class="w-full text-sm">
        <label v-if="label" class="font-medium inline-block mb-2">{{ label }}</label>
        <DatePicker v-model="value" @input="(v) => $emit('update:modelValue', v)" valueType="format" format="DD/MM/YYYY">
            <template #input>
                <BaseFormInput v-model="value" readonly />
            </template>
            <template #icon-calendar>&nbsp;</template>
        </DatePicker>
    </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

export default {
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        }
    },
    model: {
        prop: 'modelValue',
        event: 'update:modelValue'
    },
    setup(props) {
        const value = ref(props.modelValue)

        return {
            value
        }
    }
}
</script>