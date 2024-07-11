document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.animated', {
        speed: 120,
        loop: false
    })
    .type('Estevan Chicoski Viera        ', {dlay: 20000})
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

function CarregarCards() {
    fetch("../../Src/Json/projects.json")
        .then(response => response.json())
        .then(cards => {
            const container = document.getElementsByClassName("projects");

            cards.map(card => {
                const oCard = document.createElement("div");
                oCard.classList.add("card");
                oCard.id = `${card.id}`;

                const Banner = document.createElement("div");
                Banner.classList.add("banner");

                const img = document.createElement("img");
                img.src = card.image;
                
                Banner.appendChild(img);
                oCard.appendChild(Banner);

                const Infos = document.createElement("div");
                Infos.classList.add("infos")
                const h2 = document.createElement("h2");
                const p = document.createElement("p");
                const a = document.createElement("a");
                a.target = "_blank";
                const text = document.createElement("p");
                const status = document.createElement("p");

                text.textContent = card.button;
                a.href = card.link;
                p.textContent = card.description;
                h2.textContent = card.nome;
                Infos.appendChild(h2);
                Infos.appendChild(p);
                Infos.appendChild(status);
                Infos.appendChild(a);
                a.appendChild(text);
                oCard.appendChild(Infos);

                if (card.button == "Indisponível") {
                    a.href = "";
                    a.style.cursor = "not-allowed"
                    a.style.borderColor = "#f57777ff"
                    text.style.color = "#f57777ff"

                    a.addEventListener('click', () => {
                        alert("Este projeto encontra-se indisponível no momento.");
                    })
                    
                } else {
                    a.href = `${card.github}`
                }

                if (card.status == true) {
                    status.textContent = "Status: Finalizado";
                    status.style.color = "#1a530c"
                } else if (card.status == false) {
                    status.textContent = "Status: Em desenvolvimento";
                    status.style.color = "#f57777ff"
                } else {
                    status.textContent = "Status: Não Responsivo";
                    status.style.color = "#94860d"
                }

                container[0].appendChild(oCard);
            });
        });
}

CarregarCards();

function CarregarCards2() {
    fetch("../../Src/Json/exp.json")
        .then(response => response.json())
        .then(cards => {
            const container = document.getElementsByClassName("experiencias");

            cards.map(card => {
                const oCard = document.createElement("div");
                oCard.classList.add("card");

                const cargo = document.createElement("h2");
                const empresa = document.createElement("p");

                empresa.id = 'empresa';
                if (card.empresa == "Sem Registro") {
                    empresa.style.color = "#f57777ff"
                } else {
                    empresa.textContent = card.empresa;
                }

                const periodo = document.createElement("p");
                const descricao = document.createElement("p");
                const skills = document.createElement("div");
            
                card.skills.forEach(skill => {
                    const theSkill = document.createElement("p");
                    theSkill.textContent = skill;
                    skills.appendChild(theSkill);
                });

                const sistema = document.createElement("p");

                cargo.textContent = card.cargo;
                empresa.textContent = card.empresa;
                periodo.textContent = card.duration;
                sistema.textContent = card.sistema;
                descricao.textContent = card.description;
                skills.classList.add("skills")

                oCard.appendChild(cargo);
                oCard.appendChild(empresa);
                oCard.appendChild(periodo);
                oCard.appendChild(descricao);
                oCard.appendChild(skills);
                oCard.appendChild(sistema);

                container[0].appendChild(oCard);
            });
        });
}

CarregarCards2();