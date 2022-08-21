import PublicIndex from './views/public/index.svelte';
import PublicServices from './views/public/Services.svelte';
import PublicProjects from './views/public/Projects.svelte';
import PublicAbout from './views/public/About.svelte';
import PublicContacts from './views/public/Contacts.svelte';
import PublicComplexManagement from './views/public/ComplexManagement.svelte'
import PublicLongRent from './views/public/LongRent.svelte'
import PublicPurchaseSales from './views/public/PurchaseSales.svelte'
import PublicServicesDetails from './views/public/ServicesDetails.svelte'

const routes = [
  {
    name: '/',
    text: '',
    component: PublicIndex,
  },
  {
    name: '/services',
    text: 'Slubžby',
    component: PublicServices,
  },
  { 
    name: 'projects', 
    text: 'Naše projekty',
    component: PublicProjects,
  },
  { 
    name: 'about', 
    text: 'O nás',
    component: PublicAbout,
  },
  { 
    name: 'contacts', 
    text: 'Kontakty',
    component: PublicContacts 
  },
  { 
    name: 'complex-management', 
    text: 'Complex Management',
    component: PublicComplexManagement 
  },
  { 
    name: 'long-rent', 
    text: 'Long Rent',
    component: PublicLongRent 
  },
  { 
    name: 'purchase-sales', 
    text: 'Purchase and Sales',
    component: PublicPurchaseSales 
  },
  { 
    name: 'services-details', 
    text: 'Services Details',
    component: PublicServicesDetails 
  },
]

export { routes }