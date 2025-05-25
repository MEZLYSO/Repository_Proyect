import mysql2, {
  ConnectionOptions,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";

//Configuracion de la database
const config: ConnectionOptions = {
  host: "192.168.232.170",
  user: "usuario",
  password: "12345678",
  database: "app_db",
  connectionLimit: 10,
  //Espera en la conexion
  waitForConnections: true,
  //Tiempo de Espera
  queueLimit: 0,
};

const pool = mysql2.createPool(config);

class Database {
  async query<T extends RowDataPacket[] | ResultSetHeader>(
    sql: string,
    values: any = null,
  ) {
    const cn = await pool.getConnection();
    try {
      const [result] = await cn.query<T>(sql, values);
      return result as T;
    } finally {
      cn.release();
    }
  }
}

export default new Database();
