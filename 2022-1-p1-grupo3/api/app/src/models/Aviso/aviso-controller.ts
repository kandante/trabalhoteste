import { Aviso } from './aviso';
import { AvisoRepository } from './aviso-repository';
import { AvisoService } from './aviso-service';

export class AvisoController {
    avisoService: AvisoService;
    avisoRepository: AvisoRepository;
    constructor() {
        this.avisoRepository = new AvisoRepository();
        this.avisoService = new AvisoService( this.avisoRepository );
    }

    async cadastrarAviso(aviso): Promise<any>{
        return this.avisoRepository.insert(aviso);
    }
    async atualizarAviso(aviso, id: number){
        return this.avisoService.atualizarAviso(id, aviso);
    }

}
