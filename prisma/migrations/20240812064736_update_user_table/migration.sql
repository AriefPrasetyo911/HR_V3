-- AlterTable
ALTER TABLE `employee_data` ADD COLUMN `userRole` ENUM('DEV', 'HR', 'SUPERVISOR', 'EMPLOYEE') NOT NULL DEFAULT 'EMPLOYEE';
