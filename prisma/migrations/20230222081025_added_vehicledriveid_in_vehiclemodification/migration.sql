-- AlterTable
ALTER TABLE `VehicleModification` ADD COLUMN `vehicleDriveId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `VehicleModification` ADD CONSTRAINT `VehicleModification_vehicleDriveId_fkey` FOREIGN KEY (`vehicleDriveId`) REFERENCES `VehicleDrive`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
