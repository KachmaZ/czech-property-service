<script context="module">
    export function show() {
        modal.set(true);
    }

    export function hide() {
        modal.set(false);
    }
</script>

<script>
    import AppointmentForm from "./AppointmentForm.svelte";
    import { modal } from "../store.js";
</script>

{#if $modal}
    <div class="modal-wrapper" on:click={hide}>
        <div class="modal" on:click|stopPropagation>
            <AppointmentForm />
        </div>
    </div>
{/if}

<style lang="scss">
    .modal-wrapper {
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        background: rgba(0, 0, 0, 0.6);
    }
</style>
