import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: '홍길동' })
  name: string;

  @ApiProperty({ example: 'hong@test.com' })
  email: string;
}
