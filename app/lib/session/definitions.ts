import {ObjectId} from 'bson';

export interface SessionPayload {
    id: ObjectId;
    expiresAt: Date;
}
