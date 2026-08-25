console.log("Carregou o Dashboard =) [!]");

const systemName = "Sistema de Controle de Manutenção";

let activeEquipaments      = 48;
let maintenanceEquipaments = 5;
let preventiveMaintenance  = 10;

console.log("Nome do Sistema: "             + systemName);
console.info("Equipamentos Ativos: "        + activeEquipaments);
console.info("Equipamentos em Manutenção: " + maintenanceEquipaments);
console.info("Manutenções Preventivas: "    + preventiveMaintenance);

const equipaments = [
    {
        id: 1,
        name: "Compressor",
        local: "Oficina",
        status: true,
        patrimony: "12-PP"
    },
    {
        id: 2,
        name: "Torno",
        local: "Oficina",
        status: true,
        patrimony: "1-PP"
    },
    {
        id: 3,
        name: "Gerador",
        local: "Casa de Máquinas",
        status: false,
        patrimony: "65-PP"
    }
];

console.table(equipaments);

const activeTotal     = document.querySelector("#activeTotal");
const preventiveTotal = document.querySelector("#preventiveTotal");

console.info("activeTotal: " + activeTotal.textContent);
activeTotal.textContent = 50;