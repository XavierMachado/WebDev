CREATE SCHEMA inventory_schema; --Changed name from inventory to inventory_schema to tell whats being called better.
USE inventory_schema;

--CREATE TABLE inventory_table (
  --id INT AUTO_INCREMENT PRIMARY KEY,
  --name VARCHAR(255) NOT NULL,
  --quantity INT NOT NULL,
  --price DECIMAL(10, 2) NOT NULL
--);


-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: inventory_table_schema
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `inventory_table`
--

DROP TABLE IF EXISTS `inventory_table`;           --If this database / table exist, drop it.
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory_table` (
  `product_id` int NOT NULL,
  `product_available` int NOT NULL,
  `product_name` varchar(50) DEFAULT NULL,
  `product_description` mediumtext,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory_table`
--

LOCK TABLES `inventory_table` WRITE;
/*!40000 ALTER TABLE `inventory_table` DISABLE KEYS */;
INSERT INTO `inventory_table` VALUES (1,100,'Laptop','High-performance laptop with SSD storage.'),(2,50,'Smartphone','Latest smartphone with dual-camera setup.'),(3,75,'Tablet','10-inch tablet with long battery life.'),(4,30,'Headphones','Over-ear headphones with noise cancellation.'),(5,20,'Printer','Wireless printer with scanning and copying features.'),(6,50,'Camera','Mirrorless camera with 4K video recording.'),(7,80,'External Hard Drive','2TB external hard drive for data backup.'),(8,10,'Fitness Tracker','Water-resistant fitness tracker with heart rate monitor.'),(9,60,'Coffee Maker','Programmable coffee maker with built-in grinder.'),(10,25,'Backpack','Durable backpack with multiple compartments.'),(11,15,'Bluetooth Speaker','Portable Bluetooth speaker with 10 hours battery life.'),(12,40,'Wireless Mouse','Ergonomic wireless mouse with customizable buttons.'),(13,90,'LED Monitor','27-inch LED monitor with Full HD resolution.'),(14,25,'Graphic Design Software','Professional graphic design software for creatives.'),(15,50,'Smart Watch','Fitness and health tracking smartwatch with touchscreen.'),(16,70,'Desk Chair','Comfortable ergonomic desk chair for long work hours.'),(17,35,'Gaming Console','Latest gaming console with high-definition graphics.'),(18,60,'External SSD','500GB external SSD for fast data transfer.'),(19,18,'Wireless Keyboard','Compact wireless keyboard with backlit keys.'),(20,5,'VR Headset','Virtual reality headset for immersive gaming experiences.');
/*!40000 ALTER TABLE `inventory_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-07 11:52:13

