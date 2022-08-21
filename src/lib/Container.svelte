<script>
    export let customClass;
</script>
 
<!-- {@debug customClass}    -->

<div class="{customClass ? customClass : ''} container" >
    <slot></slot>
</div>

<style>
    .container {
        width: 100%;
    }
</style>