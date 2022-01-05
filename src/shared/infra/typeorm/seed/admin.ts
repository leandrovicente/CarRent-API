import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  const query = `INSERT INTO USERS(id,name,email,password,"isAdmin",created_at,driver_license)
  values('${id}','admin','admin@admin.com.br','${password}',true,'now()', 'XXX')
  `;

  connection.query(query);

  await connection.close;
}

create().then(() => console.log("User admin created"));
