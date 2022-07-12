import styled from "styled-components";

const Container = styled.div`
  height:calc(100vh - 200px);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  span{
    color:#00b786;
    font-size:30px;
    font-weight:bold;
  }

  form{
    display:flex;
    flex-direction:column;
    width:500px;
    margin-top:20px;
  }

  input{
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border:1px solid #343434;
    margin: 0px 0px 15px;
    background-color:#232323;
    color:white;

  }

  select{
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border:1px solid #343434;
    margin: 0px 0px 15px;
    background-color:#232323;
    color:white;
  }
`
const ButtonArea = styled.div`
  display:flex;
  margin-top:20px;
  justify-content:space-around;

  div{
    margin:0px 10px;
    padding:10px 20px;
    border-radius:20px;
    background-color:#00b786;
    transition:0.5s;

    :hover{
      cursor:pointer;
      box-shadow:2px 2px 10px #ffffff90;
      background-color:#7bf7d4;
      color:black;
    }
  }
`

const ApplicationFormPage = () => {
    return (
      <Container>
        <span>Inscreva-se para uma viagem</span>
        <form>
        <select>
          <option disabled selected>Escolha uma Viagem</option>
          <option>opcao 1</option>
          <option>opcao 2</option>
          <option>opcao 3</option>
          <option>opcao 4</option>
          <option>opcao 5</option>
          <option>opcao 6</option>
          <option>opcao 7</option>
        </select>
        <input placeholder="Nome"></input>
        <input placeholder="Idade"></input>
        <input placeholder="Texto de Candidatura"></input>
        <input placeholder="Profissao"></input>
        <select>
          <option disabled selected>Escolha um Pais</option>
          <option>opcao 1</option>
          <option>opcao 2</option>
          <option>opcao 3</option>
          <option>opcao 4</option>
          <option>opcao 5</option>
          <option>opcao 6</option>
          <option>opcao 7</option>
        </select>
        <ButtonArea>
          <div>Voltar</div>
          <div>Enviar</div>
        </ButtonArea>
        </form>

      </Container>
    );
  }
  
  export default ApplicationFormPage;