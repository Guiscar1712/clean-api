import { Router } from 'express'

const servicesRouter = Router()

servicesRouter.post('/')
servicesRouter.put('/')
servicesRouter.get('/')
servicesRouter.get('/:id')

export default servicesRouter