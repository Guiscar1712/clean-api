import { Router } from 'express'

const postsRouter = Router()

postsRouter.post('/')
postsRouter.put('/')
postsRouter.get('/')
postsRouter.get('/:id')

export default postsRouter