<script>
import Button from "./Button.svelte";

export let textTitle = 'Some title';
export let textBody = 'Text body';
export let buttonTitle = 'Some button';
export let href = ''
</script>

<div class="text-button-element">
    <span class="tbe-text-title">{textTitle}</span>
    <p class="tbe-text-body">{textBody}</p>
    <a {href}>
        <Button class="tbe-button">{buttonTitle}</Button>
    </a>
</div>

<style>
    @media screen and (min-width: 1024px) {
        .text-button-element {
            height: 100%;
            width: 100%;
            max-width: 500px;

            display: flex;
            flex-direction: column;

            justify-content: space-between;
        }

        .tbe-text-title {
            font-family: Roboto;
            font-size: 20px;
            font-weight: 500;
            line-height: 35px;
            letter-spacing: 0.15em;
        }

        .tbe-text-body {
            margin-bottom: 10px;

            font-family: Roboto;
            font-size: 14px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.1em;

        }

        :global(.tbe-button) {
            width: 200px;
            height: 50px;
        }
    }

    @media screen and (max-width: 480px) {
        .tbe-text-body {
            margin: 15px 0;

            
        }

        :global(.tbe-button) {
            width: 130px;
            height: 30px;
        }
    }
</style> 