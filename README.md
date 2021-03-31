# nuxt-ssr-firebase
NuxtJS SSR Firebase Hosting Boilerplate

## Gerekli Uygulamalar
Dosyaların senkronize edilmesi için rsync kurulumu yapılmalı https://itefix.net/cwrsync

# src Nuxt Dizini
src içinde nuxt projesi mevcut vuetiyf ile çalışan buildDir parametresi ve vuetify için builde tanımlama yapıldı dikkat edilmesi gerekiyor

# Önemli
src içinde hangi ekstra paketler varsa prod/firebase deki dizin de aynı node js paketleri yüklenmeli

## Firebase
.firebaserc.sample dosyasının ismi .firebaserc olarak değiştirip proje kodu dosya içine yazılmalı. Eğer ilk defa kurulum yapılıyorsa firebase console dan firestore ve bölge seçimlerine dikkat etmekte fayda var

## Yarn Setup
yarn setup ile gerekli dosyaların kurulumu yapılır

.firebaserc.sample dosyasının ismi .firebaserc olarak değiştirilip içindeki proje kodu 
düzenlenmeli

## Projenin Çalıştırılıması

# Development 
yarn dev

# Firebase Emulator ile

yarn serve

# Deploy Etme

yarn deploy