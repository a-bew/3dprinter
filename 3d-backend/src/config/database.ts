import { DataSourceOptions } from "typeorm";
import { User, ColumnEntity, RowEntity, TableEntity, CellEntity } from '../models'
// User
const config: DataSourceOptions = {
    type: "mysql",
    host: process.env.MYSQLDB_HOST || "db", //  

    port: Number(process.env.MYSQLDB_PORT) || 3306, //
    username: process.env.MYSQLDB_USER || "mysql", // 
    password: process.env.MYSQLDB_ROOT_PASSWORD || "mysql", // 
    database: process.env.MYSQLDB_DATABASE || "express-ts", // 
    entities: [User, ColumnEntity, RowEntity, TableEntity, CellEntity],
    synchronize: true,
};


export default config;
