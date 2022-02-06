# Componentes
Saiba mais sobre os componentes de UI presentes nessa aplicação e sua utilidade
---

* ## AnimeCard
    Tem como base um card da biblioteca Ant.design. Usado para apresentar um resumo das informações a respeito de um anime especifico.
    
    ### Propriedades
    * **anime**: objeto do tipo [Anime](./model.md#anime);

---

* ## Layout
    Estrutura de layout basica usada em toda a aplicação.

    ### Propriedades
    * **children** : Conteudo principal a ser renderizado;

---

* ## Header
    Cabeçalho padrão para toda a aplicação

    Não possui propriedades ou estados inerentes ao componente;

---

* ## Footer
    Rodapé padrão para toda a aplicação

    Não possui propriedades ou estados inerentes ao componente;

---

* ## CardGrid
    Grade orientada a colunas (seguem um alinhamento vertical padrâo, mas não se horizontalmente).

    ### Propriedades
    * **data** : Lista de objeto sem um tipo previsivel usada para renderizar os cardes presentes na grade;

    ### Estados
    * **qtdColumns**: quantidade de colunas a serem rederizadas;

---

* ## ToggleTheme
    Alternador do tema

    ### Estados
    * Desfruta do estado `theme`, que e global para aplicação;

---

* ## Trailer
    Componente para apresentar video (trailer de um anime) proveniente do youtube.

    ### Propriedades
    * **videoId** : Id do video a ser apresentado;