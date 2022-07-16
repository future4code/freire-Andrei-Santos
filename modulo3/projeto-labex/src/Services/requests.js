import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../Constants/urls'

export const getTrips = (saveData) => {
    axios.get(`${BASE_URL}/trips`, {
        headers: {
            Authorizathion: "andrei-freire"
        }
    })
    .then((res) => saveData(res.data.trips))
    .catch((err) => saveData(err.response))
}

export const getTripDetail = (id, saveData) => {
    axios.get(`${BASE_URL}/trip/${id}`, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })
    .then((res) => {
        saveData(res.data.trip)
        console.log(res.data.trip)
    }).catch((err) => {
        console.log(err)
    })
}

export const decideCandidate = (tripId, candidateId, decision) => {
    const body = {
        approve: decision
    }

    axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })
    .then((res) => {
        alert("Decisão registrada com sucesso!")
        getTripDetail()
        window.location.reload(false);
    }).catch((err) => {
        alert(err.response.data.message)
    })
}

export const applyToTrip = (name, age, text, profession, country, saveData) => {
    const body = {
        name: name,
        age: age,
        applicationText: text,
        profession: profession,
        country: country
    }

    const id = body.filter((trip) => {
        return body
    })

    axios.post(`${BASE_URL}/trips/${id}/apply`, body, {
        headers: {
            Authorizathion: "andrei-freire"
        }
    })
    .then((res) => saveData(res.data.results))
    .catch((err) => console.log(err.response))
}

export const login = (email, password, navigate) => {

    const body = {
        email: email,
        password: password
    }

    axios.post(`${BASE_URL}/login`, body, {

    }).then((res) => {
        localStorage.setItem("token", res.data.token)
        navigate("/admin")
    }).catch((err) => {
        console.log(err.response.data.message)
    })
}

export const logout = (navigate) => {
    localStorage.removeItem("token")
    alert("sucess")
    navigate("/login")
  }

