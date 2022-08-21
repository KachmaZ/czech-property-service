<script>
    import WeirdLines from "./WeirdLines.svelte";
    import TextWithButton from "./TextWithButton.svelte";
    import GridContainer from "./GridContainer.svelte";

    let infoBlocks = [
        {
            textTitle: "KOMPLETNÍ SPRÁVA NEMOVITOSTI",
            textBody:
                "Vaší nemovitost kompletně převezmeme." +
                " Postaráme se o prezentaci, správu rezervací," +
                " komunikací s hosty, úklidy, opravy i legislativu." +
                " Zkrátka o vše co je potřeba k tomu, aby nemovitost" +
                " přinášlastabilní přijmy.",
            href: "/complex-management",
        },
        {
            textTitle: "DLOUHODOBÝ PRONÁJEM",
            textBody:
                "Staneme se vašim nájemcem klidně i na několik let." +
                " Platíme pravidelně a o objekty se pečlivě staráme." +
                " Vám zbývá jen přijímat měsíční rentu.",
            href: "/long-rent",
        },
        {
            textTitle: "ODKUP NEMOVITOSTI",
            textBody:
                "Vlastníte nemovitost v zajímavé lokalitě a hledáte" +
                "kupce? Bude li to dávat smysl pro obě strany, vaši" +
                " nemovitost rádi odkoupíme.",
            href: "/purchase-sales",
        },
        {
            textTitle: "VÝPOMOC SE SLUŽBOU UBYTOVATELE",
            textBody:
                "Bojujete s organizačními procesy? Pomůžeme vám se" +
                " systematizací. Převezmeme správu rezervací, organizaci" +
                " úklidů nebo pravidelných oprav. Používáme chytré programy," +
                " které vše velmi ulehčí a zpřehlední. ",
            href: "/services-details",
        },
    ];
</script>

<div class="choose-your-way">
    <h2 class="choose-your-way-title">ZVOLTE SI VLASTNÍ CESTU:</h2>
    <GridContainer>
        {#each infoBlocks as { textTitle, textBody, href }}
            <TextWithButton
                {textTitle}
                {textBody}
                {href}
                buttonTitle="MÁM ZÁJEM"
            />
        {/each}
    </GridContainer>
    <WeirdLines />
    <slot><!-- optional fallback --></slot>
</div>

<style>
    .choose-your-way {
        position: relative;
        overflow: hidden;
    }

    @media screen and (min-width: 1024px) {
        .choose-your-way {
            padding: 100px 120px;
        }

        .choose-your-way-title {
            margin-bottom: 90px;

            font-family: Roboto;
            font-size: 60px;
            font-weight: 500;
            line-height: 70px;
            letter-spacing: 0.15em;
            text-align: center;
        }

        .choose-your-way :global(.weird-lines) {
            /* default position: absolute */
            bottom: 40px;
            left: -200px;

            transform: rotate(6deg);
        }

        .choose-your-way :global(.top-weird-lines) {
            position: absolute;
            top: 80px;
            right: -200px;

            transform: rotate(6deg);
        }
    }

    @media screen and (max-width: 480px) {
        .choose-your-way {
            padding: 50px 20px 80px;
        }

        .choose-your-way-title {
            margin-bottom: 50px;
        }

        .choose-your-way :global(.weird-lines) {
            position: absolute;
            bottom: 40px;
            right: -100px;
        }

        .choose-your-way :global(.top-weird-lines) {
            display: none;
        }
    }
</style>
