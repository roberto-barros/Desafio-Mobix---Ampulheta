<h1 align = "center"> Desafio-Mobix---Ampulheta </h1>

<h2>Descrição</h2>

<p>
Projeto desenvolvido para conclusão da 1ª etapa do processo seletivo da MobixTec.
</p>
<p>
O desafio consiste em desenvolver um projeto para exibição de uma ampulheta completa no console
</p>

<h2>Tecnologia(s) Utilizada(s)</h2>

<ul><li>JavaScript</li></ul>

<h2>Desafios encontrados durante o processo</h2>

<p>
    Na primeira parte, após receber o desafio, foi pensar numa forma de dividir o projeto em partes para que pudesse concluir cada etapa, aos poucos e no final juntar todas as peças e finalizar a montagem deste projeto.
</p>
<p>
    Feito isto, pensei nas divisões de "atribuições" da seguinte forma: 
</p>
<ul>
    <li>Topo da ampulheta</li>
    <li>Primeiro triângulo preenchido</li>
    <li>Segundo triângulo vazio</li>
    <li>Base da ampulheta</li>
</ul>
<p>
    Desta forma, consegui pensar de forma isolada em cada etapa, tornando o processo mais simples e mais leve.
</p>
<p>
    Num segundo momento, foi pensar na lógica que envolveria o desenvolvimento da ampulheta: 
</p>
<p>
    Basicamente, seria pensar numa estrutura de repetição, que faria uma contagem de acordo com o que o usuário indicar (utilizei o método prompt). Essa lógica seria receber o valor do usuário e fazer um laço de repetição que contaria quantos espaços vazios e quantas hashtags precisaria para completar meu primeiro triângulo. Utilizando o método "repeat", faria a repetição desses itens de acordo com o que foi coletado no laço e em seguida imprimiria todo esse conteúdo no console.
</p>
<p>
    Na segunda etapa de construção da ampulheta, trabalhei da mesma forma que a primeira etapa, porém não precisaria contar quantas hashtags, já que elas tem número fixo na montagem do triângulo vazio. Dessa vez, precisei contar quantos espaços vazios e quantas vezes eu precisaria "apagar" a hashtag. Mais uma vez usando o método "repeat", verifiquei quantas vezes precisaria repetir os espaços em branco e montei a estrutura do triângulo, imprimindo com "console.log".
</p>
<p>
    Por fim, criei uma estrutura, utilizando o método "repeat", que desenharia uma linha de hashtags de acordo com o número que o usuário mandou. Sendo esta, o topo e a base da ampulheta.
</p>
