import TitleCase from './TitleCase'

describe('Comprobacion de datos de JugadorFetch', ()=>{
    describe('Check data', ()=>{
        const result = TitleCase('');
        expect(typeof result).toBe('string')
    })
})