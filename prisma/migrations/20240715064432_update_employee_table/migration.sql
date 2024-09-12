/*
  Warnings:

  - Added the required column `appraisal_status` to the `employee_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employee_data` ADD COLUMN `appraisal_status` VARCHAR(255) NOT NULL;
