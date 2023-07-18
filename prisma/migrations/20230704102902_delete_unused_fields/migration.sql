/*
  Warnings:

  - You are about to drop the column `bodyId` on the `Model` table. All the data in the column will be lost.
  - You are about to drop the column `driveId` on the `Model` table. All the data in the column will be lost.
  - You are about to drop the column `engineCapacity` on the `Model` table. All the data in the column will be lost.
  - You are about to drop the column `enginePower` on the `Model` table. All the data in the column will be lost.
  - You are about to drop the column `transmissionId` on the `Model` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Model` DROP COLUMN `bodyId`,
    DROP COLUMN `driveId`,
    DROP COLUMN `engineCapacity`,
    DROP COLUMN `enginePower`,
    DROP COLUMN `transmissionId`;
