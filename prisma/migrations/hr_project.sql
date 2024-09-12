-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 22, 2024 at 07:29 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hr_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee_data`
--

CREATE TABLE `employee_data` (
  `id` int NOT NULL,
  `employee_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `employee_full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(155) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `join_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nationality` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `appraisal_status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_completion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `supervisor_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employee_data`
--

INSERT INTO `employee_data` (`id`, `employee_id`, `employee_full_name`, `gender`, `job_title`, `department`, `email`, `phone_number`, `join_date`, `nationality`, `created_at`, `updated_at`, `appraisal_status`, `date_completion`, `supervisor_name`) VALUES
(1, 'KG-06', 'Arief Budi Prasetyo', 'Male', 'Full Stack Developer', 'Programming', 'arief@kaigangames.com', '+6282213247456', '2017-07-02T17:00:00.000Z', 'Indonesia', '2024-07-30 08:38:56.552', '2024-08-07 01:47:32.146', 'N/A', NULL, 'Rex Naythian'),
(2, 'KG-027', 'Rumaisha Zafira Azzahra', 'Female', 'Graphic Designer', 'Designer', 'rumaisha@kaigangames.com', '+621234567890', '2024-07-31T17:00:00.000Z', 'Indonesia', '2024-08-06 03:43:27.572', '2024-08-06 04:18:32.908', NULL, NULL, 'Shah Azmi');

-- --------------------------------------------------------

--
-- Table structure for table `employee_photo`
--

CREATE TABLE `employee_photo` (
  `id` int NOT NULL,
  `employee_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_path` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employee_photo`
--

INSERT INTO `employee_photo` (`id`, `employee_id`, `photo`, `file_path`, `created_at`, `updated_at`) VALUES
(1, 'KG-06', 'WhatsApp Image 2023-01-04 at 14.41.12.jpeg', 'uploads/employee_photo/WhatsApp Image 2023-01-04 at 14.jpeg', '2024-08-22 03:43:19.958', '2024-08-22 03:43:19.958');

-- --------------------------------------------------------

--
-- Table structure for table `performance_appraisal_category`
--

CREATE TABLE `performance_appraisal_category` (
  `id` int NOT NULL,
  `question_category` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `performance_appraisal_category`
--

INSERT INTO `performance_appraisal_category` (`id`, `question_category`, `created_at`, `updated_at`) VALUES
(1, 'Job Knowledge', '2024-07-17 04:02:20.934', '2024-07-17 04:02:20.934'),
(2, 'Communication Skill', '2024-07-17 04:07:15.342', '2024-07-17 04:07:15.342'),
(3, 'Quality and Quantity of Work', '2024-07-17 04:08:30.910', '2024-07-17 04:08:30.910'),
(4, 'Initiative', '2024-07-17 04:09:32.888', '2024-07-17 04:09:32.888'),
(5, 'Judgement', '2024-07-17 04:09:48.978', '2024-07-17 04:09:48.978'),
(6, 'Work Methods', '2024-07-17 04:10:05.941', '2024-07-17 04:10:05.941'),
(7, 'Teamwork and Cooperation', '2024-07-17 04:10:22.197', '2024-07-17 04:10:22.197'),
(8, 'Systems and Procedures', '2024-07-17 04:10:44.870', '2024-07-17 04:10:44.870'),
(9, 'Personal Qualification & Leadership', '2024-07-17 04:11:00.794', '2024-07-17 04:11:00.794');

-- --------------------------------------------------------

--
-- Table structure for table `performance_appraisal_employee_year`
--

CREATE TABLE `performance_appraisal_employee_year` (
  `id` int NOT NULL,
  `employee_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `evaluation_year` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `performance_appraisal_examples`
--

CREATE TABLE `performance_appraisal_examples` (
  `id` int NOT NULL,
  `question_example` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `question_category_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `performance_appraisal_examples`
--

INSERT INTO `performance_appraisal_examples` (`id`, `question_example`, `created_at`, `updated_at`, `question_category_id`) VALUES
(1, 'Employee demonstrate full working knowledge and skill sets.', '2024-07-29 04:08:11.733', '2024-07-29 04:08:11.733', 1),
(2, 'Employee displays problem-solving skills.', '2024-07-29 04:08:25.056', '2024-07-29 04:08:25.056', 1),
(3, 'Possessed solid, oral, and written communication skills', '2024-07-29 04:09:04.473', '2024-07-29 04:09:04.473', 2),
(4, 'Effectively interacts with co-worker and management', '2024-07-29 04:09:18.831', '2024-07-29 04:09:18.831', 2),
(5, 'Employee listens actively and get back to the team if instuction is not clear.', '2024-07-29 04:09:35.771', '2024-07-29 04:09:35.771', 2),
(6, 'Employee completes assignments in a thorough and accurate manner.', '2024-07-29 04:10:42.446', '2024-07-29 04:10:42.446', 3),
(7, 'Employee consistently meet\'s the deadlines.', '2024-07-29 04:11:22.883', '2024-07-29 04:11:22.883', 3),
(8, 'Employee constantly seek ways to streamline and improve process.', '2024-07-29 04:11:36.003', '2024-07-29 04:11:36.003', 3),
(9, 'Anticipates needs and takes on additional tasks', '2024-07-29 04:11:50.300', '2024-07-29 04:11:50.300', 4),
(10, 'Seek out new and bettter ways of doing job.', '2024-07-29 04:12:04.321', '2024-07-29 04:12:04.321', 4),
(11, 'Identifies problems and seeks for solutions.', '2024-07-29 04:12:20.491', '2024-07-29 04:12:20.491', 4),
(12, 'Requires minimal supervision.', '2024-07-29 04:13:01.093', '2024-07-29 04:13:01.093', 4),
(13, 'Makes appropriate decisions when required.', '2024-07-29 04:13:22.981', '2024-07-29 04:13:22.981', 5),
(14, 'Is able to prioritize.', '2024-07-29 04:13:37.093', '2024-07-29 04:13:37.093', 5),
(15, 'Accepts and seeks constructive criticism.', '2024-07-29 04:13:48.452', '2024-07-29 04:13:48.452', 5),
(16, 'Plans and organizes time effectively in accordance with priorities and workloads.', '2024-07-29 04:14:07.362', '2024-07-29 04:14:07.362', 6),
(17, 'Follow through on all details of work assigned.', '2024-07-29 04:14:17.748', '2024-07-29 04:14:17.748', 6),
(18, 'Employee anticipates interruptions and handles schedule changes with composure.', '2024-07-29 04:14:48.758', '2024-07-29 04:14:48.758', 6),
(19, 'Employee readily shares information with', '2024-07-29 04:18:25.006', '2024-07-29 04:18:25.006', 7),
(20, 'Employee works well as a member of a team.', '2024-07-29 04:18:40.968', '2024-07-29 04:18:40.968', 7),
(21, 'Flexible in accepting new or additional tasks.', '2024-07-29 04:19:18.128', '2024-07-29 04:19:18.128', 7),
(22, 'Employee demonstrates a personal sense of', '2024-07-29 04:19:53.600', '2024-07-29 04:19:53.600', 7),
(23, 'Executes professional judgement of attire at', '2024-07-29 04:24:00.463', '2024-07-29 04:24:00.463', 8),
(24, 'Follows company\'s policies and procedures.', '2024-07-29 04:24:14.691', '2024-07-29 04:24:14.691', 8),
(25, 'Employee accepts new challenges and learns.', '2024-07-29 04:24:30.333', '2024-07-29 04:24:30.333', 8),
(26, 'Employee completes professional', '2024-07-29 04:24:48.287', '2024-07-29 04:24:48.287', 9),
(27, 'Employee friendly and easy to work with', '2024-07-29 04:25:05.190', '2024-07-29 04:25:05.190', 9),
(28, 'Employee consistently demonstrate an ability', '2024-07-29 04:25:16.987', '2024-07-29 04:25:16.987', 9),
(29, 'Has the ability to direct the others totoward a', '2024-07-29 04:25:34.508', '2024-07-29 04:25:34.508', 9);

-- --------------------------------------------------------

--
-- Table structure for table `performance_appraisal_question_answer`
--

CREATE TABLE `performance_appraisal_question_answer` (
  `id` int NOT NULL,
  `question_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `employee_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `performance_appraisal_question_comment`
--

CREATE TABLE `performance_appraisal_question_comment` (
  `id` int NOT NULL,
  `question_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `employee_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `performance_appraisal_result`
--

CREATE TABLE `performance_appraisal_result` (
  `id` int NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `answerCategory1Example1` int DEFAULT NULL,
  `answerCategory1Example2` int DEFAULT NULL,
  `answerCategory1Example3` int DEFAULT NULL,
  `answerCategory1Example4` int DEFAULT NULL,
  `answerCategory1Example5` int DEFAULT NULL,
  `answerCategory2Example1` int DEFAULT NULL,
  `answerCategory2Example2` int DEFAULT NULL,
  `answerCategory2Example3` int DEFAULT NULL,
  `answerCategory2Example4` int DEFAULT NULL,
  `answerCategory2Example5` int DEFAULT NULL,
  `answerCategory3Example1` int DEFAULT NULL,
  `answerCategory3Example2` int DEFAULT NULL,
  `answerCategory3Example3` int DEFAULT NULL,
  `answerCategory3Example4` int DEFAULT NULL,
  `answerCategory3Example5` int DEFAULT NULL,
  `answerCategory4Example1` int DEFAULT NULL,
  `answerCategory4Example2` int DEFAULT NULL,
  `answerCategory4Example3` int DEFAULT NULL,
  `answerCategory4Example4` int DEFAULT NULL,
  `answerCategory4Example5` int DEFAULT NULL,
  `answerCategory5Example1` int DEFAULT NULL,
  `answerCategory5Example2` int DEFAULT NULL,
  `answerCategory5Example3` int DEFAULT NULL,
  `answerCategory5Example4` int DEFAULT NULL,
  `answerCategory5Example5` int DEFAULT NULL,
  `answerCategory6Example1` int DEFAULT NULL,
  `answerCategory6Example2` int DEFAULT NULL,
  `answerCategory6Example3` int DEFAULT NULL,
  `answerCategory6Example4` int DEFAULT NULL,
  `answerCategory6Example5` int DEFAULT NULL,
  `answerCategory7Example1` int DEFAULT NULL,
  `answerCategory7Example2` int DEFAULT NULL,
  `answerCategory7Example3` int DEFAULT NULL,
  `answerCategory7Example4` int DEFAULT NULL,
  `answerCategory7Example5` int DEFAULT NULL,
  `answerCategory8Example1` int DEFAULT NULL,
  `answerCategory8Example2` int DEFAULT NULL,
  `answerCategory8Example3` int DEFAULT NULL,
  `answerCategory8Example4` int DEFAULT NULL,
  `answerCategory8Example5` int DEFAULT NULL,
  `answerCategory9Example1` int DEFAULT NULL,
  `answerCategory9Example2` int DEFAULT NULL,
  `answerCategory9Example3` int DEFAULT NULL,
  `answerCategory9Example4` int DEFAULT NULL,
  `answerCategory9Example5` int DEFAULT NULL,
  `appraisal_year` int NOT NULL,
  `average_point` int DEFAULT NULL,
  `employee_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_point` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `performance_appraisal_year`
--

CREATE TABLE `performance_appraisal_year` (
  `id` int NOT NULL,
  `year` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `evaluation_period` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `performance_appraisal_year`
--

INSERT INTO `performance_appraisal_year` (`id`, `year`, `created_at`, `updated_at`, `evaluation_period`) VALUES
(3, 2024, '2024-08-07 03:08:31.613', '2024-08-07 03:08:31.613', 'November 2023 - November 2024'),
(4, 2025, '2024-08-07 03:09:26.376', '2024-08-07 03:09:26.376', 'November 2024 - November 2025');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'HR', '2024-08-22 10:25:30.000', '2024-08-22 10:25:30.000'),
(2, 'SUPERVISOR', '2024-08-22 10:25:30.000', '2024-08-22 10:25:30.000'),
(3, 'EMPLOYEE', '2024-08-22 10:26:32.000', '2024-08-22 10:26:32.000');

-- --------------------------------------------------------

--
-- Table structure for table `supervisor`
--

CREATE TABLE `supervisor` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `supervisor`
--

INSERT INTO `supervisor` (`id`, `name`, `created_at`, `updated_at`, `email`) VALUES
(1, 'Shah Azmi', '2024-08-06 03:44:58.953', '2024-08-06 03:44:58.953', 'azmi@kaigangames.com'),
(2, 'Rex Naythian', '2024-08-06 03:45:03.389', '2024-08-06 03:45:03.389', 'rex@kaigangames.com'),
(3, 'Hong Seng', '2024-08-06 03:45:08.000', '2024-08-06 03:45:08.000', 'hongseng@kaigangames.com'),
(4, 'Innamul Hassan', '2024-08-06 03:45:12.065', '2024-08-06 03:45:12.065', 'arief@kaigangames.com');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `roleId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`, `roleId`) VALUES
(1, 'ARIEF', 'arief@kaigangames.com', '$2b$12$3fG1O84OpLnxEO6xZQhM7uZOZi.oSlO0.tP9lfLjselpuEb6tYnqW', '2024-08-22 10:27:17.000', '2024-08-22 10:27:17.000', 1);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('0668bc57-ec9e-4e3b-b1b8-6ba8cd1d3108', 'dd9027e48e46bc338ebe8cdb8165cd8be4782f7d2f638c8549b6dadcab25d7e1', '2024-08-22 03:21:09.746', '20240725071610_remove_table_relationship', NULL, NULL, '2024-08-22 03:21:09.728', 1),
('0f04375a-27a2-4142-bda8-2fdeea97790b', '7f7bb95ea45883af96e61a8d3544f22f027be6cb5950db7b1981dd35e71fab33', '2024-08-22 03:21:09.504', '20240716042900_create_performance_appraisal_result_table', NULL, NULL, '2024-08-22 03:21:09.457', 1),
('0ff17b7e-1355-419d-9b0f-a6ceaa93dc7e', 'eb4d9432f9b737d2a34dc9e3168427cb048693992f126b33608b53063721b89a', '2024-08-22 03:21:09.370', '20240715064432_update_employee_table', NULL, NULL, '2024-08-22 03:21:09.349', 1),
('10889ad1-7064-4854-b20c-1f13033764dc', '4eafd454e034b5d83261753f12bae538a4471d02a9c374f32bfecf66d6393ca1', '2024-08-22 03:21:09.768', '20240726005518_update_table', NULL, NULL, '2024-08-22 03:21:09.751', 1),
('1477e208-34eb-417a-af86-20db01a00ff3', '96b421e77b26c65d09cd83b204acacef714400de0684d539bcd7116b8ec37c8c', '2024-08-22 03:21:09.659', '20240724072055_update_relational_table', NULL, NULL, '2024-08-22 03:21:09.610', 1),
('1af84029-72a6-48fe-96e9-c630ad0fc6e1', '331ea31e9c53024381077ca8fc0c2a8bcd6ffcc582f5967e80c49a4f00e4ff65', '2024-08-22 03:21:09.814', '20240726014545_update_relational_table', NULL, NULL, '2024-08-22 03:21:09.773', 1),
('1b4a4bae-75e7-4764-bcae-4fab57f0f26c', '93334d61b4eadfb3ac411a12ac56f2d09bfc873904224103a0c90f3785c70478', '2024-08-22 03:21:10.696', '20240814074748_update_database_again', NULL, NULL, '2024-08-22 03:21:10.637', 1),
('1d2a846a-d2bf-4d93-ab8a-7380231b1260', 'c388472ed42ada8826b8d47ad26e25007af264eaf2f1eba42c370f58c58226cb', '2024-08-22 03:21:09.862', '20240726025023_update_database', NULL, NULL, '2024-08-22 03:21:09.845', 1),
('2fef6ec0-7faa-47fa-9e08-60e14660cce3', '8bb5d8d4c75bad5660c3c7eb6e7cf83ae3e8d5b8005607ebe10a8152daf7756e', '2024-08-22 03:21:10.505', '20240813084637_update_user_role', NULL, NULL, '2024-08-22 03:21:10.468', 1),
('32fa102f-cdf6-49a6-a041-0427ace25a8a', 'e935c289166d9682f927aa711ff03f7924591247c8aa70fd4cf8c7b393ad6585', '2024-08-22 03:21:09.840', '20240726020637_update_table_appraisal_examples', NULL, NULL, '2024-08-22 03:21:09.819', 1),
('3bc74beb-fa52-4a29-b563-dc7110af9cde', '7bbc673a9e01a2f044a638156073f6b7b32c968d89c601314356c65802ee8345', '2024-08-22 03:21:09.907', '20240731011144_create_table_performance_year', NULL, NULL, '2024-08-22 03:21:09.868', 1),
('3f5b6ea7-f0d1-4b03-8f18-7785867fb56b', '959401b6e82ca072bcebd05afe9b2abd4b8177d9d2578f4acd8e370f386aec4d', '2024-08-22 03:21:09.722', '20240725033155_update_table_relationship', NULL, NULL, '2024-08-22 03:21:09.665', 1),
('41633c4a-4bba-41ed-8bbc-68731f30fa5f', '1c724edfbc1312df02583193ed3127faf09d98c0b43571f59fa670c227bf8d91', '2024-08-22 03:21:10.145', '20240808022411_create_employee_photo_table', NULL, NULL, '2024-08-22 03:21:10.098', 1),
('5b400ca1-4e88-4ff2-9aa7-493d2ca33997', 'a106e4170df8cfb04036092f9817f072f9133c91935bda652e78629b595095f9', '2024-08-22 03:21:10.023', '20240805065733_update_employee_table', NULL, NULL, '2024-08-22 03:21:10.003', 1),
('69cc37ce-0ed3-4526-a565-1e6a162d1379', '4f7f571f721baa7a665d4f61915d3b8105a3e3efeec9ff121a2897bce04077e0', '2024-08-22 03:21:10.631', '20240814074044_update_database', NULL, NULL, '2024-08-22 03:21:10.511', 1),
('6b9824a8-73a1-4ea2-92c5-81a28e1cb89c', 'bf67c0f50cd83f7a4bc4fce3c006c06cca9c21cb7a28f24d44749aabea7b05f3', '2024-08-22 03:21:09.999', '20240801065837_create_supervisor_table', NULL, NULL, '2024-08-22 03:21:09.958', 1),
('6efa5dd6-6a62-49a4-b1d4-c927f5961657', '9dac57f9f5a04667d9d54422dbf49e417525d648af44ab3a9847a090d721f0d0', '2024-08-22 03:21:10.206', '20240812064931_fix_user_table', NULL, NULL, '2024-08-22 03:21:10.175', 1),
('84b4c5c4-bfb1-4440-87a4-114bdd55d35b', 'bf67e4b80b04acf581c16997d34ded2cfb106287c1907153d7f4f7f9f090173f', '2024-08-22 03:21:09.344', '20240715044752_update_users_employee_data_table', NULL, NULL, '2024-08-22 03:21:09.290', 1),
('8cf3f56d-8921-48e4-b9ab-c6d1b36d99c7', '281dac3dda74fb63db50fd27ad5cad6864fb1e05a8673df7b7bd60080be66569', '2024-08-22 03:21:23.322', '20240822032123_update_performance_appraisal_result_table', NULL, NULL, '2024-08-22 03:21:23.301', 1),
('9bc38860-8300-4a8f-8bc9-9d3a0ea7a88d', 'fb6f3aea237ee2fca49f59c61dff5e858d84618af3116a26087e5a759042221c', '2024-08-22 03:21:09.452', '20240715093609_create_performance_appraisal_related_table', NULL, NULL, '2024-08-22 03:21:09.375', 1),
('a81cd749-02a6-45a0-a444-74772c2dd0b9', 'cce735c0f6254784b93cfb5fc4285936564dabb1d750139b3996c93f0610ba81', '2024-08-22 03:21:09.931', '20240731023624_update_emplyee_data_table', NULL, NULL, '2024-08-22 03:21:09.912', 1),
('aa453987-e081-47a3-a191-25400873bf5d', '18400911b32e5fa885cb29fb046da6d8a528784661eb1d71b35dfcdfb6424dc1', '2024-08-22 03:21:10.071', '20240806033943_update_employee_table', NULL, NULL, '2024-08-22 03:21:10.027', 1),
('afad32e3-a63f-4665-ba27-02f74f98d1d0', '0d61d74065456dc6c6e8f07d4a6cc16a131e9e019dc2bb6cb85213ea01808497', '2024-08-22 03:21:10.170', '20240812064736_update_user_table', NULL, NULL, '2024-08-22 03:21:10.150', 1),
('bbb9c403-e745-4caa-bf92-42ba85b0a20d', '390628fafdb8d9ff71890a20262c0c592dee6d2a2138a87dc8b47514c15f5e00', '2024-08-22 03:21:10.093', '20240806062322_update_performance_appraisal_year_table', NULL, NULL, '2024-08-22 03:21:10.075', 1),
('bf80d820-01ab-4943-8640-33159be88ec2', '07c0166e3c25b383f63799b7f993db7ecc47533c91524341a1bee212e8e915c5', '2024-08-22 03:21:09.953', '20240731074047_update_employee_data_table', NULL, NULL, '2024-08-22 03:21:09.936', 1),
('cdeaa26f-cf39-4bf6-a69e-670361692679', '08316a6ed2555fb4561fd617f6077d25a4e39114692bc8347069a6e5b8a617a2', '2024-08-22 03:21:10.331', '20240813024745_create_role_table', NULL, NULL, '2024-08-22 03:21:10.211', 1),
('e4b868b5-6a47-4e73-a6a3-85c08fdcc8de', '572fa510c98ea71fcce925000a739bbf81835baa014d49b1596597d1cfc56401', '2024-08-22 03:21:09.605', '20240719142824_update_table_relation', NULL, NULL, '2024-08-22 03:21:09.509', 1),
('ec56c5e3-af1e-4d47-83f3-d30025f42bfb', '335e781be79f80d064012444d3c39799203852b566b39b462d9f6e19bd6b105d', '2024-08-22 03:21:10.462', '20240813031839_update_relational_user_role', NULL, NULL, '2024-08-22 03:21:10.336', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee_data`
--
ALTER TABLE `employee_data`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Indexes for table `employee_photo`
--
ALTER TABLE `employee_photo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `performance_appraisal_category`
--
ALTER TABLE `performance_appraisal_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `performance_appraisal_employee_year`
--
ALTER TABLE `performance_appraisal_employee_year`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `performance_appraisal_examples`
--
ALTER TABLE `performance_appraisal_examples`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Performance_appraisal_examples_question_category_id_fkey` (`question_category_id`);

--
-- Indexes for table `performance_appraisal_question_answer`
--
ALTER TABLE `performance_appraisal_question_answer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `performance_appraisal_question_comment`
--
ALTER TABLE `performance_appraisal_question_comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `performance_appraisal_result`
--
ALTER TABLE `performance_appraisal_result`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `performance_appraisal_year`
--
ALTER TABLE `performance_appraisal_year`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Role_name_key` (`name`);

--
-- Indexes for table `supervisor`
--
ALTER TABLE `supervisor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD UNIQUE KEY `User_roleId_key` (`roleId`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee_data`
--
ALTER TABLE `employee_data`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `employee_photo`
--
ALTER TABLE `employee_photo`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `performance_appraisal_category`
--
ALTER TABLE `performance_appraisal_category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `performance_appraisal_employee_year`
--
ALTER TABLE `performance_appraisal_employee_year`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `performance_appraisal_examples`
--
ALTER TABLE `performance_appraisal_examples`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `performance_appraisal_question_answer`
--
ALTER TABLE `performance_appraisal_question_answer`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `performance_appraisal_question_comment`
--
ALTER TABLE `performance_appraisal_question_comment`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `performance_appraisal_result`
--
ALTER TABLE `performance_appraisal_result`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `performance_appraisal_year`
--
ALTER TABLE `performance_appraisal_year`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `supervisor`
--
ALTER TABLE `supervisor`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `performance_appraisal_examples`
--
ALTER TABLE `performance_appraisal_examples`
  ADD CONSTRAINT `Performance_appraisal_examples_question_category_id_fkey` FOREIGN KEY (`question_category_id`) REFERENCES `performance_appraisal_category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
