/*
  Warnings:

  - You are about to drop the column `supervisor_id` on the `employee_data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `employee_data` DROP COLUMN `supervisor_id`,
    ADD COLUMN `supervisor_name` VARCHAR(255) NULL;
