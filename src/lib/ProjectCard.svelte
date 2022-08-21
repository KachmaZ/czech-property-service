<script>
    export let cardTitle = 'Card title';
    export let cardImage;
    export let cardText = 'Card text';
</script>

<div class="project-gallery-card">
    <span class="card-title">{cardTitle}</span>
    <img class="card-image" src="/images/projects/{cardImage}" alt="Card" srcset="">
    <p class="card-text">{cardText}</p>
</div>

<style>
    .project-gallery-card {
        padding: 0 60px;

        display: flex;
        flex-direction: column;
        align-items: center;

        border: 2px solid var(--secondary-color);
        border-radius: 10px;
        
        box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
    }

    @media screen and (min-width: 1024px) {
        .project-gallery-card {
            width: 570px;
        }

        .card-title {        
            margin: 30px;

            font-family: Roboto;
            font-size: 20px;
            font-weight: 500;
            line-height: 35px;
            letter-spacing: 0.15em;
            text-align: center;
        }

        .card-image {
            width: 380px;
            height: 280px;

            margin-bottom: 35px;

            border-radius: 10px;
        }
        

        .card-text {
            margin-bottom: 40px;
            font-family: Roboto;
            font-size: 14px;
            font-weight: 500;
            line-height: 28px;
            letter-spacing: 0.1em;
        }
    }

    @media screen and (max-width: 480px) {
        .project-gallery-card {
            width: 100%;    
            padding: 0 15px;
        }

        .card-title {
            margin: 30px;

            font-family: Roboto;
            font-size: 18px;
            font-weight: 500;
            line-height: 21px;
            letter-spacing: 0.15em;
            text-align: left;

        }

        .card-image {
            width: 280px;
            height: 200px;

            margin-bottom: 35px;

            border-radius: 10px;
        }        

        .card-text {
            margin-bottom: 10px;
            font-family: Roboto;
            font-size: 14px;
            font-weight: 500;
            line-height: 28px;
            letter-spacing: 0.1em;
        }
    }
</style>
