/*
  Warnings:

  - You are about to drop the column `car_id` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `options_id` on the `driver` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[driver_id]` on the table `car` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[driver_id]` on the table `option_driver` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `driver_id` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `driver_id` to the `option_driver` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "driver" DROP CONSTRAINT "driver_car_id_fkey";

-- DropForeignKey
ALTER TABLE "driver" DROP CONSTRAINT "driver_options_id_fkey";

-- DropIndex
DROP INDEX "driver_car_id_key";

-- DropIndex
DROP INDEX "driver_options_id_key";

-- AlterTable
ALTER TABLE "car" ADD COLUMN     "driver_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "driver" DROP COLUMN "car_id",
DROP COLUMN "options_id";

-- AlterTable
ALTER TABLE "option_driver" ADD COLUMN     "driver_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "car_driver_id_key" ON "car"("driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "option_driver_driver_id_key" ON "option_driver"("driver_id");

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "option_driver" ADD CONSTRAINT "option_driver_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
