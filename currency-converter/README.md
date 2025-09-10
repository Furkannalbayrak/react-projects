# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Currency Converter

Bu proje, farklı para birimleri arasında hızlı ve basit şekilde dönüşüm yapmanızı sağlayan bir React uygulamasıdır. Vite ile oluşturulmuş olup anında yenileme ve optimize build desteği sunar. Kur bilgileri, **FreeCurrencyAPI** üzerinden çekilmektedir.

## 🚀 Özellikler

- **Anlık kur çevirme**: Miktar girerek iki para birimi arasında dönüşüm yapın.
- **Desteklenen birimler**: USD, EUR, TRY (kolayca genişletilebilir).
- **Basit ve anlaşılır arayüz**: Tek ekranda giriş, birim seçimi ve sonuç.
- **Bileşen tabanlı mimari**: `Currency`, `App` gibi yeniden kullanılabilir bileşenler.
- **Hızlı geliştirme**: Vite ile hızlı başlatma ve geliştirme deneyimi.
- **Responsive tasarım**: Farklı ekran boyutlarına uyumlu, mobil ve masaüstü cihazlarda düzgün görüntüleme.

## 📂 Proje Yapısı

- `src/App.jsx`: Uygulama kabuğu; `Currency` bileşenini render eder.
- `src/Components/currency.jsx`: Kur verisini API'den çekip dönüşümü yapan ana bileşen.
- `src/css/currency.css`: Arayüz stilleri.
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

1. Node.js bilgisayarınızda kurulu olmalı: `https://nodejs.org` (LTS sürümü önerilir)
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
1. Üretim içim optimize build almak:
     ```bash
     npm run build
     ```
2. Ardından önizleme için:
     ```bash
     npm run preview
     ```

## 📜 License
Bu proje **MIT lisansı** altında sunulmaktadır. Daha fazla bilgi için LICENSE dosyasına göz atabilirsiniz
