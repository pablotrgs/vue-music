<template lang="pug">
    .container
        .columns
            .column.is-5.is-offset-4
                .notification.is-danger
                    slot(name="body") Algo fue mal
</template>>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .notification {
        margin: 10px;
    }
</style>