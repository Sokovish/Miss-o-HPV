export const bancoVerdadeiroFalso = [
    // --- O que é o HPV? ---
    { afirmacao: "HPV é a sigla para Papilomavírus Humano.", resposta: true },
    { afirmacao: "O HPV é um tipo de bactéria.", resposta: false },
    { afirmacao: "Existem mais de 200 tipos diferentes de HPV.", resposta: true },
    { afirmacao: "Todos os tipos de HPV causam câncer.", resposta: false },
    { afirmacao: "A maioria das infecções por HPV desaparece sozinha, sem causar problemas.", resposta: true },
    { afirmacao: "Uma pessoa sempre sabe quando tem HPV, pois os sintomas são imediatos.", resposta: false },
    { afirmacao: "O HPV afeta apenas a região genital.", resposta: false },

    // --- Transmissão ---
    { afirmacao: "O HPV pode ser transmitido pelo contato pele a pele com a área infectada.", resposta: true },
    { afirmacao: "A única forma de transmissão do HPV é através de relação sexual com penetração.", resposta: false },
    { afirmacao: "É possível contrair HPV ao sentar em um vaso sanitário público.", resposta: false },
    { afirmacao: "Uma pessoa pode transmitir o HPV mesmo que não tenha nenhuma verruga ou sintoma visível.", resposta: true },
    { afirmacao: "Mães com HPV podem transmitir o vírus para o bebê durante o parto.", resposta: true },

    // --- Riscos e Consequências ---
    { afirmacao: "O HPV é a principal causa do câncer de colo do útero.", resposta: true },
    { afirmacao: "Apenas mulheres podem desenvolver câncer por causa do HPV.", resposta: false },
    { afirmacao: "O HPV pode causar câncer de pênis, ânus e garganta.", resposta: true },
    { afirmacao: "Ter HPV é uma sentença de que a pessoa desenvolverá câncer.", resposta: false },
    { afirmacao: "Alguns tipos de HPV causam apenas verrugas genitais e não são ligados a cânceres.", resposta: true },
    { afirmacao: "O câncer de colo do útero é o único tipo de câncer que o HPV pode causar.", resposta: false },
    { afirmacao: "O HPV pode infectar a boca e a garganta.", resposta: true },

    // --- A Vacina: Como Funciona e Segurança ---
    { afirmacao: "A vacina do HPV contém o vírus vivo e pode causar a doença.", resposta: false },
    { afirmacao: "A vacina ensina o sistema imunológico a criar defesas contra os principais tipos de HPV.", resposta: true },
    { afirmacao: "A vacina do HPV é segura e aprovada pela OMS e pela Anvisa.", resposta: true },
    { afirmacao: "Um dos efeitos colaterais mais perigosos da vacina é a infertilidade.", resposta: false },
    { afirmacao: "Dor no local da aplicação é um efeito colateral comum e esperado da vacina.", resposta: true },
    { afirmacao: "A vacina não funciona e é apenas uma forma da indústria farmacêutica ganhar dinheiro.", resposta: false },
    { afirmacao: "A vacina pode curar uma infecção por HPV que a pessoa já tenha.", resposta: false },

    // --- Público-Alvo e Esquema Vacinal ---
    { afirmacao: "No Brasil, a vacina do HPV é recomendada apenas para meninas.", resposta: false },
    { afirmacao: "O público-alvo principal da vacinação gratuita no SUS é de 9 a 14 anos.", resposta: true },
    { afirmacao: "O esquema vacinal completo para adolescentes de 9 a 14 anos é de duas doses.", resposta: true },
    { afirmacao: "O intervalo recomendado entre as duas doses da vacina é de 6 meses.", resposta: true },
    { afirmacao: "A vacina só deve ser tomada após o início da vida sexual.", resposta: false },
    { afirmacao: "Pessoas que vivem com HIV/AIDS têm um esquema vacinal diferente e com mais doses.", resposta: true },
    { afirmacao: "Não há problema em tomar a segunda dose da vacina 2 anos depois da primeira.", resposta: false },
    { afirmacao: "A vacina é mais eficaz quando administrada antes do primeiro contato com o vírus.", resposta: true },
    { afirmacao: "Pessoas mais velhas, fora da faixa etária do SUS, podem se vacinar em clínicas privadas.", resposta: true },

    // --- Prevenção e Exames ---
    { afirmacao: "O uso correto da camisinha elimina 100% o risco de transmissão do HPV.", resposta: false },
    { afirmacao: "A camisinha ajuda a reduzir o risco de transmissão do HPV.", resposta: true },
    { afirmacao: "Depois de tomar a vacina, as mulheres não precisam mais fazer o exame Papanicolau.", resposta: false },
    { afirmacao: "O exame Papanicolau serve para detectar as lesões nas células causadas pelo HPV.", resposta: true },
    { afirmacao: "A vacina protege contra todos os 200 tipos de HPV.", resposta: false },

    // --- Mitos Comuns ---
    { afirmacao: "Tomar a vacina do HPV incentiva os jovens a iniciarem a vida sexual mais cedo.", resposta: false },
    { afirmacao: "É melhor pegar a doença e criar imunidade natural do que se vacinar.", resposta: false },
    { afirmacao: "A vacina do HPV está associada ao desenvolvimento de doenças autoimunes.", resposta: false },
    { afirmacao: "A vacina do HPV pode ser tomada junto com outras vacinas do calendário.", resposta: true },
    { afirmacao: "Se uma pessoa não tem verrugas, ela certamente não tem HPV.", resposta: false },
    { afirmacao: "O HPV é uma infecção rara.", resposta: false },
    { afirmacao: "A proteção da vacina dura apenas por 1 ou 2 anos.", resposta: false },
    { afirmacao: "O Brasil é um dos poucos países que oferecem a vacina de graça.", resposta: false },
];




// Em js/dados.js

export const bancoQuiz = [
    // --- Conceitos Básicos ---
    {
        pergunta: "O que significa a sigla HPV?",
        opcoes: ["Vírus da Pólio Humana", "Papilomavírus Humano", "Vírus da Hepatite P", "Herpes Vírus Potencial", "Vírus da Parainfluenza Humana"],
        resposta: "Papilomavírus Humano"
    },
    {
        pergunta: "HPV é um tipo de:",
        opcoes: ["Bactéria", "Fungo", "Vírus", "Protozoário", "Príon"],
        resposta: "Vírus"
    },
    {
        pergunta: "Quantos tipos de HPV existem aproximadamente?",
        opcoes: ["Cerca de 10", "Cerca de 50", "Cerca de 200", "Apenas 1", "Mais de 1000"],
        resposta: "Cerca de 200"
    },
    {
        pergunta: "A maioria das infecções por HPV em pessoas jovens:",
        opcoes: ["Sempre evoluem para câncer", "Causam sintomas imediatos", "Desaparecem sozinhas sem tratamento", "Precisam de antibióticos", "Deixam cicatrizes permanentes"],
        resposta: "Desaparecem sozinhas sem tratamento"
    },
    {
        pergunta: "O HPV é considerado uma Infecção Sexualmente Transmissível (IST)?",
        opcoes: ["Sim, uma das mais comuns", "Não, é uma doença hereditária", "Apenas em alguns casos raros", "Apenas para homens", "Não, é transmitido pelo ar"],
        resposta: "Sim, uma das mais comuns"
    },

    // --- Transmissão ---
    {
        pergunta: "Qual a principal forma de transmissão do HPV?",
        opcoes: ["Pelo ar", "Compartilhando copos", "Contato sexual", "Picada de inseto", "Uso de banheiros públicos"],
        resposta: "Contato sexual"
    },
    {
        pergunta: "O uso de preservativo (camisinha) durante a relação sexual:",
        opcoes: ["Elimina 100% o risco de transmissão", "Não tem efeito sobre o HPV", "Reduz o risco, mas não elimina completamente", "Aumenta o risco de transmissão", "Só é eficaz se usado por mulheres"],
        resposta: "Reduz o risco, mas não elimina completamente"
    },
    {
        pergunta: "Uma pessoa pode transmitir HPV mesmo sem ter verrugas ou sintomas?",
        opcoes: ["Sim, a transmissão pode ocorrer", "Não, a transmissão só ocorre com sintomas", "Apenas se tiver febre", "Apenas se a pessoa for mulher", "Não, o vírus fica inativo"],
        resposta: "Sim, a transmissão pode ocorrer"
    },
    {
        pergunta: "O HPV pode ser transmitido através do sexo oral?",
        opcoes: ["Não, apenas por penetração", "Sim, pode infectar boca e garganta", "Apenas se houver sangramento visível", "Não há estudos conclusivos sobre isso", "Apenas se a pessoa estiver gripada"],
        resposta: "Sim, pode infectar boca e garganta"
    },
    {
        pergunta: "É possível uma mãe transmitir HPV para o bebê durante o parto?",
        opcoes: ["Não, isso é impossível", "Sim, embora seja raro, pode acontecer", "Apenas se for parto cesárea", "Apenas se o bebê for menino", "Apenas se a mãe tiver mais de 40 anos"],
        resposta: "Sim, embora seja raro, pode acontecer"
    },

    // --- Doenças e Consequências ---
    {
        pergunta: "O HPV é o principal responsável por qual tipo de câncer?",
        opcoes: ["Câncer de Pele", "Câncer de Pulmão", "Câncer de Colo do Útero", "Leucemia", "Câncer de Fígado"],
        resposta: "Câncer de Colo do Útero"
    },
    {
        pergunta: "Além do câncer de colo do útero, o HPV também pode causar:",
        opcoes: ["Apenas verrugas genitais", "Câncer de pênis, ânus e garganta", "Gripe e resfriado", "Apendicite", "Cáries"],
        resposta: "Câncer de pênis, ânus e garganta"
    },
    {
        pergunta: "Sobre os tipos de HPV de 'baixo risco', qual afirmação é correta?",
        opcoes: ["São os principais causadores de câncer", "Geralmente causam verrugas, mas não câncer", "São mais perigosos que os de 'alto risco'", "Não existem tipos de 'baixo risco'", "São transmitidos pelo ar"],
        resposta: "Geralmente causam verrugas, mas não câncer"
    },
    {
        pergunta: "O exame preventivo ginecológico, Papanicolau, serve para:",
        opcoes: ["Detectar o vírus do HPV", "Detectar as lesões nas células causadas pelo HPV", "Curar o HPV", "Prevenir a gravidez", "Verificar a pressão arterial"],
        resposta: "Detectar as lesões nas células causadas pelo HPV"
    },
    {
        pergunta: "O câncer de pênis pode ser uma consequência da infecção por HPV?",
        opcoes: ["Não, atinge apenas mulheres", "Sim, é uma das possíveis complicações em homens", "Apenas em homens acima de 70 anos", "Não, o HPV não afeta homens", "Apenas se o homem não tiver filhos"],
        resposta: "Sim, é uma das possíveis complicações em homens"
    },
    {
        pergunta: "Ter uma infecção por HPV significa que a pessoa inevitavelmente terá câncer?",
        opcoes: ["Sim, sempre", "Não, na maioria dos casos o corpo elimina o vírus", "Sim, mas apenas em mulheres", "Depende do tipo sanguíneo", "Sim, em até 5 anos"],
        resposta: "Não, na maioria dos casos o corpo elimina o vírus"
    },

    // --- A Vacina ---
    {
        pergunta: "Qual é a principal forma de prevenção primária contra o HPV?",
        opcoes: ["Exame Papanicolau", "Uso de preservativo", "Vacinação", "Higiene íntima", "Tomar vitamina C"],
        resposta: "Vacinação"
    },
    {
        pergunta: "A vacina contra o HPV contém:",
        opcoes: ["Vírus vivos atenuados", "Partículas parecidas com o vírus, mas que não causam doença", "Antibióticos potentes", "Células de defesa prontas", "DNA do vírus completo"],
        resposta: "Partículas parecidas com o vírus, mas que não causam doença"
    },
    {
        pergunta: "A vacina do HPV funciona melhor se for tomada:",
        opcoes: ["Depois de já ter tido verrugas genitais", "Durante uma infecção ativa", "Antes do início da vida sexual", "Apenas na vida adulta", "Junto com a vacina da gripe"],
        resposta: "Antes do início da vida sexual"
    },
    {
        pergunta: "No SUS, a vacina do HPV é:",
        opcoes: ["Paga, mas com desconto", "Gratuita para o público-alvo", "Disponível apenas em campanhas anuais", "Importada e de difícil acesso", "Aplicada apenas em hospitais"],
        resposta: "Gratuita para o público-alvo"
    },
    {
        pergunta: "O público-alvo prioritário da vacina no SUS é:",
        opcoes: ["Idosos acima de 60 anos", "Bebês recém-nascidos", "Meninas e meninos de 9 a 14 anos", "Adultos de 30 a 40 anos", "Apenas gestantes"],
        resposta: "Meninas e meninos de 9 a 14 anos"
    },
    {
        pergunta: "O esquema vacinal para adolescentes de 9 a 14 anos consiste em:",
        opcoes: ["Uma dose única", "Duas doses", "Três doses", "Quatro doses anuais", "Uma dose a cada 10 anos"],
        resposta: "Duas doses"
    },
    {
        pergunta: "Qual o intervalo recomendado entre as doses para adolescentes?",
        opcoes: ["Uma semana", "Um mês", "Seis meses", "Um ano", "Dois anos"],
        resposta: "Seis meses"
    },
    {
        pergunta: "Meninos devem se vacinar contra o HPV?",
        opcoes: ["Não, pois não têm colo do útero", "Sim, para se protegerem e reduzirem a circulação do vírus", "Apenas se forem ter múltiplos parceiros", "Não, a vacina não tem efeito em meninos", "Apenas se a mãe teve HPV"],
        resposta: "Sim, para se protegerem e reduzirem a circulação do vírus"
    },
    {
        pergunta: "A vacina contra o HPV pode curar uma infecção já existente?",
        opcoes: ["Sim, ela elimina o vírus do corpo", "Não, ela previne futuras infecções, mas não trata as existentes", "Sim, mas apenas os tipos que causam verrugas", "Depende do sistema imunológico", "Sim, se tomar 3 doses"],
        resposta: "Não, ela previne futuras infecções, mas não trata as existentes"
    },
    {
        pergunta: "A vacina do HPV é segura?",
        opcoes: ["Não, há muitos riscos graves não documentados", "Sim, é aprovada por órgãos de saúde mundiais como a OMS", "Ainda está em fase de testes em humanos", "Apenas a versão paga é segura", "Não, ela causa autismo"],
        resposta: "Sim, é aprovada por órgãos de saúde mundiais como a OMS"
    },
    {
        pergunta: "Após se vacinar, a mulher está isenta de fazer o exame Papanicolau?",
        opcoes: ["Sim, a vacina substitui o exame", "Não, o exame continua sendo essencial para o rastreamento", "Sim, mas só depois de 10 anos", "Apenas se ela tomou as 3 doses", "Sim, se nunca teve relações sexuais"],
        resposta: "Não, o exame continua sendo essencial para o rastreamento"
    },
    {
        pergunta: "A vacina quadrivalente, oferecida no SUS, protege contra quantos tipos de HPV?",
        opcoes: ["1 tipo", "2 tipos", "4 tipos", "9 tipos", "Todos os tipos"],
        resposta: "4 tipos"
    },
    {
        pergunta: "Um efeito colateral comum e esperado da vacina é:",
        opcoes: ["Desenvolver câncer", "Ficar infértil", "Dor e vermelhidão no local da aplicação", "Perda de memória", "Ganho de peso"],
        resposta: "Dor e vermelhidão no local da aplicação"
    },
    {
        pergunta: "Pessoas que vivem com HIV/AIDS podem tomar a vacina?",
        opcoes: ["Não, é contraindicado", "Sim, e o esquema vacinal é especial com mais doses", "Sim, mas a vacina tem menos efeito", "Apenas se a carga viral estiver alta", "Apenas se forem homens"],
        resposta: "Sim, e o esquema vacinal é especial com mais doses"
    },
    
    // --- Mitos ---
    {
        pergunta: "Qual destas afirmações sobre o HPV é um MITO?",
        opcoes: ["Pode causar câncer de ânus", "A vacina é a melhor prevenção", "Só se pega HPV sentando em vaso sanitário", "Pode ser assintomático", "Homens podem ter câncer por HPV"],
        resposta: "Só se pega HPV sentando em vaso sanitário"
    },
    {
        pergunta: "Qual destas é uma FAKE NEWS comum sobre a vacina do HPV?",
        opcoes: ["Ela previne contra o câncer de colo do útero", "É gratuita no SUS para jovens", "Ela causa infertilidade e doenças autoimunes", "É recomendada para meninos e meninas", "Pode causar dor no braço"],
        resposta: "Ela causa infertilidade e doenças autoimunes"
    },
    {
        pergunta: "Sobre a vacinação e o início da vida sexual, qual afirmação é VERDADEIRA?",
        opcoes: ["Vacinar incentiva o início da vida sexual", "Estudos mostram que não há relação entre os dois", "Vacina só deve ser feita após o início da vida sexual", "É proibido vacinar jovens sexualmente ativos", "Apenas meninos são influenciados"],
        resposta: "Estudos mostram que não há relação entre os dois"
    },
    {
        pergunta: "O que é mais seguro para o corpo?",
        opcoes: ["Pegar a doença para criar imunidade 'natural'", "Tomar a vacina, que usa partículas não infecciosas", "Não fazer nada e contar com a sorte", "Tomar chás e ervas para prevenção", "Evitar contato com outras pessoas"],
        resposta: "Tomar a vacina, que usa partículas não infecciosas"
    },
    {
        pergunta: "O HPV é uma infecção rara e afeta poucas pessoas no mundo.",
        opcoes: ["Verdadeiro, menos de 1% da população tem", "Falso, é a IST mais comum no mundo", "Verdadeiro, foi quase erradicada", "Falso, mas só afeta a América do Sul", "Verdadeiro, apenas idosos são afetados"],
        resposta: "Falso, é a IST mais comum no mundo"
    },
    {
        pergunta: "A proteção da vacina do HPV dura a vida toda?",
        opcoes: ["Não, dura apenas 1 ano e precisa de reforço", "Sim, estudos indicam proteção de longa duração", "Precisa de reforço a cada 5 anos", "Ninguém sabe ao certo", "A proteção acaba aos 30 anos"],
        resposta: "Sim, estudos indicam proteção de longa duração"
    },
    {
        pergunta: "Se uma pessoa se vacinou, ela pode abandonar o uso de preservativos?",
        opcoes: ["Sim, pois já está 100% protegida de tudo", "Não, pois o preservativo protege contra outras ISTs", "Sim, mas apenas com parceiros fixos", "Depende do resultado do Papanicolau", "Sim, e também pode parar de ir ao ginecologista"],
        resposta: "Não, pois o preservativo protege contra outras ISTs"
    },
    {
        pergunta: "Onde a vacina do HPV é aplicada?",
        opcoes: ["Na veia", "Na nádega", "No músculo do braço (intramuscular)", "É em gotas, via oral", "É um adesivo na pele"],
        resposta: "No músculo do braço (intramuscular)"
    },
    {
        pergunta: "É possível tomar a vacina do HPV mesmo estando com um resfriado leve?",
        opcoes: ["Não, é extremamente perigoso", "Sim, doenças leves sem febre não impedem a vacinação", "Apenas com autorização médica por escrito", "Não, a vacina da gripe anula o efeito", "Apenas se tomar um antialérgico antes"],
        resposta: "Sim, doenças leves sem febre não impedem a vacinação"
    },
    {
        pergunta: "Por que a vacinação foca em jovens de 9 a 14 anos?",
        opcoes: ["Porque a vacina só é fabricada em tamanho infantil", "Porque a resposta imunológica é muito mais forte em pré-adolescentes", "Porque é a única idade em que o SUS tem verba", "Porque os jovens são mais fáceis de convencer", "Porque a vacina é menos dolorida nessa idade"],
        resposta: "Porque a resposta imunológica é muito mais forte em pré-adolescentes"
    },
    {
        pergunta: "A vacina nonavalente, disponível em clínicas privadas, protege contra quantos tipos de HPV?",
        opcoes: ["2 tipos", "4 tipos", "9 tipos", "20 tipos", "50 tipos"],
        resposta: "9 tipos"
    },
    {
        pergunta: "A vacina oferecida no SUS é a:",
        opcoes: ["Bivalente (2 tipos)", "Quadrivalente (4 tipos)", "Nonavalente (9 tipos)", "Monovalente (1 tipo)", "Penta (5 tipos)"],
        resposta: "Quadrivalente (4 tipos)"
    },
    {
        pergunta: "A vacina do HPV pode ser considerada uma vacina contra o câncer?",
        opcoes: ["Não, isso é um exagero de marketing", "Sim, pois previne a infecção que causa o câncer", "Não, pois ela combate o vírus, não o câncer diretamente", "Apenas para o câncer de colo do útero", "Não, vacinas não previnem câncer"],
        resposta: "Sim, pois previne a infecção que causa o câncer"
    },
    {
        pergunta: "Qual o nome do exame que pode detectar o DNA do HPV em mulheres?",
        opcoes: ["Hemograma", "Teste de Glicemia", "Captura Híbrida ou Teste de HPV-DNA", "Ultrassonografia Pélvica", "Ressonância Magnética"],
        resposta: "Captura Híbrida ou Teste de HPV-DNA"
    },
    {
        pergunta: "Se um casal está em um relacionamento monogâmico há anos, eles precisam se preocupar com HPV?",
        opcoes: ["Não, o risco é absolutamente zero", "Sim, pois um dos parceiros pode ter o vírus de relacionamentos passados sem saber", "Apenas se um deles tiver verrugas visíveis", "Apenas se não forem casados legalmente", "Não, se ambos tiverem mais de 30 anos"],
        resposta: "Sim, pois um dos parceiros pode ter o vírus de relacionamentos passados sem saber"
    },
    {
        pergunta: "Qual profissional de saúde a mulher deve procurar para fazer o exame preventivo (Papanicolau)?",
        opcoes: ["Cardiologista", "Dermatologista", "Ginecologista", "Ortopedista", "Clínico Geral"],
        resposta: "Ginecologista"
    },
    {
        pergunta: "O tratamento para as lesões causadas pelo HPV:",
        opcoes: ["É sempre feito com antibióticos", "Não existe tratamento eficaz", "Pode incluir cauterização, ácidos ou pequenas cirurgias", "É feito com a própria vacina", "Sempre requer quimioterapia"],
        resposta: "Pode incluir cauterização, ácidos ou pequenas cirurgias"
    },
    {
        pergunta: "O HPV é mais perigoso para:",
        opcoes: ["Homens", "Mulheres", "Idosos", "Pessoas com sistema imunológico enfraquecido", "Crianças"],
        resposta: "Pessoas com sistema imunológico enfraquecido"
    },
    {
        pergunta: "Após a infecção pelo HPV, o desenvolvimento de câncer é um processo:",
        opcoes: ["Rápido, ocorre em poucos meses", "Lento, pode levar 10 anos ou mais", "Imediato", "Que depende da alimentação", "Que só ocorre no verão"],
        resposta: "Lento, pode levar 10 anos ou mais"
    },
    {
        pergunta: "O que a vacina do HPV faz no corpo?",
        opcoes: ["Mata o vírus diretamente", "Cria uma barreira física", "Ensina o sistema imune a criar anticorpos", "Aumenta a acidez da pele", "Muda o DNA da pessoa"],
        resposta: "Ensina o sistema imune a criar anticorpos"
    }
];