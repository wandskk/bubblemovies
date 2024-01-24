export const date = {
    getYear: (date: string) => {
        const d = new Date(date);
        return d.getFullYear();
    }
}