<script>
    import AppointmentForm from "./AppointmentForm.svelte";
    import WelcomeText from "./WelcomeText.svelte";
</script>

<div class="welcome-screen">
	<WelcomeText/>
    <AppointmentForm/>
</div>

<style>
    .welcome-screen {
        background: url(/images/building.png);
        background-size: cover;
        background-position: center center;
    }

    @media screen and (min-width: 1024px) {
        .welcome-screen {
            padding: 90px 50px 90px 85px;

            display: flex;
            justify-content: space-between;
            
            background-size: cover;
            background-position: center center;
        }
    }

    @media screen and (max-width: 480px) {
        .welcome-screen {
            height: 510px;
        }

        .welcome-screen :global(.appointment-form-wrapper) {
            display: none;
        }
    }
</style>