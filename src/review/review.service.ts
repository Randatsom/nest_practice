import { Injectable } from '@nestjs/common';
import { Review } from './review.model';
import { Document, Model } from 'mongoose';
import { createReviewDto } from './dto/create-review.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private readonly reviewModel: Model<Review>,
  ) {}

  async create(dto: createReviewDto): Promise<Document<Review>> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return this.reviewModel.create(dto);
  }

  async delete(id: string): Promise<Document<Review> | null> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByProductId(productId: string): Promise<Document<Review>[]> {
    return this.reviewModel.find({
      productId,
    });
  }

  async deleteByProductId(productId: string) {
    return this.reviewModel.deleteMany({ productId }).exec();
  }

  async getAllReviews() {
    return this.reviewModel.find();
  }
}
