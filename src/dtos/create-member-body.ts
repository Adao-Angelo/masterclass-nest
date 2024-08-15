import { IsNotEmpty, Length, min } from 'class-validator';

export class CreateMemberBody {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;

  @IsNotEmpty()
  memberFunction: string;
}
