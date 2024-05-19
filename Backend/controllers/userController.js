const pool = require("./pool");

async function login(req, res){
    const {uname, password} = req.body;
    try{
        const {rows} = await pool.query('SELECT * FROM users WHERE uname = $1 AND password = $2', [uname, password]);
        if (rows.length === 0){
            return res.status(200).send('Username or password is incorrect');
        }
        res.status(200).send(rows[0]);
    }catch (error){
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

async function signUp(req, res){
    const{uname, password} = req.body;
    try{
        console.log(req.message);
        const result = await pool.query('INSERT INTO users (uname, password) VALUES ($1, $2) RETURNING *', [uname, password]);
        res.status(200).send(result.rows[0]);
    }catch(error){
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

async function getUserId(req, res){
    const{user_id} = req.params;
    try{
        const result = await pool.query(`SELECT * FROM users WHERE user_id = $1`,[user_id]);
        res.status(200).json(result.rows[0]); 
    } catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports = {
    login,
    signUp,
    getUserId
};