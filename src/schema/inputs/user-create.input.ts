import { InputObjectType, Field } from '@jokio/graphql-decorator';


@InputObjectType({ description: 'A input object to create a user.' })
export class UserCreate {
	@Field()
	name: string;

	@Field({ nonNull: true })
	email: string;
}
