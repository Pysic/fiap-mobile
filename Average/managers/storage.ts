import AsyncStorage from '@react-native-async-storage/async-storage'

const key = 'average'

const verify = () => {
    return AsyncStorage.getItem(key)
}

const save = (value: string) => {
    return AsyncStorage.setItem(key, value)
}

const clean = () => {
    return AsyncStorage.clear()
}

export const LocalStorage = {
    verify: verify,
    save: save,
    clean: clean
}