-- CreateTable
CREATE TABLE "Histoire" (
    "id" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "resume" TEXT,
    "description" TEXT,
    "image" TEXT,
    "statut" TEXT NOT NULL DEFAULT 'BROUILLON',
    "pointDeDepart" TEXT,
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateMiseAJour" TIMESTAMP(3) NOT NULL,
    "auteurId" TEXT,

    CONSTRAINT "Histoire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapitre" (
    "id" TEXT NOT NULL,
    "histoireId" TEXT NOT NULL,
    "titreInterne" TEXT,
    "contenu" TEXT NOT NULL,
    "image" TEXT,
    "effetsEntree" JSONB,
    "ordre" INTEGER,

    CONSTRAINT "Chapitre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Choix" (
    "id" TEXT NOT NULL,
    "chapitreSourceId" TEXT NOT NULL,
    "libelle" TEXT NOT NULL,
    "destinationChapitreId" TEXT,
    "conditions" JSONB,
    "effets" JSONB,
    "testAssocie" JSONB,

    CONSTRAINT "Choix_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objet" (
    "id" TEXT NOT NULL,
    "histoireId" TEXT,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "effet" JSONB,

    CONSTRAINT "Objet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "extrait" TEXT,
    "contenu" TEXT NOT NULL,
    "image" TEXT,
    "statut" TEXT NOT NULL DEFAULT 'BROUILLON',
    "datePublication" TIMESTAMP(3),
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateMiseAJour" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "motDePasseHashe" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'AUTEUR',
    "dateDerniereConnex" TIMESTAMP(3),
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" TEXT NOT NULL,
    "pseudo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motDePasseHashe" TEXT NOT NULL,
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateDerniereConnex" TIMESTAMP(3),

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sauvegarde" (
    "id" TEXT NOT NULL,
    "utilisateurId" TEXT NOT NULL,
    "histoireId" TEXT NOT NULL,
    "chapitreCourantId" TEXT NOT NULL,
    "pointsDeVie" INTEGER NOT NULL DEFAULT 20,
    "caracteristiques" JSONB,
    "inventaire" JSONB,
    "variablesEtat" JSONB,
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateMiseAJour" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sauvegarde_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Histoire_slug_key" ON "Histoire"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Article_slug_key" ON "Article"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_login_key" ON "Admin"("login");

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_pseudo_key" ON "Utilisateur"("pseudo");

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Sauvegarde_utilisateurId_histoireId_key" ON "Sauvegarde"("utilisateurId", "histoireId");

-- AddForeignKey
ALTER TABLE "Histoire" ADD CONSTRAINT "Histoire_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapitre" ADD CONSTRAINT "Chapitre_histoireId_fkey" FOREIGN KEY ("histoireId") REFERENCES "Histoire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choix" ADD CONSTRAINT "Choix_chapitreSourceId_fkey" FOREIGN KEY ("chapitreSourceId") REFERENCES "Chapitre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choix" ADD CONSTRAINT "Choix_destinationChapitreId_fkey" FOREIGN KEY ("destinationChapitreId") REFERENCES "Chapitre"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Objet" ADD CONSTRAINT "Objet_histoireId_fkey" FOREIGN KEY ("histoireId") REFERENCES "Histoire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sauvegarde" ADD CONSTRAINT "Sauvegarde_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sauvegarde" ADD CONSTRAINT "Sauvegarde_histoireId_fkey" FOREIGN KEY ("histoireId") REFERENCES "Histoire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sauvegarde" ADD CONSTRAINT "Sauvegarde_chapitreCourantId_fkey" FOREIGN KEY ("chapitreCourantId") REFERENCES "Chapitre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
