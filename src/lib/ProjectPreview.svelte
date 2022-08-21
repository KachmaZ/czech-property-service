<script>
    import Button from "./Button.svelte";

    export let projectFolder;
</script>

<div class="project-preview">
    <img src="/images/projects/{projectFolder}/preview.png" alt="" class="preview">
    <div class="description">
        <slot name="title"></slot>
        <slot name="text"></slot>
        <a href="">
            <Button class="preview-button">ZJISTIT VÍCE</Button>
        </a>
    </div>
</div>

<style lang="scss">
.project-preview {
    position: relative;

    display: flex;  

    & .preview {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;

        border-radius: 10px;
    }

    & .description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background: #FFFFFF;

        border: 2px solid var(--secondary-color);
        border-radius: 10px;
        box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
    }
}

@media screen and (min-width: 1024px) {
    .project-preview {
        width: 600px;
        height: 400px;
        justify-content: end;
        align-items: center;

        & .preview {
            width: 500px;
            height: 400px;
        }
        
        & .description {
            width: 400px;
            height: 350px;

            padding: 25px;            


            & :global(.preview-title) {
                font-size: 24px;
            }

            & :global(.preview-text) {
                font-size: 20px;
                letter-spacing: 0.1em;
                line-height: 28px;
            }
            
            & :global(.preview-button) {
                width: 220px;
                height: 50px;
            }
        }
    }
}

@media screen and (max-width: 480px) {
    .project-preview {
        height: 500px;

        flex-direction: column;
        justify-content: end;
        align-items: center;

        & .preview {
            width: 100%;    
            height: 300px;
        }

        & .description {
            width: 280px;
            height: 280px;

            padding: 20px 15px;

            & :global(.preview-title) {
                font-size: 18px;
            }

            & :global(.preview-text) {
                font-size: 14px;
                letter-spacing: 0.1em;
            }

            
            & :global(.preview-button) {
                width: 150px;
                height: 40px;
            }
        }
    }
}

</style>