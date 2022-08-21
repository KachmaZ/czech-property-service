<script>
    export let iconName;
    export let textTitle = 'Title';
    export let textBody = 'Body';
</script>

<div class="icon-text-element">
    <img class="icon" src="/images/icons/{iconName}" alt="Icon">
    <span class="text-title">
        {textTitle}
    </span>
    <p class="text-body">
        {textBody}
    </p>
</div>

<style>
    .icon-text-element {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (min-width: 1024px) {
        .icon {
            width: 112px;
            height: 112px;

            margin-bottom: 20px;
        }

        .text-title {
            font-family: Roboto;
            font-size: 30px;
            font-weight: 500;
            line-height: 35px;
            letter-spacing: 0.15em;
            text-align: left;
        }

        .text-body {
            font-family: Roboto;
            font-size: 20px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.1em;
            text-align: left;
        }
    }

    @media screen and (max-width: 480px) {
        .icon {
            width: 96px;
            height: 96px;

            margin-bottom: 32px;
        }

        .text-title {
            width: 100%;

            margin-bottom: 20px;

            font-family: Roboto;
            font-size: 18px;
            font-weight: 500;
            line-height: 21px;
            letter-spacing: 0.15em;
            text-align: left;

        }

        .text-body {
            font-family: Roboto;
            font-size: 15px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.1em;
            text-align: left;
        }
    }
</style>