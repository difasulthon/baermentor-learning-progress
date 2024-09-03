/*
  Warnings:

  - You are about to drop the `Mentor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_mentor_id_fkey";

-- DropTable
DROP TABLE "Mentor";

-- DropTable
DROP TABLE "Student";

-- CreateTable
CREATE TABLE "mentors" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "username" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mentors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "mentor_id" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mentors_username_key" ON "mentors"("username");

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "mentors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
