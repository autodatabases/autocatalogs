-- CreateTable
CREATE TABLE `VehicleBody` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(15) NOT NULL,
    `code` VARCHAR(15) NOT NULL,
    `avitoCode` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleManufacturer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `code` VARCHAR(30) NOT NULL,
    `avitoCode` VARCHAR(30) NULL,

    UNIQUE INDEX `VehicleManufacturer_name_key`(`name`),
    UNIQUE INDEX `VehicleManufacturer_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleModel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `code` VARCHAR(70) NOT NULL,
    `avitoCode` VARCHAR(70) NULL,
    `vehicleManufacturerId` INTEGER NOT NULL,
    `vehicleBodyId` INTEGER NULL,
    `vehicleTransmissionId` INTEGER NULL,
    `vehicleDriveId` INTEGER NULL,
    `vehicleEnginePower` INTEGER NULL,
    `vehicleEngineCapacity` DECIMAL(2, 1) NULL,

    UNIQUE INDEX `VehicleModel_id_vehicleManufacturerId_key`(`id`, `vehicleManufacturerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleModelBody` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vehicleModelId` INTEGER NULL,
    `vehicleBodyId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleModelTransmission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vehicleModelId` INTEGER NULL,
    `vehicleTransmissionId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleTransmission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL,
    `code` VARCHAR(10) NOT NULL,
    `avitoCode` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleDrive` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL,
    `code` VARCHAR(10) NOT NULL,
    `avitoCode` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleModelDrive` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vehicleModelId` INTEGER NULL,
    `vehicleDriveId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleModification` (
    `id` INTEGER NOT NULL,
    `vehicleModelId` INTEGER NULL,
    `vehicleTransmissionId` INTEGER NULL,
    `vehicleBodyId` INTEGER NULL,
    `vehicleYear` SMALLINT NOT NULL,
    `vehicleEnginePower` INTEGER NULL,
    `vehicleEngineCapacity` DECIMAL(2, 1) NULL,
    `name` VARCHAR(150) NOT NULL,
    `code` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `VehicleModel` ADD CONSTRAINT `VehicleModel_vehicleManufacturerId_fkey` FOREIGN KEY (`vehicleManufacturerId`) REFERENCES `VehicleManufacturer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModelBody` ADD CONSTRAINT `VehicleModelBody_vehicleBodyId_fkey` FOREIGN KEY (`vehicleBodyId`) REFERENCES `VehicleBody`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModelBody` ADD CONSTRAINT `VehicleModelBody_vehicleModelId_fkey` FOREIGN KEY (`vehicleModelId`) REFERENCES `VehicleModel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModelTransmission` ADD CONSTRAINT `VehicleModelTransmission_vehicleModelId_fkey` FOREIGN KEY (`vehicleModelId`) REFERENCES `VehicleModel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModelTransmission` ADD CONSTRAINT `VehicleModelTransmission_vehicleTransmissionId_fkey` FOREIGN KEY (`vehicleTransmissionId`) REFERENCES `VehicleTransmission`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModelDrive` ADD CONSTRAINT `VehicleModelDrive_vehicleDriveId_fkey` FOREIGN KEY (`vehicleDriveId`) REFERENCES `VehicleDrive`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModelDrive` ADD CONSTRAINT `VehicleModelDrive_vehicleModelId_fkey` FOREIGN KEY (`vehicleModelId`) REFERENCES `VehicleModel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModification` ADD CONSTRAINT `VehicleModification_vehicleModelId_fkey` FOREIGN KEY (`vehicleModelId`) REFERENCES `VehicleModel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModification` ADD CONSTRAINT `VehicleModification_vehicleTransmissionId_fkey` FOREIGN KEY (`vehicleTransmissionId`) REFERENCES `VehicleTransmission`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModification` ADD CONSTRAINT `VehicleModification_vehicleBodyId_fkey` FOREIGN KEY (`vehicleBodyId`) REFERENCES `VehicleBody`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
