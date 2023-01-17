/*
  Warnings:

  - A unique constraint covering the columns `[vehicleModelId,vehicleBodyId]` on the table `VehicleModelBody` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vehicleModelId,vehicleDriveId]` on the table `VehicleModelDrive` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vehicleModelId,vehicleTransmissionId]` on the table `VehicleModelTransmission` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `VehicleModelBody_vehicleModelId_vehicleBodyId_key` ON `VehicleModelBody`(`vehicleModelId`, `vehicleBodyId`);

-- CreateIndex
CREATE UNIQUE INDEX `VehicleModelDrive_vehicleModelId_vehicleDriveId_key` ON `VehicleModelDrive`(`vehicleModelId`, `vehicleDriveId`);

-- CreateIndex
CREATE UNIQUE INDEX `VehicleModelTransmission_vehicleModelId_vehicleTransmissionI_key` ON `VehicleModelTransmission`(`vehicleModelId`, `vehicleTransmissionId`);
