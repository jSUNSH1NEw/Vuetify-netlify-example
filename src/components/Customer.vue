<template>
    <div>
        [id: {{ this.$route.params.id }} - 
        name: {{ this.$route.params.name }}]
    </div>
</template>
 
<script>
export default {
  name: "customer"
};
</script>