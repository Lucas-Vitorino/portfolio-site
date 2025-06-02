export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <section className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Lucas Vitorino</h1>
          <p className="text-lg text-gray-400">Desenvolvedor em formação | Projetos em Automação, Web e STEAM</p>
          <p className="text-sm text-gray-500 mt-1">📍 Quintino – RJ | 💻 Estudante de ADS na Estácio</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projetos em Destaque</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-800 p-4 rounded-2xl shadow">
              <h3 className="text-xl font-bold">Projeto Arduino - Controle de Temperatura</h3>
              <p className="text-gray-400">Sistema com LCD, sensor NTC e relé para controle remoto de ar-condicionado via ESP-01 e backend Flask.</p>
              <a href="https://github.com/Lucas-Vitorino/ProjetoArduino" className="text-blue-400 hover:underline">Ver no GitHub</a>
            </div>
            <div className="bg-gray-800 p-4 rounded-2xl shadow">
              <h3 className="text-xl font-bold">Projeto Clima - Previsão do Tempo</h3>
              <p className="text-gray-400">Aplicação web que exibe a previsão do tempo em tempo real com base na API OpenWeather.</p>
              <a href="https://github.com/Lucas-Vitorino/ProjetoClima2" className="text-blue-400 hover:underline">Ver no GitHub</a>
            </div>
            <div className="bg-gray-800 p-4 rounded-2xl shadow">
              <h3 className="text-xl font-bold">Lista de Tarefas Interativa</h3>
              <p className="text-gray-400">To-do list com modo escuro, tema futurista e sistema de Pomodoro integrado.</p>
              <a href="https://github.com/Lucas-Vitorino/Lista-de-Tarefas" className="text-blue-400 hover:underline">Ver no GitHub</a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills e Tecnologias</h2>
          <ul className="grid grid-cols-2 gap-2 text-gray-300">
            <li>HTML, CSS, JS</li>
            <li>Python, Flask</li>
            <li>Arduino, ESP-01</li>
            <li>Firebase, SQLite</li>
            <li>Tkinter, Git</li>
            <li>Metodologias STEAM e Cultura Maker</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contato</h2>
          <p className="text-gray-400">📧 lucasvitorino12@gmail.com</p>
          <p className="text-gray-400">🔗 <a href="https://github.com/Lucas-Vitorino" className="text-blue-400 hover:underline">GitHub</a></p>
          <p className="text-gray-400">🔗 <a href="https://linkedin.com/in/lucasvitorinogomespessoa" className="text-blue-400 hover:underline">LinkedIn</a></p>
        </section>
      </section>
    </main>
  );
}