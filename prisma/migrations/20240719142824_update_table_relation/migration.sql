/*
  Warnings:

  - You are about to drop the column `question_id` on the `performance_appraisal_examples` table. All the data in the column will be lost.
  - You are about to drop the `performance_appraisal_questions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `question_category_id` to the `performance_appraisal_examples` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `performance_appraisal_examples` DROP COLUMN `question_id`,
    ADD COLUMN `question_category_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `performance_appraisal_questions`;

-- CreateTable
CREATE TABLE `performance_appraisal_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question_category` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `performance_appraisal_examples` ADD CONSTRAINT `performance_appraisal_examples_question_category_id_fkey` FOREIGN KEY (`question_category_id`) REFERENCES `performance_appraisal_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
