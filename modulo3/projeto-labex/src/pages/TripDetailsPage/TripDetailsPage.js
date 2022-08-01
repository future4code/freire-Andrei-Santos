import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTripDetail, decideCandidate } from "../../Services/requests";
import { IoMdRocket } from "react-icons/io"
import { goToHomePage, goToLoginPage, goToBack } from "../../Routes/Cordinator";
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  span{
    color:#00b786;
    font-size:30px;
    font-weight:bold;
  }
`
const Header = styled.div`
  height:100px;
  width:100%;
  display:flex;
  justify-content:space-around;
  align-items:center;
  border-bottom:1px solid #00b78640;
  color:black;
  background-color:#00b786;
  margin-bottom:50px;
`
const LogoHeader = styled.div`
  font-size:40px;
  text-shadow:2px 2px 10px #ffffff90;
  display:flex;
  align-items:center;
  transition:0.5s;
  font-weight:bold;

  svg{
    font-size:70px;
    text-shadow:2px 2px 10px #ffffff90;
  }

  :hover{
      cursor:pointer;
      color:#7bf7d4;
    }
`
const User = styled.div`
  font-size:20px;
  text-shadow:2px 2px 10px #ffffff90;
  font-weight:bold;

  :hover{
      cursor:pointer;
      color:#7bf7d4;
    }
`
const Card = styled.div`
  background-color:#00b786;
  color:black;
  box-shadow:3px 3px 15px #ffffff90;
  border-radius:5px;
  padding:10px 20px;
  width: 500px;
  margin:10px;
  transition:0.5s;
  margin-bottom:50px;

  @media (max-width:600px){
      width:250px;
    }

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
const CandidateCard = styled.div`
  background-color:#7bf7d4;
  color:black;
  box-shadow:3px 3px 15px #ffffff90;
  border-radius:5px;
  padding:10px 20px;
  max-width: 250px;
  width: 100%;
  margin:10px;
  transition:0.5s;

  #button{
    div{
      background-color:#00b786;
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      -webkit-transition-duration: 0.1s;
      transition-duration: 0.2s;
      -webkit-transition-property: transform;
      transition-property: transform;
      :hover {
        cursor: pointer;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
  }

  p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`
const ButtonArea = styled.div`
  display:flex;
  margin-top:20px;
  margin-bottom:20px;
  justify-content:center;

  @media (max-width:315px){
      flex-direction:column;
  }

  div{
    margin:0px 25px;
    padding:10px 20px;
    border-radius:20px;
    background-color:#00b786;
    transition:0.5s;
    text-align:center;

    @media (max-width:315px){
      margin-top:10px;
    }

    :hover{
      cursor:pointer;
      box-shadow:2px 2px 10px #ffffff90;
      background-color:#7bf7d4;
      color:black;
    }
  }
`
const Content = styled.div`
  min-height:calc(100vh - 160px);
  margin-top:20px;
  margin-bottom:20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  #pendentes,
  #aprovados{
    display:flex;
    flex-direction:column;
    align-items:center;
    span {
      font-size:20px;
      margin-top:20px;
      margin-bottom:10px;
    }
  }

  #title{
    display:flex;
    justify-content:center;
  }
`
const Candidates = styled.div`
`
const Message = styled.div`
  color:#ffffff90;
`

const TripDetailsPage = () => {

  const navigate = useNavigate()

  const params = useParams()

  const [tripDetail, setTripDetail] = useState()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token === null) {
      navigate("/login")
    }
    getTripDetail(params.id, saveTripDetail)
  }, [])

  const saveTripDetail = (data) => {
    setTripDetail(data)
  }

  const pendingCandidates = tripDetail && tripDetail.candidates.map((candidate) => {
    return (
      <CandidateCard key={candidate.id}>
        <p><b>Nome:</b> {candidate.name}</p>
        <p><b>Profissão:</b> {candidate.profession}</p>
        <p><b>Idade:</b> {candidate.age}</p>
        <p><b>País:</b> {candidate.country}</p>
        <p><b>Texto de Candidatura:</b> {candidate.applicationText}</p>
        <ButtonArea id="button">
          <div onClick={() => decideCandidate(params.id, candidate.id, true)}>Aprovar</div>
          <div onClick={() => decideCandidate(params.id, candidate.id, false)}>Reprovar</div>
        </ButtonArea>
      </CandidateCard>
    )
  })

  const approvedCandidates = tripDetail && tripDetail.approved.map((candidate) => {
    return <li key={candidate.id}>{candidate.name}</li>
  })

  return (
    <Container>
      <Header>
        <LogoHeader onClick={() => goToHomePage(navigate)}>
          <IoMdRocket />
          LabeX
        </LogoHeader>
        <User onClick={() => goToLoginPage(navigate)}>
          Login
        </User>
      </Header>
      <Content>
        {tripDetail ?
          <div>
            <div id="title"><span>{tripDetail.name}</span></div>
            <Card>
              <p><b>Nome: </b>{tripDetail.name}</p>
              <p><b>Descrição: </b>{tripDetail.description}</p>
              <p><b>Planeta: </b>{tripDetail.planet}</p>
              <p><b>Duração: </b>{tripDetail.durationDays}</p>
              <p><b>Data: </b>{tripDetail.date}</p>
            </Card>
            <ButtonArea>
              <div onClick={() => goToBack(navigate)}>voltar</div>
            </ButtonArea>
            <Candidates>
              <div id="pendentes">
                <span>Candidatos Pendentes</span>
                {pendingCandidates && pendingCandidates.length > 0 ?
                  pendingCandidates
                  :
                  <Message>Não há candidatos pendentes</Message>
                }
                
              </div>
              <div id="aprovados">
                <span>Candidatos Aprovados</span>
                {approvedCandidates && approvedCandidates.length > 0 ?
                  <CandidateCard>
                    {approvedCandidates}
                  </CandidateCard>

                  :
                  <Message>Não há candidatos aprovados</Message>
                }

              </div>
            </Candidates>
          </div>

          :

          <div>carregando...</div>
        }
      </Content>
    </Container>
  );
}

export default TripDetailsPage;