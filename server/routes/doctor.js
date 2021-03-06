import { Router } from 'express'
import doctorController from '@controllers/doctor.controller'

const doctorRouter = new Router()

doctorRouter.post('/login', doctorController.login)

doctorRouter.get('/drugs-list', doctorController.drugList)

doctorRouter.get('/branch-list', doctorController.branchList)

doctorRouter.post('/make-patient', doctorController.makePatient)

doctorRouter.post('/take-patients', doctorController.sendPatients)

doctorRouter.post('/get-information', doctorController.sendInformationPatient)

doctorRouter.delete('/delete-patient', doctorController.deletePatient)

doctorRouter.post('/create-dosage', doctorController.createDosage)

doctorRouter.post('/get-dosages', doctorController.getDosages)

doctorRouter.post('/delete-dosage', doctorController.deleteDosage)


export default doctorRouter
