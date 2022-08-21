<script>
	import WeirdLines from './WeirdLines.svelte';
    import Button from './Button.svelte';
</script>
<div class="welcome-text">
    <p class="welcome-text-pretitle">
        Czech Property Service - váš správce nemovitosti
    </p>
    <div class="welcome-text-title-wrapper">
        <h1 class="welcome-text-title">
            NAUČÍME VAŠÍ NEMOVITOST VYDĚLÁVAT VÍCE
        </h1>
        <WeirdLines />
    </div>
    <h2 class="welcome-text-subtitle">
        POJĎME DOMLUVIT SCHŮZKU
    </h2>

    <div class="welcome-text-button">
        <Button>DOMLUVIT SCHŮZKU</Button>
    </div>
</div>

<style>
    
    .welcome-text {
        max-width: 650px;
    }

    .welcome-text-title-wrapper {
        position: relative;
    }

    @media screen and (min-width: 1024px) {
        .welcome-text-pretitle {
            width: 50%;

            font-family: Roboto;
            font-size: 20px;
            font-weight: 500;
            line-height: 23px;
            letter-spacing: 0.15em;

        }

        .welcome-text-title {
            font-family: Roboto;
            font-size: 60px;
            font-weight: 500;
            line-height: 70px;
            letter-spacing: 0.15em;

        }

        .welcome-text-title-wrapper :global(.weird-lines) {
            bottom: -15px;
            left: 20px;
        }

        .welcome-text-subtitle {
            margin-top: 30px;
            
            font-family: Roboto;
            font-size: 30px;
            font-weight: 500;
            line-height: 35px;
            letter-spacing: 0.15em;
        }

        .welcome-text-button {
            display: none;
        }
    }


    
    @media screen and (max-width: 480px) {
        .welcome-text {
            height: 100%;

            padding: 30px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .welcome-text-pretitle {
            font-family: Roboto;
            font-size: 18px;
            font-weight: 500;
            line-height: 21px;
            letter-spacing: 0.15em;
        }

        .welcome-text-title {
            font-family: Roboto;
            font-size: 25px;
            font-weight: 500;
            line-height: 29px;
            letter-spacing: 0.15em;
        }

        .welcome-text-title-wrapper :global(.weird-lines) {
            bottom: -15px;
            left: 20px;
        }

        .welcome-text-subtitle {
            margin-top: 30px;

            font-family: Roboto;
            font-size: 18px;
            font-weight: 500;
            line-height: 21px;
            letter-spacing: 0.15em;
        }

        .welcome-text-button {

            display: flex;
            justify-content: center;
        }

        .welcome-text-button :global(button) {
            width: 225px;
            height: 40px;
        }
    }

    
</style>