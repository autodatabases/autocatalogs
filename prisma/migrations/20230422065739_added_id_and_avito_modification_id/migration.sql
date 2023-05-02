-- DropForeignKey
ALTER TABLE `VehicleModification` DROP FOREIGN KEY `VehicleModification_vehicleBodyId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModification` DROP FOREIGN KEY `VehicleModification_vehicleDriveId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModification` DROP FOREIGN KEY `VehicleModification_vehicleModelId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModification` DROP FOREIGN KEY `VehicleModification_vehicleTransmissionId_fkey`;

-- DropIndex
DROP INDEX `VehicleModification_id_vehicleModelId_vehicleTransmissionId__key` ON `VehicleModification`;

-- AlterTable
ALTER TABLE `VehicleModification` ADD COLUMN `avitoModificationId` INTEGER NULL,
    ADD COLUMN `vehicleYear` SMALLINT NULL,
    MODIFY `vehicleModelId` INTEGER NULL,
    MODIFY `vehicleTransmissionId` INTEGER NULL,
    MODIFY `vehicleBodyId` INTEGER NULL,
    MODIFY `vehicleEnginePower` INTEGER NULL,
    MODIFY `vehicleEngineCapacity` DECIMAL(2, 1) NULL,
    MODIFY `name` VARCHAR(150) NULL,
    MODIFY `code` VARCHAR(100) NULL,
    MODIFY `vehicleDriveId` INTEGER NULL,
    MODIFY `vehicleYearFrom` SMALLINT NULL,
    MODIFY `vehicleYearTo` SMALLINT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `VehicleModification` ADD CONSTRAINT `VehicleModification_vehicleModelId_fkey` FOREIGN KEY (`vehicleModelId`) REFERENCES `VehicleModel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModification` ADD CONSTRAINT `VehicleModification_vehicleTransmissionId_fkey` FOREIGN KEY (`vehicleTransmissionId`) REFERENCES `VehicleTransmission`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModification` ADD CONSTRAINT `VehicleModification_vehicleBodyId_fkey` FOREIGN KEY (`vehicleBodyId`) REFERENCES `VehicleBody`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModification` ADD CONSTRAINT `VehicleModification_vehicleDriveId_fkey` FOREIGN KEY (`vehicleDriveId`) REFERENCES `VehicleDrive`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
