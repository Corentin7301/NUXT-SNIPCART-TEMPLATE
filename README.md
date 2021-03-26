# NUXT FORESTRY TEMPLATE

## Made by [Corentin PERROUX](https://github.com/Corentin7301)

## DEPLOY ON NETLIFY :

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/Corentin7301/NUXT-FORESTRY-TEMPLATE"><img src="https://camo.githubusercontent.com/417d890ba67c98ad5856b715343a61cdbf07d72b9bd5b79dd45d43de634c29ea/68747470733a2f2f7777772e6e65746c6966792e636f6d2f696d672f6465706c6f792f627574746f6e2e737667" alt="netlify deploy button"></a>

**Si le repository créé est vide utilisez le bouton "Use this template" de Github. Si vous préférez importer le projet sur Forestry, utilisez le buton ci-dessous.**

If the created repository is empty use the "Use this template" button of Github. If you prefer to import the project to Forestry, use the button below.

## DEPLOY ON FORESTRY :

**Si vous avez déjà utilisé le bouton "Deploy to Netlify" et que le repository créé n'est pas vide, n'utilisez pas ce bouton.**

If you have already used the "Deploy to Netlify" button and the created repository is not empty, do not use this button.

[![Import this project into Forestry](https://assets.forestry.io/import-to-forestry.svg)](https://app.forestry.io/quick-start?repo=corentin7301/nuxt-forestry-template&engine=other&branch=main)

## REPO-NAME: https://github.com/Corentin7301/NUXT-FORESTRY-TEMPLATE

*********
## Français :


**Installation de node et des dépendances : ```npm i```**

## Personnalisation

Modifiez les données dans le fichier **/site.config.json** :

* #### **siteUrl** : Nom de domaine du site. Exemple : "https://nuxt-forestry-template.fr"

Il apparaîtra dans la **configuration du feed**, **les metadonnées du site**, **l'url canonique** et la **configuration du sitemap**.

* #### **siteName** : Nom du site. Exemple : "NUXT-FORESTRY-TEMPLATE"

Il apparaîtra dans les **metadonnées du site et de la page index** et la **balise alt de l'image de la page "contact"**.

* #### **siteTitle** : Sous titre du site. Exemple : "NUXT-FORESTRY-TEMPLATE"

Il apparaîtra dans le **h2 du header**.

* #### **contactTitle** : Nom de la page contact. Exemple : "CONTACT of NUXT-FORESTRY-TEMPLATE"

Il apparaîtra dans les **metadonnées de la page contact**.

* #### **author** : Nom de l'auteur. Exemple : "CORENTIN PERROUX"

Il apparaîtra dans les **metadonnées de la page contact** et dans le **h1 du header**.

* #### **authorEmail** : Email de l'auteur. Exemple : "corentin7301@gmail.com"

Il apparaîtra dans le **feed** et dans le **lien du copyright**.

* #### **copyright** : Copyright. Exemple : "CORENTIN PERROUX"

Il apparaîtra dans le **copyright**.

* #### **siteMetaDescription** : Metadescription du site. Exemple : "NUXT-FORESTRY-TEMPLATE by Corentin PERROUX"

Il apparaîtra dans les **metadonnées du site** et de **la page index**.


* #### **contactMetaDescription** : Metadescription de la page contact. Exemple : "CONTACT of NUXT-FORESTRY-TEMPLATE by Corentin PERROUX"

Il apparaîtra dans **la page contact**.

* #### **contactRedirectMessage** : Message de la page de remerciement lors de la soumission du formulaire. Exemple : "Merci pour votre message ! Nous vous répondrons dès que possible."

Il apparaîtra dans **la page thanks**.

* #### **twitterUrl** : Url du compte Twitter. Exemple : "https://twitter.com/CorentinPerroux"

Il apparaîtra dans la **configuration de la social card de twitter**.


* #### **twitterAccount** : Nom du compte Twitter. Exemple : "@CorentinPerroux"

Il apparaîtra dans la **configuration de la social card de twitter**.

* #### **twitterCardImage** : Image de la card Twitter. Exemple : "https://res.cloudinary.com/corentin7301/image/upload/v1616753941/nuxt-forestry-template/nuxt-forestry-template_gpfj1c.jpg"

Il apparaîtra dans la **configuration de la social card de twitter**.

<!-- * #### **mainImage** : Image principale du site. Exemple : "https://res.cloudinary.com/corentin7301/image/upload/v1616753941/nuxt-forestry-template/nuxt-forestry-template_gpfj1c.jpg"

Il apparaîtra dans la **configuration des cards de partage social**, dans **la page contact** et dans **la page index**. -->

* #### **siteType** : Type de site. Exemple : "website"

**Si vous ne le connaissez pas, laissez "website".**

Il apparaîtra dans la **configuration des cards de partage social**.

* #### **style.colors.primaryColor** : Couleur principale du site. EN HEXADECIMAL Exemple : #41b883.

* #### **style.colors.backgroundColor** : Couleur de fond du site. EN HEXADECIMAL Exemple : #606f7b.

* #### **style.colors.footerBackgroundColor** : Couleur de fond du footer du site. EN HEXADECIMAL Exemple : #41414141.

* #### **style.colors.lightColor** : Couleur claire du site. EN HEXADECIMAL Exemple : #eeeeee.

* #### **style.colors.darkColor** : Couleur sombre du site. EN HEXADECIMAL Exemple : #41414141.

**Pour sauvegarder les modifications il suffit de "commit" et "push".**


## Contenu :

## Modifier une page :

* ### Avec les fichiers .md :

**DANS LE DOSSIER /content/pages**

  * Ecrire selon la [syntaxe Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

  * Commencer par un frontmatter comprenant :


    <!-- * **title**: Nom de l'article. Exemple : NUXT-BLOG-TEMPLATE 1

    * **description**: Description de l'article. Exemple : NUXT-BLOG-TEMPLATE by Corentin PERROUX -->

    * **image** : Url de image principale. Exemple : https://res.cloudinary.com/corentin7301/image/upload/v1616753941/nuxt-forestry-template/nuxt-forestry-template_gpfj1c.jpg

  * Pour sauvegarder les modifications il suffit de "commit" et "push".

* ### Avec Forestry.io :

**Si vous n'avez pas utilisé sur le bouton "Import to Forestry**

  * Créer un compte sur le site [Forestry.io](https://forestry.io/).
  * Cliquer sur "Add site".
  * Cliquer sur "Other".
  * Choisir le service d'hébergement du projet.
  * Choisir le repository.
  * Modifier et ajouter des articles dans l'onglet "Pages" du la sidebar.

## Variables d'environnement

Modifier les **variables d'environnement** dans **exemple.env** (**RENOMMER LE FICHIER EN ".env"**) :

* **GOOGLE ANALYTICS** : Variable d'environnement Google Analytics (si Google Ananytics est utilisé).
GOOGLE_ANALYTICS_ID=UA---------

* **CLOUDINARY** : Variable d'environnement Cloudinary pour Nuxtjs (si Cloudinary est utilisé pour la gestion des medias).

CLOUD_NAME=----------

API_KEY=----------

API_SECRET=--------



## Favicon

Remplacer le favicon dans le dossier **/static**.

Modifier le nom du favicon (si besoin) dans le fichier **/nuxt.config.js** à la **ligne 132**.


## Sitemap : 

### Disponible à l'adresse : **/sitemap.xml**

Ajouter les pages statiques (index, contact,...) dans le fichier  **/nuxt.config.js** à la **ligne 216**.


## Feed RSS : 

### Disponible à l'adresse : **/feed.xml**



## Dayjs : 

Modifier la date du pays dans le fichier  **/nuxt.config.js** aux **lignes 234, 235**.




## Nuxt Cloudinary : 

Nuxt Cloudinary permet une gestion des médias optimisés.

Pour utiliser Nuxt Cloudinary :

* Créer un compte sur [https://cloudinary.com/](https://cloudinary.com/)
* Copier le **CLOUD_NAME**, l'**API_KEY** et la **SECRET_KEY** dans le fichier **/.env** .
* Importer des fichiers (images)
* Chaque lien ressemble à ceci : https://res.cloudinary.com/CLOUD-NAME/image/upload/TRANSFORMATIONS/VERSION/PATH-TO-IMAGE
* On peut récupérer le lien ici : ![lien cloudinary](https://res.cloudinary.com/mayashavin/image/upload/f_auto,q_auto/v1603355978/nuxt-cld/copyurl)
* Pour afficher une image peut faire : 
  ```html 
  <cld-image public-id="PATH-TO-IMAGE" width="100%" loading="lazy"
    fetchFormat="auto" quality="auto" alt="" responsive />
  ```

[Nuxt Cloudinary documentation](https://cloudinary.nuxtjs.org/)


## Dépendances installées :

* **nuxt**
* **@nuxt/content**
* **@nuxtjs/dayjs**
* **@nuxtjs/cloudinary**
* **@nuxtjs/feed**
* **@nuxtjs/markdownit**
* **vue-social-sharing/nuxt**
* **@nuxtjs/sitemap**
* **@nuxtjs/google-analytics**
* **@nuxtjs/tailwindcss**


## Scripts :

* **dev**: "nuxt",
* **build**: "nuxt build",
* **start**: "nuxt start",
* **generate**: "nuxt generate",
* **serve**: "nuxt serve",
* **production**: "npm run build && nuxt generate",
* **preview**: "nuxt -p 8080"


## NETLIFY | PRODUCTION

### Netlify configuration

Pour déployer le site via Netlify (si vous n'avez pas utilisé le bouton "Deploy to Netlify") :

* Créer un compte sur le site [https://app.netlify.com/](https://app.netlify.com/).
* Ajouter le site avec le bouton "New site from Git".
* Choisir le service d'hébergement du projet.
* Choisir le repository.
* Dans **Build commande**, entrer "**npm run build && nuxt generate**".
* Appuyer sur le boutton "Deploy site".
* Cliquer sur le bouton "Domain settings".
* Cliquer sur le bouton "Options", "Edit site name" et choisir un nom de domaine. Pour ajouter un nom de domaine personnalisé cliquer sur "Add custom domain".

### Netlify environnement

Si il y a des entrées dans le fichier ".env" du projet, elles devront être recopiées dans Netlify.

* Cliquer sur "Site settings", "Build & deploy" puis "Environment".
* Cliquer sur "Edit variables" puis ajouter toutes les variables d'environnement figurant dans le fichier ".env" du projet.


### Netlify formulaires

Le blog est compatible avec les formulaires NETLIFY.

* Dans Netlify, cliquer sur l'onglet "Forms".
* Dans "Active forms" il y a une entrée "contact". C'est ici que seront stockées toutes les entrées du formulaire de la page "contact".
* Pour être notifié à chaque nouvelle entrée, cliquer sur le bouton "Settings and usage".
* Cliquer sur l'onglet "Form notifications" puis sur "Add notifications".

**A chaque entrée, vous serez notifié par mail, webhook ou Slack.**


***********
## English :
Install node and dependencies : ```npm i```

## Customization

Change site datas in **/site.config.json** file.

* #### **siteUrl** : Domain name of site. Example : "https://nuxt-forestry-template.fr"

It will appear in the **feed configuration**, **site metadatas**, **canonical url** and the **sitemap configuration**.

* #### **siteName** : Site name. Example : "NUXT-FORESTRY-TEMPLATE"

It will appear in the **Site and index metadatas** and the **alt tag of page "contact" image**.

* #### **siteTitle** : Site subtitle. Example : "NUXT-FORESTRY-TEMPLATE"

It will appear in the **header h2**.
* #### **contactTitle** : Contact page name. Example : "CONTACT of NUXT-FORESTRY-TEMPLATE"

It will appear in the **contact page metadatas (_page.vue)**.

* #### **author** : Author name. Example : "CORENTIN PERROUX"

It will appear in the **contact page metadatas** and in the **header h1**.

* #### **authorEmail** : Author email. Example : "corentin7301@gmail.com"

It will appear in the **feed** and in the **copyright link**.

* #### **copyright** : Copyright. Example : "CORENTIN PERROUX"

It will appear in the **copyright**.

* #### **siteMetaDescription** : Site meta-description. Example : "NUXT-FORESTRY-TEMPLATE by Corentin PERROUX"

It will appear in the **site metadatas** and the **index page**.

* #### **contactMetaDescription** : Contact page meta-description. Example : "CONTACT of NUXT-FORESTRY-TEMPLATE by Corentin PERROUX"

It will appear in **contact page**.

* #### **contactRedirectMessage** : Thank you page message when submitting the form. Example : "Thank you for your message ! We will answer you as soon as possible."

It will appear in **thanks page**.

* #### **twitterUrl** : Twitter account url. Example : "https://twitter.com/CorentinPerroux"

It will appear in the **twitter social card configuration**.


* #### **twitterAccount** : Twitter account name. Example : "@CorentinPerroux"

It will appear in the **twitter social card configuration**.

* #### **twitterCardImage** : Twitter card image. Example : "https://res.cloudinary.com/corentin7301/image/upload/v1616753941/nuxt-forestry-template/nuxt-forestry-template_gpfj1c.jpg"

It will appear in the **twitter social card configuration**.

* #### **mainImage** : Site main image. Example : "https://res.cloudinary.com/corentin7301/image/upload/v1616753941/nuxt-forestry-template/nuxt-forestry-template_gpfj1c.jpg"

It will appear in the **social share cards configuration**, in **contact page** and in **index page**.

* #### **siteType** : Site type. Example : "website"

**If you don't know him, let "website".**

It will appear in the **social share cards configuration**.


* #### **style.colors.primaryColor** : Main site color. EN HEXADECIMAL Example : #41b883.

* #### **style.colors.backgroundColor** : Background site color. EN HEXADECIMAL Example : #606f7b.

* #### **style.colors.footerBackgroundColor** : Background site footer color. EN HEXADECIMAL Example : #41414141.

* #### **style.colors.lightColor** : Light site color. EN HEXADECIMAL Example : #eeeeee.

* #### **style.colors.darkColor** : Dark site color. EN HEXADECIMAL Example : #41414141.

**To save the modifications, just "commit" and "push".**
## Content :

## Write an page :

* ### With .md files :

**IN THE /content/pages FOLDER**

  * Write according to [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

  * Start with a frontmatter including :

    * **image** : Url of the illustration image of the article. Example : https://res.cloudinary.com/corentin7301/image/upload/v1616753941/nuxt-forestry-template/nuxt-forestry-template_gpfj1c.jpg

  * To save the modifications, just "commit" and "push".

* ### With Forestry.io :

**If you have not used the button "Import to Forestry**

  * Create an account on [Forestry.io](https://forestry.io/) website.
  * Click on "Add site".
  * Click on "Other".
  * Choose the hosting service for the project.
  * Choose the repository.
  * Edit and add articles in "Articles" tab of the sidebar.


## Table of Contents | Toc

The Table of Contents works with articles h2 and h3. It works with HTML anchor system.

## Environment variables

Edit **environment variables** in **exemple.env** (**RENAME THE FILE TO ".env"**) :

* **GOOGLE ANALYTICS** : Google Analytics environment variables (if Google Ananytics if used).
GOOGLE_ANALYTICS_ID=UA---------

* **CLOUDINARY** : Cloudinary environment variables for Nuxtjs (if Cloudinary if used for de medias gestion).

CLOUD_NAME=----------

API_KEY=----------

API_SECRET=--------



## Favicon

Replace favicon in **/static** folder.

Edit favicon name (if necessary) in **/nuxt.config.js** file on **line 132**.


## Sitemap : 

### Available at : **/sitemap.xml**.

Add static pages (index, contact,...) in **/nuxt.config.js** file on **line 216**.


## Feed RSS : 

### Available at : **/feed.xml**.



## Dayjs : 

Edit country date in **/nuxt.config.js** file on **lines 234 and 235**.



## Nuxt Cloudinary : 

Nuxt Cloudinary enables optimized media management.

For use Nuxt Cloudinary :

* Create an account on [https://cloudinary.com/](https://cloudinary.com/)
* Cpoy the **CLOUD_NAME**, the **API_KEY** and the **SECRET_KEY** in the **/.env** file.
* Import files (images).
* Each link looks like this : https://res.cloudinary.com/CLOUD-NAME/image/upload/TRANSFORMATIONS/VERSION/PATH-TO-IMAGE
* We can recover link here : ![lien cloudinary](https://res.cloudinary.com/mayashavin/image/upload/f_auto,q_auto/v1603355978/nuxt-cld/copyurl)
* To display a picture can do : 
  ```html 
  <cld-image public-id="PATH-TO-IMAGE" width="100%" loading="lazy"
    fetchFormat="auto" quality="auto" alt="" responsive />
  ```

[Nuxt Cloudinary documentation](https://cloudinary.nuxtjs.org/)


## Dependencies installed :

* **nuxt**
* **@nuxt/content**
* **@nuxtjs/dayjs**
* **@nuxtjs/cloudinary**
* **@nuxtjs/feed**
* **@nuxtjs/markdownit**
* **vue-social-sharing/nuxt**
* **@nuxtjs/sitemap**
* **@nuxtjs/google-analytics**
* **@nuxtjs/tailwindcss**


## Scripts :

* **dev**: "nuxt",
* **build**: "nuxt build",
* **start**: "nuxt start",
* **generate**: "nuxt generate",
* **serve**: "nuxt serve",
* **production**: "npm run build && nuxt generate",
* **preview**: "nuxt -p 8080"


## NETLIFY | PRODUCTION

### Netlify configuration

Pour déployer le site via Netlify (si vous n'avez pas utilisé le bouton "Deploy to Netlify") :
To deploy the site with Netlify (if you do not use the "Deploy on Netlify" button)
* Create an account on [https://app.netlify.com/](https://app.netlify.com/) website.
* Add site with "New site from Git" button.
* Choose the hosting service for the project.
* Choose the repository.
* In **Build commande**, do "**npm run build && nuxt generate**".
* Push the "Deploy site" button.
* Click on "Domain settings" button.
* Click on "Options" button, "Edit site name" and choose a domain name. For add an a custom domain name, click on "Add custom domain".

### Netlify environnement

If there are entries in the ".env" file of the project, they will have to be copied into Netlify.

* Click on "Site settings", "Build & deploy" then "Environment".
* Click on "Edit variables" then add all environment variables appearing in the ".env" file of the project.


### Netlify forms

The blog is Le blog est compatible with NETLIFY forms.

* In Netlify, click on "Forms" tab.
* In "Active forms" there is an entrance "contact". This is where all the form entries for the "contact" page will be stored.
* To be notified of each new entry, clickk on the "Settings and usage" button.
* Click on the "Form notifications" tab then on "Add notifications".

**With each entry, you will be notified by email, webhook or Slack.**