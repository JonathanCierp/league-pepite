<template>
  <main v-if="isLoaded" class="container mx-auto my-4 lg:my-10 px-4 lg:px-0">
    <h1 class="text-center uppercase text-5xl font-medium mb-28">Mentions Légales</h1>
    <section class="mb-20">
      <h2 class="text-left uppercase text-4xl mb-6">1. Informations légales</h2>
      <p class="mb-4">Nous vous informons que:</p>
      <p class="mb-4">La LEAGUE PEPITE est éditée par:</p>
      <p class="mb-4">KATENGA SAS, une société de droit français dont le siège social est situé au 294 rue du cygne 45430 Mardie France. RCS n° 884487331.</p>
      <p class="mb-4 flex items-center">
        <BaseIcon name="check-square" class="text-orange-600 mr-2" />
        Adresse de courrier électronique: organisation@leaguepepite.com
      </p>
      <p class="mb-4 flex items-center">
        <BaseIcon name="check-square" class="text-orange-600 mr-2" />
        Directeur de la publication: Paul MARTIN-DOUYAT
      </p>
      <p class="mb-4">L’hébergeur est : OVH – 2 rue Kellermann 59100 Roubaix 1007 https://www.ovh.com Téléphone: +33 (0)8 99 70 17 61.</p>
    </section>
    <section class="mb-20">
      <h2 class="text-left uppercase text-4xl mb-6">2. Conditions d’utilisation</h2>
      <p class="mb-4">Les informations fournies par KATENGA le sont à titre indicatif et ne sauraient dispenser l'utilisateur d'une analyse
        complémentaire et personnalisée.</p>
      <p class="mb-4">KATENGA ne saurait garantir l'exactitude, la complétude, l'actualité des informations diffusées sur son site internet
        leaguepepite.com. En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.</p>
    </section>
    <section class="mb-20">
      <h2 class="text-left uppercase text-4xl mb-6">3. Protection des données</h2>
      <p class="mb-4">L'utilisateur est notamment informé que conformément à la loi française de protection des données, les informations
        qu'il communique par le biais des formulaires présents sur le site est nécessaire pour répondre à sa demande et sont destinées à KATENGA,
        en tant que responsable du traitement à des fins de gestion administrative et commerciale.</p>
      <p class="mb-4">L'utilisateur est informé qu'il dispose d'un droit d'accès, d'interrogation et de rectification qui lui
        permet, le cas échéant, de faire rectifier, compléter, mettre à jour, verrouiller ou effacer les données personnelles
        le concernant qui sont inexactes, incomplètes, équivoques, périmées ou dont la collecte, l'utilisation, la communication
        ou la conservation est interdite.</p>
      <p class="mb-4">L'utilisateur dispose également d'un droit d'opposition au traitement de ses données pour des motifs légitimes ainsi
        qu'un droit d'opposition à ce que ces données soient utilisées à des fins de prospection commerciale.</p>
      <p class="mb-4">L'ensemble de ces droits s'exerce auprès de KATENGA par courrier électronique accompagné d'une copie d'un titre d'identité en pièce jointe comportant une signature à adresser à :</p>
      <a href="mailto:organisation@leaguepepite.com?subject=Droit d'accès aux données" class="mb-4 underline">organisation@leaguepepite.com</a>
    </section>
    <section class="mb-20">
      <h2 class="text-left uppercase text-4xl mb-6">4. Cookies</h2>
      <p class="mb-4">L'utilisateur est informé que lors de ses visites sur le site leaguepepite.com, un cookie peut s'installer automatiquement ayant pour but l'authentification de l'utilisateur.</p>
      <p class="mb-4">Le cookie est un bloc de données qui ne permet pas d'identifier les utilisateurs mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site.</p>
    </section>
    <section>
      <h2 class="text-left uppercase text-4xl mb-6">5. Propriété intellectuelle</h2>
      <p class="mb-4">La structure générale ainsi que les logiciels, textes, images animées ou non, son savoir-faire et tous les autres éléments composant la LEAGUE PEPITE sont la propriété exclusive de KATENGA.</p>
      <p class="mb-4">Toute représentation totale ou partielle de la LEAGUE PEPITE par quelque personne que ce soit, sans l'autorisation expresse de KATENGA est interdite et constituerait une contrefaçon sanctionnée par la loi française sur le copyright.</p>
      <p class="mb-4">Les marques de LEAGUE PEPITE et de ses partenaires, ainsi que les logos figurant sur le site sont des marques déposées.</p>
      <p class="mb-4">Toute reproduction totale ou partielle de ces marques ou de ces logos effectués à partir des éléments du site sans l'autorisation expresse de KATENGA est donc prohibée au sens du droit français.</p>
      <p class="mb-4">KATENGA ne saurait être responsable de l'accès par les utilisateurs via les liens hypertextes mis en place dans le cadre du site internet LEAGUE PEPITE en direction d'autres ressources présentes sur le réseau.</p>
      <p class="mb-4">Tout litige en relation avec l'utilisation du site est soumis au droit français. L'utilisateur reconnaît la compétence exclusive des tribunaux français compétents.</p>
    </section>
  </main>
</template>