<script>
	import ProjectPreview from './ProjectPreview.svelte';
	import ProjectsGallery from './ProjectsGallery.svelte';
</script>

<div class="our-projects-previews">
    <h2 class="title">
        NAŠE PROJEKTY:
    </h2>
    <ProjectsGallery>
        <ProjectPreview projectFolder='project1'>
            <h3 class="preview-title" slot="title">Ubytovna Malá Chuchle, Praha 5</h3>
            <p class="preview-text" slot="text">
                Lorem Ipsum je demonstrativní výplňový text používaný 
                v tiskařském a knihařském průmyslu. Lorem Ipsum je 
                považováno za standard v této oblasti už od začátku 16. 
            </p>
        </ProjectPreview>
        <ProjectPreview projectFolder='project1'>
            <h3 class="preview-title" slot="title">Ubytovna Malá Chuchle, Praha 5</h3>
            <p class="preview-text" slot="text">
                Lorem Ipsum je demonstrativní výplňový text používaný 
                v tiskařském a knihařském průmyslu. Lorem Ipsum je 
                považováno za standard v této oblasti už od začátku 16. 
            </p>
        </ProjectPreview>
        <ProjectPreview projectFolder='project1'>
            <h3 class="preview-title" slot="title">Ubytovna Malá Chuchle, Praha 5</h3>
            <p class="preview-text" slot="text">
                Lorem Ipsum je demonstrativní výplňový text používaný 
                v tiskařském a knihařském průmyslu. Lorem Ipsum je 
                považováno za standard v této oblasti už od začátku 16. 
            </p>
        </ProjectPreview>
        <ProjectPreview projectFolder='project1'>
            <h3 class="preview-title" slot="title">Ubytovna Malá Chuchle, Praha 5</h3>
            <p class="preview-text" slot="text">
                Lorem Ipsum je demonstrativní výplňový text používaný 
                v tiskařském a knihařském průmyslu. Lorem Ipsum je 
                považováno za standard v této oblasti už od začátku 16. 
            </p>
        </ProjectPreview>
        <ProjectPreview projectFolder='project1'>
            <h3 class="preview-title" slot="title">Ubytovna Malá Chuchle, Praha 5</h3>
            <p class="preview-text" slot="text">
                Lorem Ipsum je demonstrativní výplňový text používaný 
                v tiskařském a knihařském průmyslu. Lorem Ipsum je 
                považováno za standard v této oblasti už od začátku 16. 
            </p>
        </ProjectPreview>
        <ProjectPreview projectFolder='project1'>
            <h3 class="preview-title" slot="title">Ubytovna Malá Chuchle, Praha 5</h3>
            <p class="preview-text" slot="text">
                Lorem Ipsum je demonstrativní výplňový text používaný 
                v tiskařském a knihařském průmyslu. Lorem Ipsum je 
                považováno za standard v této oblasti už od začátku 16. 
            </p>
        </ProjectPreview>
    </ProjectsGallery>
</div>

<style lang="scss">
@media screen and (min-width: 1024px) {
    .our-projects-previews {
        padding: 50px 20px;

        & .title {
            margin-bottom: 80px;

            font-size: 40px;
            text-align: center;
        }

        & :global(.projects-gallery) {
            grid-template-columns: repeat(2, auto);
            grid-template-rows: repeat(3, 1fr);
            gap: 100px;
        }
    }
}

@media screen and (max-width: 480px) {
    .our-projects-previews {
        padding: 25px 10px;

        & .title {
            margin-bottom: 25px;

            font-size: 24px;
            text-align: center;
        }

        & :global(.projects-gallery) {
            grid-template-columns: 1fr;
            gap: 40px;
        }
    }

    
}


</style>