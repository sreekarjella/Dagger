import { Data } from './Data';

export interface Response {
    status: string;
    status_message: string;
    data: Data;
}
