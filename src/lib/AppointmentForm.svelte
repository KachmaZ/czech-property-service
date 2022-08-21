<script>
    import Button from "./Button.svelte";
    import { hide } from "./SimpleModal.svelte";
    let name;
    let phoneNumber;
    let email;

    function sendAppointment() {
        hide();
        alert(
            `This is demonstrative project, so your data will not be sent. \n
             Collected customer data: \n
             Name: ${name} \n
             Phone number: ${phoneNumber} \n
             Email: ${email}`
        );
    }
</script>

<div class="{$$props.class ? $$props.class : ''} appointment-form-wrapper">
    <form
        action=""
        class="appointment-form"
        on:submit|preventDefault={sendAppointment}
    >
        <h2 class="appointment-form-title">Nezávazně se nám ozvěte</h2>
        <label>
            Jmeno*
            <input type="text" bind:value={name} />
        </label>

        <label>
            Telefonní číslo*
            <input type="text" bind:value={phoneNumber} />
        </label>

        <label>
            Email*
            <input type="text" bind:value={email} />
        </label>

        <Button class="appointment-form-button" type="submit"
            >DOMLUVIT SCHŮZKU</Button
        >
    </form>
</div>

<style>
    .appointment-form-wrapper {
        width: 448px;
        height: 512px;

        padding: 30px 50px;

        background: #ffffff;
        border-radius: 10px;
    }

    .appointment-form {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        border-radius: 10px;
    }

    h2 {
        font-size: 20px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: 0.15em;
    }

    label {
        width: 100%;
        display: flex;
        flex-direction: column;

        font-family: Roboto;
        font-size: 15px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0.15em;
        color: #c4c4c4;
    }

    input {
        height: 55px;

        margin-top: 10px;

        font-size: 18px;

        border: 1px solid #c4c4c4;
    }

    :global(.appointment-form-button) {
        width: 310px;
        height: 50px;
    }
</style>
