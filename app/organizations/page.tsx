import { Organization, columns } from "./organization-columns";
import OrganizationTable from "./organization-table";
import {faker} from "@faker-js/faker";


function getData(): Organization[] {
    const organization_count = faker.number.int({min: 20, max: 200});
    const organizations = [];
    for(let i = 0; i < organization_count; i++) {
        organizations.push({
            id: faker.string.uuid(),
            name: faker.company.name(),
            is_subscribed: faker.datatype.boolean(),
            email: faker.internet.email(),
            created_at: faker.date.past({years: 4})
        });
    }

    return organizations;
}

export default function OrganizationPage() {
    const data = getData()

    return (
        <main className="container mx-auto py-10">
            <OrganizationTable columns={columns} data={data} />
        </main>
    )
}