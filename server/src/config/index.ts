const config = {
  port: parseInt(process.env.PORT) || 3000, // port番号
  node_env: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET
}

export default config
