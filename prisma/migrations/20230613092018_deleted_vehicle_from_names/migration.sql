/*
  Warnings:

  - You are about to drop the `VehicleBody` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VehicleDrive` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VehicleManufacturer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VehicleModel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VehicleModelBody` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VehicleModelDrive` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VehicleModelTransmission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VehicleModification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VehicleTransmission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `VehicleModel` DROP FOREIGN KEY `VehicleModel_vehicleManufacturerId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModelBody` DROP FOREIGN KEY `VehicleModelBody_vehicleBodyId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModelBody` DROP FOREIGN KEY `VehicleModelBody_vehicleModelId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModelDrive` DROP FOREIGN KEY `VehicleModelDrive_vehicleDriveId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModelDrive` DROP FOREIGN KEY `VehicleModelDrive_vehicleModelId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModelTransmission` DROP FOREIGN KEY `VehicleModelTransmission_vehicleModelId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModelTransmission` DROP FOREIGN KEY `VehicleModelTransmission_vehicleTransmissionId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModification` DROP FOREIGN KEY `VehicleModification_vehicleBodyId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModification` DROP FOREIGN KEY `VehicleModification_vehicleDriveId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModification` DROP FOREIGN KEY `VehicleModification_vehicleModelId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModification` DROP FOREIGN KEY `VehicleModification_vehicleTransmissionId_fkey`;

-- DropTable
DROP TABLE `VehicleBody`;

-- DropTable
DROP TABLE `VehicleDrive`;

-- DropTable
DROP TABLE `VehicleManufacturer`;

-- DropTable
DROP TABLE `VehicleModel`;

-- DropTable
DROP TABLE `VehicleModelBody`;

-- DropTable
DROP TABLE `VehicleModelDrive`;

-- DropTable
DROP TABLE `VehicleModelTransmission`;

-- DropTable
DROP TABLE `VehicleModification`;

-- DropTable
DROP TABLE `VehicleTransmission`;

-- CreateTable
CREATE TABLE `Body` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(15) NOT NULL,
    `code` VARCHAR(15) NOT NULL,
    `avitoCode` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manufacturer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `code` VARCHAR(30) NOT NULL,
    `avitoCode` VARCHAR(30) NULL,

    UNIQUE INDEX `Manufacturer_name_key`(`name`),
    UNIQUE INDEX `Manufacturer_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Model` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `code` VARCHAR(70) NOT NULL,
    `avitoCode` VARCHAR(70) NULL,
    `manufacturerId` INTEGER NOT NULL,
    `bodyId` INTEGER NULL,
    `transmissionId` INTEGER NULL,
    `driveId` INTEGER NULL,
    `enginePower` INTEGER NULL,
    `engineCapacity` DECIMAL(2, 1) NULL,

    UNIQUE INDEX `Model_id_manufacturerId_key`(`id`, `manufacturerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModelBody` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelId` INTEGER NULL,
    `bodyId` INTEGER NULL,

    UNIQUE INDEX `ModelBody_modelId_bodyId_key`(`modelId`, `bodyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModelTransmission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelId` INTEGER NULL,
    `transmissionId` INTEGER NULL,

    UNIQUE INDEX `ModelTransmission_modelId_transmissionId_key`(`modelId`, `transmissionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transmission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL,
    `code` VARCHAR(10) NOT NULL,
    `avitoCode` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Drive` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL,
    `code` VARCHAR(10) NOT NULL,
    `avitoCode` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModelDrive` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelId` INTEGER NULL,
    `driveId` INTEGER NULL,

    UNIQUE INDEX `ModelDrive_modelId_driveId_key`(`modelId`, `driveId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Modification` (
    `id` INTEGER NOT NULL,
    `avitoModificationId` INTEGER NULL,
    `modelId` INTEGER NULL,
    `transmissionId` INTEGER NULL,
    `bodyId` INTEGER NULL,
    `driveId` INTEGER NULL,
    `yearFrom` SMALLINT NULL,
    `yearTo` SMALLINT NULL,
    `enginePower` INTEGER NULL,
    `engineCapacity` DECIMAL(2, 1) NULL,
    `name` VARCHAR(150) NULL,
    `code` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Model` ADD CONSTRAINT `Model_manufacturerId_fkey` FOREIGN KEY (`manufacturerId`) REFERENCES `Manufacturer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelBody` ADD CONSTRAINT `ModelBody_bodyId_fkey` FOREIGN KEY (`bodyId`) REFERENCES `Body`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelBody` ADD CONSTRAINT `ModelBody_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Model`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelTransmission` ADD CONSTRAINT `ModelTransmission_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Model`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelTransmission` ADD CONSTRAINT `ModelTransmission_transmissionId_fkey` FOREIGN KEY (`transmissionId`) REFERENCES `Transmission`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelDrive` ADD CONSTRAINT `ModelDrive_driveId_fkey` FOREIGN KEY (`driveId`) REFERENCES `Drive`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelDrive` ADD CONSTRAINT `ModelDrive_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Model`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modification` ADD CONSTRAINT `Modification_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Model`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modification` ADD CONSTRAINT `Modification_transmissionId_fkey` FOREIGN KEY (`transmissionId`) REFERENCES `Transmission`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modification` ADD CONSTRAINT `Modification_bodyId_fkey` FOREIGN KEY (`bodyId`) REFERENCES `Body`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modification` ADD CONSTRAINT `Modification_driveId_fkey` FOREIGN KEY (`driveId`) REFERENCES `Drive`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
