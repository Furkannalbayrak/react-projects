# FilmCeNNeti - Film Arama Uygulaması

Bu proje, geniş bir film arşivinde arama yapmanızı ve filmlerin detaylı bilgilerine ulaşmanızı sağlayan modern bir React uygulamasıdır. Vite ile oluşturulmuş olup Tailwind CSS ile şık ve responsive bir tasarım sunar. Film verileri, [OMDb API](http://www.omdbapi.com/) üzerinden anlık olarak çekilmektedir.

## 🚀 Özellikler

- **Anlık Film Arama**: Kullanıcı girişine göre dinamik olarak filtrelenen arama sonuçları.
- **Detaylı Film Sayfası**: Seçilen filmin afişi, IMDb puanı, oyuncu kadrosu, yönetmeni, konusu ve ödülleri gibi detaylı bilgiler.
- **Popüler Filmler**: Açılışta otomatik olarak listelenen kült ve popüler filmler.
- **Modern Arayüz**: Tailwind CSS ile tasarlanmış, karanlık mod (Dark Mode) temalı şık görünüm.
- **Sayfa Yönlendirmesi**: React Router ile film listesi ve detay sayfası arasında akıcı geçişler.
- **Responsive Tasarım**: Mobil ve masaüstü cihazlara tam uyumlu ızgara (grid) yapısı.

## 📂 Proje Yapısı

- `src/components/Home.jsx`: Ana sayfa; arama çubuğunu ve film listesini (popüler veya arama sonucu) içerir.
- `src/components/MovieDetails.jsx`: Film detay sayfası; seçilen filmin tüm bilgilerini API'den çekip gösterir.
- `src/components/MovieList.jsx`: Her bir film kartının tasarımını ve tıklama olaylarını yöneten bileşen.
- `src/config/RouterConfig.jsx`: Sayfa yönlendirmeleri ve route tanımlamalarının yapıldığı dosya.
- `src/App.jsx`: Uygulamanın ana kapsayıcısı.
- `src/main.jsx`: Uygulama giriş noktası.
- `vite.config.js`: Vite yapılandırması.

## 💻 Kullanılan Teknolojiler ve Yazılım Dilleri
- React
- Vite
- Tailwind CSS
- React Router DOM (Sayfa Yönlendirme)
- Axios (HTTP istekleri için)
- React Icons

## 🛠 Kurulum ve Kullanım

Projeyi yerelde çalıştırmak için:

1. Node.js bilgisayarınızda kurulu olmalı: https://nodejs.org (LTS sürümü önerilir)
2. Bu projeyi bilgisayarınıza indirin/klonlayın
3. Proje klasörüne girin
4. Terminal/Powershell’i bu klasörde açın
5. Bağımlılıkları yükleyin
     ```bash
     npm install
     ```

6. **Önemli:** Projenin ana dizininde `.env` adında bir dosya oluşturun ve OMDb API anahtarınızı içine şu şekilde ekleyin:
     ```env
     VITE_OMDBAPI_KEY=sizin_api_anahtariniz
     ```

7. Geliştirme sunucusunu başlatın
     ```bash
     npm run dev
     ```
     
8. Tarayıcıda verilen yerel adresi ziyaret edin (örn. `http://localhost:5173`).

### Build Alma
1. Üretim için optimize build almak:
     ```bash
     npm run build
     ```
2. Ardından önizleme için:
     ```bash
     npm run preview
     ```

## 📜 License
Bu proje **MIT lisansı** altında sunulmaktadır. Daha fazla bilgi için LICENSE dosyasına göz atabilirsiniz.