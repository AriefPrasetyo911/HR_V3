/*
  Warnings:

  - You are about to drop the column `userRole` on the `employee_data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `employee_data` DROP COLUMN `userRole`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `userRole` ENUM('DEV', 'HR', 'SUPERVISOR', 'EMPLOYEE') NOT NULL DEFAULT 'EMPLOYEE';
