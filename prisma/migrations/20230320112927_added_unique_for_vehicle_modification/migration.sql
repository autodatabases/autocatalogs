/*
  Warnings:

  - The primary key for the `VehicleModification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id,vehicleModelId,vehicleTransmissionId,vehicleBodyId,vehicleDriveId,vehicleYear,vehicleEnginePower,vehicleEngineCapacity,name]` on the table `VehicleModification` will be added. If there are existing duplicate values, this will fail.
  - Made the column `vehicleModelId` on table `VehicleModification` required. This step will fail if there are existing NULL values in that column.
  - Made the column `vehicleTransmissionId` on table `VehicleModification` required. This step will fail if there are existing NULL values in that column.
  - Made the column `vehicleBodyId` on table `VehicleModification` required. This step will fail if there are existing NULL values in that column.
  - Made the column `vehicleEnginePower` on table `VehicleModification` required. This step will fail if there are existing NULL values in that column.
  - Made the column `vehicleEngineCapacity` on table `VehicleModification` required. This step will fail if there are existing NULL values in that column.
  - Made the column `vehicleDriveId` on table `VehicleModification` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `VehicleModification` DROP FOREIGN KEY `VehicleModification_vehicleBodyId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModification` DROP FOREIGN KEY `VehicleModification_vehicleDriveId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModification` DROP FOREIGN KEY `VehicleModification_vehicleModelId_fkey`;

-- DropForeignKey
ALTER TABLE `VehicleModification` DROP FOREIGN KEY `VehicleModification_vehicleTransmissionId_fkey`;

-- AlterTable
ALTER TABLE `VehicleModification` DROP PRIMARY KEY,
    MODIFY `vehicleModelId` INTEGER NOT NULL,
    MODIFY `vehicleTransmissionId` INTEGER NOT NULL,
    MODIFY `vehicleBodyId` INTEGER NOT NULL,
    MODIFY `vehicleEnginePower` INTEGER NOT NULL,
    MODIFY `vehicleEngineCapacity` DECIMAL(2, 1) NOT NULL,
    MODIFY `vehicleDriveId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `VehicleModification_id_vehicleModelId_vehicleTransmissionId__key` ON `VehicleModification`(`id`, `vehicleModelId`, `vehicleTransmissionId`, `vehicleBodyId`, `vehicleDriveId`, `vehicleYear`, `vehicleEnginePower`, `vehicleEngineCapacity`, `name`);

-- AddForeignKey
ALTER TABLE `VehicleModification` ADD CONSTRAINT `VehicleModification_vehicleModelId_fkey` FOREIGN KEY (`vehicleModelId`) REFERENCES `VehicleModel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModification` ADD CONSTRAINT `VehicleModification_vehicleTransmissionId_fkey` FOREIGN KEY (`vehicleTransmissionId`) REFERENCES `VehicleTransmission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModification` ADD CONSTRAINT `VehicleModification_vehicleBodyId_fkey` FOREIGN KEY (`vehicleBodyId`) REFERENCES `VehicleBody`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModification` ADD CONSTRAINT `VehicleModification_vehicleDriveId_fkey` FOREIGN KEY (`vehicleDriveId`) REFERENCES `VehicleDrive`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
