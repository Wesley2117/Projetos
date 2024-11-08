import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './services/api';

type Cep = {
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  localidade: string;
  uf: string;
};

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState<Cep | null>(null); // Usa o tipo `Cep` e inicializa como null

  async function handleSearch() {
    if (input === '') {
      alert("Insira algum CEP!");
      return;
    }

    // Remove caracteres não numéricos
    const formattedInput = input.replace(/\D/g, '');

    if (formattedInput.length !== 8) {
      alert("CEP inválido! Certifique-se de digitar 8 dígitos.");
      return;
    }

    try {
      const response = await api.get(`${formattedInput}/json`);

      // Verifica se o CEP existe no retorno da API
      if (response.data.erro) {
        alert("CEP não encontrado!");
        setCep(null); // Define como null caso o CEP não seja encontrado
        return;
      }

      setCep(response.data); // Define os dados do CEP
      setInput('');
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      alert('Ops, erro ao buscar. Verifique o CEP e tente novamente.');
      setCep(null); // Define como null em caso de erro
      setInput('');
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#0000FF" />
        </button>
      </div>

      {cep && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro || "Logradouro não disponível"}</span>
          <span>Complemento: {cep.complemento || "Complemento não disponível"}</span>
          <span>{cep.bairro || "Bairro não disponível"}</span>
          <span>{cep.localidade ? `${cep.localidade} - ${cep.uf}` : "Localidade não disponível"}</span>
        </main>
      )}
    </div>
  );
}

export default App;
