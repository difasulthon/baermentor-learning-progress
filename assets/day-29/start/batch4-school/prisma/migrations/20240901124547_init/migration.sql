-- CreateTable
CREATE TABLE "Mentor" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "username" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_username_key" ON "Mentor"("username");
