const Router = require('express');
const {route} = require('./GetDog');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const RutesDogs = require('./GetDog');
const RuteTemperaments = require('./GetTemperaments');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', RutesDogs);
router.use('/temperaments', RuteTemperaments);

module.exports = router;
