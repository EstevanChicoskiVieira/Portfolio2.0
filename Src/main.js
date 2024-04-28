document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.animated', {
        speed: 120,
        loop: true
    })
    .type('Estevan Chicoski Viera        ', {dlay: 20000})
    .delete(30)
    .go()
})

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.dev', {
        speed: 150,
        loop: true
    })
    .type('Web FrontEnd       ', {dlay: 5000})
    .delete(20)
    /*.type('Desktop ', {delay: 2000})
    .delete(8)
    .type('Mobile ', {delay: 2000})
    .delete(7)*/
    .type('Mobile Flutter       ', {dlay: 5000})
    .delete(30)
    .type('Discord Bots ', {delay: 2000})
    .go()
})