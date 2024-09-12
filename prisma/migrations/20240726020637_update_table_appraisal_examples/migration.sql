/*
  Warnings:

  - Added the required column `question_categories` to the `Performance_appraisal_examples` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `performance_appraisal_examples` ADD COLUMN `question_categories` VARCHAR(191) NOT NULL;
