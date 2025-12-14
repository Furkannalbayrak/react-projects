# GitHub User Search

Bu proje, GitHub kullanıcılarını aramanızı, profillerini detaylı bir şekilde incelemenizi, depolarını (repos) ve son aktivitelerini görüntülemenizi sağlayan gelişmiş bir React uygulamasıdır. Veri akışı ve durum yönetimi **Redux Toolkit** ile sağlanmış olup, **GitHub API** üzerinden gerçek zamanlı veri çekmektedir.

## 🚀 Özellikler

- **Kullanıcı Arama**: GitHub kullanıcı adıyla anlık profil sorgulama.
- **Detaylı Profil Kartı**: Avatar, biyografi, takipçi/takip edilen sayıları, şirket, konum ve iletişim bilgileri.
- **Repo Listeleme**: Kullanıcının son repolarını; dil, görünürlük, fork ve izlenme (watchers) sayılarıyla listeleme.
- **Aktivite Akışı (Events)**: Kullanıcının son yaptığı işlemleri (Push, Star, Fork, Create) tarih ve tür bilgisiyle görüntüleme.
- **Gelişmiş State Yönetimi**: Redux Toolkit (createAsyncThunk) ile asenkron veri çekme ve yönetimi.
- **Yüklenme Ekranı**: Veri çekilirken Material UI destekli modern bir loading animasyonu.
- **Hata Yönetimi**: Geçersiz kullanıcı aramalarında bilgilendirme mesajı.
- **Responsive Tasarım**: Mobil ve masaüstü cihazlara uyumlu, karanlık mod (Dark Theme) arayüzü.

## 📂 Proje Yapısı

- `src/components/GitHubUser.jsx`: Kullanıcı profil kartının, repo gridinin ve event listesinin render edildiği ana bileşen.
- `src/components/Repos.jsx`: Tekil repo kartı tasarımı (Dil, yıldız sayısı vb.).
- `src/components/Events.jsx`: Kullanıcı aktivitelerini (Push, Star vb.) biçimlendirip gösteren bileşen.
- `src/components/Loading.jsx`: Material UI Backdrop ile oluşturulmuş yüklenme animasyonu.
- `src/redux/githubSlice.jsx`: API isteklerinin (Thunks) ve state (user, repos, events) yönetiminin yapıldığı Redux dilimi.
- `src/redux/store.js`: Redux store yapılandırması.
- `src/App.jsx`: Arama çubuğu ve ana uygulama iskeleti.
- `src/css/`: Bileşenlere özel stil dosyaları (`events.css`, `repos.css`, `userInformation.css`).
- `src/main.jsx`: Uygulama giriş noktası.
- `vite.config.js`: Vite yapılandırması.

## 💻 Kullanılan Teknolojiler ve Yazılım Dilleri
- React
- Vite
- JavaScript (ES Modules)
- Redux Toolkit (Global State & Async Thunk)
- Axios (HTTP İstekleri)
- Material UI
- React Icons
- CSS3 (Responsive & Flexbox)

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