console.log("Carregou o Dashboard =) [!]");

const systemName = "Sistema de Controle de Manutenção";

let activeEquipments      = 48;
let maintenanceEquipments = 5;
let preventiveMaintenance = 10;

console.log("Nome do Sistema: "             + systemName);
console.info("Equipamentos Ativos: "        + activeEquipments);
console.info("Equipamentos em Manutenção: " + maintenanceEquipments);
console.info("Manutenções Preventivas: "    + preventiveMaintenance);

const equipments = [
    {
        id: 1,
        name: "Compressor",
        local: "Oficina",
        status: "active",
        patrimony: "12-PP"
    },
    {
        id: 2,
        name: "Torno",
        local: "Oficina",
        status: "active",
        patrimony: "1-PP"
    },
    {
        id: 3,
        name: "Gerador",
        local: "Casa de Máquinas",
        status: "inactive",
        patrimony: "65-PP"
    },
    {
        id: 4,
        name: "Gerador Grande",
        local: "Casa de Máquinas",
        status: "maintenance",
        patrimony: "76-PP"
    }
];

console.table(equipments);

const activeTotal                = document.querySelector("#activeTotal");
const preventiveTotal            = document.querySelector("#preventiveTotal");
const manutenanceEquipmentsTotal = document.querySelector("#manutenanceEquipmentsTotal");
const equipmentsTable            = document.querySelector("#equipmentsTable");
const searchInput                = document.getElementById("searchInput");
const btnNewEquipment            = document.getElementById("btnNewEquipment");
const modalElement               = document.getElementById("equipmentModal");
const modal                      = new bootstrap.Modal(modalElement);
const btnSave                    = document.getElementById("btnSaveEquipment");
const equipmentName              = document.getElementById("equipmentName");

console.info("activeTotal: " + activeTotal.textContent);
//activeTotal.textContent = 50;

function dashboardRefresh() {
    const actives = equipments.filter(
        equipment => equipment.status === "active"
    ).length;

    const inMaintenance = equipments.filter(
        equipment => equipment.status === "maintenance"
    ).length;

    activeTotal.textContent                = actives;
    manutenanceEquipmentsTotal.textContent = inMaintenance;

    console.log("Dashboard Atualizado!");
};

function equipmentsTableRender(list) {
    equipmentsTable.innerHTML = "";

    list.forEach(equipment => {
        const row = document.createElement("tr");

        row.innerHTML = 
        `
            <td>${equipment.name}</td>
            <td>${equipment.local}</td>
            <td>${equipment.status}</td>
            <td>
                <button class="btn btn-danger" onClick="equipmentDelete(${equipment.id})">Excluir</button>
            </td>
        `;

        equipmentsTable.appendChild(row);
    });

    console.log("Tabela de Equipamentos Atualizada!");
}

searchInput.addEventListener("input", function() {
    const term = searchInput.value.toLowerCase();

    const result = equipments.filter(
        equipment => equipment.name.toLowerCase().includes(term)
    );

    equipmentsTableRender(result);

    console.log("Pesquisa Realizada!");
});

btnNewEquipment.addEventListener("click", function() {
    modal.show();
});

btnSave.addEventListener("click", function() {
    if (equipmentName.value.trim() === "") {
        console.warn("Nome do equipamento não informado!");
        alert("Informe o nome do equipamento");
        return;
    };

    const newEquipment = {
        id: equipments.length + 1,
        name: equipmentName.value,
        local: "Não Informado", 
        status: "active",
        patrimony: `${(equipments.length + 1).toString().padStart(3, "0")}-PP`
    }

    equipments.push(newEquipment);
    equipmentsTableRender(equipments);
    dashboardRefresh();

    console.log(newEquipment.patrimony);

    console.log("Equipamento Adicionado!");
});

function equipmentDelete(equipmentId) {
    const index = equipments.findIndex(
        equipment => equipment.id === equipmentId
    );

    if(index === -1) {
        console.error("Equipamento não enocntrado:", equipmentId);
        return;
    }

    equipments.splice(index, 1);
    equipmentsTableRender(equipments);
    dashboardRefresh();

    console.log("Equipamento removido", equipmentId);
}

dashboardRefresh();
equipmentsTableRender(equipments);