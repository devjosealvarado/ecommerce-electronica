console.log('hello world');


import { pool } from "../../src/database/connectionMySQL.js";

const getLanguages= async ()=>{
    try {
        const [result]= await pool.query("SELECT id, name, developers, active FROM Language;");
        console.table(result);
        
    } catch (error) {
        console.error(error);
    }
}

// getLanguages();