import { createConnection } from 'typeorm';

class Database {
  connect () {
    createConnection(
      {
        url: "postgres://vxctzzziyxlebd:7ecf5b9976b681aa35045d491d14cca61de1e148381ffc151e6537b5b269d4ad@ec2-34-230-110-100.compute-1.amazonaws.com:5432/d9fkh6u3tflc3m",
        ssl: { rejectUnauthorized: false },
        type: "postgres",
        host: "ec2-34-230-110-100.compute-1.amazonaws.com",
        port: 5432,
        username: "vxctzzziyxlebd",
        password: "7ecf5b9976b681aa35045d491d14cca61de1e148381ffc151e6537b5b269d4ad",
        database: "d9fkh6u3tflc3m",
      }
    );
  }
}

export default Database