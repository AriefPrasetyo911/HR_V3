/*
  Warnings:

  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `role` DROP FOREIGN KEY `Role_user_id_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('DEV', 'HR', 'SUPERVISOR', 'EMPLOYEE') NOT NULL DEFAULT 'EMPLOYEE';

-- DropTable
DROP TABLE `role`;
