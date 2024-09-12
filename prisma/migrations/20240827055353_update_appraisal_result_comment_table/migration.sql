/*
  Warnings:

  - Added the required column `appraisal_year` to the `Performance_appraisal_result_comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `performance_appraisal_result_comment` ADD COLUMN `appraisal_year` INTEGER NOT NULL;
