import HomePage from "../Pages/HomePage/HomePage"
import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage"
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage"
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage"
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = ()=> {
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="trips" element={<ListTripsPage />} />
          <Route path="application-form" element={<ApplicationFormPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="admin" element={<AdminHomePage />} />
          <Route path="trip-details" element={<TripDetailsPage />} />
          <Route path="create-trip" element={<CreateTripPage />} />
        </Routes>
      </BrowserRouter>
    )
}