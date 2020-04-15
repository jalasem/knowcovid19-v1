<template>
  <div class="data-table">
    <!-- <div class="t-head">
    </div> -->
    <div class="t-body">
      <span class="th border-r">S/N</span>
      <span
        v-for="(column, columnIndex) in columns"
        :key="`column-${columnIndex}`"
        class="th"
        :class="column.field"
        v-text="column.label"
      />
      <template v-for="(row, rowIndex) of rows">
        <span
          :key="`${id ? id + '-table' : 'table'}-row-${rowIndex}-SN`"
          class="td"
          v-text="rowIndex + 1"
        />
        <span
          v-for="(column, columnIndex) in columns"
          :key="
            `${
              id ? id + '-table-' : 'table-'
            }-row_${rowIndex}-column_${columnIndex}`
          "
          class="td"
          :class="column.field"
          v-text="row[column.field]"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    columns: {
      type: Array,
      default: () => [
        { name: 'State', field: 'state' },
        { total: 'Total', field: 'total' }
      ]
    },
    rows: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.data-table {
  @apply border;

  .t-head,
  .t-body {
    display: grid;
    grid-template-columns: 2.5rem 2fr repeat(4, 1fr);
  }

  .t-head {
    @apply bg-gray-200 border border-gray-100 font-medium;
  }

  .th {
    @apply border-b font-medium;
  }

  .th,
  .td {
    @apply py-2 px-3 text-sm text-center;

    @media (max-width: 640px) {
      @apply text-xs px-1;
    }
  }

  .td {
    @apply border-b border-r;
  }

  .td,
  .th {
    &.recovered {
      @apply bg-green-200;
    }
    &.death {
      @apply bg-red-200;
    }
    &.active {
      @apply bg-indigo-200;
    }
    &.total {
      @apply bg-orange-200;
    }
    &.state {
      @apply font-medium text-left pl-3;
    }
  }
}
</style>
