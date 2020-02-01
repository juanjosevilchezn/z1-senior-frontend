const ColorService = {
    getColorByStatus(status: string) {
        switch(status) {
            case 'success':
                return '#4BB543'
            case 'error':
                return '#DB0F13'
            default:
                return 'unset'
        }
    }
}

export default ColorService