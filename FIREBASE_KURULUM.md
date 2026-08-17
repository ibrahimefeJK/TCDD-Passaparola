# Firebase ve GitHub Pages kurulumu

Online odaların çalışması için bir defaya mahsus şu ayarlar yapılmalıdır:

1. Firebase Console'da yeni bir proje ve Web uygulaması oluşturun.
2. Authentication > Sign-in method bölümünde **Anonymous (Anonim)** oturum açmayı etkinleştirin.
3. Realtime Database oluşturun. Veritabanı adresi dahil Web yapılandırma değerlerini `firebase-config.js` dosyasına girin.
4. Realtime Database > Rules alanına `firebase.rules.json` dosyasındaki `rules` nesnesini yapıştırıp yayımlayın.
5. Projenin tamamını GitHub deposuna gönderin ve Settings > Pages bölümünde ana dalı yayımlayın.

PWA kurulumu ve servis çalışanı yalnızca HTTPS üzerinde veya yerel geliştirmede `localhost` üzerinden çalışır. `index.html` dosyasını doğrudan çift tıklayarak açmak çevrimdışı oyun arayüzünü gösterir fakat kurulum düğmesini ve çevrimiçi altyapıyı etkinleştirmez.

Öğretmen PIN'i yönetim panelindeki Genel Ayarlar bölümünden değiştirilir. Oda oluşturulurken mevcut yerel soru bankasının yalnızca aktif harf ve seçili soruları Firebase odasına gönderilir.
