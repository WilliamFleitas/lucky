require("dotenv").config();
const { Sequelize } = require("sequelize");
const { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } = process.env;
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`
);

const basename = path.basename(__filename);

const modelDefiners: any = [];
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file: any) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
  )
  .forEach((file: any) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model: any) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

sequelize?.models?.User.hasMany(sequelize?.models?.TicketDetail);
sequelize?.models?.TicketDetail.belongsTo(sequelize?.models?.Rifa)
sequelize?.models?.Rifa.hasMany(sequelize?.models?.TicketDetail);

// sequelize?.models?.User.belongsToMany(sequelize?.models?.Rifa, {through: sequelize?.models?.TicketDetail});
// sequelize?.models?.Rifa.belongsToMany(sequelize?.models?.User, {through: sequelize?.models?.TicketDetail});

module.exports = {
  sequelize,
  ...sequelize.models,
};