export class StoreModel {
    readonly id: string
    readonly name: string
    readonly category: string
    private rating: number 

    constructor(id: string, name: string, category: string, rating: number) {
        this.id = id
        this.name = name
        this.category = category
        this.rating = rating
    }

    get nota(): number { 
        return this.rating 
    }

    avaliar(nota: number): void {
        if (nota < 0 || nota > 5) {
            throw new Error('A nota precisa estar entre 0 e 5.')
        }
        this.rating = nota
    }
    
    resumo(): string {
        return `${this.name} (${this.category}) - nota ${this.rating.toFixed(1)}`
    }
}