import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {

    @Get()
    getAllTests(): string {
      return 'Retornando todos os testes';
    }
    
}
