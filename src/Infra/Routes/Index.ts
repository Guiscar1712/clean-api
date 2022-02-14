import { Router } from 'express'
import memberRouter from './MemberRoute'
import postsRouter from './PostsRoute'
import servicesRouter from './ServicesRoute'

const routes = Router()

routes.use('/member', memberRouter)
routes.use('/posts', postsRouter)
routes.use('/services', servicesRouter)

export default routes