import AsyncStorage from '@react-native-async-storage/async-storage'

const keyName = "name"

const storageGet = async () => AsyncStorage.getItem(keyName)
const storageSave = async (value: string) => AsyncStorage.setItem(keyName, value)
const storageClear = async () => AsyncStorage.clear()

export { storageClear, storageGet, storageSave }

