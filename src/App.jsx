import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [tab, setTab] = useState("inicio");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Header */}
      <header className="bg-black bg-opacity-70 backdrop-blur-md sticky top-0 shadow-md z-10">
        <nav className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-extrabold text-cyan-400 tracking-wide">
            A Espiã — Curta IFPB
          </h1>
          <ul className="flex gap-6 text-lg font-medium">
            <li
              className={`cursor-pointer hover:text-cyan-400 ${
                tab === "inicio" && "text-cyan-400"
              }`}
              onClick={() => setTab("inicio")}
            >
              Início
            </li>
            <li
              className={`cursor-pointer hover:text-cyan-400 ${
                tab === "atos" && "text-cyan-400"
              }`}
              onClick={() => setTab("atos")}
            >
              Atos
            </li>
            <li
              className={`cursor-pointer hover:text-cyan-400 ${
                tab === "form" && "text-cyan-400"
              }`}
              onClick={() => setTab("form")}
            >
              Formulário
            </li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-4xl mx-auto p-6">
        {tab === "inicio" && (
          <motion.section
            key="inicio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-cyan-300">
              Chamada para Voluntários!
            </h2>
            <p className="text-lg text-justify">
              Estamos procurando pessoas talentosas para nos ajudar na produção
              do curta <span className="font-semibold">"A Espiã"</span>, filmado
              no IFPB. Se você tem paixão por cinema e quer participar de um
              projeto criativo, junte-se a nós!
            </p>

            <h3 className="text-2xl font-semibold text-cyan-400">Sinopse</h3>
            <p className="text-justify">
              Uma agente russa, disfarçada de estudante, se infiltra no IFPB, bem
              no sertão da Paraíba, com uma missão: investigar e acabar com uma
              seita misteriosa que atua dentro do campus. Lá, ela acaba se
              aproximando de um colega de turma carismático, que vira sua
              principal fonte de informações e o seu melhor amigo, em quem ela
              realmente confia. À medida que as coisas avançam, ela percebe que
              seu maior aliado pode ser também seu maior inimigo, e que ele está
              jogando seu próprio jogo, movido por vingança e sede de poder.
            </p>
          </motion.section>
        )}

        {tab === "atos" && (
          <motion.section
            key="atos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-cyan-300">
              Estrutura Narrativa
            </h2>

            <div className="card-cinema">
              <h3 className="text-xl font-bold text-cyan-400">
                Ato I — A Infiltração
              </h3>
              <p>
                Livotsky chega em Cajazeiras com uma identidade e um passado bem
                montado, com um objetivo bem definido: descobrir quem está por
                trás de uma seita que opera de forma discreta dentro do IFPB.
                Inicialmente, ela age sozinha, investigando com cuidado, ouvindo
                conversas pelos corredores e achando pistas escondidas, como
                símbolos estranhos em livros antigos da biblioteca e em paredes
                ao redor do campus. No meio disso tudo, ela conhece um aluno bem
                sociável e popular, que se oferece para ajudá-la. Aos poucos,
                os dois criam uma relação de confiança, e ele começa a participar
                da investigação.
              </p>
            </div>

            <div className="card-cinema">
              <h3 className="text-xl font-bold text-cyan-400">
                Ato II — A Conspiração
              </h3>
              <p>
                Ela descobre que a seita, na verdade, funciona como uma
                sociedade secreta disfarçada de um grupo de prestígio. Essa
                organização realiza um baile anual, que homenageia o "melhor
                aluno do ano", despertando interesse entre os alunos, mas essa
                honraria, na verdade, é o disfarce para um ritual sombrio. O
                "aluno perfeito" é justamente o escolhido como rei do baile, se
                tornando uma vítima da seita. Livotsky continua investigando ao
                lado do amigo, mas alguns sinais começam a incomodá-la: ele sabe
                demais, dizendo coisas que alguém desinformado não deveria
                saber, sempre aparece na hora certa, e parece estar manipulando
                as coisas para levá-la a certas conclusões. Mesmo assim, ela
                insiste em confiar nele, trazendo sérias consequências. O que ela
                não sabe é que ele está usando a investigação para atingir um
                objetivo pessoal, se vingar da morte do irmão (uma vítima
                passada da seita) e tomar o controle do grupo para si, estando
                obcecado pelo poder que o controle da organização
                proporcionaria: bons empregos, contatos e poder na região.
              </p>
            </div>

            <div className="card-cinema">
              <h3 className="text-xl font-bold text-cyan-400">
                Ato III — A Revelação
              </h3>
              <p>
                O clímax acontece quando os dois invadem o lugar onde a seita
                guarda os registros e segredos. Lá, eles encontram uma caixa com
                documentos, listas de membros e tudo que pode expor a
                organização. Quando Livotsky acha que venceu e que sua missão
                chegou ao fim, o amigo revela suas verdadeiras intenções. Ele
                não era só contra a seita, tinha seu próprio plano, e ela era só
                uma peça que ele usou pra chegar até o poder da seita.
              </p>
            </div>
          </motion.section>
        )}

        {tab === "form" && (
          <motion.section
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center"
          >
            <h2 className="text-3xl font-bold text-cyan-300">Participe!</h2>
            <p className="text-lg">
              Preencha nosso formulário para demonstrar seu interesse em fazer
              parte da produção.
            </p>
            <a
              href="https://forms.gle/DFP9Ru8T9m66YW7JA"
              target="_blank"
              className="btn-cinema"
            >
              Preencher Formulário
            </a>
          </motion.section>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-6 text-sm">
        © 2025 Curta "A Espiã" — Produzido por alunos do IFPB
      </footer>
    </div>
  );
}
 </a>
          </motion.section>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-6 text-sm">
        © 2025 Curta "A Espiã" — Produzido por alunos do IFPB
      </footer>
    </div>
  );
}
