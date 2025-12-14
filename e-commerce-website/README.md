# E-Commerce Website

Bu proje, modern bir e-ticet deneyimi sunan bir React uygulamasıdır. Vite ile oluşturulmuş olup anında yenileme ve optimize build desteği sunar. Redux Toolkit ile durum yönetimi sağlanmıştır. Ürün verileri, [Fake Store API](https://fakestoreapi.com/) üzerinden çekilmektedir.


## 🚀 Özellikler

- **Ürün Listeleme**: Kategorilere göre ürünlerin listelenmesi
- **Sepet İşlemleri**: Ürün ekleme, silme ve toplam tutar hesaplama
- **Kullanıcı Dostu Arayüz**: Material-UI ile oluşturulmuş modern ve responsive tasarım
- **Hızlı Arama**: Ürünler arasında hızlı arama yapabilme
- **Sepet Özeti**: Sağ tarafta açılan sepet paneli ile kolay alışveriş deneyimi


## 📂 Proje Yapısı

- `src/main.jsx`: Uygulamanın giriş noktası; React DOM render işlemini başlatır.
- `src/App.jsx`: Ana uygulama kabuğu; genel düzeni ve stilleri kapsar.
- `src/config/RouterConfig.jsx`: Sayfa yönlendirmeleri ve route tanımlamaları (React Router).
- `src/redux/store.jsx`: Global durum yönetimi için Redux store yapılandırması.
- `src/redux/slices/`: Uygulama durumu parçaları (`appSlice`, `basketSlice`, `productSlice`).
- `src/pages/Home.jsx`: Ana sayfa bileşeni.
- `src/components/Header.jsx`: Üst menü, logo ve sepet ikonunu içeren bileşen.
- `src/components/ProductList.jsx`: Ürünleri listeleyen ana konteyner bileşen.
- `src/components/Urun.jsx`: Listedeki her bir ürünü temsil eden kart bileşeni.
- `src/components/ProductDetails.jsx`: Seçilen ürünün detay bilgilerini gösteren bileşen.
- `src/components/Loading.jsx`: Veri çekilirken gösterilen yükleniyor ekranı.
- `src/css/`: Bileşenlere özgü stil dosyaları (`Header.css`, `ProductDetails.css`, `Basket.css` vb.).


## 💻 Kullanılan Teknolojiler ve Yazılım Dilleri
- React
- JavaScript (ES Modules)
- CSS
- React Router DOM
- Redux Toolkit
- Material-UI (MUI)
- Axios
- React Icons
- Vite

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
