import axios from "axios"
import { IoLogoWindows } from "react-icons/io"
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
        alert(err.response.data.message)
    })
}

export const logout = (navigate) => {
    localStorage.removeItem("token")
    alert("sucess")
    navigate("/login")
}

export const deleteTrip = (id) => {
    if(window.confirm("apagar?")){
        axios.delete(`${BASE_URL}/trips/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res) => {
            alert("Viagem deletada com sucesso!")
            window.location.reload(false);
        }).catch((err) => {
            alert(err.response.data.message)
        })
    }
}

export const createTrip = (name, planet, date, description, duration) => {
    const body = {
        name: name,
        planet: planet,
        date: date,
        description: description,
        durationInDays: duration
    }

    axios.post(`${BASE_URL}/trips`, body, {
        headers: {
            auth: localStorage.getItem("token")
        }
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

export const applyToTrip = (id, name, age, text, profession, country) => {
    const body = {
        name: name,
        age: age,
        applicationText: text,
        profession: profession,
        country: country
    }

    axios.post(`${BASE_URL}/trips${id}/apply`, body, {
        headers: {
            auth: localStorage.getItem("token")
        }
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

