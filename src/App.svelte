<script>
	
import { Router } from 'svelte-router-spa'
import { routes } from './router.js'

import Header from "./lib/Header.svelte";
import Footer from "./lib/Footer.svelte";
import SimpleModal from './lib/SimpleModal.svelte';
</script>

<svelte:head>
	<!-- <link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"> -->
</svelte:head>

<Header>
</Header>
<Router {routes} />
<Footer />
<SimpleModal />



<style>

	
/* @import url('https://fonts.googleapis.com/css2?family=Rosario:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'); */

:global(*) {
	margin: 0;
	padding: 0;

	text-decoration: none;

	box-sizing: border-box;
}

:global(body) {
	padding: 0;
	
	--main-color: #F49714;
	--secondary-color: #4BB165;	

	font-family: Roboto;
}




</style>