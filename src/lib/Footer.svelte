<script>
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

<footer>
    <img src="/images/logo.png" alt="" class="footer-logo">
    <div class="footer-wrapper">
        <div class="footer-content-block">
            <div class="footer-contacts">
                <h3 class="footer-title">
                    Rychlý kontakt
                </h3>                
                <div class="footer-contacts">
                    <span class="footer-contact"><img class="contact-icon" src="/images/icons/Call.svg" alt="Contact icon"><p>+420 000 000 000</p></span>
                    <span class="footer-contact"><img class="contact-icon" src="/images/icons/Email.svg" alt="Contact icon"><p>+420 000 000 000</p></span>
                </div>
            </div>
            <div class="footer-address">
                <h3 class="footer-title">
                    Fakturační údaje:
                </h3>
                <p class="footer-address">
                    CZECH PROPERTY SERVICE, S. R. O. <br>
                    Na Plzeňce 1166/4 <br>
                    Praha 5 – Smíchov 150 00 <br>
                </p>
            </div>
        </div>
        <div class="footer-content-block">
            <div class="footer-nav">
                <h3 class="footer-title">
                    NAVIGACE
                </h3>
                <div class="footer-nav-links">
                    {#each links as link}
                        <a href="{link.url}" class="nav-link">{link.text}</a>
                    {/each}
                </div>
            </div>
        </div>
        <div class="footer-content-block">
            <div class="footer-useful">
                <div class="footer-useful-wrapper">              
                    <h3 class="footer-title">
                        UŽITEČNÉ ODKAZY
                    </h3>
                    <div class="footer-useful-links">
                        <a href="/" class="useful-link">Cookies</a>
                        <a href="/" class="useful-link">Nakládání s osobními údaji</a>
                    </div>
                </div>
                <div class="social-links">
                    <a href="linkedin.com"><img src="/images/icons/Linkedin.svg" alt="LinkedIn" class="social-link"></a>
                    <a href="instagram.com"><img src="/images/icons/Instagram.svg" alt="Instagram" class="social-link"></a>
                    <a href="facebook.com"><img src="/images/icons/Facebook.svg" alt="Facebook" class="social-link"></a>
                </div>
            </div>
        </div>
    </div>
    <span class="copyright">
        Všechna práva vyhrazena 2022
    </span>
</footer>

<style>
    footer {

        padding: 45px 80px 0;

        background: #F1F1F1;    
    }

    .footer-logo {
        width: 155px;
        height: 80px;

        margin-bottom: 30px;
    }

    .footer-title {
        margin-bottom: 10px;

        font-size: 20px;
        font-weight: 500;
        line-height: 35px;
        letter-spacing: 0.15em;

    }

    .footer-wrapper {
        display: flex;
        justify-content: space-between;
        
        font-size: 18px;
        font-weight: 500;
    }

    
    .footer-contacts {
        margin-bottom: 20px;
    }

    .footer-contact {
        display: flex;
        align-items: center;
    }

    .contact-icon {
        width: 40px;
        height: 40px;

        margin-right: 15px;
    }

    .footer-nav-links {
        display: flex;
        flex-direction: column;
    }

    .nav-link {
        margin-bottom: 10px;
        color: #000000;
    }

    .footer-useful {
        height: 100%;
        display: flex;
        flex-direction: column;

        justify-content: space-between;
    }

    .footer-useful-links {
        display: flex;
        flex-direction: column;
    }

    .useful-link {
        margin-bottom: 10px;
        color: #000000;
    }

    .social-links {
        width: 100%;
        margin-top: 30px;

        display: flex;
        justify-content: space-between;
    }

    .social-link {
        width: 60px;
        height: 60px;
    }

    .copyright {
        width: 100%;
        margin: 40px 0;

        display: inline-block;

        font-family: Roboto;
        font-size: 20px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: 0.15em;
    }
    @media screen and (min-width: 1024px) {
        .copyright {
            text-align: center;
        }
    }

    @media screen and (max-width: 480px) {
        footer {           
            padding: 30px 20px 0;
        }

        .footer-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
            
            font-size: 14px;
        }

        .footer-content-block {
            margin-bottom: 35px;
        }

        .copyright {

            display: inline-block;

            font-family: Roboto;
            font-size: 14px;
            font-weight: 500;
            line-height: 23px;
            letter-spacing: 0.15em;
        }
    }
</style>