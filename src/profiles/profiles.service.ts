import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';

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

    /**
     * Create a new profile
     * @param createProfileDto CreateProfileDto
     * @returns New profile created
     */
    create(createProfileDto: CreateProfileDto) {
        const newProfile = {
            id: randomUUID(),
            ...createProfileDto
        };

        this.profiles.push(newProfile);
        return newProfile;
    }

    /**
     * Update existing profile
     * @param id Profile ID
     * @param createProfileDto CreateProfileDto
     * @returns Updated profile
     */
    update(id: string, updateProfileDto: UpdateProfileDto) {
        const updateProfile = this.profiles.find((profile) => profile.id === id);

        if (!updateProfile) return {};

        updateProfile!.name = updateProfileDto.name;
        updateProfile!.description = updateProfileDto.description;

        return updateProfile;
    }

    /**
     * Delete profile with given ID
     * @param id Profile ID
     */
    remove(id: string) {
        const deleteProfileIndex = this.profiles.findIndex((profile) => profile.id === id);

        if (deleteProfileIndex > -1) this.profiles.splice(deleteProfileIndex, 1);
    }
}
