import api from '@/service/api'

export default {
    register (credentials) {
        return api().post('/api/users', credentials)
    },
    ticketRegister (credentials) {
        return api().post('/api/supports', credentials)
    },
    login (credentials) {
        return api().post('/api/users/login', credentials)
    },
    list (credentials) {
        return api().get('/api/users/', credentials)
    }

}

// authenticationService.register   ({
//   email: 'tumadrexd@gmail.com',
//   password: 'umu'
// })
