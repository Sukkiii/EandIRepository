const express = require('express');
// const permission = require('../middlewares/permission')
const usersRouter = require('../routes/users');
const productsRouter = require('../routes/products');
const ordersRouter = require('../routes/orders');
const categoriesRouter = require('../routes/categories');
const { getProduct, getProductList } = require('../services/productServices');
const { signup, login, logout } = require('../services/userServices');
const { getProductByCategory } = require('../services/categoryServices');
const router = express.Router();

// 로그인&아웃, 회원 가입
router.post('/signup', signup) // 회원가입
router.post('/login', login) // 로그인
router.delete('/logout', logout) // 로그아웃

//메인 페이지 및 상품 조회
router.get('/categories/:id',getProductByCategory) // 특정 카테고리 상품목록
router.get('/', getProductList) // 상품 목록 조회
router.get('/produts/:id', getProduct) // 상품 조회

// 관리자
router.use('/admin/users', usersRouter)
router.use('/admin/products', productsRouter)
router.use('/admin/orders', ordersRouter)
router.use('/admin/categories', categoriesRouter)
// 판매자
router.use('/seller/users', usersRouter)
router.use('/seller/products', productsRouter)
router.use('/seller/orders', ordersRouter)
// 유저
router.use('/user/users', usersRouter)
router.use('/user/products', productsRouter)
router.use('/user/orders', ordersRouter)

module.exports = router;
