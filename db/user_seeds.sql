CREATE TABLE `user_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `user_password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
SELECT * FROM 21_db.user_data;