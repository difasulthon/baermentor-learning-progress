-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "mentor_id" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "Mentor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
