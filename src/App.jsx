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
              Uma agente russa, disfarçada de estudante, se infiltra no IFPB, no
              sertão da Paraíba, com uma missão: investigar e acabar com uma
              seita misteriosa que atua dentro do campus. Lá, ela se aproxima de
              um colega carismático, que vira seu principal aliado. Mas, com o
              tempo, ela descobre que seu maior amigo pode ser também seu maior
              inimigo, movido por vingança e sede de poder.
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
                Livotsky chega em Cajazeiras com uma identidade bem montada. Ela
                começa investigando sozinha, mas acaba conhecendo um aluno
                sociável que oferece ajuda. Aos poucos, eles criam uma relação
                de confiança.
              </p>
            </div>

            <div className="card-cinema">
              <h3 className="text-xl font-bold text-cyan-400">
                Ato II — A Conspiração
              </h3>
              <p>
                Ela descobre que a seita funciona como uma sociedade secreta. O
                amigo parece saber demais, levantando dúvidas. Mesmo assim, ela
                insiste em confiar nele, trazendo sérias consequências.
              </p>
            </div>

            <div className="card-cinema">
              <h3 className="text-xl font-bold text-cyan-400">
                Ato III — A Revelação
              </h3>
              <p>
                No clímax, Livotsky invade o local da seita e acha documentos
                secretos. Mas o amigo revela seu verdadeiro plano: usar a
                investigação para tomar o controle da organização.
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
