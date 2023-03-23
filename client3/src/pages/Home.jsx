import BusinessPartners from "../components/BusinessPartners";
import Pizzas from "../components/Pizzas";
import AddBusinessPartnerModal from "../components/AddBusinessPartnerModal";
import AddPizzaModal from "../components/AddPizzaModal";

export default function Home() {
  return (
    <>
    <div className="d-flex gap-3 mb-4">
      <AddBusinessPartnerModal />
      <AddPizzaModal />
    </div>
    <Pizzas />
    <hr />
    <BusinessPartners />
    </>
  )
}

// page displays buttons to open AddBusinessPartnerModal and AddPizzaModal
// page also displays components that display Pizza data and Business Partner data
// This page is going to change a ton
// we'll want a header image, a NavBar, and some basic information about the Pizza Place
// maybe some images on the side as well
