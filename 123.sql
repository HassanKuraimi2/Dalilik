-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dalilikdb
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `businesses`
--

DROP TABLE IF EXISTS `businesses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `businesses` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `BusinessName` varchar(250) NOT NULL,
  `CompanyId` int(11) NOT NULL,
  `CatigoryId` int(11) NOT NULL,
  `BusinessImage` varchar(500) DEFAULT NULL,
  `Price` decimal(10,0) NOT NULL,
  `Location` varchar(500) DEFAULT NULL,
  `Description` text,
  `DateAdd` datetime NOT NULL,
  `DateUpdate` datetime DEFAULT NULL,
  `UserAdd` int(11) NOT NULL,
  `UserUpdate` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `catigoryId_idx` (`CatigoryId`),
  KEY `companyId_idx` (`CompanyId`),
  CONSTRAINT `catigoryId` FOREIGN KEY (`CatigoryId`) REFERENCES `catigory` (`Id`),
  CONSTRAINT `companyId` FOREIGN KEY (`CompanyId`) REFERENCES `company` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `businesses`
--

LOCK TABLES `businesses` WRITE;
/*!40000 ALTER TABLE `businesses` DISABLE KEYS */;
INSERT INTO `businesses` VALUES (1,'Programming Web Sites',1,1,NULL,1000,'Sana\'a - Khamseen str','We Can Develop your Faivorit Web Site','2020-12-16 00:00:00',NULL,1,NULL),(2,'Development',1,1,NULL,1200,'Taiz','Some Description','2020-12-16 00:00:00',NULL,1,NULL);
/*!40000 ALTER TABLE `businesses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catigory`
--

DROP TABLE IF EXISTS `catigory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catigory` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `CatigoryName` varchar(250) NOT NULL,
  `Description` text,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catigory`
--

LOCK TABLES `catigory` WRITE;
/*!40000 ALTER TABLE `catigory` DISABLE KEYS */;
INSERT INTO `catigory` VALUES (1,'Real Estate',NULL),(2,'Food & Drink',NULL),(3,'Fashion',NULL),(4,'Health & Medicine',NULL),(5,'Electronics',NULL),(6,'Automotive',NULL);
/*!40000 ALTER TABLE `catigory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `chatcontact`
--

DROP TABLE IF EXISTS `chatcontact`;
/*!50001 DROP VIEW IF EXISTS `chatcontact`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `chatcontact` AS SELECT 
 1 AS `UserId`,
 1 AS `UserName`,
 1 AS `UserIdTo`,
 1 AS `ProfileImage`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `CompanyName` varchar(250) NOT NULL,
  `Location` varchar(500) NOT NULL,
  `CompanyImage` varchar(245) DEFAULT NULL,
  `Description` text,
  `DateAdded` date NOT NULL,
  `CompanyEmail` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'CIS Company','Yemen - Sana\'a - Khamseen street','file-1610909694602','Nemo ucxqui officia voluptatem accu santium doloremque laudantium, totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas. Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium dolorem que laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.','2021-01-17','Company@email.com'),(2,'YFC Company','Yemen - Sana\'a - Khamseen street','file-1610909694602','Nemo ucxqui officia voluptatem accu santium doloremque laudantium, totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas. Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium dolorem que laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.','2021-01-17','Company@email.com');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `companylist`
--

DROP TABLE IF EXISTS `companylist`;
/*!50001 DROP VIEW IF EXISTS `companylist`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `companylist` AS SELECT 
 1 AS `Id`,
 1 AS `CompanyId`,
 1 AS `UserId`,
 1 AS `CompanyName`,
 1 AS `Location`,
 1 AS `Listings`,
 1 AS `Events`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `companyprofilepostedlistings`
--

DROP TABLE IF EXISTS `companyprofilepostedlistings`;
/*!50001 DROP VIEW IF EXISTS `companyprofilepostedlistings`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `companyprofilepostedlistings` AS SELECT 
 1 AS `Id`,
 1 AS `CompanyId`,
 1 AS `ListingData`,
 1 AS `ListingImage`,
 1 AS `DateAdded`,
 1 AS `ListingHeader`,
 1 AS `UserId`,
 1 AS `UserName`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `getallbusinesses`
--

DROP TABLE IF EXISTS `getallbusinesses`;
/*!50001 DROP VIEW IF EXISTS `getallbusinesses`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `getallbusinesses` AS SELECT 
 1 AS `Id`,
 1 AS `BusinessName`,
 1 AS `CompanyName`,
 1 AS `CatigoryName`,
 1 AS `CompanyImage`,
 1 AS `BusinessImage`,
 1 AS `Location`,
 1 AS `Description`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `getcompanies`
--

DROP TABLE IF EXISTS `getcompanies`;
/*!50001 DROP VIEW IF EXISTS `getcompanies`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `getcompanies` AS SELECT 
 1 AS `Id`,
 1 AS `CompanyName`,
 1 AS `Location`,
 1 AS `CompanyImage`,
 1 AS `CompanyEmail`,
 1 AS `Description`,
 1 AS `DateAdded`,
 1 AS `ListingCount`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `listingdetails`
--

DROP TABLE IF EXISTS `listingdetails`;
/*!50001 DROP VIEW IF EXISTS `listingdetails`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `listingdetails` AS SELECT 
 1 AS `ListingId`,
 1 AS `ListingHeader`,
 1 AS `ListingData`,
 1 AS `CompanyId`,
 1 AS `CompanyName`,
 1 AS `CompanyImage`,
 1 AS `Location`,
 1 AS `ListingImage`,
 1 AS `DateAdded`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `listings`
--

DROP TABLE IF EXISTS `listings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listings` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `CompanyId` int(11) NOT NULL,
  `ListingData` mediumtext NOT NULL,
  `ListingImage` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `DateAdded` date NOT NULL,
  `ListingHeader` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listings`
--

LOCK TABLES `listings` WRITE;
/*!40000 ALTER TABLE `listings` DISABLE KEYS */;
INSERT INTO `listings` VALUES (1,1,'Some Description Should Goes Over Here ','file-1611151594506','2021-01-20','Listing Title',1),(2,1,'Soem Description','file-1611234932515','2021-01-21','Some Title ',1),(3,1,'Some Description Should Goes Over Here','file-1611151594506','2021-01-20','Listing Title',1),(4,1,'Soem Description','file-1611234932515','2021-01-21','Some Title',1),(5,1,'Some Description Should Goes Over Here','file-1611151594506','2021-01-20','Listing Title',1),(6,1,'Soem Description','file-1611234932515','2021-01-21','Some Title',1),(7,1,'Some Description Should Goes Over Here','file-1611151594506','2021-01-20','Listing Title',1),(8,1,'Soem Description','file-1611234932515','2021-01-21','Some Title',1);
/*!40000 ALTER TABLE `listings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `listofcompanies`
--

DROP TABLE IF EXISTS `listofcompanies`;
/*!50001 DROP VIEW IF EXISTS `listofcompanies`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `listofcompanies` AS SELECT 
 1 AS `CompanyId`,
 1 AS `CompanyName`,
 1 AS `Location`,
 1 AS `CompanyImage`,
 1 AS `Listings`,
 1 AS `Events`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `savedlists`
--

DROP TABLE IF EXISTS `savedlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `savedlists` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `ListingId` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `savedlists`
--

LOCK TABLES `savedlists` WRITE;
/*!40000 ALTER TABLE `savedlists` DISABLE KEYS */;
INSERT INTO `savedlists` VALUES (1,1,2);
/*!40000 ALTER TABLE `savedlists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `searchlistings`
--

DROP TABLE IF EXISTS `searchlistings`;
/*!50001 DROP VIEW IF EXISTS `searchlistings`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `searchlistings` AS SELECT 
 1 AS `ListingId`,
 1 AS `CompanyId`,
 1 AS `ListingHeader`,
 1 AS `CompanyName`,
 1 AS `Location`,
 1 AS `CompanyImage`,
 1 AS `ListingImage`,
 1 AS `DateAdded`,
 1 AS `Listings`,
 1 AS `Events`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `systemuser`
--

DROP TABLE IF EXISTS `systemuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `systemuser` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Password` varchar(1500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Email` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `GroupId` int(11) NOT NULL,
  `ProfileImage` varchar(200) DEFAULT NULL,
  `UserState` tinyint(4) NOT NULL,
  `UserType` int(11) NOT NULL,
  `UserLocation` mediumtext,
  `DateAdded` date DEFAULT NULL,
  `UserAbout` mediumtext,
  `Phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Website` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `CompanyId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `systemuser`
--

LOCK TABLES `systemuser` WRITE;
/*!40000 ALTER TABLE `systemuser` DISABLE KEYS */;
INSERT INTO `systemuser` VALUES (1,'Hassan A.Kuraimi','$2b$08$VvAC0DVESaBQ8VRT1AKcruLUkw5L43qWW4YhT932uYFzCa.61m7.K','hassan@hk.com',1,'file-1611075761189',1,1,'Kuwait - Kuwait City','2020-12-12','Nemo ucxqui officia voluptatem accu santium doloremque laudantium, totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas. Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium dolorem que laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.','774153374','www.cis-sys.com',1),(2,'Mohammed A. Kuraimi','$2b$08$VvAC0DVESaBQ8VRT1AKcruLUkw5L43qWW4YhT932uYFzCa.61m7.K','mohammed@hk.com',1,'file-1610909660423',1,1,'Kuwait - Kuwait City','2020-12-12','Nemo ucxqui officia voluptatem accu santium doloremque laudantium, totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas. Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium dolorem que laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.','774153374','www.cis-sys.com',NULL),(3,'Sammer Mohammed','$2b$08$VvAC0DVESaBQ8VRT1AKcruLUkw5L43qWW4YhT932uYFzCa.61m7.K','sammer@hk.com',1,'file-1610893485977',1,1,'Kuwait - Kuwait City','2020-12-12','Nemo ucxqui officia voluptatem accu santium doloremque laudantium, totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas. Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est ...','774153374','www.cis-sys.com',NULL),(6,'Khadija Mohammed','$2b$08$CPd0i0q/SYB7nCikJXxZ/uH8P/KXQa/Lc7oOOFarKwyCeKOq20IT.','Kadija@Dalilik.com',1,'file-1610893485977',0,1,NULL,'2020-10-10',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `systemuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `userchatmessages`
--

DROP TABLE IF EXISTS `userchatmessages`;
/*!50001 DROP VIEW IF EXISTS `userchatmessages`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `userchatmessages` AS SELECT 
 1 AS `UserIdFrom`,
 1 AS `UserIdTo`,
 1 AS `Message`,
 1 AS `Me`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `userfaivoritfolders`
--

DROP TABLE IF EXISTS `userfaivoritfolders`;
/*!50001 DROP VIEW IF EXISTS `userfaivoritfolders`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `userfaivoritfolders` AS SELECT 
 1 AS `id`,
 1 AS `UserId`,
 1 AS `FloderName`,
 1 AS `FolderContains`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `userfaivoritposts`
--

DROP TABLE IF EXISTS `userfaivoritposts`;
/*!50001 DROP VIEW IF EXISTS `userfaivoritposts`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `userfaivoritposts` AS SELECT 
 1 AS `ListingId`,
 1 AS `UserId`,
 1 AS `CompanyName`,
 1 AS `ListingData`,
 1 AS `ListingImage`,
 1 AS `DateAdded`,
 1 AS `Saved`,
 1 AS `FolderId`,
 1 AS `Faiv`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `userfaivorits`
--

DROP TABLE IF EXISTS `userfaivorits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userfaivorits` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FolderId` int(11) NOT NULL,
  `PostId` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userfaivorits`
--

LOCK TABLES `userfaivorits` WRITE;
/*!40000 ALTER TABLE `userfaivorits` DISABLE KEYS */;
INSERT INTO `userfaivorits` VALUES (3,2,2),(4,1,1);
/*!40000 ALTER TABLE `userfaivorits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userfolders`
--

DROP TABLE IF EXISTS `userfolders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userfolders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `FloderName` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userfolders`
--

LOCK TABLES `userfolders` WRITE;
/*!40000 ALTER TABLE `userfolders` DISABLE KEYS */;
INSERT INTO `userfolders` VALUES (1,1,'Folder 1'),(2,1,'Folder 2');
/*!40000 ALTER TABLE `userfolders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userlikedcompanies`
--

DROP TABLE IF EXISTS `userlikedcompanies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userlikedcompanies` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `CompanyId` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userlikedcompanies`
--

LOCK TABLES `userlikedcompanies` WRITE;
/*!40000 ALTER TABLE `userlikedcompanies` DISABLE KEYS */;
INSERT INTO `userlikedcompanies` VALUES (21,1,1),(22,1,2),(29,6,1),(30,6,2);
/*!40000 ALTER TABLE `userlikedcompanies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usermessages`
--

DROP TABLE IF EXISTS `usermessages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usermessages` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Email` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Message` mediumtext NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usermessages`
--

LOCK TABLES `usermessages` WRITE;
/*!40000 ALTER TABLE `usermessages` DISABLE KEYS */;
/*!40000 ALTER TABLE `usermessages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `userposts`
--

DROP TABLE IF EXISTS `userposts`;
/*!50001 DROP VIEW IF EXISTS `userposts`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `userposts` AS SELECT 
 1 AS `ListingId`,
 1 AS `UserId`,
 1 AS `CompanyName`,
 1 AS `CompanyId`,
 1 AS `ListingHeader`,
 1 AS `ListingData`,
 1 AS `ListingImage`,
 1 AS `DateAdded`,
 1 AS `Saved`,
 1 AS `Faiv`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `userschat`
--

DROP TABLE IF EXISTS `userschat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userschat` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserIdFrom` int(11) NOT NULL,
  `UserIdTo` int(11) NOT NULL,
  `Message` longtext NOT NULL,
  `IsCompany` tinyint(4) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userschat`
--

LOCK TABLES `userschat` WRITE;
/*!40000 ALTER TABLE `userschat` DISABLE KEYS */;
INSERT INTO `userschat` VALUES (1,2,1,'Hello Over There How Are You ?',1),(2,1,2,'Im Fine How About You ?',0),(3,1,2,'skldfjsd;lfkscd',0);
/*!40000 ALTER TABLE `userschat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `usersfoldersbyuserid`
--

DROP TABLE IF EXISTS `usersfoldersbyuserid`;
/*!50001 DROP VIEW IF EXISTS `usersfoldersbyuserid`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `usersfoldersbyuserid` AS SELECT 
 1 AS `FolderId`,
 1 AS `UserId`,
 1 AS `PostId`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'dalilikdb'
--

--
-- Dumping routines for database 'dalilikdb'
--
/*!50003 DROP FUNCTION IF EXISTS `GetUserIdByFolderId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `GetUserIdByFolderId`( FolderId INT ) RETURNS int(11)
BEGIN

   DECLARE income INT;

   SET income = 0;
   
   Select  UserId into income From userfolders Where Id = FolderId limit 1;

   RETURN income;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `chatcontact`
--

/*!50001 DROP VIEW IF EXISTS `chatcontact`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `chatcontact` AS select distinct `su`.`Id` AS `UserId`,`su`.`UserName` AS `UserName`,`uc`.`UserIdTo` AS `UserIdTo`,`su`.`ProfileImage` AS `ProfileImage` from (`systemuser` `su` join `userschat` `uc` on((`su`.`Id` = `uc`.`UserIdFrom`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `companylist`
--

/*!50001 DROP VIEW IF EXISTS `companylist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `companylist` AS select `c`.`Id` AS `Id`,`l`.`CompanyId` AS `CompanyId`,`l`.`UserId` AS `UserId`,`c`.`CompanyName` AS `CompanyName`,`c`.`Location` AS `Location`,count(`s`.`CompanyId`) AS `Listings`,0 AS `Events` from ((`userlikedcompanies` `l` join `company` `c` on((`l`.`CompanyId` = `c`.`Id`))) left join `listings` `s` on((`l`.`CompanyId` = `s`.`CompanyId`))) group by `l`.`CompanyId`,`l`.`UserId` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `companyprofilepostedlistings`
--

/*!50001 DROP VIEW IF EXISTS `companyprofilepostedlistings`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `companyprofilepostedlistings` AS select `l`.`Id` AS `Id`,`l`.`CompanyId` AS `CompanyId`,`l`.`ListingData` AS `ListingData`,`l`.`ListingImage` AS `ListingImage`,`l`.`DateAdded` AS `DateAdded`,`l`.`ListingHeader` AS `ListingHeader`,`l`.`UserId` AS `UserId`,`s`.`UserName` AS `UserName` from (`listings` `l` join `systemuser` `s` on((`l`.`UserId` = `s`.`Id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `getallbusinesses`
--

/*!50001 DROP VIEW IF EXISTS `getallbusinesses`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `getallbusinesses` AS select `b`.`Id` AS `Id`,`b`.`BusinessName` AS `BusinessName`,`c`.`CompanyName` AS `CompanyName`,`cat`.`CatigoryName` AS `CatigoryName`,`c`.`CompanyImage` AS `CompanyImage`,`b`.`BusinessImage` AS `BusinessImage`,`b`.`Location` AS `Location`,`b`.`Description` AS `Description` from ((`businesses` `b` join `company` `c` on((`b`.`CompanyId` = `c`.`Id`))) join `catigory` `cat` on((`b`.`CatigoryId` = `cat`.`Id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `getcompanies`
--

/*!50001 DROP VIEW IF EXISTS `getcompanies`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `getcompanies` AS select `c`.`Id` AS `Id`,`c`.`CompanyName` AS `CompanyName`,`c`.`Location` AS `Location`,`c`.`CompanyImage` AS `CompanyImage`,`c`.`CompanyEmail` AS `CompanyEmail`,`c`.`Description` AS `Description`,`c`.`DateAdded` AS `DateAdded`,count(`l`.`Id`) AS `ListingCount` from (`company` `c` left join `listings` `l` on((`c`.`Id` = `l`.`CompanyId`))) group by `c`.`Id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `listingdetails`
--

/*!50001 DROP VIEW IF EXISTS `listingdetails`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `listingdetails` AS select `l`.`Id` AS `ListingId`,`l`.`ListingHeader` AS `ListingHeader`,`l`.`ListingData` AS `ListingData`,`c`.`Id` AS `CompanyId`,`c`.`CompanyName` AS `CompanyName`,`c`.`CompanyImage` AS `CompanyImage`,`c`.`Location` AS `Location`,`l`.`ListingImage` AS `ListingImage`,`l`.`DateAdded` AS `DateAdded` from (`listings` `l` join `company` `c` on((`c`.`Id` = `l`.`CompanyId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `listofcompanies`
--

/*!50001 DROP VIEW IF EXISTS `listofcompanies`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `listofcompanies` AS select `l`.`CompanyId` AS `CompanyId`,`c`.`CompanyName` AS `CompanyName`,`c`.`Location` AS `Location`,`c`.`CompanyImage` AS `CompanyImage`,count(`l`.`CompanyId`) AS `Listings`,20 AS `Events` from (`listings` `l` join `company` `c` on((`l`.`CompanyId` = `c`.`Id`))) group by `l`.`CompanyId` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `searchlistings`
--

/*!50001 DROP VIEW IF EXISTS `searchlistings`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `searchlistings` AS select `l`.`Id` AS `ListingId`,`l`.`CompanyId` AS `CompanyId`,`l`.`ListingHeader` AS `ListingHeader`,`c`.`CompanyName` AS `CompanyName`,`c`.`Location` AS `Location`,`c`.`CompanyImage` AS `CompanyImage`,`l`.`ListingImage` AS `ListingImage`,`l`.`DateAdded` AS `DateAdded`,`c`.`Listings` AS `Listings`,`c`.`Events` AS `Events` from (`listings` `l` join `listofcompanies` `c` on((`l`.`CompanyId` = `c`.`CompanyId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `userchatmessages`
--

/*!50001 DROP VIEW IF EXISTS `userchatmessages`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `userchatmessages` AS select `userschat`.`UserIdFrom` AS `UserIdFrom`,`userschat`.`UserIdTo` AS `UserIdTo`,`userschat`.`Message` AS `Message`,false AS `Me` from `userschat` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `userfaivoritfolders`
--

/*!50001 DROP VIEW IF EXISTS `userfaivoritfolders`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `userfaivoritfolders` AS select `uf`.`id` AS `id`,`uf`.`UserId` AS `UserId`,`uf`.`FloderName` AS `FloderName`,count(`f`.`PostId`) AS `FolderContains` from (`userfolders` `uf` left join `userfaivorits` `f` on((`uf`.`id` = `f`.`FolderId`))) group by `uf`.`id`,`uf`.`UserId` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `userfaivoritposts`
--

/*!50001 DROP VIEW IF EXISTS `userfaivoritposts`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `userfaivoritposts` AS select `up`.`ListingId` AS `ListingId`,`up`.`UserId` AS `UserId`,`up`.`CompanyName` AS `CompanyName`,`up`.`ListingData` AS `ListingData`,`up`.`ListingImage` AS `ListingImage`,`up`.`DateAdded` AS `DateAdded`,`up`.`Saved` AS `Saved`,`uf`.`FolderId` AS `FolderId`,false AS `Faiv` from (`userposts` `up` join `userfaivorits` `uf` on((`up`.`ListingId` = `uf`.`PostId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `userposts`
--

/*!50001 DROP VIEW IF EXISTS `userposts`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `userposts` AS select `l`.`Id` AS `ListingId`,`u`.`UserId` AS `UserId`,`c`.`CompanyName` AS `CompanyName`,`c`.`Id` AS `CompanyId`,`l`.`ListingHeader` AS `ListingHeader`,`l`.`ListingData` AS `ListingData`,`l`.`ListingImage` AS `ListingImage`,`l`.`DateAdded` AS `DateAdded`,(`sl`.`Id` is null) AS `Saved`,(`uf`.`Id` is null) AS `Faiv` from ((((`listings` `l` left join `company` `c` on((`l`.`CompanyId` = `c`.`Id`))) left join `userlikedcompanies` `u` on((`l`.`CompanyId` = `u`.`CompanyId`))) left join `savedlists` `sl` on(((`sl`.`ListingId` = `l`.`Id`) and (`sl`.`UserId` = `u`.`UserId`)))) left join `userfaivorits` `uf` on(((`uf`.`PostId` = `l`.`Id`) and (`GetUserIdByFolderId`(`uf`.`FolderId`) = `u`.`UserId`)))) order by `l`.`DateAdded` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `usersfoldersbyuserid`
--

/*!50001 DROP VIEW IF EXISTS `usersfoldersbyuserid`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `usersfoldersbyuserid` AS select `uf`.`FolderId` AS `FolderId`,`uuf`.`UserId` AS `UserId`,`uf`.`PostId` AS `PostId` from (`userfaivorits` `uf` join `userfolders` `uuf` on((`uf`.`FolderId` = `uuf`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-23  0:14:23
