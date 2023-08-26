import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingCartsService } from './shopping_carts.service';
import { CreateShoppingCartDto } from './dto/create-shopping_cart.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Shopping carts')
@Controller('shopping-carts')
export class ShoppingCartsController {
  constructor(private readonly shoppingCartsService: ShoppingCartsService) {}

  @ApiOperation({ summary: 'Create shopping cart'})
  @Post()
  create(@Body() createShoppingCartDto: CreateShoppingCartDto) {
    return this.shoppingCartsService.create(createShoppingCartDto);
  }

  @ApiOperation({ summary: 'Get all shopping carts'})
  @Get()
  findAll() {
    return this.shoppingCartsService.findAll();
  }

  @ApiOperation({ summary: 'Get one shopping cart'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingCartsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Delete shopping cart'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingCartsService.remove(+id);
  }
}
