function reiniciar() {

    // Inicialização das variáveis de status do jogador
    let vida = 100
    let fisico = 30
    let estamina = 100
    let dinheiro = 250
    let equipamentos = 0
    let experiencia = 20
    let inventario = []
    
    // Introdução da história do personagem principal, Maltin Balsini
    alert("Maltin Balsini cresceu em uma pequena cidade iraquiana, onde a vida era marcada pela pobreza e conflitos. Seu amor pela natação começou cedo, nadando nas águas turvas de um pequeno rio, que servia como seu único refúgio do caos ao seu redor. Com o aumento das hostilidades, a situação em sua cidade tornou-se insuportável. O conflito destruiu a infraestrutura básica e fez com que sua família lutasse para sobreviver")
    
    alert("Quando a violência se intensificou, Maltin tomou uma decisão ousada. Com esperança e determinação, ele fugiu para a Grã-Bretanha, deixando para trás sua família e tudo o que conhecia, na esperança de encontrar um novo começo e realizar seu sonho olímpico.")
    
    alert("Contexto: Maltin chegou a Londres em busca de um refúgio e de oportunidades para treinar. Mas a adaptação à vida em um novo país trouxe seus próprios desafios.")
    
    // Exibição do status inicial do jogador
    alert("Status iniciais: \n Vida: " + vida + "\n Físico: " + fisico +  "\n Estamina: " + estamina + "\n Dinheiro: " + dinheiro + "\n Equipamentos: " + equipamentos + "\n Experiência: " + experiencia )
    
    // Introdução do primeiro emprego do personagem
    alert("O primeiro emprego...")
    
    aaaa()
    
    function aaaa() {
    
        // Escolha do primeiro emprego e as consequências dessas escolhas
        let primeiroEmprego = prompt("[1] Trabalhar como carregador em um mercado local \n[2] Trabalhar em um restaurante como ajudante de cozinha ")
        if (primeiroEmprego == '1') {
            alert("As consequências são \n Físico: (+5 exercício físico intenso) \n Estamina: (-10 você cansou bastante) \n Dinheiro: (+100 renda imediata) ")
            estamina -= 10
            fisico += 5 
            dinheiro += 100 
            // Exibição do status atualizado após a escolha do primeiro emprego
            alert ("Vida: " + vida + "\n Físico: " + fisico +  "\n Estamina: " + estamina + "\n Dinheiro: " + dinheiro + "\n Equipamentos: " + equipamentos + "\n Experiência: " + experiencia )
        
        } else if (primeiroEmprego == '2') {
            alert("As consequências são \n Você sem querer cortou uma lasca do seu dedo. Vida (-10) \n Estamina: (-5 você cansou) \n Dinheiro (+150) ")
            vida -= 10
            estamina -= 5
            dinheiro += 150
            // Exibição do status atualizado após a escolha do primeiro emprego
            alert ("Vida: " + vida + "\n Físico: " + fisico +  "\n Estamina: " + estamina + "\n Dinheiro: " + dinheiro + "\n Equipamentos: " + equipamentos + "\n Experiência: " + experiencia  )
    
        } else {
            // Repetição da função caso a escolha seja inválida
            aaaa()
        }
    }
    
    // Continuação da história após o trabalho
    alert ("Depois de um longo dia de trabalho você foi para casa descansar")
    alert ("Chegando em casa você deita na sua cama e dorme")
    vida += 5 
    estamina += 5
    // Exibição dos bônus de descanso
    alert ("+5 Vida \n +5 Estamina")
    alert ("Ao acordar, você toma seu café da manhã, pega seu celular e vê uma promoção de um óculos de natação top de linha por um ótimo preço.")
    
    oculos1()
    
    function oculos1() {
        // Escolha sobre comprar ou não os óculos de natação
        let oculos = prompt("Óculos de natação Speedo Hydrovision 30% OFF \n De 150 por 105 \n Deseja comprar? \n [1] Sim \n [2] Não")
        if (oculos == '1') {
            alert("Você vai até a loja e compra os óculos \n Equipamentos (+1) \n Dinheiro (-105)")
            equipamentos += 15
            dinheiro -= 105
            alert("Depois disso você vai testar seus novos óculos na piscina")
        } else if (oculos == '2') {
            alert ("Você não comprou os óculos")
            alert ("Depois disso você foi treinar na piscina")
        } else {
            // Repetição da função caso a escolha seja inválida
            oculos1()
        }
    }
    
    // Exibição do status atualizado após a compra ou não dos óculos
    alert ("Status: \n Vida: " + vida + "\n Físico: " + fisico +  "\n Estamina: " + estamina + "\n Dinheiro: " + dinheiro + "\n Equipamentos: " + equipamentos + "\n Experiência: " + experiencia )
    
    // Introdução de uma nova personagem: a treinadora renomada
    alert("Após um longo e intenso treino em uma modesta piscina comunitária, você está cansado, mas satisfeito com seu progresso. Enquanto seca o suor e se prepara para ir embora, uma treinadora renomada da equipe nacional de natação, que estava observando de uma área próxima, se aproxima para conversar com você. Ela elogia seu desempenho e oferece ajuda para aprimorar seus treinos e técnicas.")
    
    treinadora1()
    
    function treinadora1() {
        // Escolha sobre aceitar ou não a ajuda da treinadora
        let treinadora = prompt ("Você aceita a proposta dela? \n [1] Sim \n [2] Não")
        if (treinadora == '1') {
            alert("Você melhora sua técnica, desempenho e resistência. No entanto, você precisará se adaptar a um treinamento mais exigente. \n Você fica muito animado e otimista com sua nova rotina.")
        
            alert("Físico: +15 (Treinamento especializado e técnicas avançadas podem levar a melhorias significativas no seu condicionamento físico e habilidades) \n Estamina: +10 (Treinamentos mais eficientes e bem orientados podem aumentar sua resistência e energia) \n Equipamentos: +10 (A treinadora pode fornecer acesso a melhores equipamentos ou orientações sobre a manutenção dos seus próprios)\n Experiência + 15 (A treinadora já foi uma nadadora profissional e te ensinou várias técnicas avançadas)")
        
            fisico += 15
            estamina += 10
            experiencia += 15
        
        } else if (treinadora == '2') {
            alert("Você continuou seu treino por conta própria, mas não conseguiu evoluir o bastante.")
            alert("Desanimado por não sair do lugar com seus treinos, você desiste do seu sonho de ser um nadador olímpico e então encerra sua carreira.")
            alert("Jogar novamente")
            reiniciar()
            // Reiniciar o jogo
        } else {
            // Repetição da função caso a escolha seja inválida
            treinadora1()
        }
    }
    
    // Exibição do status atualizado após a decisão sobre a treinadora
    alert ("Status: \n Vida: " + vida + "\n Físico: " + fisico +  "\n Estamina: " + estamina + "\n Dinheiro: " + dinheiro + "\n Equipamentos: " + equipamentos + "\n Experiência: " + experiencia )
    
    // Novo dia de treino com escolhas sobre o que treinar
    alert("Já é um novo dia, e agora você tem que decidir o que vai treinar hoje.")
    
    treino1()
    
    function treino1() {
     //Escolha o que você vai treinar
        let treino = prompt ("[1] Treinar na academia o2 \n[2] Treinar na piscina com o acompanhamento de sua treinadora \n[3] Ficar vagabundeando em casa 👎 ")
    
        if (treino == "1") {
            // Escolha de treinar na academia e as consequências dessa escolha
            alert("Você foi treinar na academia o2 e encontrou o ARTHUR JUWER lá.")
            alert("Você foi até ele e pediu algumas dicas de treino.")
            alert("Arthur Juwer flexionou os mamilos igual o Terry Crews e te passou o melhor treino de todos os tempos.")
            alert("Vocês treinaram como malucos, mas ficaram muito cansados.")
            alert("+20 Físico (treino rendeu bastante) \n -10 Estamina (treinar cansa né)")
            fisico += 20
            estamina -= 10
    
        } else if (treino == "2") {
            // Escolha de treinar na piscina com a treinadora e as consequências dessa escolha
            alert("Você foi treinar na piscina e aperfeiçoou suas técnicas.")
            alert("Sua treinadora te deu várias dicas e corrigiu algumas coisas que você estava fazendo errado.")
            alert("+20 Experiência (treinadora fortaleceu nas dicas) \n +5 Físico \n -5")
        fisico += 5
        estamina -= 5
        experiencia += 20
    }
            //Escolha de ficar em casa e suas consequências
    else if (treino == "3"){
        alert("Parabéns seu preguiçoso")
        alert("Você ficou o dia todo jogando fortnite")
        alert("+10 estamina (tu não fez nada o dia todo)")
        estamina += 10
    }
    else{
         // Repetição da função caso a escolha seja inválida
    treino1()
    }
    }
    //mostrando os status
    alert ("Status: \n Vida: " + vida + "\n Físico: " + fisico +  "\n Estamina: " + estamina + "\n Dinheiro: " + dinheiro + "\n Equipamentos: " + equipamentos + "\n Experiência: " + experiencia )
    
    alert("1 dia depois...")
    alert("Agora com a ajuda da treinadora você começa com uma rotina mais pesada e intensa de treinos, assim participando de algumas competições locais e se destacando nelas ")
    alert("Após uma dessas competições um patrocinador chega até você e diz ter uma proposta")
    alert("Ele oferecerá dinheiro, visibilidade e equipamentos, mas em troca você terá que participar dos eventos promocionais que ele organiza")
    alert("Você diz que irá conversar com sua treinadora sobre a proposta, e pega o número de celular dele")
    
    patrocinio1()
    function patrocinio1(){
    //Aceitar ou recusar a proposta do patrocinador
    let patrocinio = prompt ("Após a conversa com sua treinadora você tem que tomar sua decisão, então você liga para o patrocinador e: \n [1] Aceita a proposta \n [2] Recusa a proposta")

    //Aceita a proposta e suas consequências
    if (patrocinio == "1"){
    alert("Você aceita a proposta dele e ambos saem ganhando, você ganha mais equipamentos e dinheiro, porém terá que participar de um evento promocional daqui 2 dias, e esses eventos promocionais te deixarão cansado")
    dinheiro += 200
    estamina -= 15
    alert("+200 dinheiro \n -15 estamina")
    
    }
    // Recusa a proposta e suas consequências
    else if (patrocinio == "2"){
    alert("Você recusa a proposta e segue com sua rotina normalmente, sem dinheiro extra, sem melhores equipamentos, sem aumento na visibilidade e sem eventos promocionais")
    alert("O criador desse jogo e a tua treinadora acham que tu ratiou ein ")
    alert("Depois de 3 dias você descobre que o evento promocional que o patrocinador organiza dava uma vaga direta para as olimpíadas")
    alert("Você fica muito arrependido de não ter aceitado a proposta")
    alert("Frustrado com tudo isso você encerra sua carreira e desiste do seu sonho de se tornar um nadador olimpico")
    alert("Jogar novamente")
    
    reiniciar()
    
    
    // Reinicia o jogo/checkpoint por ter tomado a decisão errada
    
    }
    else{
        patrocinio1()
        // Repetição da função caso a escolha seja inválida
    }
    
    
    alert ("Status: \n Vida: " + vida + "\n Físico: " + fisico +  "\n Estamina: " + estamina + "\n Dinheiro: " + dinheiro + "\n Equipamentos: " + equipamentos + "\n Experiência: " + experiencia )
    alert("Agora, com uma competiçao em 2 dias você precisa se preparar para ela")
    alert("Então você decide o que vai treinar")
    
    treino2()
    function treino2(){
    //treino novamente
    let treino1 = prompt ("[1] Treinar na academia \n [2] Treinar na piscina \n [3] Ficar sem fazer nada em casa ")
    
    
    
    if (treino1 == "1"){
        alert("Você foi treinar na academia e fez o treino do Juwer")
        alert("+20 físico (treino rendeu á beça) \n -10 estamina (treinar cansa né)")
        fisico += 20
        estamina -= 10
    
    }
    
    else if (treino1 == "2"){
        alert("Você foi treinar na piscina e aperfeiçoou suas técnicas")
        alert("Sua treinadora te deu várias dicas e corrigiu algumas coisas que você estava fazendo errado")
        alert("+20 experiência (treinadora fortaceleu nas dicas) \n +5 físico \n -5 estamina")
        fisico += 5
        estamina -= 5
        experiencia += 20
    }
    
    else if (treino1 == "3"){
        alert("Parabéns seu preguiçoso")
        alert("Você ficou o dia todo jogando roblox")
        alert("+10 estamina (tu não fez nada o dia todo)")
        estamina += 10
    }
    else{
        treino2()
    }
    }
    
    //mostrar os status
    alert ("Status: \n Vida: " + vida + "\n Físico: " + fisico +  "\n Estamina: " + estamina + "\n Dinheiro: " + dinheiro + "\n Equipamentos: " + equipamentos + "\n Experiência: " + experiencia )
    
    alert("No dia da competição você chega em terceiro lugar, ficando com a medalha de bronze")
    alert("Com esse resultado você descobre que se classificou para as olimpíadas, e pegou a vaga de um dos favoritos para competição deixando ele na quarta colocação")
    alert("Impressionando todos que estavam assistindo e até você mesmo")
    inventario.push("Esperança") //Colocando esperança no inventário 
    alert('Você conseguiu "Esperança" ')   
    }

    alert("Agora que você se classificou para as Olimpíadas, a pressão aumenta. Você precisa treinar duro para enfrentar os melhores nadadores do mundo. Sua treinadora está orgulhosa, mas também sabe que há muito trabalho pela frente.")

    // Informa ao jogador que, após se classificar para as Olimpíadas, a pressão aumenta e ele precisará treinar ainda mais.
    
    alert("Com o tempo correndo contra você, sua treinadora sugere um plano de treinamento intensivo.")
    
    // Notifica o jogador de que sua treinadora sugere um plano de treinamento intensivo, estabelecendo o próximo desafio.
    
    treinoOlimpico1()
    
    // Chama a função `treinoOlimpico1` para que o jogador escolha como deseja seguir o plano de treinamento para as Olimpíadas.
    
    function treinoOlimpico1() {
        let treinoOlimpico = prompt("[1] Seguir o plano de treinamento intensivo sugerido pela treinadora \n[2] Adaptar o plano de acordo com o seu próprio ritmo \n[3] Recusar o plano e treinar por conta própria")
    
        // Apresenta ao jogador três opções para seguir o treinamento olímpico: seguir o plano intensivo da treinadora, adaptar o plano ao seu ritmo ou treinar por conta própria.
    
        if (treinoOlimpico == "1") {
            alert("Você segue o plano intensivo à risca. O treinamento é exaustivo, mas os resultados começam a aparecer. Seu físico e sua técnica melhoram consideravelmente, mas o cansaço se acumula.")
            fisico += 30
            estamina -= 20
            experiencia += 25
            alert("+30 Físico \n-20 Estamina \n+25 Experiência")
    
            // Se o jogador escolhe seguir o plano intensivo (opção 1), o físico e a experiência aumentam, mas a estamina diminui devido ao cansaço acumulado.
    
        } else if (treinoOlimpico == "2") {
            alert("Você adapta o plano da treinadora ao seu próprio ritmo, equilibrando treinos intensivos com períodos de descanso. Seu progresso é mais lento, mas você se mantém saudável e evita lesões.")
            fisico += 20
            estamina -= 10
            experiencia += 15
            alert("+20 Físico \n-10 Estamina \n+15 Experiência")
    
            // Se o jogador escolhe adaptar o plano ao seu ritmo (opção 2), o progresso é mais equilibrado, com menor aumento de físico e experiência, mas também menor perda de estamina.
    
        } else if (treinoOlimpico == "3") {
            alert("Você decide treinar por conta própria, confiando na sua intuição. Embora se esforce, os resultados não são tão significativos quanto poderiam ser.")
            fisico += 10
            estamina -= 5
            experiencia += 10
            alert("+10 Físico \n-5 Estamina \n+10 Experiência")
    
            // Se o jogador decide treinar por conta própria (opção 3), os ganhos são menores em termos de físico e experiência, mas a estamina é menos impactada.
    
        } 
        else {
            treinoOlimpico1()
            // Caso o jogador não escolha uma opção válida, a função `treinoOlimpico1` é chamada novamente para repetir a escolha.
        }
    }
    
    alert("Status: \n Vida: " + vida + "\n Físico: " + fisico + "\n Estamina: " + estamina + "\n Dinheiro: " + dinheiro + "\n Equipamentos: " + equipamentos + "\n Experiência: " + experiencia)
    
    // Mostra ao jogador o status atual do personagem após o treinamento olímpico.
    
    alert("Após meses de treinamento intenso, o dia das Olimpíadas finalmente chega. Você está nervoso, mas determinado. A cidade está cheia de energia, e você sente a responsabilidade de representar todos que acreditaram em você.")
    
    // Informa ao jogador que o dia das Olimpíadas chegou, criando um clima de tensão e responsabilidade.
    
    olimpiadas1()
    
    // Chama a função `olimpiadas1` para que o jogador escolha sua estratégia na competição.
    
    function olimpiadas1() {
        let olimpiadas = prompt("Qual estratégia você vai adotar na competição? \n[1] Confiar na sua velocidade e explosão para dominar a prova desde o início \n[2] Manter um ritmo constante e guardar energia para um sprint final \n[3] Focar em sua técnica e nadar de forma precisa e controlada")
    
        // Apresenta ao jogador três estratégias para competir nas Olimpíadas: confiar na velocidade, manter um ritmo constante, ou focar na técnica.
    
        if (olimpiadas == "1") {
            alert("Você começa a prova com tudo, usando sua velocidade para assumir a liderança logo no início. No entanto, a falta de resistência faz com que você perca fôlego na reta final, e você termina em quarto lugar.")
            experiencia += 20
            alert("Embora você não tenha conquistado uma medalha, sua coragem e determinação foram notadas por todos. Você ganhou respeito e experiência, mas sabe que ainda há mais a ser feito.")
            alert("+20 Experiência")
    
            // Se o jogador escolhe a primeira estratégia (velocidade), ele lidera no início, mas acaba ficando sem fôlego e termina em quarto lugar, ganhando experiência, mas sem medalha.
    
        } else if (olimpiadas == "2") {
            alert("Você mantém um ritmo constante durante a maior parte da prova, guardando energia para um sprint final. Quando chega a hora, você dá tudo de si e ultrapassa vários competidores, conquistando a medalha de prata!")
            experiencia += 30
            alert("Sua estratégia foi recompensada. Você é agora um medalhista olímpico e uma inspiração para muitos!")
            alert("+30 Experiência \n+10 Vida")
    
            // Se o jogador escolhe a segunda estratégia (ritmo constante), ele consegue guardar energia para o final e conquista a medalha de prata, ganhando experiência e vida.
    
        } else if (olimpiadas == "3") {
            alert("Você se concentra em nadar de forma precisa e controlada, evitando erros e mantendo um ritmo consistente. Seu foco na técnica lhe rende uma medalha de bronze!")
            experiencia += 25
            fisico += 5
            alert("Sua habilidade técnica impressionou a todos. Embora não tenha conquistado o ouro, sua performance foi excepcional.")
            alert("+25 Experiência \n+5 Físico")
    
            // Se o jogador escolhe a terceira estratégia (técnica), ele termina com uma medalha de bronze, ganhando experiência e físico devido à sua precisão.
    
        } else {
            olimpiadas1()
            // Caso o jogador não escolha uma opção válida, a função `olimpiadas1` é chamada novamente para repetir a escolha.
        }
    }
    
    alert("Status Final: \n Vida: " + vida + "\n Físico: " + fisico + "\n Estamina: " + estamina + "\n Dinheiro: " + dinheiro + "\n Equipamentos: " + equipamentos + "\n Experiência: " + experiencia)
    
    // Exibe o status final do personagem após as Olimpíadas.
    
    alert("Após sua participação nas Olimpíadas, você reflete sobre sua jornada. Desde nadar no pequeno rio no Irã até competir com os melhores do mundo, você superou muitos desafios e conquistou respeito e reconhecimento. Sua história é um exemplo de coragem, determinação e superação.")
    
    // Um texto final reflexivo é mostrado ao jogador, resumindo a jornada do personagem desde o início até as Olimpíadas, destacando sua superação.
    
    alert("Maltin Balsini encerra sua carreira de nadador olímpico, mas seu legado viverá para sempre.")
    alert("Obrigado por jogar! \nFeito por Pedro futurista (vulgo suetam)")
    alert("Fim de jogo")
    // Mensagem final de encerramento do jogo, informando que Maltin Balsini encerrou sua carreira, mas seu legado continua.
    
    reiniciar()

    }

    // Fecha a função `reiniciar`, que é responsável por iniciar o jogo e administrar as decisões do jogador ao longo da história.
    
    reiniciar()

    // Chama a função `reiniciar` para começar o jogo novamente caso o jogador deseje jogar outra vez.