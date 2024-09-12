/*
  Warnings:

  - You are about to drop the `_roletousers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_roletousers` DROP FOREIGN KEY `_RoleTousers_A_fkey`;

-- DropForeignKey
ALTER TABLE `_roletousers` DROP FOREIGN KEY `_RoleTousers_B_fkey`;

-- AlterTable
ALTER TABLE `role` ADD COLUMN `user_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_roletousers`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `password` VARCHAR(200) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Role_user_id_key` ON `Role`(`user_id`);

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
