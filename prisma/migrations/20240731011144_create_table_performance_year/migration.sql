/*
  Warnings:

  - Added the required column `year` to the `Performance_appraisal_result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `performance_appraisal_result` ADD COLUMN `year` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Performance_appraisal_year` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `year` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
