const API_AVISOS = 'http://localhost:3000/avisos';

export class AvisoRepository {

    insert ( aviso: any): Promise<Response>{
        return fetch ( '',{
            method: 'INSERT',
        });
    }
    update ( aviso: any): Promise<Response>{
        return fetch ('',{
            method: 'UPDATE'
        })
    }
    findById( id: number ): Promise<Response> {
        return fetch( `${API_AVISOS}/${id}`, {
            method: 'GET',
        } );
    }

}
