const axios = {
    get: jest.fn((link) => {
        if (link === 'https://6372d80a348e947299fdd17b.mockapi.io/users') {
            return Promise.resolve({ data: [] })
        }
    }),
}
export default axios
