import './styles/styles.css'
import Post from './Post'
import WebpackLogo from './assets/wp5_logo.jpg'

const post = new Post('Webpack post title', WebpackLogo)

console.log('Post as str:', post.toString())