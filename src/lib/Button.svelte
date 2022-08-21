<script>
    export let type = "button";
</script>

<button on:click class={$$props.class} {type}>
    <slot />
</button>

<style lang="scss">
    button {
        position: relative;

        margin: 0;
        padding: 0;

        overflow: hidden;

        background: var(--main-color);
        color: #ffffff;
        border-radius: 10px;

        &:after {
            background: #fff;
            content: "";
            height: 155px;
            left: -75px;
            opacity: 0.2;
            position: absolute;
            top: -50px;
            transform: rotate(35deg);
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
            width: 50px;
            z-index: 10;
        }

        &:hover:after {
            left: 120%;
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        }
    }

    @media screen and (min-width: 1024px) {
        button {
            font-size: 20px;
            letter-spacing: 0.15em;

            border: none;
        }
    }

    /* @media screen and (max-width: 480px) {
        button {
            width: var(--mob-width);
            height: var(--mob-height);

            font-family: Roboto;
            font-size: 15px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0.15em;

        }
    } */
</style>
