-- CreateTable
CREATE TABLE `performance_appraisal_questions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question_id` VARCHAR(255) NOT NULL,
    `question_category` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `performance_appraisal_examples` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question_id` VARCHAR(255) NOT NULL,
    `question_example` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `performance_appraisal_question_answer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question_id` VARCHAR(255) NOT NULL,
    `answer` VARCHAR(150) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `performance_appraisal_question_comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question_id` VARCHAR(255) NOT NULL,
    `comment` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
