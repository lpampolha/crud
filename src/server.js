const dotenv = require('dotenv')
const app = require('./app')
const PORT = process.env.PORT || 3001

dotenv.config()

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})