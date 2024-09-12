/*
  Warnings:

  - Added the required column `employee_id` to the `performance_appraisal_question_answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `performance_appraisal_question_comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `performance_appraisal_question_answer` ADD COLUMN `employee_id` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `performance_appraisal_question_comment` ADD COLUMN `employee_id` VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `performance_appraisal_result` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` VARCHAR(255) NOT NULL,
    `answer_id` VARCHAR(255) NOT NULL,
    `question_category` TEXT NOT NULL,
    `question_example` TEXT NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
