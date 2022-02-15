import { Router } from 'express'
import memberRouter from './member.route'
import postsRouter from './posts.route'
import servicesRouter from './services.route'

const routes = Router()

routes.use('/member', memberRouter)
routes.use('/posts', postsRouter)
routes.use('/services', servicesRouter)

export default routes