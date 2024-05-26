const express = require('express');
const kanbanController = require('../controllers/kanban');
const router = express.Router();

// 프로필 조회
router.get('/', kanbanController.getProfile);

// 프로필 생성
router.post('/', kanbanController.createKanban);

module.exports = router;
