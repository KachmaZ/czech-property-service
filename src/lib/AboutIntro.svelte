<script></script>


<div class="about-intro">
    <h2 class="about-intro-title">
        O nás
    </h2>
    <div class="about-intro-text">
        <h3 class="text-title">UČÍME NEMOVITOSTI STABILNĚ VYDĚLÁVAT</h3>
        <p class="text-body">
            Díky nám vaše nemovitosti přináší stabilní rentu každý 
            měsíc. Zajišťujeme přitažlivé prezentace, správu 
            rezervací, komunikaci s hosty, úklidy, opravy i legislativu. 
            Jsme profesionální správce nemovitostí. Staráme se o desítky 
            objektů různých velikostí a tříd. Najdete mezi nimi ubytovny, 
            penziony, hotely, hostely, byty i rodinné domy. Zkrátka vše, 
            co je určeno k bydlení. 
        </p>
    </div>
    <img class="about-intro-image" src="/images/about.png" alt="" srcset="">
   
</div>

<style lang="scss">
.about-intro {
    display: flex;
    flex-direction: column;
}

@media screen and (min-width: 1024px) {
    .about-intro {
        
        & .about-intro-title {
            margin-bottom: 50px;    

            font-size: 60px;
            letter-spacing: 0.15em;
            text-align: center;
        }

        & .about-intro-text {
            width: 50%;
            min-width: 600px;

            & .text-title {
                margin-bottom: 27px;

                font-size: 30px;
                letter-spacing: 0.15em;
            }

            & .text-body {
                margin-bottom: 50px;

                font-size: 20px;
                letter-spacing: 0.1em;
            }
        }

        & .about-intro-image {
            margin-right: 100px;
            
            align-self: flex-end;

            width: 520px;
            height: 380px;

            border-radius: 10px;
        }
    }
}

@media screen and (max-width: 480px) {
    .about-intro {
        padding: 30px 20px 80px;
        align-items: center;

        & .about-intro-title {
            margin-bottom: 50px;

            font-size: 20px;
            letter-spacing: 0.15em;
            text-align: center;
        }

        & .about-intro-text {
            & .text-title {
                margin-bottom: 20px;

                font-size: 18px;
                letter-spacing: 0.15em;
            }

            & .text-body {
                margin-bottom: 40px;

                font-size: 15px;
                letter-spacing: 0.1em;
            }
        }

        & .about-intro-image {
            margin: 0;

            width: 280px;
            height: 200px;

            border-radius: 10px;
        }
    }
}
</style>