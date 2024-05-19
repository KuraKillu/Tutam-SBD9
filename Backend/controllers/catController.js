const pool = require("./pool");
require('dotenv').config();

async function postCats(req, res){
    const {fromUser, cat_name, descript, photo, ras , tl} = req.body;

    try{
        const result = await pool.query(`INSERT INTO kucheng (fromUser, cat_name, descript, photo, ras, tl)
                                        VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
                                        [fromUser, cat_name, descript, photo, ras, tl]
        );
        res.status(200).send(result.rows[0]);
    }catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

async function getCats(req, res){
    try{
        const result = await pool.query(
            `SELECT kucheng.*, users.uname FROM kucheng
            INNER JOIN users ON users.user_id = kucheng.fromUser;`    
        )
        res.send(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

async function deleteCats(req,res){
    try{
        const{cat_id} = req.params;
        const result = await pool.query(`DELETE FROM kucheng WHERE cat_id = $1 RETURNING *`, [cat_id]);
        
        res.send(result.rows);
    }catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports = {
    postCats,
    getCats,
    deleteCats
};