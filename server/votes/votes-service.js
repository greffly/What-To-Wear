const votesService = {
  getAllVotesByOccasion(knex, occasion_id) {
    return knex
      .from('votes')
      .where('occasion', occasion_id)
      .select('*');
  },
  insertVote(knex, newVote) {
    return knex
      .insert(newVote)
      .into('votes')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  }
};

module.exports = votesService;
