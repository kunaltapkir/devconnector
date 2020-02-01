const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route POST api/users/test
// @desc Register user
// @access Public
router.post('/', [
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('email', 'Pleases include valid email').isEmail(),
  check('password',
    'Please enter a password with 6 or more characters')
    .isLength({ min: 6 })
],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send({ msg: "Users route" })
  });

module.exports = router;