/*
  Warnings:

  - You are about to drop the column `roleId` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_roleId_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `roleId`;
