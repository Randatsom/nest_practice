import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class createReviewDto {
  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @Max(5)
  @Min(1)
  rating: number;

  @IsOptional()
  @IsString()
  productId: string;
}
