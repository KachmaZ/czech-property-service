<script>
	import Button from './Button.svelte';
import ProjectCard from './ProjectCard.svelte';
    import ProjectsGallery from "./ProjectsGallery.svelte"; 

    let projectCards = [
        {            
            cardTitle: 'Ubytovna Benešov',
            cardImage: 'project1/preview.png',
            cardText: 'Lorem Ipsum je demonstrativní výplňový text '+
            'používaný v tiskařském a knihařském průmyslu. Lorem '+
            'Ipsum je považováno za standard v této oblasti už od '+
            'začátku 16. století, kdy dnes neznámý tiskař vzal kusy '+
            'textu a na jejich základě vytvořil speciální vzorovou '+
            'knihu. Jeho odkaz nevydržel pouze pět století,',
        },
        {            
            cardTitle: 'Ubytovna Praha 5',
            cardImage: 'project2.png',
            cardText: 'Lorem Ipsum je demonstrativní výplňový text '+
            'používaný v tiskařském a knihařském průmyslu. Lorem '+
            'Ipsum je považováno za standard v této oblasti už od '+
            'začátku 16. století, kdy dnes neznámý tiskař vzal kusy '+
            'textu a na jejich základě vytvořil speciální vzorovou '+
            'knihu. Jeho odkaz nevydržel pouze pět století,',
        },
        {            
            cardTitle: 'Ubytovna okres Beroun',
            cardImage: 'project3.png',
            cardText: 'Lorem Ipsum je demonstrativní výplňový text '+
            'používaný v tiskařském a knihařském průmyslu. Lorem '+
            'Ipsum je považováno za standard v této oblasti už od '+
            'začátku 16. století, kdy dnes neznámý tiskař vzal kusy '+
            'textu a na jejich základě vytvořil speciální vzorovou '+
            'knihu. Jeho odkaz nevydržel pouze pět století,',
        },
        {            
            cardTitle: 'Ubytovna Neratovice',
            cardImage: 'project4.png',
            cardText: 'Lorem Ipsum je demonstrativní výplňový text '+
            'používaný v tiskařském a knihařském průmyslu. Lorem '+
            'Ipsum je považováno za standard v této oblasti už od '+
            'začátku 16. století, kdy dnes neznámý tiskař vzal kusy '+
            'textu a na jejich základě vytvořil speciální vzorovou '+
            'knihu. Jeho odkaz nevydržel pouze pět století,',
        },

    ]
</script>

<div class="our-projects">
    <h2 class="our-projects-title">
        NAŠE PROJEKTY
    </h2>
    <ProjectsGallery>
        {#each projectCards as {cardTitle, cardImage, cardText} }
            <ProjectCard {cardTitle} {cardImage} {cardText} />
        {/each}
    </ProjectsGallery>
    <div class="button-wrapper">
        <a href="/projects">
            <Button class="our-projects-button" deskWidth='246px'>Více projektů</Button>
        </a>
    </div>
</div>

<style>

    .button-wrapper {
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 1024px) {
        .our-projects {
            padding: 0 120px;
        }

        .our-projects :global(.projects-gallery) {            
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(2, 570px);
            gap: 60px;
        }

        
        .our-projects-title {
            margin-bottom: 100px;

            font-family: Roboto;
            font-size: 60px;
            font-weight: 500;
            line-height: 70px;
            letter-spacing: 0.15em;
            text-align: center;
        }

        .button-wrapper {
            padding: 60px 0;
        }

        :global(.our-projects-button) {
            width: 246px;
            height: 50px;
        }
    }

    @media screen and (max-width: 480px) {
        .our-projects {
            margin: 50px 20px;
        }

        .our-projects :global(.projects-gallery) {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .our-projects-title {
            margin-bottom: 40px;    
            font-family: Roboto;
            font-size: 25px;    
            font-weight: 500;
            line-height: 29px;
            letter-spacing: 0.15em;
            text-align: center;
        }

        .button-wrapper {
            padding-top: 60px;
        }

        :global(.our-projects-button) {
            width: 200px;
            height: 50px;
        }
    }
</style>