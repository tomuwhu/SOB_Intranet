/*
 Navicat MySQL Data Transfer

 Source Server         : local-xampp
 Source Server Type    : MySQL
 Source Server Version : 100428
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 100428
 File Encoding         : 65001

 Date: 26/08/2023 11:52:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sob_users
-- ----------------------------
DROP TABLE IF EXISTS `sob_users`;
CREATE TABLE `sob_users` (
  `un` varchar(255) NOT NULL,
  `pw` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `web` varchar(255) DEFAULT NULL,
  `git` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`un`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- ----------------------------
-- Records of sob_users
-- ----------------------------
BEGIN;
INSERT INTO `sob_users` VALUES ('abi', '202cb962ac59075b964b07152d234b70', 'Németh-Szabados Abigél', 'szkviki@gmail.com', 'abi', 'wolfabi');
INSERT INTO `sob_users` VALUES ('tom', '1f6419b1cbe79c71410cb320fc094775', 'Dr. Németh Tamás', '...', 'sob.es6.eu', 'www.github.com/tomuwhu');
INSERT INTO `sob_users` VALUES ('tomi', '1f6419b1cbe79c71410cb320fc094775', 'Horváth Tamás', '...', 'http://sob.es6.eu/', 'https://github.com/tomuwhu');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
