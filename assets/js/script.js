import {Cards} from './cards.js'

window.onload = () => {
    const animaCards = new Cards()
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));
}