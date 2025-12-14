
# Todo List V2

Bu proje, görevlerinizi organize etmenizi sağlayan, verileri tarayıcı hafızasında (Local Storage) saklayan modern bir React uygulamasıdır. Vite ile geliştirilmiş olup, sade ve işlevsel bir arayüze sahiptir.

## 🚀 Özellikler

- **Görev Ekleme**: Kullanıcı dostu arayüz ile hızlıca yeni görevler ekleyebilme.
- **Görev Silme**: Tamamlanan veya istenmeyen görevleri listeden kaldırabilme.
- **Tamamlandı İşaretleme**: Görevleri yapıldı/yapılmadı olarak işaretleyebilme (Check/Uncheck).
- **Veri Kalıcılığı**: `localStorage` entegrasyonu sayesinde sayfa yenilense bile verilerin kaybolmaması.
- **Bileşen Tabanlı Yapı**: `GetTodo` ve `AddTodo` gibi modüler bileşen mimarisi.
- **Modern İkonlar**: React Icons kütüphanesi ile şık görsel ikonlar.
- **State Yönetimi**: React `useState` ve `useEffect` hook'ları ile dinamik veri yönetimi.

## 📂 Proje Yapısı

- `src/App.jsx`: Uygulamanın ana kapsayıcısı.
- `src/components/GetTodo.jsx`: Ana iş mantığının döndüğü bileşen. Yeni todo ekleme input'unu barındırır, listeyi yönetir ve Local Storage işlemlerini gerçekleştirir.
- `src/components/AddTodo.jsx`: Tekil bir todo öğesini temsil eden bileşen. Görevi görüntüler, silme ve işaretleme butonlarını içerir.
- `src/App.css`: Uygulama genelindeki stillendirmeler.
- `src/main.jsx`: React uygulamasının DOM'a render edildiği giriş noktası.
- `vite.config.js`: Vite yapılandırma dosyası.

## 💻 Kullanılan Teknolojiler ve Yazılım Dilleri

- React
- Vite
- JavaScript (ES Modules)
- CSS3
- React Icons
- Local Storage API

## 🛠 Kurulum ve Kullanım

Projeyi yerelde çalıştırmak için:

1. Node.js bilgisayarınızda kurulu olmalı: https://nodejs.org (LTS sürümünü yükleyin)
2. Bu projeyi bilgisayarınıza indirin/klonlayın
3. Proje klasörüne girin
4. Terminal/Powershell'i bu klasörde açın
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
1. Üretim için optimize build almak:
     ```bash
     npm run build
     ```
2. Ardından önizleme için:
     ```bash
     npm run preview
     ```

## 📜 License
Bu proje **MIT lisansı** altında sunulmaktadır. Daha fazla bilgi için LICENSE dosyasına göz atabilirsiniz
