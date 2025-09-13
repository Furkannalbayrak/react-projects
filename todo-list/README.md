# Todo List App
Bu proje benim React alanındaki ilk todo uygulamamdır. Görev ekleme, düzenleme ve silme işlemlerini gerçekleştirebilen modern ve kullanıcı dostu bir React uygulamasıdır. Vite ile oluşturulmuş olup hızlı geliştirme deneyimi sunar. Responsive tasarımı sayesinde mobil ve masaüstü cihazlarda mükemmel çalışır.


## 🚀 Özellikler

- **Görev ekleme**: Yeni todo görevleri kolayca ekleyebilme.
- **Görev düzenleme**: Mevcut görevleri yerinde düzenleyebilme.
- **Görev silme**: İstenmeyen görevleri tek tıkla silebilme.
- **Bileşen tabanlı mimari**: `TodoCreate`, `ShowTodo`, `TodoList` gibi yeniden kullanılabilir bileşenler.
- **State yönetimi**: React useState hook'u ile etkili durum yönetimi.
- **Modern UI/UX**: Güzel görsel tasarım ve smooth animasyonlar.
- **Responsive tasarım**: Farklı ekran boyutlarına uyumlu, mobil ve masaüstü cihazlarda düzgün görüntüleme.
- **Icon desteği**: React Icons ile modern ve anlaşılır ikonlar.


## 📂 Proje Yapısı

- `src/App.jsx`: Ana uygulama bileşeni; todo state yönetimi ve CRUD işlemleri.
- `src/components/TodoCreate.jsx`: Yeni todo ekleme formu bileşeni.
- `src/components/ShowTodo.jsx`: Todo listesini render eden ana bileşen.
- `src/components/TodoList.jsx`: Tekil todo item'ını gösteren ve düzenleme/silme işlemlerini yapan bileşen.
- `src/App.css`: Ana stil dosyası, responsive tasarım ve animasyonlar.
- `src/index.css`: Global stil tanımlamaları.
- `src/background-img/todo-list-background.jpg`: Uygulama arka plan görseli.
- `src/main.jsx`: Uygulama giriş noktası.
- `vite.config.js`: Vite yapılandırması.


## 💻 Kullanılan Teknolojiler ve Yazılım Dilleri
- React 19.0.0
- Vite
- JavaScript (ES Modules)
- CSS3
- React Icons


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