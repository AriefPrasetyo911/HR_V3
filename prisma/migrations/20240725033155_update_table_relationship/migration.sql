-- DropForeignKey
ALTER TABLE `performance_appraisal_examples` DROP FOREIGN KEY `Performance_appraisal_examples_question_category_id_fkey`;

-- AddForeignKey
ALTER TABLE `Performance_appraisal_examples` ADD CONSTRAINT `Performance_appraisal_examples_question_category_id_fkey` FOREIGN KEY (`question_category_id`) REFERENCES `Performance_appraisal_category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
