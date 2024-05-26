const Kanban = require('../models/kanban');

const getProfile = async (req, res) => {
  try {
    let result = await Kanban.find().lean().exec();
    console.log('result', result);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createKanban = async (req, res) => {
  try {
    const { title, name } = req.body;
    const newKanban = new Kanban({ title, name });
    const savedKanban = await newKanban.save();
    console.log('savedKanban', savedKanban); // 저장된 결과를 콘솔에 출력
    res.status(201).json(savedKanban);
  } catch (error) {
    console.error('Error creating kanban:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getProfile,
  createKanban,
};
