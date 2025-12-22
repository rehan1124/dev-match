import {
    Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, HttpException,
    ParseUUIDPipe
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';

@Controller('profiles')
export class ProfilesController {

    constructor(private profilesService: ProfilesService) { }

    /**
     * GET request for all profiles. Ex: /profiles?age=25&location=UK
     * @param age Age
     * @param location Location
     * @returns Response with age and location
     * [{}] if no query param OR [{"age":"25","location":"UK"}]
     */
    @Get()
    findAll(
        @Query('age') age: number,
        @Query('location') location: string
    ) {
        // return [{ age, location }];
        return this.profilesService.findAll();
    }

    /**
     * GET request for profile ID. Ex: /profiles/1234.
     * @param id Profile ID
     * @returns Response with Profile ID
     * {"id":"1234"}
     */
    @Get(':id')
    findOne(
        @Param('id', ParseUUIDPipe) id: UUID
    ) {
        return this.profilesService.findOne(id);
    }

    /**
     * Create new profile
     * @param createProfileDto Payload to pass. Should follow CreateProfileDto class.
     * @returns Response in the form of object, containing details of new profile created.
     * {"name":"John","description":"John Wick's car"}
     */
    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return this.profilesService.create(createProfileDto);
    }

    /**
     * Update profile for given ID with payload passed
     * @param id 
     * @param updateProfileDto 
     * @returns Response with id, name and description
     * {"id":"007","name":"Gunslinger","description":"The Demon Hunter"}
     */
    @Put(':id')
    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
        return this.profilesService.update(id, updateProfileDto);
    }

    /**
     * Delete profile
     * @param id Profile ID. Example: DELETE /profiles/007
     */
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: string) {
        this.profilesService.remove(id);
    }
}
