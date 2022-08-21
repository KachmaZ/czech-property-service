<script>
    let menuActive = false;

    function menuToggle() {
        menuActive = !menuActive
    }
</script>

<header>
    <div class="logo">
        <slot name="logo" class="logo-wrapper">Logo section</slot>
    </div>

    <div class="navigation-desktop">
        <slot name="navigation-desktop">Navlinks desktop section</slot>
    </div>

    <div class="other-desktop">
        <slot name="other-desktop"><!--Additional desktop section --></slot>
    </div>

    {#if menuActive}
        <div class="navigation-mobile" on:click={menuToggle}>
            <slot name="navigation-mobile">Navlinks mobile section</slot>
        </div> 
    {/if}

    <div class="menu-button" on:click={menuToggle}>
        <slot name="menu-button"> Mobile menu button</slot>
    </div>

    
</header>

<style>

    @media screen and (min-width: 1024px) {
        .menu-button, .navigation-mobile {
            display: none;
        }
        
        header {
            position: sticky;

            width: 100%;
            min-width: 1024px;
            height: 140px;

            display: flex;
            justify-content: space-around;
            align-items: center;

            border-bottom: 1px solid #3D433F;
        }

        .logo {
            width: 210px;
            height: 111px;
        }
    }

    @media screen and (max-width: 480px) {
        .navigation-desktop, .other-desktop {
            display: none;
        }

        header {
            position: relative;

            height: 60px;

            padding: 0 15px;

            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            width: 90px;
            height: 50px;
        }

        .navigation-mobile {
            position: absolute;
            top: 60px;
            left: 0;
            z-index: 5;

            width: 100vw;

            background: #FFFFFF;
        }
    }



    
</style>