<script>
    let partnersLogos = [
        'partlogo1.png',
        'partlogo2.png',
        'partlogo3.png',
        'partlogo4.png',
        'partlogo5.png',
        'partlogo6.png',
        ]

    
</script>

<div class="partners-belt">
        {#each partnersLogos as logo}
            <img class="partners-logo" src="/images/partners/{logo}" alt="">
        {/each}
</div>

<style>
    .partners-belt {
        background:  #F1F1F1;
    }

    @media screen and (min-width: 1024px) {
        .partners-belt {
            padding: 50px 65px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            overflow-y: scroll;
        }

        .partners-logo {
            

            margin-right: 50px;
        }

        .partners-logo:last-child {
            margin-right: 0;
        }
    }

    @media screen and (max-width: 480px) {
        .partners-belt {
            padding: 30px;

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);

            gap: 30px 40px
        }

        .partners-logo {
            width: 140px;
            height: 40px;
        }
    }
</style>