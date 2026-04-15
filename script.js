// 1.Criando o Array de 
Objetos com seus projetos
const meusProjetos =[
{nome:"Projeto HTML",
descricao:"Aprendendo a 
estrutura básica."},
   {nome:"Projeto CSS",
descricao:"Estilizando
páginas com Flexbox."},
 {nome:Projetos JS",
descricao:"Renderizando
dados dinamicamente."}
];
//2.Selecionando o local
no HTML onde os projetos vão
aparecer
const container=
document.getElementById('lis
ta-projetos');
// 3.Função para desenhar
os projetos na tela
meusProjetos.forEach(projeto
=>{
   //Cria uma "caixinha"
(div) para cada projeto
     const divProjeto =docum
ent.createElement('div');
    divProjeto.classList.add
('projeto-card');
// Coloca o conteúdo
dentro da caixinha
  divProjeto.innerHTML=
      <h3>${projeto.nome}
</h3>
      <p>$
{projeto.descricao}</p>
     ;
//Adiciona a caixinha
lá no nosso HTML
 container.appendChild(di
vProjeto);
});