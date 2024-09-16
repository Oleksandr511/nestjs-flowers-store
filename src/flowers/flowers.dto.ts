import { IsNumber, IsString } from 'class-validator';

export class CreateFlowersDto {
  @IsString({
    message: 'Name should be string type',
  })
  name: string;
  @IsString()
  color: string;
  @IsNumber()
  price: number;
}

export type TUpdateFlowersDTO = Partial<CreateFlowersDto>;
