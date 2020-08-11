<template>
    <div>
        <div class=" footer">
                        <h1>FOOTER</h1>
                    </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style>
.footer{
    height: 200px;
    background-color: black;
}
.footer h1::before{
    content: '';
    display: block;
    background: white;
    height: 2px;
    width: 100%;
}
    
</style>