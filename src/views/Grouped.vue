<template>
  <div class="container-fluid">
    <client-table :columns="columns" :options="options" :data="data" :loading="loading">
      <template slot="column_flag" slot-scope="{ row }">
        <img :src="row.flag" class="flag" />
      </template>
      <template slot="column_population" slot-scope="{ row }">
        {{row.population | number}}
      </template>
      <template slot="child_row" slot-scope="{ row }">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label class="control-label">Languages</label>
              <p class="form-control-static">{{row.languages.map(l => l.name).join(', ')}}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="control-label">Currencies</label>
              <p class="form-control-static">
                {{row.currencies.map(c => `${c.code} (${c.symbol})`).join(', ')}}
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="control-label">Calling Codes</label>
              <p class="form-control-static">{{row.callingCodes.join(', ')}}</p>
            </div>
          </div>
        </div>
      </template>
    </client-table>
  </div>
</template>

<style lang="less">
.flag {
  width: 30px;
}
</style>

<script>
import axios from 'axios';

const numberFormatter = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 });

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      columns: ['flag', 'name', 'capital', 'population'],
      data: [],
      loading: false,
      options: {
        uniqueKey: 'alpha2Code',
        childRow: true,
        groupBy: 'region',
      },
    };
  },
  async created() {
    this.loading = true;
    const { data } = await axios.get('/data.json');
    this.data = data;
    this.loading = false;
  },
  filters: {
    number(value) {
      return numberFormatter.format(value);
    },
  },
};
</script>
