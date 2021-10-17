import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsEmail, Length } from 'class-validator'

export class CreateUserResponseDto {
  @ApiProperty({
    default: 'Nic Green',
    example: 'Nic Green',
    description: 'The name of the User',
  })
  @Length(5, 20)
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    default: 'trinhchin.innos@gmail.com',
    example: 'trinhchin.innos@gmail.com',
    description: 'The email of the User',
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
