<script>
import BaseHeader from './BaseHeader.svelte';
import Button from './Button.svelte';
import {show} from './SimpleModal.svelte';
    
    

    let links=[
		{
			text: 'Služby',
			url: '/services',
		}, 	
		{
			text: 'Naše projekty',
			url: '/projects',
		}, 	
		{
			text: 'O nás',
			url: '/about',
		}, 	
		{
			text: 'Kontakty',
			url: '/contacts',
		}
	];	

</script>

<BaseHeader>
	<a href="/" slot="logo">
		<img src="/images/logo.png" class="logo-img" alt="logo" srcset="">
	</a>
	<div slot="navigation-desktop">
		<div class="contacts">
			<span class="contact"><img class="contact-icon" src="/images/icons/Call.svg" alt="Contact icon"><p>+420 000 000 000</p></span>
			<span class="contact"><img class="contact-icon" src="/images/icons/Email.svg" alt="Contact icon"><p>+420 000 000 000</p></span>
		</div>
		<nav class="navbar">
			{#each links as link}
				<a href="{link.url}" class="nav-link">{link.text}</a>
			{/each}
		</nav>
	</div>

	<div slot="navigation-mobile">
		<nav class="navbar-mobile">
			{#each links as link}
				<a href="{link.url}" class="nav-link-mobile">{link.text}</a>
			{/each}
		</nav>
	</div>

	<Button class='header-button' slot="other-desktop" deskWidth="310px" on:click='{show}'>DOMLUVIT SCHŮZKU</Button>

	<img slot="menu-button" src="/images/icons/Menu.svg" alt="">
</BaseHeader>

<style>    
.logo-img {
	width: 100%;
	height: 100%;
}

.contacts {
	margin-bottom: 30px;
	display: flex;
	justify-content: center;
}

.contact {
	margin: 0 15px;
	display: flex;
	align-items: center;
}

.contact-icon {
	width: 40px;
	height: 40px;

	margin-right: 15px;
}

.nav-link {
	margin-right: 45px;

	color: #000000;
	font-size: 25px;
}

.nav-link:last-child {
	margin-right: 0;
}

@media screen and (min-width: 1024px) {
	:global(.header-button) {
		width: 310px;
		height: 50px;
	}

}

@media screen and (max-width: 480px) {
	.navbar-mobile {            
		padding: 0 20px;
		
		display: flex;
		flex-direction: column;	
	}

	.nav-link-mobile {
		height: 30px;	

		display: flex;
		align-items: center;

		text-decoration: none;
		color: #000000;

		border-bottom: 1px solid var(--secondary-color);
	}

	.nav-link-mobile:last-child {
		border-bottom: none;
	}
}

</style>