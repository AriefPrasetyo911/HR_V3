/*
  Warnings:

  - Added the required column `evaluation_period` to the `Performance_appraisal_year` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `performance_appraisal_year` ADD COLUMN `evaluation_period` VARCHAR(255) NOT NULL;
