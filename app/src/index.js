import '@styles/styles.css'
import Post from '@models/Post'
import WebpackLogo from '@assets/wp5_logo.jpg'
import './babel'

const post = new Post('Webpack post title', WebpackLogo)

console.log('Post as str:', post.toString())