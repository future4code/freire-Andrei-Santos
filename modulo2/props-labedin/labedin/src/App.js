import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Foto from './imagens/foto.png';
import Logo from './imagens/download.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Foto}
          nome="Andrei Souza Santos" 
          descricao="Oi, eu sou o Andrei. Sou fascinado por novas técnologias e estou sempre buscando adquirir novos conhecimentos."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/7693/7693365.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1654697452~hmac=33382fcb420abcbd60c3e5f3475cd215"
          nome="Email:"
          info="andrei_labenu@123.com"
        />

        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/4296/premium/4296496.png?token=exp=1654697505~hmac=1a0899d5a80b7f9afdceb9f0ecc31132"
          nome="Endereço:"
          info="Rua central 42"
        />

        
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante de desenvolvimento web" 
        />
        
        <CardGrande 
          imagem={Logo} 
          nome="Log Plannig" 
          descricao="Desenvolvedor Salesforce Jr." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
