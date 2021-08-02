import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompileService } from './compile.service';
import { CreateCompileDto } from './dto/create-compile.dto';
import { UpdateCompileDto } from './dto/update-compile.dto';

@Controller('compile')
export class CompileController {
  constructor(private readonly compileService: CompileService) {}

  @Post()
  create(@Body() createCompileDto: CreateCompileDto) {
    return this.compileService.create(createCompileDto);
  }

  @Get()
  findAll() {
    return this.compileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompileDto: UpdateCompileDto) {
    return this.compileService.update(+id, updateCompileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compileService.remove(+id);
  }
}
