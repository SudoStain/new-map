import { Router } from 'express'
import { getPoints, addPoint, updatePoint, deletePoint, addFile } from '../controllers/points'
import { getPersons, addPeopleFile, addPeople, peopleCount  } from '../controllers/people'
import { getForm, addForm , addFormTest} from '../controllers/forms'
const router: Router = Router()

router.get("/points", getPoints)
router.post("/add-point", addPoint)
router.put("/edit-point/:id", updatePoint)
router.post("/addFile", addFile)
router.delete("/delete-point/:id", deletePoint)
router.get("/persons", getPersons)
router.post("/add-people-file", addPeopleFile)
router.post("/add-people", addPeople)
router.get("/people-count", peopleCount)

router.post("/post-form", addForm)
router.get("/post-form", getForm)
router.post("/post-form-test", addFormTest)

export default router
