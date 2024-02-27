import {Router} from 'express'
import {createTodo, deleteTodo, listTodos, updateTodo} from '../controllers/todo.controller'

const router = Router()

router.route('/').get(listTodos)
router.route('/').post(createTodo)
router.route('/:id').put(updateTodo)
router.route('/:id').delete(deleteTodo)


export default router