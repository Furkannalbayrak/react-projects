# Programming Languages
Bu proje, farklı yazılım dillerini birer kart olarak listeleyen basit ve işlevsel bir React uygulamasıdır. Kartlarda dilin görseli, adı, kısa açıklaması, fiyatı ve harici bir bağlantı için "Daha fazla görüntüle" linki yer alır. Vite ile oluşturulmuş olup hızlı geliştirme deneyimi sunar.

## 🚀 Özellikler

- **Kart listesi**: Her dil için görsel, başlık, açıklama ve fiyat gösterimi.
- **Harici bağlantı**: "Daha fazla görüntüle" ile her kart için dış bağlantı.
- **Bileşen tabanlı mimari**: `Header`, `Course`, `App` gibi yeniden kullanılabilir bileşenler.
- **Statik veri kaynağı**: `src/Data.jsx` içinde düzenlenebilir veri.
- **Hızlı geliştirme**: Vite ile anında yenileme ve optimize build.

## 📂 Proje Yapısı

- `src/App.jsx`: Uygulama kabuğu; başlık ve kurs kartları listesini render eder.
- `src/Header.jsx`: Sayfa başlığını ("Yazılım Dilleri") gösteren bileşen.
- `src/Course.jsx`: Tek bir kurs/dil kartını render eden bileşen.
- `src/Data.jsx`: Kartlarda gösterilecek verilerin (id, title, description, price, link, image) tutulduğu dizi.
- `src/css/course.css` ve `src/css/header.css`: Kart ve başlık stilleri.
- `src/images/*`: Kart görselleri (C, Java, JavaScript, Python).
- `src/main.jsx`: Uygulama giriş noktası.
- `vite.config.js`: Vite yapılandırması.

## 💻 Kullanılan Teknolojiler ve Yazılım Dilleri
- React
- Vite
- JavaScript (ES Modules)
- CSS

## 🛠 Kurulum ve Kullanım

Projeyi yerelde çalıştırmak için:

1. Node.js bilgisayarınızda kurulu olmalı: https://nodejs.org (LTS sürümünü yükleyin)
2. Bu projeyi bilgisayarınıza indirin/klonlayın
3. Proje klasörüne girin
4. Terminal/Powershell’i bu klasörde açın
5. Bağımlılıkları yükleyin
     ```bash
     npm install
     ```

6. Geliştirme sunucusunu başlatın
     ```bash
     npm run dev
     ```

7. Tarayıcıda verilen yerel adresi ziyaret edin (örn. `http://localhost:5173`).

### Build Alma
Üretim için optimize build almak:
```bash
npm run build
```
Ardından önizleme için:
```bash
npm run preview
```

## 📜 License
Bu proje MIT lisansı altında sunulabilir. Kullanmak isterseniz repoya bir `LICENSE` dosyası ekleyin ya da lisansı `MIT` olarak belirtin.


