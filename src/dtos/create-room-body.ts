import { IsNotEmpty, Length } from 'class-validator';

export class CreateRoomBody {
  @IsNotEmpty({
    message: 'O nome da sala é obrigatório',
  })
  @Length(3, 50, {
    message:
      'O nome da sala deve ter entre $constraint1 e $constraint2 caracteres',
  })
  name: string;

  @IsNotEmpty({
    message: 'A descrição da sala é obrigatória',
  })
  description: string;
}
