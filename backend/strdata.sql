SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for strdata
-- ----------------------------
DROP TABLE IF EXISTS `strdata`;
CREATE TABLE `strdata` (
  `key` bigint(20) NOT NULL AUTO_INCREMENT,
  `id` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user` varchar(255) DEFAULT NULL,
  `msg` text DEFAULT NULL,
  PRIMARY KEY (`key`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of strdata
-- ----------------------------
BEGIN;
INSERT INTO `strdata` VALUES (1, '2023-08-26 09:29:31', 'Németh-Szabados Abigél', '# Mai kérdés:\n$$x_{1,2}=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$\n```javascript\nvar a = 5\nf = () => {\n	a = 5\n}\n```');
INSERT INTO `strdata` VALUES (2, '2023-08-25 19:13:37', 'Dr. Németh Tamás', 'Math Rulez: $\\sqrt{3x-1}+(1+x)^2$');
INSERT INTO `strdata` VALUES (3, '2023-08-25 20:04:19', 'Németh-Szabados Abigél', '```css\n.menu {\n    text-align: right;\n    background-color: black;\n    a {\n      background-color: rgb(54, 30, 30);\n      display: inline-block;\n      padding: 2px;\n      font-size: 13px;\n      color: white;\n    }\n  }\n```');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
