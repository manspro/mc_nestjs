import { ProfileService } from './profile.service';
import { ProfileResponseInterface } from './../user/types/profileResponse.Interface';
import { User } from '@app/user/decorators/user.decorators';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Get(':username')
  async getProfile(
    @User('id') currentUserId: number,
    @Param('username') profileUsername: string,
  ): Promise<ProfileResponseInterface> {
    const profile = await this.profileService.getProfile(
      currentUserId,
      profileUsername,
    );
    return this.profileService.buildProfileResponse(profile);
  }
}
