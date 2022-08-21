<script>
</script>

<div class="{$$props.class ? $$props.class : ' weird-lines'}" >
    <div class="line"></div>
    <div class="line"></div>
</div>

<style>
    .weird-lines {
        position: absolute;
    }

    .line {
        height: 2px;
        background: var(--secondary-color);
    }

    .line:first-child {
        margin-left: -20px;
        margin-bottom: 5px;
    }

    @media screen and (min-width: 1024px) {
        .line {
            width: 600px;
        }

    }

    @media screen and (max-width: 480px) {
        .line {
            width: 250px;
        }
    }
</style>