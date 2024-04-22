<template>
  <Card v-if="!simpleUI" style="width: 25rem; overflow: hidden">
    <template v-if="header" #header>
      <img alt="user header" :src="header" />
    </template>
    <template v-if="title" #title>{{ title }}</template>
    <template v-if="subtitle" #subtitle>{{ subtitle }}</template>
    <template v-if="content" #content>
      <p class="m-0">{{ content }}</p>
    </template>
    <template v-if="footer" #footer>
      <div v-show="footer.b1.label || footer.b2.label" class="flex gap-3 mt-1">
        <Button
          v-if="footer.b1.label"
          :label="footer?.b1?.label"
          severity="secondary"
          outlined
          class="w-full"
        />
        <Button v-if="footer.b2.label" :label="footer?.b2?.label" class="w-full" />
      </div>
    </template>
  </Card>
  <Card class="{{wrap" }} v-else>
    <template v-if="simpleTitle" #title>{{ simpleTitle }}</template>
    <template v-if="simpleContent" #content>
      <p class="m-0">
        {{ simpleContent }}
      </p>
    </template>
  </Card>
</template>

<script setup>
import Card from 'primevue/card'
import Button from 'primevue/button'

// Define the 'content' prop
const { header, title, subtitle, content, footer } = defineProps({
  header: { type: String },
  title: { type: String },
  subtitle: { type: String },
  content: { type: String },
  simpleUI: { type: Boolean, default: false },
  simpleTitle: { type: String },
  simpleContent: { type: String },
  wrap: { type: String },
  footer: {
    type: Object,
    default: () => ({
      b1: { label: '' },
      b2: { label: '' }
    })
  }
})
</script>
