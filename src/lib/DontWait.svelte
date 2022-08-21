<script>
    import Button from "./Button.svelte";
    import WeirdLines from "./WeirdLines.svelte";
    import SimpleModal, { show } from "./SimpleModal.svelte";
</script>

<div class="dont-wait">
    <div class="media-wrapper" />
    <div class="text-wrapper">
        <p class="dont-wait-text">
            CHCETE PROMĚNIT SVOU NEMOVITOST V PODOBNĚ USPĚŠNÝ PROJEKT? POJĎME
            DOMLUVIT OSOBNÍ SCHŮZKU, NA KTERÉ VŠE PROBEREME.
        </p>
        <Button on:click={() => show()}>DOMLUVIT SCHŮZKU</Button>
    </div>
    <WeirdLines class="top-weird-lines" />
    <WeirdLines />
</div>

<style lang="scss">
    .dont-wait {
        position: relative;

        overflow: hidden;

        & .media-wrapper {
            position: relative;
        }
    }

    @media screen and (min-width: 1024px) {
        .dont-wait {
            padding: 100px 50px;

            display: flex;
            justify-content: space-between;

            & :global(.weird-lines) {
                display: none;
            }

            & :global(.top-weird-lines) {
                position: absolute;
                top: 50px;
                right: -200px;

                transform: rotate(6deg);
            }

            & .media-wrapper {
                width: 500px;
            }

            & .text-wrapper {
                max-width: 790px;

                & .dont-wait-text {
                    margin-bottom: 50px;
                    font-size: 60px;
                    letter-spacing: 0.15em;
                }

                & :global(button) {
                    width: 310px;
                    height: 50px;
                }
            }
        }
    }

    @media screen and (max-width: 480px) {
        .dont-wait {
            padding: 100px 20px 150px;

            & :global(.top-weird-lines) {
                position: absolute;

                width: 250px;
                top: 0;
                right: -100px;
            }

            & :global(.weird-lines) {
                width: 250px;
                bottom: 50px;
                left: -100px;
            }

            & .text-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;

                & .dont-wait-text {
                    margin-bottom: 30px;

                    font-size: 25px;
                    letter-spacing: 0.15em;
                }

                & :global(button) {
                    width: 230px;
                    height: 50px;
                }
            }
        }
    }
</style>
