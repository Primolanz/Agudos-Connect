export class InMyRepository<T extends {id: string}> {
    private items: T[] = []
    
    getAll(): T[] {
        return [...this.items]
    }

    add (item: T): void {this.items.push(item)}

    remove(id: string): void {
        this.items = this.items.filter((item) => item.id !== id)
    }
}