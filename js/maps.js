//////////////////////////////////////
//maps
//////////////////////////////////////

const map01 = L.map("map01", {
  center: [28.73822808404294, -17.73172799564545],
  zoom: 11,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map01);

setInterval(function () {
  map01.invalidateSize();
}, 2000);

const stopsT1 = L.marker([28.688641471278494, -17.768137452696458])
    .bindPopup("Santa Cruz de la Palma - Starting Point")
    .addTo(map01),
  // .openPopup(),
  stopT101 = L.marker([28.722346708699753, -17.731898716068294])
    .bindPopup("Cala Martín Luís")
    .addTo(map01),
  stopT102 = L.marker([28.725120669266637, -17.730055068442372])
    .bindPopup("Puerto Trigo")
    .addTo(map01),
  stopT103 = L.marker([28.759948944001657, -17.740278592319857])
    .bindPopup("Playa de Nogales")
    .addTo(map01),
  stopT104 = L.marker([28.790080893275665, -17.803813787210938])
    .bindPopup("Cascada De Los Tilos")
    .addTo(map01);

const map02 = L.map("map02", {
  center: [28.75329105934569, -13.804384108530696],
  zoom: 8,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map02);
const stopsT2 = L.marker([28.502170587518556, -13.864026009715547])
    .bindPopup("Puerto del Rosario - Starting Point")
    .addTo(map02),
  // .openPopup(),
  stopT201 = L.marker([28.75329105934569, -13.804384108530696])
    .bindPopup("Lobos")
    .addTo(map02),
  stopT202 = L.marker([28.854832508347712, -13.846096032814135])
    .bindPopup("Playa Flamingo")
    .addTo(map02),
  stopT203 = L.marker([28.982460260309345, -13.514547227433834])
    .bindPopup("Las Caletas ")
    .addTo(map02),
  stopT204 = L.marker([29.222915333715143, -13.451302077196104])
    .bindPopup("Órzola")
    .addTo(map02),
  stopT205 = L.marker([29.260005947950123, -13.508398546095947])
    .bindPopup("La Graciosa")
    .addTo(map02),
  stopT206 = L.marker([29.117625930714464, -13.558086187964875])
    .bindPopup("Famara")
    .addTo(map02),
  stopT207 = L.marker([28.12163587467442, -14.401081211794624])
    .bindPopup("Playa de Cofete")
    .addTo(map02);

setInterval(function () {
  map02.invalidateSize();
}, 2000);

const map03 = L.map("map03", {
  center: [28.513944143858776, -16.178166221655044],
  zoom: 11,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map03);
const stopsT3 = L.marker([28.477887252625692, -16.304184484382404])
    .bindPopup("Santa Cruz de Tenerife - Starting Point")
    .addTo(map03),
  // .openPopup(),
  stopT301 = L.marker([28.513944143858776, -16.178166221655044])
    .bindPopup("Playa de Las Gaviotas")
    .addTo(map03),
  stopT302 = L.marker([28.58593381784939, -16.142083357756533])
    .bindPopup("Playa de Roque Bermejo")
    .addTo(map03),
  stopT303 = L.marker([28.586964547626245, -16.154515155747497])
    .bindPopup("Playa Las Breñas")
    .addTo(map03),
  stopT304 = L.marker([28.57748449301157, -16.18554711450551])
    .bindPopup("Playa de Benijo")
    .addTo(map03),
  stopT305 = L.marker([28.573112608409904, -16.204602250122626])
    .bindPopup("Almáciga")
    .addTo(map03),
  stopT306 = L.marker([28.57069335333122, -16.25304950706936])
    .bindPopup("Playa del Tamadite")
    .addTo(map03);

setInterval(function () {
  map03.invalidateSize();
}, 2000);

const map04 = L.map("map04", {
  center: [29.253558837496755, -13.488140155965674],
  zoom: 12,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map04);

const stopT401 = L.marker([29.223664420009776, -13.451806330875057])
    .bindPopup("Órzola, Lanzarote - Starting Point")
    .addTo(map04),
  stopT402 = L.marker([29.23293064169703, -13.503157386678703])
    .bindPopup("Caleta del Sebo")
    .addTo(map04),
  stopT403 = L.marker([29.253558837496755, -13.488140155965674])
    .bindPopup("Barranco de los Conejos")
    .addTo(map04),
  stopT404 = L.marker([29.275233169611308, -13.515846259963464])
    .bindPopup("Playa de las Conchas")
    .addTo(map04),
  stopT405 = L.marker([29.220807536936203, -13.53684595177769])
    .bindPopup("Playa de la Cocina")
    .addTo(map04),
  stopT406 = L.marker([29.220775294302996, -13.527760995985766])
    .bindPopup("Playa Francesa")
    .addTo(map04);

setInterval(function () {
  map04.invalidateSize();
}, 2000);

const map05 = L.map("map05", {
  center: [28.111924526624293, -17.10594919323016],
  zoom: 10,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map05);

const stopT501 = L.marker([28.24799657823581, -16.840134882055416])
    .bindPopup("Los Gigantes, Tenerife - Starting Point")
    .addTo(map05),
  stopT502 = L.marker([28.27134775393783, -16.84921808934575])
    .bindPopup("Playa Barranco Seco")
    .addTo(map05),
  stopT503 = L.marker([28.09289169350669, -17.100026394069367])
    .bindPopup("San Sebastián de la Gomera")
    .addTo(map05),
  stopT504 = L.marker([28.111924526624293, -17.10594919323016])
    .bindPopup("Playa de Ávalo")
    .addTo(map05),
  stopT505 = L.marker([28.217912639623563, -17.259029351289797])
    .bindPopup("Punta de los Órganos")
    .addTo(map05),
  stopT506 = L.marker([28.12643576969747, -17.342788823155786])
    .bindPopup("Playa de Heredia")
    .addTo(map05),
  stopT507 = L.marker([28.1004803250083, -17.347553439535204])
    .bindPopup("Playa del Inglés")
    .addTo(map05);

setInterval(function () {
  map05.invalidateSize();
}, 2000);

const map06 = L.map("map06", {
  center: [28.75248199484606, -13.830898344580447],
  zoom: 13,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map06);

const stopT601 = L.marker([28.740728827307866, -13.86298772239544])
    .bindPopup("Puerto de Corralejo- Starting Point")
    .addTo(map06),
  stopT602 = L.marker([28.739710218404724, -13.816696756099018])
    .bindPopup("El Puertito")
    .addTo(map06),
  stopT603 = L.marker([28.747691658639233, -13.811293459757165])
    .bindPopup("Las Lagunitas")
    .addTo(map06),
  stopT604 = L.marker([28.765996627932257, -13.814813063981338])
    .bindPopup("Punta Martiño lighthouse")
    .addTo(map06),
  stopT605 = L.marker([28.75248199484606, -13.830898344580447])
    .bindPopup("Montaña La Caldera")
    .addTo(map06);

setInterval(function () {
  map06.invalidateSize();
}, 2000);

const map07 = L.map("map07", {
  center: [28.31239635733397, -16.56509766659076],
  zoom: 9,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map07);

const stopT701 = L.marker([28.47302735170782, -16.253670205191447])
    .bindPopup("Santa Cruz de Tenerife - Starting Point")
    .addTo(map07),
  stopT702 = L.marker([28.27134775393783, -16.84921808934575])
    .bindPopup("La Laguna ")
    .addTo(map07),
  stopT703 = L.marker([28.41084719169972, -16.42569779459739])
    .bindPopup("Las Lagunetas ")
    .addTo(map07),
  stopT704 = L.marker([28.31239635733397, -16.56509766659076])
    .bindPopup("Las Cañadas del Teide")
    .addTo(map07),
  stopT705 = L.marker([28.31474722373986, -16.591709123529146])
    .bindPopup("Capilla de la Fortaleza")
    .addTo(map07),
  stopT706 = L.marker([28.2736868527691, -16.642811452742198])
    .bindPopup("Pico del Teide")
    .addTo(map07),
  stopT707 = L.marker([28.214351227052312, -16.677874690602962])
    .bindPopup("Boca Tauce")
    .addTo(map07);

setInterval(function () {
  map07.invalidateSize();
}, 2000);

const map08 = L.map("map08", {
  center: [27.742472344303117, -15.570205072828305],
  zoom: 13,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map08);

const stopT801 = L.marker([27.75356569944571, -15.591144222325362])
    .bindPopup("Maspalomas - Starting Point")
    .addTo(map08),
  stopT802 = L.marker([27.742472344303117, -15.570205072828305])
    .bindPopup("Dunes of Maspalomas")
    .addTo(map08),
  stopT803 = L.marker([27.758420930614033, -15.562474671583109])
    .bindPopup("Playa del Inglés")
    .addTo(map08);

setInterval(function () {
  map08.invalidateSize();
}, 2000);

const map09 = L.map("map09", {
  center: [28.544656459012852, -16.20242213511319],
  zoom: 11,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map09);

const stopT901 = L.marker([28.47302735170782, -16.253670205191447])
    .bindPopup("Santa Cruz de Tenerife - Starting Point")
    .addTo(map09),
  stopT902 = L.marker([28.5130956490786, -16.176202840209694])
    .bindPopup("Playa de Las Gaviotas")
    .addTo(map09),
  stopT903 = L.marker([28.572623586354705, -16.192763238650677])
    .bindPopup("Playa de Benijo")
    .addTo(map09),
  stopT904 = L.marker([28.5719392502477, -16.203568119149438])
    .bindPopup("Almáciga Beach")
    .addTo(map09),
  stopT905 = L.marker([28.570655663897153, -16.253060236772765])
    .bindPopup("Playa del Tamadite")
    .addTo(map09);

setInterval(function () {
  map09.invalidateSize();
}, 2000);

const map10 = L.map("map10", {
  center: [28.37416888298597, -16.463811338012928],
  zoom: 9.5,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map10);

const stopT1001 = L.marker([28.47302735170782, -16.253670205191447])
    .bindPopup("Santa Cruz de Tenerife - Starting Point")
    .addTo(map10),
  stopT1002 = L.marker([28.48518268185603, -16.32019680840523])
    .bindPopup("La Laguna")
    .addTo(map10),
  stopT1003 = L.marker([28.452143709033056, -16.36739968449323])
    .bindPopup("La Esperanza")
    .addTo(map10),
  stopT1004 = L.marker([28.37416888298597, -16.463811338012928])
    .bindPopup("Mirador de Chipeque")
    .addTo(map10),
  stopT1005 = L.marker([28.34540422038969, -16.48131142622871])
    .bindPopup("Mirador de La Crucita")
    .addTo(map10),
  stopT1006 = L.marker([28.273206709434124, -16.642722513700193])
    .bindPopup("Teide")
    .addTo(map10);

setInterval(function () {
  map10.invalidateSize();
}, 2000);

const map11 = L.map("map11", {
  center: [27.74437743359798, -17.9966651701423],
  zoom: 10.5,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map11);

const stopT1101 = L.marker([27.639631948642275, -17.98005115308702])
    .bindPopup("La Restinga Puerto Deportivo - Starting Point")
    .addTo(map11),
  stopT1102 = L.marker([27.69488202011019, -18.06170740118843])
    .bindPopup("Playa de las Alcusas")
    .addTo(map11),
  stopT1103 = L.marker([27.701405715093575, -17.959782553871218])
    .bindPopup("Playa de las Calcosas")
    .addTo(map11),
  stopT1104 = L.marker([27.76253465741681, -18.040005655003863])
    .bindPopup("Charco Azul")
    .addTo(map11);

setInterval(function () {
  map11.invalidateSize();
}, 2000);

const map12 = L.map("map12", {
  center: [28.427289191920963, -14.018508408645031],
  zoom: 9,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map12);

const stopT1201 = L.marker([28.147947161771242, -14.233860324986276])
    .bindPopup("Playa Esmeralda - Starting Point")
    .addTo(map12),
  stopT1202 = L.marker([28.663129433244997, -14.030733552557088])
    .bindPopup("Playa Esquinzo")
    .addTo(map12),
  stopT1203 = L.marker([28.062649614272573, -14.311277206929008])
    .bindPopup("Butihondom")
    .addTo(map12);

setInterval(function () {
  map12.invalidateSize();
}, 2000);
