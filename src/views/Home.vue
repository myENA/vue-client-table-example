<template>
  <div class="container-fluid">
    <client-table :columns="columns" :options="options" :data="data" :loading="loading">
    </client-table>
  </div>
</template>

<style lang="less">
</style>

<script>
import axios from 'axios';

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      columns: ['name', 'capital', 'population'],
      data: [],
      loading: false,
      options: {
        uniqueKey: 'alpha2Code',
      },
    };
  },
  async created() {
    this.loading = true;
    const { data } = await axios.get('/data.json');
    this.data = data;
    this.loading = false;
  },
};
</script>
