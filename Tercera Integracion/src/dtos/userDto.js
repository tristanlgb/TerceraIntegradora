const { IsString, IsEmail, Length, IsOptional } = require('class-validator');

class CreateUserDto {
  @IsString()
  @Length(1, 50)
  firstname;

  @IsString()
  @Length(1, 50)
  lastname;

  @IsEmail()
  email;

  @IsString()
  @Length(6, 100)
  password;

  @IsOptional()
  @IsString()
  @Length(0, 255)
  fullname;
}

class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  firstname;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  lastname;

  @IsOptional()
  @IsEmail()
  email;

  @IsOptional()
  @IsString()
  @Length(6, 100)
  password;

  @IsOptional()
  @IsString()
  @Length(0, 255)
  fullname;
}

module.exports = {
  CreateUserDto,
  UpdateUserDto
};
