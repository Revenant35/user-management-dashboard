import {User} from '@/models'
import {columns} from "@/components/tables/user-table/user-columns";
import UserTable from "@/components/tables/user-table/user-table";
import {faker} from "@faker-js/faker";

interface Props {
    params: {
        organization_id: string;
    };
}

function getOrganization(organization_id: string) {
    return {
        id: organization_id,
        name: faker.company.name(),
        is_subscribed: faker.datatype.boolean(),
        email: faker.internet.email(),
        created_at: faker.date.past({years: 4})
    }
}

function getUserData(_organization_id: string): User[] {
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

export default function OrganizationUserPage({params}: Props) {
    const organization_id = params.organization_id;
    const organization = getOrganization(organization_id);
    const users = getUserData(organization_id);
    console.log(organization);

    return (
        <main className="container mx-auto py-10">
            <h1 className={"text-4xl text-center"}>Organization Users</h1>
            <p className={"text-xl text-center"}>{faker.company.name()}</p>
            <UserTable columns={columns} data={users}/>
        </main>
    )
}