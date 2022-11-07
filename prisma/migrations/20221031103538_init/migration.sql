-- CreateTable
CREATE TABLE "VehicleBody" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(15) NOT NULL,
    "code" VARCHAR(15) NOT NULL,
    "avitoCode" VARCHAR(15) NOT NULL,

    CONSTRAINT "VehicleBody_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleManufacturer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "code" VARCHAR(30) NOT NULL,
    "avitoCode" VARCHAR(30),

    CONSTRAINT "VehicleManufacturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleModel" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "code" VARCHAR(70) NOT NULL,
    "avitoCode" VARCHAR(70),
    "vehicleManufacturerId" INTEGER NOT NULL,
    "vehicleBodyId" INTEGER,
    "vehicleTransmissionId" INTEGER,
    "vehicleDriveId" INTEGER,
    "vehicleEnginePower" INTEGER,
    "vehicleEngineCapacity" DECIMAL(2,1),

    CONSTRAINT "VehicleModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleModelBody" (
    "id" SERIAL NOT NULL,
    "vehicleModelId" INTEGER,
    "vehicleBodyId" INTEGER,

    CONSTRAINT "VehicleModelBody_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleModelTransmission" (
    "id" SERIAL NOT NULL,
    "vehicleModelId" INTEGER,
    "vehicleTransmissionId" INTEGER,

    CONSTRAINT "VehicleModelTransmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleTransmission" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "avitoCode" VARCHAR(10) NOT NULL,

    CONSTRAINT "VehicleTransmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleDrive" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "avitoCode" VARCHAR(10) NOT NULL,

    CONSTRAINT "VehicleDrive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleModelDrive" (
    "id" SERIAL NOT NULL,
    "vehicleModelId" INTEGER,
    "vehicleDriveId" INTEGER,

    CONSTRAINT "VehicleModelDrive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleModification" (
    "id" INTEGER NOT NULL,
    "vehicleModelId" INTEGER,
    "vehicleTransmissionId" INTEGER,
    "vehicleBodyId" INTEGER,
    "vehicleYear" SMALLINT NOT NULL,
    "vehicleEnginePower" INTEGER,
    "vehicleEngineCapacity" DECIMAL(2,1),
    "name" VARCHAR(150) NOT NULL,
    "code" VARCHAR(100) NOT NULL,

    CONSTRAINT "VehicleModification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VehicleManufacturer_name_key" ON "VehicleManufacturer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VehicleManufacturer_code_key" ON "VehicleManufacturer"("code");

-- CreateIndex
CREATE UNIQUE INDEX "VehicleModel_id_vehicleManufacturerId_key" ON "VehicleModel"("id", "vehicleManufacturerId");

-- AddForeignKey
ALTER TABLE "VehicleModel" ADD CONSTRAINT "VehicleModel_vehicleManufacturerId_fkey" FOREIGN KEY ("vehicleManufacturerId") REFERENCES "VehicleManufacturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleModelBody" ADD CONSTRAINT "VehicleModelBody_vehicleBodyId_fkey" FOREIGN KEY ("vehicleBodyId") REFERENCES "VehicleBody"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleModelBody" ADD CONSTRAINT "VehicleModelBody_vehicleModelId_fkey" FOREIGN KEY ("vehicleModelId") REFERENCES "VehicleModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleModelTransmission" ADD CONSTRAINT "VehicleModelTransmission_vehicleModelId_fkey" FOREIGN KEY ("vehicleModelId") REFERENCES "VehicleModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleModelTransmission" ADD CONSTRAINT "VehicleModelTransmission_vehicleTransmissionId_fkey" FOREIGN KEY ("vehicleTransmissionId") REFERENCES "VehicleTransmission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleModelDrive" ADD CONSTRAINT "VehicleModelDrive_vehicleDriveId_fkey" FOREIGN KEY ("vehicleDriveId") REFERENCES "VehicleDrive"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleModelDrive" ADD CONSTRAINT "VehicleModelDrive_vehicleModelId_fkey" FOREIGN KEY ("vehicleModelId") REFERENCES "VehicleModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleModification" ADD CONSTRAINT "VehicleModification_vehicleModelId_fkey" FOREIGN KEY ("vehicleModelId") REFERENCES "VehicleModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleModification" ADD CONSTRAINT "VehicleModification_vehicleTransmissionId_fkey" FOREIGN KEY ("vehicleTransmissionId") REFERENCES "VehicleTransmission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleModification" ADD CONSTRAINT "VehicleModification_vehicleBodyId_fkey" FOREIGN KEY ("vehicleBodyId") REFERENCES "VehicleBody"("id") ON DELETE SET NULL ON UPDATE CASCADE;
