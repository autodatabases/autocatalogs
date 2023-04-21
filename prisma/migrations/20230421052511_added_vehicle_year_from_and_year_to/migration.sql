/*
  Warnings:

  - You are about to drop the column `vehicleYear` on the `VehicleModification` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id,vehicleModelId,vehicleTransmissionId,vehicleBodyId,vehicleDriveId,vehicleYearFrom,vehicleYearTo,vehicleEnginePower,vehicleEngineCapacity,name]` on the table `VehicleModification` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `vehicleYearFrom` to the `VehicleModification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicleYearTo` to the `VehicleModification` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `VehicleModification_id_vehicleModelId_vehicleTransmissionId__key` ON `VehicleModification`;

-- AlterTable
ALTER TABLE `VehicleModification` DROP COLUMN `vehicleYear`,
    ADD COLUMN `vehicleYearFrom` SMALLINT NOT NULL,
    ADD COLUMN `vehicleYearTo` SMALLINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `VehicleModification_id_vehicleModelId_vehicleTransmissionId__key` ON `VehicleModification`(`id`, `vehicleModelId`, `vehicleTransmissionId`, `vehicleBodyId`, `vehicleDriveId`, `vehicleYearFrom`, `vehicleYearTo`, `vehicleEnginePower`, `vehicleEngineCapacity`, `name`);
