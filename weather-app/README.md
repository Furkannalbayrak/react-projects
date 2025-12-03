# Weather App

Bu proje, istediğiniz şehrin anlık hava durumu verilerine hızlı ve basit bir şekilde ulaşmanızı sağlayan bir React uygulamasıdır. Vite ile oluşturulmuş olup modern ve optimize bir yapı sunar. Hava durumu verileri, [OpenWeatherMap API](https://openweathermap.org/) üzerinden anlık olarak çekilmektedir.

## 🚀 Özellikler

- **Şehir Bazlı Arama**: Kullanıcıdan alınan şehir ismine göre anlık veri sorgulama.
- **Detaylı Hava Durumu**: Sıcaklık, hissedilen sıcaklık, nem oranı, rüzgar hızı ve hava durumu açıklaması.
- **Dinamik Arka Plan**: CSS ile özelleştirilmiş, göze hitap eden arayüz.
- **Hata Yönetimi**: Geçersiz şehir girildiğinde veya boş bırakıldığında kullanıcıyı uyarma sistemi.
- **Hızlı Geliştirme**: Vite ile hızlı başlatma ve geliştirme deneyimi.
- **Responsive Tasarım**: Mobil ve masaüstü cihazlarla uyumlu esnek yapı.

## 📂 Proje Yapısı

- `src/App.jsx`: Uygulamanın ana mantığı; API isteklerinin atıldığı ve verilerin işlendiği bileşen.
- `src/App.css`: Arka plan, input alanları ve sonuç kartları için özelleştirilmiş stiller.
- `src/main.jsx`: Uygulama giriş noktası.
- `vite.config.js`: Vite yapılandırması.

## 💻 Kullanılan Teknolojiler ve Yazılım Dilleri
- React
- Vite
- JavaScript (ES Modules)
- CSS
- Axios (HTTP istekleri için)

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

6. **Önemli:** Projenin ana dizininde `.env` adında bir dosya oluşturun ve OpenWeatherMap API anahtarınızı içine şu şekilde ekleyin:
     ```env
     VITE_OPENWEATHERMAP_KEY=sizin_api_anahtariniz
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