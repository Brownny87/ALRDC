var words = [
    'ALRDC','Princesa', 'Love', 'Eres Increible', 'Liebe', 'Amore',
    'Amor', 'Me Encantas', 'ความรัก', 'Aşk', 'Tình yêu', 'ליבע','Amour', 'Tu Sonrisa', 'Amanecer a tu Lado',
    'Hacerte Cosquillas', 'Tu Fortaleza', 'Hacerte el Amor', 'Tu Aroma', 'Tu Sensualidad',
    'Besarte', 'Sentirte', 'Tocarte', 'Acariciarte', 'Masturbarte', 
    'Penetrarte', 'Tus labios', 'Tus Caricias', 'Tu Carita', 'Tu Cuerpo', 
    'Tus besos', 'Tu forma de hacerme el Amor', 'Tu Mirada', 'Nuestros Proyectos', 
    'El Futuro', 'Compañia', 'Amistad', 'Lealtad', 'Complicidad', 
    'Sentir tu Piel', 'Tus ganas de Follarme', 'Sentirte Mojadita', 'Verte Feliz', 'Tus Deliciosos Pesones', 'Hacerte Venir', 
    'Cuando Enloqueces de Placer', 'Tus Abrazos', 'Tu Compañia', 'Nuestra Familia', 'Nuestras Travesuras', 
    'Nuestras Aventuras', 'Nuestros Viajes', 'aroha', 'Amarte', 'Hacerte Sonreir', 
    'Nuestras Diferencias que nos Unen', 'Super Equipo Parchero', 'Siempre Juntos', 'Comunicacion', 'Confianza', 
    'Lealtad', 'ярату', 'Amabilidad', 'Alegria', 'uthando'];
var dom = {
    love: document.querySelector('.love')
}
console.log(dom.love)
this.dom.love.style.setProperty('--particles', words.length)

words.forEach((word, i) => {
    let span = document.createElement('span')
    span.style.setProperty('--n', i + 1)
    span.innerText = word
    dom.love.appendChild(span)
})
