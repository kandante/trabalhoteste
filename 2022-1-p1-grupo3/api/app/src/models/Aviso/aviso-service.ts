import { Aviso } from './aviso';
import { AvisoError } from './aviso-error';
import { AvisoRepository } from './aviso-repository';

export class AvisoService {
    private readonly avisoRepository: AvisoRepository;
    constructor( avisoRepository: AvisoRepository ) {
        this.avisoRepository = avisoRepository;
    }

    async cadastrarAviso( aviso : Aviso): Promise<any>{
        const response = await this.avisoRepository.insert(aviso);
    }
    async atualizarAviso(id: number, aviso: Aviso): Promise<any>{
        const response = await this.avisoRepository.update(aviso);
    }

}
