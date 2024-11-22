/*
  Warnings:

  - A unique constraint covering the columns `[optionsId]` on the table `Driver` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `optionsId` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "optionsId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Driver_optionsId_key" ON "Driver"("optionsId");

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_optionsId_fkey" FOREIGN KEY ("optionsId") REFERENCES "OptionDriver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
