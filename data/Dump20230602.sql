-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: diapasong_db
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `units` int DEFAULT NULL,
  `totalPrice` decimal(10,2) DEFAULT NULL,
  `idProduct` int NOT NULL,
  `saleId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `ProductId` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,15,150.00,2,12,'2023-06-01 15:03:47',NULL,NULL,NULL);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(55) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Cuerdas','2023-06-01 15:03:47',NULL,NULL),(2,'Vientos','2023-06-01 15:03:47',NULL,NULL),(3,'Percusión','2023-06-01 15:03:47',NULL,NULL),(4,'Electrónicos','2023-06-01 15:03:47',NULL,NULL),(5,'Accesorios','2023-06-01 15:03:47',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(55) NOT NULL,
  `color` varchar(55) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'No especifica','','2023-06-01 15:03:47',NULL,NULL),(2,'Blanco','#FFFFFF','2023-06-01 15:03:47',NULL,NULL),(3,'Negro','#000000','2023-06-01 15:03:47',NULL,NULL),(4,'Rojo','#FF0000','2023-06-01 15:03:47',NULL,NULL),(5,'Naranja','#FF8000','2023-06-01 15:03:47',NULL,NULL),(6,'Amarillo','#FFFF00','2023-06-01 15:03:47',NULL,NULL),(7,'Verde','#00FF00','2023-06-01 15:03:47',NULL,NULL),(8,'Celeste','#00FFFF','2023-06-01 15:03:47',NULL,NULL),(9,'Azul','#0000FF','2023-06-01 15:03:47',NULL,NULL),(10,'Violeta','#BF00FF','2023-06-01 15:03:47',NULL,NULL),(11,'Rosa','#FE2EF7','2023-06-01 15:03:47',NULL,NULL),(12,'Dorado','#D4AF37','2023-06-01 15:03:47',NULL,NULL),(13,'Plateado','#C0C0C0','2023-06-01 15:03:47',NULL,NULL);
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conditions`
--

DROP TABLE IF EXISTS `conditions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conditions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `condition` varchar(55) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conditions`
--

LOCK TABLES `conditions` WRITE;
/*!40000 ALTER TABLE `conditions` DISABLE KEYS */;
INSERT INTO `conditions` VALUES (1,'Nuevo','2023-06-01 15:03:47',NULL,NULL),(2,'Oferta','2023-06-01 15:03:47',NULL,NULL);
/*!40000 ALTER TABLE `conditions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `genre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Latino','2023-06-01 15:03:47',NULL,NULL),(2,'Punk','2023-06-01 15:03:47',NULL,NULL),(3,'Clásico','2023-06-01 15:03:47',NULL,NULL),(4,'Rock','2023-06-01 15:03:47',NULL,NULL),(5,'Metal','2023-06-01 15:03:47',NULL,NULL),(6,'Folklore','2023-06-01 15:03:47',NULL,NULL),(7,'Jazz','2023-06-01 15:03:47',NULL,NULL),(8,'Pop','2023-06-01 15:03:47',NULL,NULL),(9,'Cumbia','2023-06-01 15:03:47',NULL,NULL),(10,'Alternativo','2023-06-01 15:03:47',NULL,NULL);
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `main` int DEFAULT NULL,
  `idProduct` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idProduct` (`idProduct`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`idProduct`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'guitarra1.png',1,1,'2023-06-01 15:03:47','2023-06-01 15:06:07',NULL),(2,'bateria1.png',1,2,'2023-06-01 15:03:47','2023-06-01 15:11:58',NULL),(3,'piano1.png',1,3,'2023-06-01 15:03:47',NULL,NULL),(4,'saxo1.png',1,4,'2023-06-01 15:03:47','2023-06-01 15:12:37',NULL),(5,'micro1.png',1,5,'2023-06-01 15:03:47','2023-06-02 20:15:04',NULL),(6,'flauta.png',1,6,'2023-06-01 15:03:47',NULL,NULL),(7,'tuba.png',1,7,'2023-06-01 15:03:47','2023-06-02 20:16:17',NULL),(8,'armonica.png',1,8,'2023-06-01 15:03:47',NULL,NULL),(9,'clarinete.png',1,9,'2023-06-01 15:03:47',NULL,NULL),(10,'capotraste.png',1,10,'2023-06-01 15:03:47',NULL,NULL),(11,'soporteGuitarra.png',1,11,'2023-06-01 15:03:47',NULL,NULL),(12,'palillos.png',1,12,'2023-06-01 15:03:47',NULL,NULL),(13,'piemicro.png',1,13,'2023-06-01 15:03:47',NULL,NULL),(14,'contrabajo.png',1,14,'2023-06-01 15:03:47','2023-06-02 20:17:21',NULL),(15,'arpa.png',1,15,'2023-06-01 15:03:47',NULL,NULL),(16,'violin.png',1,16,'2023-06-01 15:03:47',NULL,NULL),(17,'bongo1.png',1,17,'2023-06-01 15:03:47',NULL,NULL),(18,'tambor1.png',1,18,'2023-06-01 15:03:47',NULL,NULL),(19,'plato1.png',1,19,'2023-06-01 15:03:47',NULL,NULL),(20,'guiro1.png',1,20,'2023-06-01 15:03:47',NULL,NULL),(21,'tumbadora1.png',1,21,'2023-06-01 15:03:47',NULL,NULL),(22,'laud1.png',1,22,'2023-06-01 15:03:47',NULL,NULL),(23,'fundabateria1.png',1,23,'2023-06-01 15:03:47',NULL,NULL),(24,'pedalera1.png',1,24,'2023-06-01 15:03:47',NULL,NULL),(25,'pianoelectrico.png',1,25,'2023-06-01 15:03:47',NULL,NULL),(26,'ampli1.png',1,26,'2023-06-01 15:03:47',NULL,NULL),(27,'bateriaElectronica.png',1,27,'2023-06-01 15:03:47',NULL,NULL),(28,'1685633520889_products_.png',1,28,'2023-06-01 15:32:01','2023-06-01 15:32:01',NULL),(29,'1685633521131_products_.webp',0,28,'2023-06-01 15:32:01','2023-06-01 15:32:01',NULL),(30,'1685633521133_products_.webp',0,28,'2023-06-01 15:32:01','2023-06-01 15:32:01',NULL),(31,'1685633521133_products_.webp',0,28,'2023-06-01 15:32:01','2023-06-01 15:32:01',NULL),(32,'1685737510768_products_.png',1,29,'2023-06-02 20:25:11','2023-06-02 20:25:11',NULL),(33,'1685737510956_products_.jpg',0,29,'2023-06-02 20:25:11','2023-06-02 20:25:11',NULL),(34,'1685737878219_products_.png',1,30,'2023-06-02 20:31:18','2023-06-02 20:31:18',NULL),(35,'1685737878239_products_.webp',0,30,'2023-06-02 20:31:18','2023-06-02 20:31:18',NULL),(36,'1685738201407_products_.png',1,31,'2023-06-02 20:36:41','2023-06-02 20:36:41',NULL),(37,'1685738201410_products_.jpg',0,31,'2023-06-02 20:36:41','2023-06-02 20:36:41',NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instruments`
--

DROP TABLE IF EXISTS `instruments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instruments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `instrument` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instruments`
--

LOCK TABLES `instruments` WRITE;
/*!40000 ALTER TABLE `instruments` DISABLE KEYS */;
INSERT INTO `instruments` VALUES (1,'Cuerdas','2023-06-01 15:03:47',NULL,NULL),(2,'Vientos','2023-06-01 15:03:47',NULL,NULL),(3,'Percusión','2023-06-01 15:03:47',NULL,NULL),(4,'Electrónicos','2023-06-01 15:03:47',NULL,NULL);
/*!40000 ALTER TABLE `instruments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentmethods`
--

DROP TABLE IF EXISTS `paymentmethods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentmethods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `method` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentmethods`
--

LOCK TABLES `paymentmethods` WRITE;
/*!40000 ALTER TABLE `paymentmethods` DISABLE KEYS */;
INSERT INTO `paymentmethods` VALUES (1,'Tarjeta de credito','2023-06-01 15:03:47',NULL,NULL),(2,'Tarjeta de debito','2023-06-01 15:03:47',NULL,NULL),(3,'Mercadopago','2023-06-01 15:03:47',NULL,NULL),(4,'Rapipago','2023-06-01 15:03:47',NULL,NULL),(5,'Pagofacil','2023-06-01 15:03:47',NULL,NULL);
/*!40000 ALTER TABLE `paymentmethods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentmethodusers`
--

DROP TABLE IF EXISTS `paymentmethodusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentmethodusers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `unserId` int DEFAULT NULL,
  `paymentMethodId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentmethodusers`
--

LOCK TABLES `paymentmethodusers` WRITE;
/*!40000 ALTER TABLE `paymentmethodusers` DISABLE KEYS */;
/*!40000 ALTER TABLE `paymentmethodusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `subtitle` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `model` varchar(100) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` int NOT NULL,
  `idProductType` int DEFAULT NULL,
  `idCondition` int DEFAULT NULL,
  `idCategory` int DEFAULT NULL,
  `idColor` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idProductType` (`idProductType`),
  KEY `idCondition` (`idCondition`),
  KEY `idCategory` (`idCategory`),
  KEY `idColor` (`idColor`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`idProductType`) REFERENCES `producttypes` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`idCondition`) REFERENCES `conditions` (`id`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_4` FOREIGN KEY (`idColor`) REFERENCES `colors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Guitarra Gibson','Les Paul','Gibson es una de las marcas con mayor tradición en el mercado: más de 100 años en la fabricación de guitarras. Se fundamenta a la calidad, la innovación y la excelencia del sonido para que los amantes de la música disfruten la compañía de una Gibson.','ds12hss',3,33600.00,10,2,2,1,3,'2023-06-01 15:03:47','2023-06-01 15:06:07',NULL),(2,'Bateria','5 cuerpos','The Horizon HX vuelve a escribir el libro sobre lo que cuenta con una batería de nivel de entrada debería tener. La cáscara de todo tilo produce tonos intensos con notable sostener.\r\nEl tono es aún mayor por el nuevo diseño de sistema de soporte aislado Tom Mapex (ITS). Este nuevo sistema compacto y ligero mantiene el hardware de montaje fuera de la cáscara que le permite vibrar más libremente. El titular tom rediseñada incluye ahora un lugar conveniente para una colocación del platillo auxiliar.','gtd543',5,195500.00,0,2,2,3,2,'2023-06-01 15:03:47','2023-06-01 15:11:58',NULL),(3,'Piano 1/4 Cola','Yamaha Gb1k','Todos quieren un gran piano en su hogar, pero el costo puede ser prohibitivo. El Yamaha GB1K Grand Piano es el instrumento más económico en la línea Yamaha. Los Grand piano también ocupan mucho espacio; el GB1K es una opción popular para locaciones con espacio limitado. Este grand piano de 151cm tiene un tono completo, resonante, comparable con el de pianos más grandes. Trae el hall de concierto a tu hogar con el Grand Piano Yamaha GB1K.','hdts345',2,700998.00,0,2,2,1,2,'2023-06-01 15:03:47',NULL,NULL),(4,'Saxo Tenor','Jupiter Jts-1100q','SAXO TENOR JUPITER JTS1100Q. Se convierte en una alternativa de gran calidad. Incorpora detalles como el codo desmontable y zapatillas de alta gama entre otros. La articulación en el paso SI/DO# facilita la ejecución en las notas graves.','cdf53j',9,80000.00,10,2,2,2,12,'2023-06-01 15:03:47','2023-06-01 15:12:37',NULL),(5,'Microfono','Shure Ksm42 Sg','* \'Sweet spot\' amplio y patrón cardioide constante en toda la gama de frecuencias\r\n* Adecuado especialmente para discurso y grabaciones de voces\r\n* Atenuación natural de bajos\r\n* Doble diafragma de oro de 24 quilates\r\n* Incluye suspensión con pantalla antivientos fija, bolsa y estuche de metal\r\n* Pantalla antivientos interna para reducir el ruido del viento y de la respiración','dfe98j',6,75000.00,0,2,2,4,3,'2023-06-01 15:03:47','2023-06-02 20:15:03',NULL),(6,'Flauta Melódica','32 Notas','En este momento estamos entregando las Melódicas de la marca MAGMA de 32 Notas en 6 colores!\r\n\r\nCon funda de alta calidad del mismo color que el instrumento para transportarlo seguro y fácil!\r\n\r\nTeclado suave que te asegura que puedas tocarlo con precisión.\r\n\r\nIncluye boquilla y Manguera flexible de soplado lavables.','M320',50,7150.00,0,2,2,2,1,'2023-06-01 15:03:47',NULL,NULL),(7,'Tuba Bb Stagg','Pistones + Estuche','TUBA Bb, terminación en laca dorada, cuerpo yellow brass, 3 pistones de acero inoxidable. Diámetro de campana 375 mm. Incluye un estuche rígido ABS, boquilla, guantes, paño de limpieza con marca impresa, grasa lubricante y tarjeta de confianza/garantia de 6 meses. El modelo y el numero de seríe estan grabados en el instrumento.','Wsbt235s ',10,725186.00,0,2,2,2,12,'2023-06-01 15:03:47','2023-06-02 20:16:17',NULL),(8,'Armónica Diatónica','Nota C Do Mayo','Armónica diatónica C Do mayor\r\nLa armónica preferida para Blues, Rock, Country y Jazz\r\n- Sistema Richter\r\n- 10 celdas\r\n- Placa de lenguetas de latón atornillada thomann en 5 puntos\r\n- Cubiertas de acero inoxidable\r\n- Incluye estuche de plástico','Mayor Diatonic',25,25000.00,0,2,2,2,1,'2023-06-01 15:03:47',NULL,NULL),(9,'Clarinete De Estudio','Parquer Star','Clarinete de Estudio PARQUER PCLN de 17 llaves Niqueladas\r\nAfinacion SIb (Bb) // INCLUYE Estuche Boquilla y Abrazadera\r\n\r\n- Clarinete de estudio para niveles iniciales o intermedios\r\n- Clarinete modelo star. Cuerpo en ABS. Sistema 17 llaves niqueladas. Tipo Bohem.\r\n- Ofrece gran facilidad de digitacion,por la calidad en el sistema de llaves','PCLN',70,70545.00,0,2,2,2,1,'2023-06-01 15:03:47',NULL,NULL),(10,'Capotraste guitarra','Newport Gold Plate','Capotraste G7th newport 6st gold plate 6 cuerdas dorado\r\n\r\n\r\n/-La cejilla de guitarra G7th Newport está meticulosamente diseñada para su mano, ojos y oídos inquietos.\r\n\r\n/-El diseño de palanca giratoria astutamente oculto es perfecto para cuerdas pesadas y acciones altas.\r\n\r\n/-El impresionante acabado chapado en oro de 18 kt se ve muy bien con herrajes dorados','G7th ',40,20500.00,0,2,2,5,1,'2023-06-01 15:03:47',NULL,NULL),(11,'Soporte guitarra','Regulable Reforzado','Plegable y fácil de transporte.\r\nExcelente relación calidad/precio.\r\nPara cualquier tipo de guitarra o bajo gracias a los dos tipos de bases de goma, garantizando gran estabilidad una vez colocado el instrumento.','a123BC',90,4598.00,0,2,2,5,1,'2023-06-01 15:03:47',NULL,NULL),(12,'Palillos Bateria','Punta Madera','Los palillos NOVA son fabricados en USA por la prestigiosa marca VIC FIRTH . Cuentan con todas las normas de fabricación y controles de calidad a un costo muy bajo . Fueron probados por músicos durante varias décadas por su relación precio y calidad.\r\nSon fabricados con una madera especial Hickory , un árbol americano que entre sus propiedades logra gran estabilidad y excelentes propiedades acústicas , óptimas en cuanto a peso y balance , para la máxima comodidad del baterista , evitando de forma fiable que el palo del tambor se deforme.','n5a',250,3450.00,0,2,2,5,1,'2023-06-01 15:03:47',NULL,NULL),(13,'Soporte Microfono','Mesa Pie + Pipeta','Rotacion: 270 Grados\r\nMATERIAL: METALICO (BASE Y ANDAMIO)\r\nProducto IMPORTADO\r\nLONGITUD BRAZO: 38 CM X 38 CM\r\nSOPORTA HASTA 4 KGS\r\nPESO 1.5 KGs\r\nSOPORTE PARA MICROFONO COMUN\r\nCUENTA CON UN AGARRE A MESA, DE FACIL INSTALACION !','a5Px4',120,2500.00,0,2,2,5,1,'2023-06-01 15:03:47',NULL,NULL),(14,'Contrabajo','Maple Y Pino','-Corrija la altura de las cuerdas, el espaciado de las cuerdas y el alivio del mástil para posiciones y entonación precisas de los dedos.\r\n-Diapasón de madera dura\r\n-Funda de nailon, arco no incluido\r\n-Para obtener más información sobre las fantásticas características de este producto, consulte la descripción del producto a continuación.\r\n-Configuración según los estándares MENC','C12DS',5,256045.00,0,2,2,1,12,'2023-06-01 15:03:47','2023-06-02 20:17:21',NULL),(15,'Arpa Electroacústica','19 Cuerdas','ARPA DE 19 CUERDAS PROFESIONAL. ELECTROACUSTICA CON EQ COLOR MARRON CLARO MADERA DE CAOBA (MAHOGANY) MEDIDAS 745X405X209mm INCLUYE FUNDA','WH19MHEQ',2,161458.00,0,2,2,1,1,'2023-06-01 15:03:47',NULL,NULL),(16,'Violin 4/4','Estuche + Arco','-Tapa de abeto maciza\r\n-Cuerpo de Arce\r\n- Arco incluido\r\n- Estuche incluido\r\n- Ideal para estudio\r\n\r\nMEDIDAS:\r\n- Largo: 47cm\r\n- Ancho: 16cm\r\n- Grosor: 4,5cm\r\n- Largo de Arco: 55,5cm','PV-4/4',23,23458.00,0,2,2,1,1,'2023-06-01 15:03:47',NULL,NULL),(17,'Bongo','Stagg 7 Y 8','Bongo de madera natural\r\nModelo: BW-70\r\nMedida: 7\" y 8\"\r\nMadera: Hardwood\r\nAfinación por tensores\r\nIncluye llave de afinar','BW-70',15,15899.00,0,2,2,3,1,'2023-06-01 15:03:47',NULL,NULL),(18,'Tambor De Marcha','Para Niños','Tambor de marcha 205mm de diámetro.\r\ncon cinturón para colgar\r\nposee dos baquetas.','708301',12,2500.00,0,2,2,3,1,'2023-06-01 15:03:47',NULL,NULL),(19,'Platillo Crash','Paiste 101','Los platillos Paiste 101 están hechos usando herramientas modernas con rigurosos parámetros programados para una forma mecánica precisa. Estos platillos entregan un sonido poderoso a cualquier volumen y sobresalen al tocar en vivo para un gran rango de estilos musicales. El reemplazo para la serie 302, podes esperar que el mismo sonido conocido y performance con un empuje en calidad e ingeniería','BW-70asda',123,25000.00,0,2,2,3,1,'2023-06-01 15:03:47',NULL,NULL),(20,'Guiro','Profecional','- Largo: 33 cm.\r\n- Diámetro: 12,5 cm.\r\n- Incluye: Güiro + peine profesional con mango de madera.\r\n- Material: Acero inoxidable.\r\n- Punto de Güira profesional.\r\n- Instrumento fácil de tocar, de gran calidad y sonoridad.\r\n- Ideal para Cumbia, Reggae, Salsa, percusión.','708301123',16,8000.00,0,2,2,NULL,1,'2023-06-01 15:03:47',NULL,NULL),(21,'Tumbadora','12 1/2','-- Tumbadora 12 1/2\" Marathon Series Classic Meinl --\r\n\r\n-Tamaño: 12 1/2\r\n-Serie Marathon Classic\r\n-Material: roble\r\n-Color: LEOPARDO BURL\r\n-Lacado brillante\r\n-Aro redondeado SSR de 2,6 mm\r\n-Bellotas de afinación de 8 mm\r\n-Soporte de conga Steely II (negro)\r\n-Parche auténtico de piel de búfalo\r\n-Diámetro: 11 3/4\"\r\n-Altura: 30\"\r\n-Hardwrae negro\r\n-Incluye llave de afinación en forma de L y Tune Up Oil','er234sfg',4,150000.00,0,2,2,3,1,'2023-06-01 15:03:47',NULL,NULL),(22,'Laud Oud','11 Cuerdas','Laud Oud turco del luthier Veysel Sala 11 cuerdas – Nuevo. Estambul Turquia. Medidas. Puente al clavijero : 58,5 cm. Cuenco. 48cm. Ancho 37 cm. MaterialesTazon de nogal. Cara de abeto. Clavijas de ebano. Viene con Plectro y funda.','1lLkhf2',1,399000.00,0,2,2,1,1,'2023-06-01 15:03:47',NULL,NULL),(23,'Funda Bateria','Set 5 Cuerpo','SET DE FUNDAS PARA BATERIA ACUSTICA DE 5 CUERPOS\r\nMARCA MAGNIFICOMUSICA MOD. MMB140\r\nIncluye las fundas correspondientes a los cuerpos de 12\", 13\", 14\" (redoblante), 16\" y bombo de 22\"','MMB140',53,34000.00,0,2,2,5,1,'2023-06-01 15:03:47',NULL,NULL),(24,'Pedalera','Boss Ms3','El MS-3 es una maravilla del sonido, capaz de controlar seis efectos de pedal internos a la vez, además de integrar a la perfección tres de tus pedales externos favoritos. Además, ofrece funciones avanzadas de control de equipos, lo que te permite cambiar de canal de amplificador, ajustar efectos en tiempo real, usar equipos MIDI y muchas cosas más. Con el MS-3, puedes montarte fácilmente tu equipo compacto sin las concesiones habituales de los conmutadores de loops tradicionales y las unidades de multiefectos todo en uno.','123dffs',2,260000.00,0,2,2,4,1,'2023-06-01 15:03:47',NULL,NULL),(25,'Piano Electrico','Yamaha P45','Excelente relación precio calidad, el piano digital más vendido del mundo !!!!!\r\nP-45\r\nSize/Weight\r\nDimensions Width 1326mm\r\nHeight 154mm\r\nDepth 295mm\r\nWeight Weight 11.5kg\r\nControl Interface\r\nKeyboard Number of Keys 88\r\nTipo Graded hammer standard (GHS) keyboard\r\nTouch Sensitivity Hard/medium/soft/fixed\r\nPanel Language English\r\nVoices\r\nTone Generation Piano Sound AMW Stereo Sampling\r\nPolyphony Number of Polyphony (Max.) 64\r\nPreset Number of Voices 10',' P45',5,280000.00,0,2,2,4,1,'2023-06-01 15:03:47',NULL,NULL),(26,'Amplificador','Guitarra 100W','Con tu amplificador vas a poder mejorar todos los sonidos y encontrar las melodías que estás buscando.','ValveKing Series 212',1,320000.00,0,2,2,4,1,'2023-06-01 15:03:47',NULL,NULL),(27,'Bateria Electronica','Digital 9','Batería portátil y profesional con sonido de tambor de alta calidad que traerá efecto de sonido natural y de gran alcance. Fácil de transportar, presentando un diseño y sonido de alta calidad. Este es un kit con pedales, par de palillos, selección de estilos musicales y metrónomo. Todo ello con la particularidad de la función GRABACIÓN (REC), que permite registrar su desempeño e inspiración donde y cuando quiera!!!','123PPP',5,25000.00,0,2,2,4,1,'2023-06-01 15:03:47',NULL,NULL),(28,'Guitarra Electroacústica','Epiphone Natural Gloss','La guitarra AJ-100CE es el modelo ideal para principiantes y profesionales. A lo largo de los años una amplia gama de artistas ha elegido guitarras de diseño “dreadnought” como su principal herramienta para componer y tocar. La Epiphone AJ-100CE es una gran guitarra acústica con un hermoso corte para tener acceso hasta el traste superior del diapasón y ejecutar notas más agudas.','EE1CNACH1',20,180000.00,20,1,1,1,12,'2023-06-01 15:32:01','2023-06-01 15:32:01',NULL),(29,'Conga Classic','Percusión LP','Material del cuerpo: Madera\r\nMaterial del parche: Cuero\r\nIncluye llave de ajuste: Sí\r\nIncluye soporte: No','Lp-255',30,88000.00,10,1,2,3,5,'2023-06-02 20:25:11','2023-06-02 20:25:11',NULL),(30,'Guitarra Eléctrica','con diapasón de jatoba','Fabricada en álamo.\r\nCon 6 cuerdas y 22 trastes de tamaño medium jumbo.\r\nEl largo de escala es de 25.5 \".\r\nEl puente es tremolo.\r\nIncluye 3 micrófonos humbucker, simples.\r\nControles de selector de micrófonos, tono y volumen.\r\nPalanca incluida.','FK70EQ-686',25,169000.00,10,1,2,1,4,'2023-06-02 20:31:18','2023-06-02 20:31:18',NULL),(31,'Micrófono','Con Pie Vintage','- Impedancia: 2.2 Ohms\r\n- Frecuencia: 50 Mhz-16Khz\r\n- Longitud del cable: 2,5 metros\r\n- Botón ON/OFF \r\n- Posee pie incorporado y cabezal ajustable.','GTR-9898',57,90000.00,10,1,2,5,12,'2023-06-02 20:36:41','2023-06-02 20:36:41',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producttypes`
--

DROP TABLE IF EXISTS `producttypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producttypes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producttypes`
--

LOCK TABLES `producttypes` WRITE;
/*!40000 ALTER TABLE `producttypes` DISABLE KEYS */;
INSERT INTO `producttypes` VALUES (1,'Product','2023-06-01 15:03:47',NULL,NULL),(2,'Ticket','2023-06-01 15:03:47',NULL,NULL);
/*!40000 ALTER TABLE `producttypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rols` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roles` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'Admin','2023-06-01 15:03:47',NULL,NULL),(2,'User','2023-06-01 15:03:47',NULL,NULL);
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `paymentMethodId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20230409202731-create-category.js'),('20230409205243-create-condition.js'),('20230409210518-create-color.js'),('20230410093520-create-product-type.js'),('20230410131440-create-product.js'),('20230411084329-create-image.js'),('20230411084347-create-genre.js'),('20230411084445-create-instrument.js'),('20230411085108-create-payment-method.js'),('20230411085328-create-status.js'),('20230411085445-create-rol.js'),('20230411115051-create-user.js'),('20230411160010-create-user-genre.js'),('20230411161624-create-user-instrument.js'),('20230411201133-create-payment-method-user.js'),('20230411202221-create-sale.js'),('20230411202751-create-cart.js'),('20230411205007-create-status-cart.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statuscarts`
--

DROP TABLE IF EXISTS `statuscarts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statuscarts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `statusId` int DEFAULT NULL,
  `cartId` int DEFAULT NULL,
  `saleId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuscarts`
--

LOCK TABLES `statuscarts` WRITE;
/*!40000 ALTER TABLE `statuscarts` DISABLE KEYS */;
/*!40000 ALTER TABLE `statuscarts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statuses`
--

DROP TABLE IF EXISTS `statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statuses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usergenres`
--

DROP TABLE IF EXISTS `usergenres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usergenres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `genreId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `genreId` (`genreId`),
  CONSTRAINT `usergenres_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `usergenres_ibfk_2` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usergenres`
--

LOCK TABLES `usergenres` WRITE;
/*!40000 ALTER TABLE `usergenres` DISABLE KEYS */;
/*!40000 ALTER TABLE `usergenres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userinstruments`
--

DROP TABLE IF EXISTS `userinstruments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userinstruments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `instrumentId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `instrumentId` (`instrumentId`),
  CONSTRAINT `userinstruments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `userinstruments_ibfk_2` FOREIGN KEY (`instrumentId`) REFERENCES `instruments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinstruments`
--

LOCK TABLES `userinstruments` WRITE;
/*!40000 ALTER TABLE `userinstruments` DISABLE KEYS */;
/*!40000 ALTER TABLE `userinstruments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `profileImage` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `identifyId` int DEFAULT NULL,
  `birthdate` datetime DEFAULT NULL,
  `phone` bigint DEFAULT NULL,
  `news` int DEFAULT NULL,
  `rolId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rolId` (`rolId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`rolId`) REFERENCES `rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin',NULL,'admin@admin.com','$2a$10$8UJSMobZ.DOv4uz5v4tV8OugzTpv/TJpgM9xLN5UclxvQoM/itDuq',1,NULL,1231231231,NULL,1,'2023-06-01 15:03:47',NULL,NULL),(2,'Usuario Tester',NULL,'testeruser@test.com','$2a$10$XJ5ty6BpPu4904f9afUEtuFQiZCVtQgVKv0mkPYm1H8ONvkgbJv12',30303030,NULL,42190000,NULL,2,'2023-06-01 15:03:47',NULL,NULL),(3,'Lucia Sanchez',NULL,'lucia@admin.com','$2a$10$CqrF5kcB7FzAYsr7Hmdwj.12uXQ/5KPjPKd/pvATUyKcTOodX3v3G',123456789,'1990-08-03 00:00:00',2235577185,NULL,1,'2023-06-01 15:03:47',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-02 18:36:39
