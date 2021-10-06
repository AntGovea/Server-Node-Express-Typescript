import { Router } from "express";
import {getUsuarios,postUsuarios,putUsuarios,deleteUsuarios,patchUsuarios} from "../controllers/usuario.controller";

 const router = Router();


router.get('/',getUsuarios);
router.post('/',postUsuarios);
router.put('/',putUsuarios);
router.delete('/',deleteUsuarios);
router.patch('/',patchUsuarios);

export default router;