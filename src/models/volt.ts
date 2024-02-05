import {pgTable, pgEnum, varchar, integer} from "drizzle-orm/pg-core";
import { students } from "./students";

export const clubRolesEnum = pgEnum('club_roles', ['president', 'vice_president', 'secretary', 'treasurer', 'member', 'executive']);

export const volt = pgTable('volt', {
    enrollmentNumber: varchar('enrollment_number').primaryKey().references(() => students.enrollmentNumber),
    role: clubRolesEnum('role'),
    clubCredits: integer('club_credits').default(0)
});