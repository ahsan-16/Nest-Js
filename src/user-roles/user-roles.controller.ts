import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guards/roles/roles.decorator';
import { Role } from 'src/guards/roles/roles.eums';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('private')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData(){
        return {message: `Only admin can Access`}
    }

    @Get('user-data')
    getUserData(){
        return {message: 'Anyone can Access'}
    }
}
