-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 10, 2019 at 10:38 AM
-- Server version: 5.7.25-0ubuntu0.18.04.2
-- PHP Version: 7.2.15-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mmob`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `note_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `note_heading` varchar(255) NOT NULL,
  `note_details` text NOT NULL,
  `date_created` datetime NOT NULL,
  `date_modified` datetime NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`note_id`, `user_id`, `note_heading`, `note_details`, `date_created`, `date_modified`, `status`) VALUES
(1, 1, 'test1', 'test111', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(2, 1, 'test2', 'test222', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(3, 1, 'Test4', 'Test4444', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `password`, `status`, `date_added`, `date_modified`, `role`) VALUES
(1, 'Somnath', 'Ghosh', 'somnath@mail.com', 'test', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`note_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `note_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
