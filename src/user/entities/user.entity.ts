import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field(() => String, { nullable: true })
  biometricKey: string | null;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
