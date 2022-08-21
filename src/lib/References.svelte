<script>
	import References from './References.svelte';
	import WeirdLines from './WeirdLines.svelte';
    import QuoteCard from './QuoteCard.svelte';
</script>

<div class="references">
    <h2 class="references-title">
        REFERENCES
    </h2>
    <div class="quote-gallery">
        <QuoteCard author="Lorem Ipsum">
            Lorem Ipsum je demonstrativní výplňový text 
            používaný v tiskařském a knihařském průmyslu. 
            Lorem Ipsum je považováno za standard v této 
            oblasti už od začátku 16. 
        </QuoteCard>
        <QuoteCard author="Lorem Ipsum">
            Lorem Ipsum je demonstrativní výplňový text 
            používaný v tiskařském a knihařském průmyslu. 
            Lorem Ipsum je považováno za standard v této 
            oblasti už od začátku 16. 
        </QuoteCard>
    </div>
    <WeirdLines/>
</div>

<style>

    .references {
        position: relative;
    }   
    
    
    @media screen and (min-width: 1024px) {
        .references {
            padding: 70px 50px 180px;
        }

        .references-title {
            margin-bottom: 50px;
            
            font-size: 60px;
            font-weight: 500;
            line-height: 70px;
            letter-spacing: 0.15em;
            text-align: center;
        }

        .quote-gallery {
            display: flex;
            justify-content: space-around;
        }

        .references :global(.weird-lines) {
            bottom: 100px;
            left: -200px;

            transform: rotate(6deg);
        }
    }

    @media screen and (max-width: 480px) {
        .references {
            padding: 30px 10px;
        }

        .references-title {
            margin-bottom: 50px;

            font-size: 25px;    
            text-align: center;
        }

        .quote-gallery {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        .references :global(.weird-lines) {
            bottom: 0;
            left: -100px;
        }
    }
</style>