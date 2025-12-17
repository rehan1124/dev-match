import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class ProfilesService {
    private profiles = [
        {
            id: randomUUID(),
            name: 'John Doe',
            description: "The river slowly meandered through the open space.\
            It had hidden secrets that it didn't want to reveal.\
            It had a well-planned strategy to appear calm, inviting, and appealing.\
            That's how the river lured her unknowing victims to her water's edge."
        },
        {
            id: randomUUID(),
            name: 'Jane Doe',
            description: "The river slowly meandered through the open space.\
            It had hidden secrets that it didn't want to reveal.\
            It had a well-planned strategy to appear calm, inviting, and appealing."
        },
        {
            id: randomUUID(),
            name: 'Tom Doe',
            description: "The river slowly meandered through the open space.\
            It had hidden secrets that it didn't want to reveal."
        }
    ]

    /**
     * Get all profiles
     * @returns Profiles
     */
    findAll() {
        return this.profiles;
    }

    /**
     * Get a single profile
     * @param id Profile ID
     * @returns Return details of given Profile ID
     */
    findOne(id: string) {
        return this.profiles.find((profile) => profile.id === id);
    }
}
