import { Router } from 'express'

const memberRouter = Router()

memberRouter.post('/')
memberRouter.put('/')
memberRouter.get('/')
memberRouter.get('/:id')

export default memberRouter