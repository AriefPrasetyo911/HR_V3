/*
  Warnings:

  - You are about to alter the column `appraisal_status` on the `employee_data` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `date_completion` on the `employee_data` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `supervisor_name` on the `employee_data` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `employee_data` MODIFY `appraisal_status` VARCHAR(191) NULL,
    MODIFY `date_completion` VARCHAR(191) NULL,
    MODIFY `supervisor_name` VARCHAR(191) NULL;
