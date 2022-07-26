var pool = require('./bd');

async function getNovedades(){
    var query = 'select * from novedades order by id ASC';
    var rows = await pool.query(query);
    return rows;
}


module.exports = { getNovedades }