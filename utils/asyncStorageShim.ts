const asyncStorageShim = {
  async getItem(_key: string): Promise<string | null> {
    return null
  },
  async setItem(_key: string, _value: string): Promise<void> {
    return
  },
  async removeItem(_key: string): Promise<void> {
    return
  },
  async clear(): Promise<void> {
    return
  },
  async getAllKeys(): Promise<string[]> {
    return []
  },
}

export default asyncStorageShim
