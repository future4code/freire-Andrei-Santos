import styled from "styled-components";

const Container = styled.div`
  height:calc(100vh - 200px);
  display:flex;
  flex-direction:column;
  align-items:center;

  span{
    color:#00b786;
    font-size:30px;
    font-weight:bold;
  }
`
const ButtonArea = styled.div`
  display:flex;
  margin-top:50px;
  margin-bottom:50px;


  div{
    margin:0px 25px;
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
const CardArea = styled.div`
  margin-top:30px;
  padding-left:20px;
  padding-right:20px;
  padding-bottom:20px;
  width:100%;
  display:flex;
  flex-wrap:wrap;
  max-width:1680px;
`
const Card= styled.div`
  background-color:#00b786;
  color:black;
  box-shadow:3px 3px 15px #ffffff90;
  border-radius:5px;
  padding:10px 20px;
  max-width: 500px;
  width: 100%;
  margin:10px;
  transition:0.5s;

  p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  :hover{
    background-color:#7bf7d4;

  }
`
const ListTripsPage = () => {
    return (
      <Container>
        <ButtonArea>
          <div>Voltar</div>
          <div>Inscrever-se</div>
        </ButtonArea>
        <span>Lista de Viagens</span>
        <CardArea>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>
          <Card>
            <p><b>Nome: </b>Viagem fria para Plutão</p>
            <p><b>Descrição: </b>A viagem mais incrível da galáxia.</p>
            <p><b>Planeta: </b>Plutão</p>
            <p><b>Duração: </b>980</p>
            <p><b>Data: </b>2025-12-25</p>
          </Card>

        </CardArea>
      </Container>
    );
  }
  
  export default ListTripsPage;