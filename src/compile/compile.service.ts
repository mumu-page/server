import { Injectable } from '@nestjs/common';
import { CreateCompileDto } from './dto/create-compile.dto';
import { UpdateCompileDto } from './dto/update-compile.dto';

@Injectable()
export class CompileService {
  create(createCompileDto: CreateCompileDto) {
    return 'This action adds a new compile';
  }

  findAll() {
    return `This action returns all compile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compile`;
  }

  update(id: number, updateCompileDto: UpdateCompileDto) {
    return `This action updates a #${id} compile`;
  }

  remove(id: number) {
    return `This action removes a #${id} compile`;
  }
}
