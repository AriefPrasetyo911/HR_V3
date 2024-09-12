/*
  Warnings:

  - You are about to drop the column `category_id` on the `performance_appraisal_result_comment` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `performance_appraisal_result_comment` table. All the data in the column will be lost.
  - You are about to drop the column `employee_id` on the `performance_appraisal_result_comment` table. All the data in the column will be lost.
  - You are about to drop the column `example_id` on the `performance_appraisal_result_comment` table. All the data in the column will be lost.
  - Added the required column `employee_email` to the `Performance_appraisal_result_comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `performance_appraisal_result_comment` DROP COLUMN `category_id`,
    DROP COLUMN `comment`,
    DROP COLUMN `employee_id`,
    DROP COLUMN `example_id`,
    ADD COLUMN `employee_email` VARCHAR(255) NOT NULL,
    ADD COLUMN `userCommentCategory1Example1` TEXT NULL,
    ADD COLUMN `userCommentCategory1Example2` TEXT NULL,
    ADD COLUMN `userCommentCategory1Example3` TEXT NULL,
    ADD COLUMN `userCommentCategory1Example4` TEXT NULL,
    ADD COLUMN `userCommentCategory1Example5` TEXT NULL,
    ADD COLUMN `userCommentCategory2Example1` TEXT NULL,
    ADD COLUMN `userCommentCategory2Example2` TEXT NULL,
    ADD COLUMN `userCommentCategory2Example3` TEXT NULL,
    ADD COLUMN `userCommentCategory2Example4` TEXT NULL,
    ADD COLUMN `userCommentCategory2Example5` TEXT NULL,
    ADD COLUMN `userCommentCategory3Example1` TEXT NULL,
    ADD COLUMN `userCommentCategory3Example2` TEXT NULL,
    ADD COLUMN `userCommentCategory3Example3` TEXT NULL,
    ADD COLUMN `userCommentCategory3Example4` TEXT NULL,
    ADD COLUMN `userCommentCategory3Example5` TEXT NULL,
    ADD COLUMN `userCommentCategory4Example1` TEXT NULL,
    ADD COLUMN `userCommentCategory4Example2` TEXT NULL,
    ADD COLUMN `userCommentCategory4Example3` TEXT NULL,
    ADD COLUMN `userCommentCategory4Example4` TEXT NULL,
    ADD COLUMN `userCommentCategory4Example5` TEXT NULL,
    ADD COLUMN `userCommentCategory5Example1` TEXT NULL,
    ADD COLUMN `userCommentCategory5Example2` TEXT NULL,
    ADD COLUMN `userCommentCategory5Example3` TEXT NULL,
    ADD COLUMN `userCommentCategory5Example4` TEXT NULL,
    ADD COLUMN `userCommentCategory5Example5` TEXT NULL,
    ADD COLUMN `userCommentCategory6Example1` TEXT NULL,
    ADD COLUMN `userCommentCategory6Example2` TEXT NULL,
    ADD COLUMN `userCommentCategory6Example3` TEXT NULL,
    ADD COLUMN `userCommentCategory6Example4` TEXT NULL,
    ADD COLUMN `userCommentCategory6Example5` TEXT NULL,
    ADD COLUMN `userCommentCategory7Example1` TEXT NULL,
    ADD COLUMN `userCommentCategory7Example2` TEXT NULL,
    ADD COLUMN `userCommentCategory7Example3` TEXT NULL,
    ADD COLUMN `userCommentCategory7Example4` TEXT NULL,
    ADD COLUMN `userCommentCategory7Example5` TEXT NULL,
    ADD COLUMN `userCommentCategory8Example1` TEXT NULL,
    ADD COLUMN `userCommentCategory8Example2` TEXT NULL,
    ADD COLUMN `userCommentCategory8Example3` TEXT NULL,
    ADD COLUMN `userCommentCategory8Example4` TEXT NULL,
    ADD COLUMN `userCommentCategory8Example5` TEXT NULL,
    ADD COLUMN `userCommentCategory9Example1` TEXT NULL,
    ADD COLUMN `userCommentCategory9Example2` TEXT NULL,
    ADD COLUMN `userCommentCategory9Example3` TEXT NULL,
    ADD COLUMN `userCommentCategory9Example4` TEXT NULL,
    ADD COLUMN `userCommentCategory9Example5` TEXT NULL;
