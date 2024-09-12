/*
  Warnings:

  - You are about to drop the column `appraisal_status` on the `employee_data` table. All the data in the column will be lost.
  - You are about to drop the column `date_completion` on the `employee_data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `employee_data` DROP COLUMN `appraisal_status`,
    DROP COLUMN `date_completion`;
