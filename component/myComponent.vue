<template>
    <div class="hello">Hello {{who}}</div>
</template>
 
<script>
module.exports = {
    data: function() {
        return {
            who: 'helloworld'
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