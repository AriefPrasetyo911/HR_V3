-- CreateTable
CREATE TABLE `Notification_reports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` VARCHAR(255) NOT NULL,
    `employee_role_id` INTEGER NOT NULL,
    `appraisal_employee_status` VARCHAR(255) NULL,
    `appraisal_supervisor_status` VARCHAR(255) NULL,
    `appraisal_hr_status` VARCHAR(255) NULL,
    `appraisal_final_status` VARCHAR(255) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
