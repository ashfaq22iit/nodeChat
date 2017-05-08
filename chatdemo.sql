-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 08, 2017 at 02:37 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chatdemo`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `toFrom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `name`, `message`, `toFrom`) VALUES
(1, 'fadsf', 'fsa', ''),
(2, 'fadsf', 'fdsa', ''),
(3, 'fadsf', 'fsda', ''),
(4, 'test', 'fds', ''),
(5, 'test', 'fds', ''),
(6, 'undefined', 'hEllo', ''),
(7, 'ashfaq', 'hEllo', ''),
(8, 'undefined', 'tsw', ''),
(9, 'undefined', 'hEllo', ''),
(10, 'join', 'hEllo', '1:3'),
(11, 'join', 'tes', '1:3'),
(12, 'join', 'helo', '1:3'),
(13, 'join', 'ewr', '1:3'),
(14, 'join', 'rew', '1:3'),
(15, 'ada', 'test', '3:1'),
(16, 'ada', 'pakistan', '3:1'),
(17, 'ada', 'here', '3:1');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `socket_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `socket_id`) VALUES
(1, 'ashfaq', '52I-qfVXc1FSeFedAAAC'),
(2, 'ashfaq', 'XyqRLvhAFi2S3HVJAAAC'),
(3, 'ahmasd', 'I-8laTkwwLUWg-rRAAAD'),
(4, 'abidd', '-BOECPl6wR3sk63JAAAD'),
(5, 'resrt', 'xbMUKMgtGxCGn7lYAAAD'),
(6, 'ahmad', 'cnb52w8yWiI6epJGAAAD'),
(7, 'as', 'QRgn7U9yMLiqY5uQAAAC'),
(8, 'resr', '_4Fl10b-8oBg7cFBAAAC'),
(9, 'admin', 'kPACnbQJrzH7KDsVAAAA'),
(10, 'join', 'bonum8m6xsG8Q9uhAAAC'),
(11, 'ada', 'dr1cXvZ9HqYDrMckAAAD');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
