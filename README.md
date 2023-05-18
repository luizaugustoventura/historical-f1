<h1 align="center" style="color: #E54A4A;">🏁 Historical F1 🏎</h1>

<h3 style="color: #E54A4A;">
    <img src="screenshots/uk.png" alt="English" title="English" width="24" height="18" />
    Historical F1 is an app that provides seasons and rounds data from any Formula 1 season, from 1950 to its current season!
</h3>

<p>
    Developed with React Native and Expo CLI, Historical F1 is an informative app fed by <a href="http://ergast.com/mrd/">Ergast Developer API</a>. The goal of this application was to practice and master all the React content I've been studying throughout 2020, specially since the beginning of the quarantine.
</p>

<fieldset 
    style="color: #D43939; border-color: red;"
>
    <legend><strong>Important about this branch</strong></legend>
    <p>
        This branch includes End-to-End tests and major Expo updates. If you want the initial project setup, refer to the <a href="https://github.com/luizaugustoventura/historical-f1/tree/master">master</a> branch.
    </p>
    <p>
        This branch does not include the styled podium, which is implemented in <a href="https://github.com/luizaugustoventura/historical-f1/tree/development">development branch</a>. The reason why is because some inconsistencies were found, as drivers in the past could switch cars and be placed in the same position at the end of the race. 
    </p>
    <p>
        In order to create <b>E2E tests</b>, it was necessary to go from an <b>Expo Managed</b> project to <b>Bare Workflow</b> since <b>Detox</b> lib requires some Native configurations for the Android platform.  In order to reach this, I preferred to update Expo from 38 to 48 and use its new <code>expo prebuild</code> command, which replaced <code>expo eject</code>. It worked like a charm 🤩️!
    </p>
</fieldset>

<h4>🛠 Tools and technologies 🛠</h4>
<ul>
    <li>React Native</li>
    <li>Expo CLI</li>
    <li>Axios</li>
    <li>TypeScript</li>
    <li>Detox (E2E tests)</li>
</ul>

<h4>🤔 What have I learned? 🤓</h3>
<p>
    Firstly, it is impossible not to talk about TypeScript and its importance. Many might think it affects productivity at the beginning of the project, and that is true since you obviously are going to create new data structures that the TypeScript will not be able to understand until you create an interface. But, as you keep going, TypeScript will help you a lot with auto-complete features of your code editor, which avoid many mistakes you may commit without actually noticing. And last but not least, TypeScript is very important for other developers working on the same project, because they get to know what types of parameters functions will receive, which one of them are optional and the type of returning values as well.
</p>
<p>
    Secondly, I also figured how important it is to have project and code standards, write code as clean as possible and to organize your files, assets and components in folders and subfolders with suggestive names. This is very important, because as your project gets bigger, it will not be difficult to understand it and locate resources. In addition, it will improve the scalability of your code, being much easier to apply changes and implement new features, since it will not require many modifications on your code.
</p>
<p>
    Ultimately, after a while I came back to this project in order to practice some knowledge I acquired recently on End-to-End testing. Well, one thing I can say is that I was definitely wrong when I thought it was as hard as moving a mountain. Once you have your setup done, it is pretty easy to write your tests and validate your requisites. This kind of test will be a great friend when it comes to testing long use cases whenever you have to change your code, slightly or heavily.
</p>


<h3 style="color: #E54A4A;">
    <img src="screenshots/brazil.jpg" alt="English" title="English" width="24" height="18" />
    Historical F1 é um app que fornece dados sobre temporadas e etapas de qualquer temporada da Formula 1, desde 1950 até sua temporada atual!
</h3>

<p>
    Desenvolvido com React Native e Expo CLI, o Historical F1 é um app informativo alimentado pela <a href="http://ergast.com/mrd/">Ergast Developer API</a>. O objetivo desta aplicação foi praticar e dominar todo o conteúdo de React que eu venho estudando ao longo de 2020, especialmente desde o início da quarentena.
</p>

<fieldset 
    style="color: #D43939; border-color: red;"
>
    <legend><strong>Importante sobre esta branch</strong></legend>
    <p>
        Esta branch inclui testes End-to-End e várias atualizações do Expo. Se você deseja o setup inicial do projeto, consulte a branch <a href="https://github.com/luizaugustoventura/historical-f1/tree/master">master</a>.
    </p>
    <p>
        Esta branch não inclui o pódio estilizado, que é implementado na <a href="https://github.com/luizaugustoventura/historical-f1/tree/development">development branch</a>. A razão pela qual é porque algumas inconsistências foram encontradas, já que os pilotos no passado podiam trocar de carro e serem colocados na mesma posição ao final da corrida. 
    </p>
    <p>
        Para criar <b>testes E2E</b>, foi necessário mudar de um projeto <b>Expo Managed</b> para <b>Bare Workflow</b>, já que a biblioteca <b>Detox</b> requer algumas modificações para a plataforma do Android. Para conseguir isso, eu preferi atualizar o Expo de 38 para 48 e utilizar seu novo comendo <code>expo prebuild</code>, o qual substituiu o <code>expo eject</code>. Funcionou que é uma maravilha 🤩️!
    </p
</fieldset>

<h4>🛠 Ferramentas e tecnologias 🛠</h4>
<ul>
    <li>React Native</li>
    <li>Expo CLI</li>
    <li>Axios</li>
    <li>TypeScript</li>
    <li>Detox (Testes E2E)</li>
</ul>

<h4>🤔 O que eu aprendi? 🤓</h3>
<p>
    Primeiramente, é impossível não falar sobre TypeScript e sua importância. Muitos podem pensar que isso afeta a produtividade no início do projeto, e isso é verdade, já que você obviamente vai criar novas estruturas de dados que o TypeScript não será capaz de entender até que você crie uma interface. Mas, à medida que você prossegue, o TypeScript o ajudará muito com recursos de auto complete do seu editor de código, o que evita muitos erros que você pode cometer sem nem mesmo perceber. E por último, mas não menos importante, o TypeScript é muito importante para outros desenvolvedores que trabalham no mesmo projeto, pois eles ficam sabendo que tipo de parâmetros as funções receberão, qual deles é opcional e o tipo de retorno dos valores também.
</p>
<p>
    Em segundo lugar, também percebi como é importante ter padrões de projeto e código, escrever código o mais limpo possível e organizar seus arquivos, recursos e componentes em pastas e subpastas com nomes sugestivos. Isso é muito importante, pois conforme o seu projeto fica maior, não será difícil entendê-lo e localizar recursos. Além disso, irá melhorar a escalabilidade do seu código, sendo muito mais fácil aplicar alterações e implementar novos recursos, pois não exigirá muitas modificações em seu código.
</p>
<p>
    Por fim, depois de um tempo, eu retornei para este projeto de modo a praticar alguns conhecimentos sobre testes End-to-End que eu adquiri recentemente. Bem, uma coisa que eu posso dizer é que eu definitivamente estava errado quando pensei que era tão difícil. Uma vez que você tem a configuração pronta, é bem fácil escrever os testes e validar seus requisitos. Este tipo de teste será um grande aliado na hora de testar casos de usos longos sempre que você modifica o seu código, levemente ou de forma impactante.
</p>

<h4>📷 Screenshots: 📷</h4>
<table>
    <tr>
        <td>
            <img
                src="screenshots/Home.png"
                alt="Home page"
                title="Home page"
            />
        </td>
        <td>
            <img
                src="screenshots/SeasonResults.png"
                alt="SeasonResults page"
                title="SeasonResults page"
            />
        </td>
        <td>
            <img
                src="screenshots/RoundResults.png"
                alt="RoundResults page"
                title="RoundResults page"
            />
        </td>
    </tr>
</table>

<h5>🤖️ End-To-End test 🤖️</h5>
<img
    src="screenshots/historical-f1-e2e.gif"
    alt="Home page"
    title="Home page"
/>
