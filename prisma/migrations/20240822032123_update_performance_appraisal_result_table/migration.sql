/*
  Warnings:

  - You are about to drop the column `answer_id` on the `performance_appraisal_result` table. All the data in the column will be lost.
  - You are about to drop the column `employee_id` on the `performance_appraisal_result` table. All the data in the column will be lost.
  - You are about to drop the column `question_category` on the `performance_appraisal_result` table. All the data in the column will be lost.
  - You are about to drop the column `question_example` on the `performance_appraisal_result` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `performance_appraisal_result` table. All the data in the column will be lost.
  - Added the required column `appraisal_year` to the `Performance_appraisal_result` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_email` to the `Performance_appraisal_result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `performance_appraisal_result` DROP COLUMN `answer_id`,
    DROP COLUMN `employee_id`,
    DROP COLUMN `question_category`,
    DROP COLUMN `question_example`,
    DROP COLUMN `year`,
    ADD COLUMN `answerCategory1Example1` INTEGER NULL,
    ADD COLUMN `answerCategory1Example2` INTEGER NULL,
    ADD COLUMN `answerCategory1Example3` INTEGER NULL,
    ADD COLUMN `answerCategory1Example4` INTEGER NULL,
    ADD COLUMN `answerCategory1Example5` INTEGER NULL,
    ADD COLUMN `answerCategory2Example1` INTEGER NULL,
    ADD COLUMN `answerCategory2Example2` INTEGER NULL,
    ADD COLUMN `answerCategory2Example3` INTEGER NULL,
    ADD COLUMN `answerCategory2Example4` INTEGER NULL,
    ADD COLUMN `answerCategory2Example5` INTEGER NULL,
    ADD COLUMN `answerCategory3Example1` INTEGER NULL,
    ADD COLUMN `answerCategory3Example2` INTEGER NULL,
    ADD COLUMN `answerCategory3Example3` INTEGER NULL,
    ADD COLUMN `answerCategory3Example4` INTEGER NULL,
    ADD COLUMN `answerCategory3Example5` INTEGER NULL,
    ADD COLUMN `answerCategory4Example1` INTEGER NULL,
    ADD COLUMN `answerCategory4Example2` INTEGER NULL,
    ADD COLUMN `answerCategory4Example3` INTEGER NULL,
    ADD COLUMN `answerCategory4Example4` INTEGER NULL,
    ADD COLUMN `answerCategory4Example5` INTEGER NULL,
    ADD COLUMN `answerCategory5Example1` INTEGER NULL,
    ADD COLUMN `answerCategory5Example2` INTEGER NULL,
    ADD COLUMN `answerCategory5Example3` INTEGER NULL,
    ADD COLUMN `answerCategory5Example4` INTEGER NULL,
    ADD COLUMN `answerCategory5Example5` INTEGER NULL,
    ADD COLUMN `answerCategory6Example1` INTEGER NULL,
    ADD COLUMN `answerCategory6Example2` INTEGER NULL,
    ADD COLUMN `answerCategory6Example3` INTEGER NULL,
    ADD COLUMN `answerCategory6Example4` INTEGER NULL,
    ADD COLUMN `answerCategory6Example5` INTEGER NULL,
    ADD COLUMN `answerCategory7Example1` INTEGER NULL,
    ADD COLUMN `answerCategory7Example2` INTEGER NULL,
    ADD COLUMN `answerCategory7Example3` INTEGER NULL,
    ADD COLUMN `answerCategory7Example4` INTEGER NULL,
    ADD COLUMN `answerCategory7Example5` INTEGER NULL,
    ADD COLUMN `answerCategory8Example1` INTEGER NULL,
    ADD COLUMN `answerCategory8Example2` INTEGER NULL,
    ADD COLUMN `answerCategory8Example3` INTEGER NULL,
    ADD COLUMN `answerCategory8Example4` INTEGER NULL,
    ADD COLUMN `answerCategory8Example5` INTEGER NULL,
    ADD COLUMN `answerCategory9Example1` INTEGER NULL,
    ADD COLUMN `answerCategory9Example2` INTEGER NULL,
    ADD COLUMN `answerCategory9Example3` INTEGER NULL,
    ADD COLUMN `answerCategory9Example4` INTEGER NULL,
    ADD COLUMN `answerCategory9Example5` INTEGER NULL,
    ADD COLUMN `appraisal_year` INTEGER NOT NULL,
    ADD COLUMN `average_point` INTEGER NULL,
    ADD COLUMN `employee_email` VARCHAR(255) NOT NULL,
    ADD COLUMN `total_point` INTEGER NULL;
