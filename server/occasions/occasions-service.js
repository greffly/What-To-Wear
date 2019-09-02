const occasionsService = {
  getAllOccasions(knex) {
    return knex.from('occasions').select('*');
  },
  getById(knex, id) {
    return knex
      .select('*')
      .from('occasions')
      .where('id', id)
      .first();
  },
  insertOccasion(knex, newOccasion) {
    return knex
      .insert(newOccasion)
      .into('occasions')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  deleteOccasion(knex, id) {
    return knex('occasions')
      .where({ id })
      .delete();
  },
  updateOccasion(knex, id, newOccasionFields) {
    return knex('occasions')
      .where({ id })
      .update(newOccasionFields);
  }
};

module.exports = occasionsService;
