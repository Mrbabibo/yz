<template>
    <div class="hello"> {{who}}</div>
</template>
 
<script>
module.exports = {
    data: function() {
        return {
            who: ''
        }
    }
}
</script>
 
<style>
.hello {
    width: 200px;
    height: 100px;
    background-color: #ffe;
}
</style>