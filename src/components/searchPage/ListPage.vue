<template>
  <div class="card border-2 border-black p-5 justify-center items-center flex flex-col">
    <div class="flex justify-content-center mb-4">
      <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" dataKey="label" />
    </div>
    <input
      type="text"
      v-model="searchValue"
      @change="handleSearch"
      placeholder="search"
      class="bg-mainBlack text-mainWhite rounded tracking-wide p-3 text-lg mb-4 self-start"
    />
    <DataTable :value="filteredProducts" :size="size.value" tableStyle="min-width: 50rem">
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="date" header="Date"></Column>
      <Column field="state" header="State"></Column>
      <Column field="media" header="Media"></Column>
    </DataTable>

    <p>{{ searchValue }}</p>
  </div>
</template>

<script setup>
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import SelectButton from 'primevue/selectbutton'
import { computed, ref } from 'vue'

const products = ref([
  {
    name: 'Product A',
    category: 'Category 1',
    date: '2024-01-01',
    state: 'Available',
    media: 'Image'
  },
  {
    name: 'Product B',
    category: 'Category 2',
    date: '2024-01-02',
    state: 'Out of Stock',
    media: 'Video'
  },
  {
    name: 'Product C',
    category: 'Category 3',
    date: '2024-01-03',
    state: 'Available',
    media: 'Image'
  },
  {
    name: 'Product D',
    category: 'Category 4',
    date: '2024-01-04',
    state: 'Discontinued',
    media: 'Video'
  },
  {
    name: 'Product E',
    category: 'Category 1',
    date: '2024-01-05',
    state: 'Available',
    media: 'Image'
  }
])

const searchValue = ref('')
const size = ref({ label: 'Normal', value: 'null' })
const sizeOptions = ref([
  { label: 'Small', value: 'small' },
  { label: 'Normal', value: 'null' },
  { label: 'Large', value: 'large' }
])

const filteredProducts = computed(() => {
  return products.value.filter((product) =>
    product.name.toLowerCase().includes(searchValue.value.toLowerCase())
  )
})

const handleSearch = () => {
  // Additional logic for handling search if needed
}
</script>
