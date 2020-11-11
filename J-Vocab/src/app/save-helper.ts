export class SaveHelper {
    save(key, dataToSave): void {
        localStorage.setItem(key, JSON.stringify(dataToSave));
    }
    load(key): any {
        return JSON.parse(localStorage.getItem(key));
    }
    delete(key): void {
        localStorage.removeItem(key);
    }
}
