/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Supervisor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Supervisor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `supervisor` ADD COLUMN `email` VARCHAR(155) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `email_UNIQUE` ON `Supervisor`(`email`);
