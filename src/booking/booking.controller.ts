import { Controller, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
@Controller('booking')
export class BookingController {

    constructor(private readonly booking_service: BookingService){}

    @Post('/reserve')
    reserve(){
        return 'reserve';
    }
}
