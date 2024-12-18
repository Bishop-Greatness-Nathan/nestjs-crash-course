import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  NotFoundException,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  // GET /ninjas?type=fast --> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    return this.ninjasService.getNinjas(weapon);
  }

  // GET /ninjas/:id --> {...}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    try {
      return this.ninjasService.getNinja(+id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  // POST /ninjas
  @Post()
  @UseGuards(BeltGuard)
  createNinja(@Body(new ValidationPipe()) data: CreateNinjaDto) {
    return this.ninjasService.createNinja(data);
  }

  // PATCH /ninjas/:id --> {...}
  @Patch(':id')
  updateNinja(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateNinjaDto,
  ) {
    return this.ninjasService.updateNinja(id, data);
  }

  // DELETE /ninjas/:id
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return this.ninjasService.removeNinja(+id);
  }
}
