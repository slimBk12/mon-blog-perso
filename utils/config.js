var domain;

if (process.env.NODE_ENV === 'production') {
    domain = process.env.API_DOMAIN
    
} else {
    domain= 'http://localhost:3000/api'
}

export default domain