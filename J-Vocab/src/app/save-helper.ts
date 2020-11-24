export class SaveHelper {
    save(key, dataToSave): void {
        localStorage.setItem(key, JSON.stringify(dataToSave));
    }
    load(key): any {
        let result = JSON.parse(localStorage.getItem(key));
        if (!result) {
            result = [];
        }
        return result;
    }
    delete(key): void {
        localStorage.removeItem(key);
    }

    remove(key, dataToRemove) {
        const currentSave = this.load(key) || [];
        let newListToSave = [];
        for (let i = 0; i < currentSave.length; i++) {
            if (JSON.stringify(currentSave[i]) != JSON.stringify(dataToRemove)) {
                newListToSave.push(currentSave[i]);
                console.log(currentSave[i], dataToRemove, JSON.stringify(currentSave[i]) != JSON.stringify(dataToRemove));
            } else {
                console.log(currentSave[i], dataToRemove, JSON.stringify(currentSave[i]) != JSON.stringify(dataToRemove));
            }
        }
        this.delete(key);
        this.save(key, newListToSave);
    }

    add(key, dataToSave) {
        const currentSave = this.load(key) || [];
        currentSave.push(dataToSave);
        this.save(key, currentSave);
    }
}
