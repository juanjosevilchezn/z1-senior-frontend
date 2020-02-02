import config from '../data/config.json'

const APIService = {
    async sendPhoto() {
        return await fetch(
            config.api.url, 
            { method: 'POST' }
        )
    }
}

export default APIService