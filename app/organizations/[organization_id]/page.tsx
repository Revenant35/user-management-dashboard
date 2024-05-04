import UserTable from "@/components/tables/user-table/user-table";
import {Organization, User} from '@/models'
import {columns} from "@/components/tables/user-table/user-columns";
import {faker} from "@faker-js/faker";

interface Props {
    params: {
        organization_id: string;
    };
}

function getOrganization(organization_id: string): Organization {
    return {
        id: faker.string.uuid(),
        name: faker.company.name(),
        is_subscribed: faker.datatype.boolean(),
        email: faker.internet.email(),
        created_at: faker.date.past({years: 4})
    };
}

function getUsers(organization_id: string): User[] {
    const user_count = faker.number.int({min: 20, max: 200});
    const users = [];
    for (let i = 0; i < user_count; i++) {
        users.push({
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            is_subscribed: faker.datatype.boolean(),
            email: faker.internet.email(),
            created_at: faker.date.past({years: 4})
        });
    }

    return users;
}

export default function OrganizationDetails({params}: Props) {
    const organization = getOrganization(params.organization_id)
    const users = getUsers(params.organization_id)

    return (
        <main className="container mx-auto py-10">
            <h1>Organization Details: {params.organization_id}</h1>
            <UserTable columns={columns} data={users}/>
        </main>
    )
}