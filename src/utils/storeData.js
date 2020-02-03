export const loadState = (stateName) => {
    try {
        const serializedData = localStorage.getItem(stateName)
        if (serializedData === null) {
            return null
        }
        return JSON.parse(serializedData)
    } catch (error) {
        return null
    }
}

export const saveState = (stateName, state) => {
    try {
        let serializedData = JSON.stringify(state)
        localStorage.setItem(stateName, serializedData)
    } catch (error) {
        // Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.    
    }
}