// Pizzas
const pizzas = [
  {
    id: "1",
    businessPartnerId: "1",
    name: "The Lake Cushetunk Special",
    description:
      "Homemade dough and sauce with Sicilian Regianni, Provolone, and Mozzarella. Light helping of sausage",
    status: "available"
  },
  {
    id: "2",
    businessPartnerId: "1",
    name: "White Pizza",
    description:
      "Signature homemade dough with Ricotta, Sicilian Regianni, Provolone, and Mozzarella",
    status: "available"
  },
  {
    id: "3",
    businessPartnerId: "1",
    name: "Neapolitan Pizza",
    description:
      "One of the great classics made with our signature homemade dough, homemade sauce, and fresh, market bought mozzarella.",
    status: "available"
  },
  {
    id: "4",
    businessPartnerId: "1",
    name: "Pizza Melanzane",
    description:
      "One of the great Italian classics made with our homemade dough, homemade sauce, and fresh mozzarella cheese and eggplant.",
    status: "available"
  }
];

const businessPartners = [
  {
    id: "1",
    name: "K & S Italian Specialties",
    email: "alessiov@ksitalianspecialties.com",
    phone: "908-595-1606"
  },
  {
    id: "2",
    name: "Melick's Farm Stand",
    email: "info@melicks.com",
    phone: "908-439-2955"
  },
  {
    id: "3",
    name: "Pickerel Cola Ltd.",
    email: "croix.james@pickerelcola.com",
    phone: "207-201-2211"
  },
  {
    id: "4",
    name: "Raritan Italian Bakery & Expresso Bar",
    email: "inquiries@ri_bakery.com",
    phone: "908-253-0177"
  }
];

module.exports = { pizzas, businessPartners };
