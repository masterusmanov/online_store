import { Controller, Get, Post, Body, UseGuards, Param, Res, HttpCode, HttpStatus, Delete } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { Users } from './models/user.model';
import { JwtAuthGuard } from '../guards/jwt.auth.guard';
import { UserSelfGuard } from '../guards/user-self.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Register user'})
  @ApiResponse({ status: 201, type: Users})
  @Post('signup')
  registration(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response
  ){
    return this.usersService.registration(createUserDto, res);
  };

  @ApiOperation({ summary: 'Login user'})
  @ApiResponse({ status: 200, type: Users})
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response
  ){
    return this.usersService.login(loginUserDto, res);
  };
  
  @ApiOperation({summary: 'Logout user'})
  @UseGuards(JwtAuthGuard)
  @ApiResponse({status: 200, type: Users})
  @HttpCode(HttpStatus.OK)
  @Post("signout")
  logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({passthrough:true}) res:Response
  ){
    console.log(refreshToken);
    
    return this.usersService.logout(refreshToken, res)
  };

  
  @ApiOperation({summary: 'Activate user'})
  @ApiResponse({status: 200, type: [Users]})
  @Get('activate/:link')
  activate(@Param('link') link: string){
    return this.usersService.activate(link);
  };

  @ApiOperation({summary: 'For ID refresh token'})
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtAuthGuard)
  @ApiResponse({status: 200, type: [Users]})
  @Post(':id/refresh')
  refresh(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({passthrough: true}) res: Response
  ){
    return this.usersService.refreshToken(+id, refreshToken, res);
  };

  @ApiOperation({summary: "Get all customers"})
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(UserSelfGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({summary: "Get one customer"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtAuthGuard) 
  @ApiOperation({summary: "Delete customer"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
