-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: diapasong_db
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,1,1,33600.00,1,'2023-04-09 18:52:00',NULL),(2,2,1,195500.00,1,'2023-04-09 18:52:00',NULL),(3,3,1,80000.00,1,'2023-04-09 18:52:00',NULL);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Cuerdas','2023-04-09 15:42:50',NULL),(2,'Vientos','2023-04-09 15:42:50',NULL),(3,'Percusión','2023-04-09 15:42:50',NULL),(4,'Electrónicos','2023-04-09 15:42:50',NULL),(5,'Accesorios','2023-04-09 15:42:50',NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'Blanco','2023-04-09 15:47:19',NULL),(2,'Negro','2023-04-09 15:47:19',NULL),(3,'Rojo','2023-04-09 15:47:19',NULL),(4,'Naranja','2023-04-09 15:47:19',NULL),(5,'Verde','2023-04-09 15:47:19',NULL),(6,'Celeste','2023-04-09 15:47:19',NULL),(7,'Azul','2023-04-09 15:47:19',NULL),(8,'Violeta','2023-04-09 15:47:19',NULL),(9,'Rosa','2023-04-09 15:47:19',NULL),(10,'Dorado','2023-04-09 15:47:19',NULL),(11,'Plateado','2023-04-09 15:47:19',NULL),(12,'Amarillo','2023-04-09 15:47:19',NULL);
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `condition`
--

LOCK TABLES `condition` WRITE;
/*!40000 ALTER TABLE `condition` DISABLE KEYS */;
INSERT INTO `condition` VALUES (1,'New','2023-04-09 15:52:35',NULL),(2,'Sale','2023-04-09 15:52:35',NULL);
/*!40000 ALTER TABLE `condition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Latino','2023-04-09 16:16:57',NULL),(2,'Punk','2023-04-09 16:16:57',NULL),(3,'Clásico','2023-04-09 16:16:57',NULL),(4,'Rock','2023-04-09 16:16:57',NULL),(5,'Metal','2023-04-09 16:16:57',NULL),(6,'Folklore','2023-04-09 16:16:57',NULL),(7,'Jazz','2023-04-09 16:16:57',NULL),(8,'Pop','2023-04-09 16:16:57',NULL),(9,'Cumbia','2023-04-09 16:16:57',NULL),(10,'Alternativo','2023-04-09 16:16:57',NULL);
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `instruments`
--

LOCK TABLES `instruments` WRITE;
/*!40000 ALTER TABLE `instruments` DISABLE KEYS */;
INSERT INTO `instruments` VALUES (1,'Cuerda','2023-04-09 17:55:44',NULL),(2,'Viento','2023-04-09 17:55:44',NULL),(3,'Percusión','2023-04-09 17:55:44',NULL),(4,'Electrónico','2023-04-09 17:55:44',NULL);
/*!40000 ALTER TABLE `instruments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment_method`
--

LOCK TABLES `payment_method` WRITE;
/*!40000 ALTER TABLE `payment_method` DISABLE KEYS */;
INSERT INTO `payment_method` VALUES (1,'Mercado Pago','2023-04-09 16:36:28',NULL),(2,'Modo','2023-04-09 16:36:28',NULL),(3,'Efectivo(en el local)','2023-04-09 16:36:28',NULL),(4,'Transferencia Bancaria','2023-04-09 16:36:28',NULL);
/*!40000 ALTER TABLE `payment_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment_method_user`
--

LOCK TABLES `payment_method_user` WRITE;
/*!40000 ALTER TABLE `payment_method_user` DISABLE KEYS */;
INSERT INTO `payment_method_user` VALUES (1,2,1,'2023-04-09 18:18:56',NULL);
/*!40000 ALTER TABLE `payment_method_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_type`
--

LOCK TABLES `product_type` WRITE;
/*!40000 ALTER TABLE `product_type` DISABLE KEYS */;
INSERT INTO `product_type` VALUES (1,'Instrumento','2023-04-09 17:29:25',NULL),(2,'Entrada','2023-04-09 17:29:25',NULL);
/*!40000 ALTER TABLE `product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,1,'Guitarra Gibson','Les Paul',1,'Gibson es una de las marcas con mayor tradición en el mercado: más de 100 años en\n la fabricación de guitarras. Se fundamenta a la calidad, la innovación y la excelencia \n del sonido para que los amantes de la música disfruten la compañía de una Gibson.',3,'ds12hss',10,33600.00,'2023-04-09 18:28:09',NULL,NULL),(2,1,1,'Bateria','5 cuerpos',3,'The Horizon HX vuelve a escribir el libro sobre lo que cuenta con una batería de nivel de entrada debería tener. La cáscara de todo tilo produce tonos intensos con notable sostener.\r\nEl tono es aún mayor por el nuevo diseño de sistema de soporte aislado Tom Mapex (ITS). Este nuevo sistema compacto y ligero mantiene el hardware de montaje fuera de la cáscara que le permite vibrar más libremente. El titular tom rediseñada incluye ahora un lugar conveniente para una colocación del platillo auxiliar.',2,'gtd543',4,195500.00,'2023-04-09 18:28:09',NULL,NULL),(3,1,1,'Saxo Tenor','Jupiter Jts-1100q',2,'SAXO TENOR JUPITER JTS1100Q. Se convierte en una alternativa de gran calidad. Incorpora detalles como el codo desmontable y zapatillas de alta gama entre otros. La articulación en el paso SI/DO# facilita la ejecución en las notas graves.',12,'cdf53j',6,80000.00,'2023-04-09 18:28:09',NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','2023-04-09 17:30:13',NULL),(2,'User','2023-04-09 17:30:13',NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,'2023-04-09',309100.00,2,1,'2023-04-09 18:51:36',NULL);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'En Progreso'),(2,'Abandonado'),(3,'Finalizado');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `status_cart`
--

LOCK TABLES `status_cart` WRITE;
/*!40000 ALTER TABLE `status_cart` DISABLE KEYS */;
INSERT INTO `status_cart` VALUES (1,1,1,1,'2023-04-09 18:57:01',NULL),(2,1,2,1,'2023-04-09 18:58:09',NULL),(3,1,3,1,'2023-04-09 18:58:09',NULL);
/*!40000 ALTER TABLE `status_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin',NULL,'admin@admin.com','admin',12345678,'2023-04-09',NULL,NULL,1,1,'2023-04-09 17:40:31',NULL,NULL),(2,'usuario de Pruea',NULL,'test@test.com','testing',12345678,'1992-01-01',NULL,NULL,1,2,'2023-04-09 17:44:27',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users_genres`
--

LOCK TABLES `users_genres` WRITE;
/*!40000 ALTER TABLE `users_genres` DISABLE KEYS */;
INSERT INTO `users_genres` VALUES (1,2,2,'2023-04-09 18:15:58',NULL),(2,2,4,'2023-04-09 18:15:58',NULL),(3,2,5,'2023-04-09 18:15:58',NULL),(4,2,10,'2023-04-09 18:15:58',NULL);
/*!40000 ALTER TABLE `users_genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users_instruments`
--

LOCK TABLES `users_instruments` WRITE;
/*!40000 ALTER TABLE `users_instruments` DISABLE KEYS */;
INSERT INTO `users_instruments` VALUES (1,2,1,'2023-04-09 18:14:04',NULL),(2,2,2,'2023-04-09 18:14:04',NULL),(3,2,4,'2023-04-09 18:14:04',NULL);
/*!40000 ALTER TABLE `users_instruments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-09 15:59:58
