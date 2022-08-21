<script>
	import IconWithText from './IconWithText.svelte';
	import WeirdLines from './WeirdLines.svelte';

    let infoBlocks = [
        {
            iconName: 'Men.svg',
            textTitle: 'Silný organizační tým',
            textBody: 'Každý náš projekt má přiřazeného '+
            'projektového manažera, propagačního manažera, '+
            'opraváře, uklízeče, IT support a office manažera. '+
            'Všichni přesně ví, co mají dělat.',
        },
        {
            iconName: 'Gear.svg',
            textTitle: 'Chytré technologie',
            textBody: 'Rutinní práci automatizujeme a zefektyvňujme. '+
            'Využíváme propracovaný booking systém, mobilní aplikaci, '+
            'rozpočtový program a službu k efektivnímu rozdělování úkolů.',
        },
        {
            iconName: 'Star.svg',
            textTitle: 'Letité zkušenosti',
            textBody: 'Dlouhodobě spravujeme 13 ubytoven po Praze a '+
            'středočeském kraji. Dohlížíme na 10 kancelářských '+
            'prostorů a v bytech i rodinných domech ubytováváme '+
            'stabilně přes 45 lidí. Celkem se staráme o 27 objektů '+
            'o příbližně 1 200 lidech. ',
        },
    ]
</script>

<div class="why-we">
    <h2 class="why-we-title">
        PROČ SPOLUPRACOVAT S NÁMI
    </h2>
    <div class="icon-text-container">
        {#each infoBlocks as {iconName, textTitle, textBody}}
            <IconWithText {iconName} {textTitle} {textBody}/>
        {/each}
    </div>
    <WeirdLines/>
</div>

<style>
    .why-we {
        position: relative;
    }
    .icon-text-container {
        display: grid;
    }

    @media screen and (min-width: 1024px) {
        .why-we {
            padding: 50px 60px 150px;

            overflow: hidden;
        }

        .why-we-title {
            font-family: Roboto;
            font-size: 60px;
            font-weight: 500;
            line-height: 70px;
            letter-spacing: 0.15em;
            text-align: center;

        }

        .icon-text-container {
            grid-template-columns: repeat(3, 1fr);
            column-gap: 120px;
        }

        .why-we :global(.weird-lines) {
            bottom: 30px;
            right: -200px;

            transform: rotate(6deg);
        }
    }

    @media screen and (max-width: 480px) {
        .why-we {
            padding: 50px 0;
        }

        .why-we-title {
            margin-bottom: 50px;
            font-family: Roboto;
            font-size: 25px;
            font-style: bold;
            line-height: 29px;
            letter-spacing: 0.15em;
            text-align: center;

        }

        .icon-text-container {
            padding: 0 20px;

            grid-template-columns: repeat(1, 1fr);
            row-gap: 75px;
        }
        
        .why-we :global(.weird-lines) {
            bottom: 0;
            left: -100px;
        }
    }
</style>