import { Cards } from './cards.js'
import { Icones } from './icones.js'
import { Footer } from './footer.js';

window.onload = () => {

    const animaCards = new Cards();
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));

    const icones = new Icones();
    icones.animaIcones();

    const footer = new Footer();
    footer.efeitoOnda();
}