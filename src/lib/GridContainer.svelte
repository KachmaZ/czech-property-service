<div class="grid-container">
    <slot></slot>
</div>

<style>
    .grid-container {
        display: grid;
    }

    @media screen and (min-width: 1024px) {
        .grid-container {
            grid-template-columns: repeat(2, 500px);
            grid-template-rows: repeat(2, 1fr);
            justify-content: center;

            gap: 100px 200px;
        }
    }

    @media screen and (max-width: 480px) {
        .grid-container {
            grid-template-columns: 1fr;
            gap: 40px;
        }
    }

</style>