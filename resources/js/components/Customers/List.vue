<template>
  <div>
    <div class="btn-wrapper">
      <router-link to="/customers/new" class="btn btn-primary btn-sm">New</router-link>
    </div>
    <table class="table">
      <thead>
        <th>Name</th>
        <th>Eamil</th>
        <th>Phone</th>
      </thead>
      <tbody>
        <template v-if="!customers.length">
          <tr>
            <td colspan="4" class="text-center">No customer available</td>
          </tr>
        </template>
        <template v-else>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{customer.name}}</td>
            <td>{{customer.email}}</td>
            <td>{{customer.phone}}</td>
            <td>
              <router-link :to="`cutsomers/${customer.id}`">View</router-link>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getCustomers");
  },
  computed: {
    customers() {
      return this.$store.getters.customers;
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-wrapper {
  text-align: right;
  margin-bottom: 20px;
}
</style>