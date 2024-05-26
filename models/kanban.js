const mongoose = require('mongoose');
const { Schema } = mongoose;

const kanbanSchema = new Schema({
  title: String,
  name: String,
});

module.exports = mongoose.model('kanban', kanbanSchema);
