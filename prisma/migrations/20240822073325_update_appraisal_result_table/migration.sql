/*
  Warnings:

  - You are about to alter the column `average_point` on the `performance_appraisal_result` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- AlterTable
ALTER TABLE `performance_appraisal_result` MODIFY `average_point` FLOAT NULL;
