
export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToListTripsPage = (navigate) => {
    navigate("/trips")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("/application-form")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/trip-details/${id}`)
}

export const goToCreateTripPage = (navigate) => {
    navigate("/create-trip")
}

export const goToBack = (navigate) => {
    navigate(-1)
}