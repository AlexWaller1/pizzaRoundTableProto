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
