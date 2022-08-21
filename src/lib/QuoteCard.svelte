<script>
    export let author="Author";
</script>

<div class="quote-card">
    <img src="/images/icons/Quotes.svg" alt="Quotes" class="quote-card-icon">
    <p class="quote-card-text">
        <slot></slot>
    </p>
    <span class="quote-card-author">
        {author}
    </span>
</div>

<style>
    @media screen and (min-width: 1024px) {
        .quote-card {
            width: 570px;

            padding: 60px;
            
            box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.06), -4px -4px 25px rgba(0, 0, 0, 0.06);
            border-radius: 10px;
        }

        .quote-card-icon {
            width: 50px;
            height: 50px;

            margin-bottom: 30px;
        }

        .quote-card-text {
            font-style: italic;
            font-size: 18px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.1em;
        }

        .quote-card-author {
            font-size: 20px;
            font-weight: 500;
            line-height: 35px;
            letter-spacing: 0.15em; 

        }
    }

    @media screen and (max-width: 480px) {
        .quote-card {
            width: 100%;

            padding: 20px;
            margin-bottom: 25px;
            
            box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.06), -4px -4px 25px rgba(0, 0, 0, 0.06);
            border-radius: 10px;
        }

        .quote-card:last-child {
            margin-bottom: 0;
        }

        .quote-card-icon {
            width: 30px;
            height: 30px;

            margin-bottom: 15px;
        }

        .quote-card-text {
            font-style: italic;
            font-size: 18px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.1em;
        }
        
        .quote-card-author {
            font-size: 20px;
            font-weight: 500;
            line-height: 35px;
            letter-spacing: 0.15em; 

        }
    }
</style>
