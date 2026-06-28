# Portfolio Revamp Integration Plan

Bu doküman, `furkanilhan.org` portfolio sitesindeki konumlandırma, proje sunumu, içerik kalitesi, SEO/accessibility ve case study yapısını güçlendirmek için hazırlanmıştır.

Ana hedef: Siteyi “güzel görünen kişisel portfolio” seviyesinden çıkarıp, Furkan’ı daha güçlü şekilde **Frontend-heavy Product Engineer / AI-assisted Product Engineer** olarak konumlandırmak.

---

## 1. Genel Konumlandırma

### Mevcut Algı

Site şu anda görsel olarak karakterli ve temiz duruyor. Ancak içerik tarafında Furkan’ı biraz fazla “öğrenen frontend developer” gibi gösteriyor.

### Yeni Algı

Site şu mesajı vermeli:

> I build frontend-heavy business systems, dashboards, portals, automation flows and client-facing web applications with React, Next.js and TypeScript.

Türkçe karşılığı:

> React, Next.js ve TypeScript ile dashboard, portal, otomasyon akışları ve müşteri arayüzleri geliştiriyorum.

### Konumlandırma Anahtarları

- Frontend-heavy Product Engineer
- Business-focused web applications
- Dashboards & admin panels
- Client portals
- QR-based systems
- Media upload and processing workflows
- Web3 / fintech interfaces
- AI-assisted development with manual architecture and code review

---

## 2. Ana Sayfa Hero Metni

### Mevcut Sorun

Hero metni genel duruyor. “Modern, high-performance web solutions” gibi ifadeler doğru ama pazarda çok yaygın.

### Yeni Hero Önerisi

```txt
I build frontend-heavy business systems, dashboards and client-facing web applications with React, Next.js and TypeScript.
```

### Alt Açıklama

```txt
Experienced in admin panels, Web3 interfaces, QR-based systems, media workflows and automation-focused products.
```

### Alternatif Daha Kısa Versiyon

```txt
Frontend-heavy Product Engineer building dashboards, portals and automation-focused web applications.
```

### Entegrasyon Notu

- Hero metninde “over 2 years of experience” gibi ifadeler varsa daha güçlü bir cümleyle değiştirilebilir.
- Deneyim yılı yazılacaksa daha güvenli ifade:
  - `3+ years of hands-on frontend and product development experience`
- Ana sayfada CTA butonları şu şekilde olabilir:
  - `View Projects`
  - `Contact Me`
  - `Resume`

---

## 3. Projects Sayfası Başlık ve Alt Başlık

### Mevcut Başlık

```txt
Projects
Every project is a journey of learning.
```

### Sorun

“Journey of learning” cümlesi samimi ama biraz junior algısı oluşturuyor.

### Yeni Alt Başlık Önerisi

```txt
Business-focused web applications, dashboards, portals and automation systems built with React, Next.js and TypeScript.
```

### Daha Kısa Alternatif

```txt
Selected web applications, dashboards and product-focused interfaces I’ve built.
```

### Entegrasyon Notu

- Bu cümle `Projects` başlığının altında kullanılmalı.
- Projeler sadece logo/görsel vitrini gibi değil, iş problemi çözen case study’ler gibi sunulmalı.

---

## 4. Proje Kartları Yapısı

### Mevcut Sorun

Kartlar görsel olarak iyi duruyor ama dışarıdan bakan biri kartın gerçek bir web app mi, landing page mi, logo çalışması mı olduğunu hemen anlayamıyor.

### Yeni Kart İçeriği

Her kartta şu bilgiler DOM’da gerçek metin olarak bulunmalı:

```txt
Project Name
Project Type
Short Description
Tech Stack
```

### Örnek Kart İçeriği

```txt
Fit House
QR-Based Gym Attendance System
A gym attendance and lesson tracking system using QR codes, automated lesson deduction and email reminders.
Next.js · TypeScript · QR Flow · Email Automation
```

### Hover İçeriği

Hover durumunda sadece `Click` yazmak yerine:

```txt
View Case Study
```

veya

```txt
Open Project Details
```

kullanılabilir.

### Entegrasyon Notu

- Görsel overlay korunabilir.
- Ancak proje adı ve türü HTML içerisinde okunabilir olmalı.
- Accessibility için kartlarda `aria-label` kullanılmalı.

Örnek:

```tsx
<button aria-label="Open Fit House QR-Based Gym Attendance System project details">
  ...
</button>
```

---

## 5. Modal / Project Detail İçerik Formatı

Her proje modalı aynı formatta olmalı.

### Önerilen Format

```txt
Problem
My Role
Solution
Tech Stack
Result / Status
Links
```

### Neden Bu Format?

Bu yapı projeyi “güzel tasarım” olmaktan çıkarır, “iş problemi çözümü” gibi gösterir.

---

## 6. Galerie QR Güncel İçerik

Galerie QR açıklaması eski kalmış. Artık frontend-only olarak anlatılmamalı. Backend, Next.js full-stack yapı ve VPS kurulumu da eklenecek.

### Eski Algı

```txt
Currently only the frontend is available — the backend is not yet implemented.
```

Bu ifade kaldırılmalı.

### Yeni Kısa Açıklama

```txt
A full-stack event media sharing platform where guests can join via QR code and upload photos or videos to a shared gallery.
```

### Yeni Modal İçeriği

```txt
Problem
Event guests need a simple way to share photos and videos in one shared gallery without installing an app or creating a complicated account.

My Role
Designed and developed the full-stack web application, including the frontend experience, backend flow, QR-based access, media upload logic and VPS deployment.

Solution
Built a QR-based event gallery platform where guests can join an event page, upload their media and view shared memories in a responsive gallery experience.

Tech Stack
Next.js, TypeScript, SCSS, Node.js/Next.js API Routes, VPS Deployment, Media Upload Flow

Infrastructure
Configured and deployed the application on a VPS environment and handled the production setup required for the project.

Result / Status
Built as a functional full-stack event media sharing platform for weddings and private events.
```

### Daha Kısa Modal Versiyonu

```txt
A full-stack event media sharing platform for weddings and private events. Guests can join via QR code, upload photos or videos and view shared memories in a responsive gallery. I designed and developed the frontend, backend flow, QR-based access, media upload logic and VPS deployment with Next.js.
```

### Kart Üzeri Kısa Versiyon

```txt
Galerie QR
Full-Stack Event Media Sharing Platform
QR-based photo and video sharing platform for weddings and private events.
Next.js · TypeScript · VPS · Media Upload
```

---

## 7. Fit House Güncel İçerik

Fit House en güçlü projelerden biri olarak öne alınmalı.

### Kart İçeriği

```txt
Fit House
QR-Based Gym Attendance System
A gym attendance and lesson tracking system with QR check-in, automatic lesson deduction and email reminders.
Next.js · TypeScript · QR Scanner · Email Automation
```

### Modal İçeriği

```txt
Problem
The gym needed a faster and more reliable way to track student attendance and remaining lesson rights.

My Role
Designed and developed the system from scratch, including user management, QR code generation, QR scanning flow, attendance tracking and email automation.

Solution
Built a QR-based attendance system where each student has a unique QR code. When the QR is scanned, the system automatically deducts one lesson and displays a welcome screen.

Tech Stack
Next.js, TypeScript, Database, QR Scanner, Email Automation

Result
Reduced manual tracking, made the check-in process faster and created a clearer lesson tracking workflow for the gym.
```

---

## 8. Balance Network İçeriği

Balance Network kapalı olsa bile güçlü bir case study olarak anlatılmalı.

### Kart İçeriği

```txt
Balance Network
Crypto Exchange Landing Page & Interfaces
Frontend work for a crypto exchange product, including landing pages and Web3-related interface experience.
React · Next.js · TypeScript · Web3
```

### Modal İçeriği

```txt
Problem
A crypto exchange product needed modern frontend interfaces and user-facing web pages.

My Role
Worked as a frontend developer and contributed to React/Next.js interfaces, Web3 wallet connection flows and blockchain-related UI integrations.

Solution
Built and maintained user-facing interfaces, integrated wallet-related flows and supported frontend/backend communication where needed.

Tech Stack
React, Next.js, TypeScript, Web3, Node.js, NestJS

Result
Gained production experience in fintech/Web3 interfaces, wallet connection flows and blockchain-related frontend workflows.
```

### Not

- “Şirket kapandı” bilgisi doğrudan yazılmak zorunda değil.
- “The product is no longer publicly available” gibi daha profesyonel ifade kullanılabilir.

---

## 9. Görmek Lazım İçeriği

E-ticaret tarafında admin ve partner panel yaptıysan bunu açık yazmak önemli.

### Kart İçeriği

```txt
Görmek Lazım
E-commerce Admin & Partner Panels
Admin and partner panel development for an e-commerce platform.
React · TypeScript · Dashboard UI · Panel Development
```

### Modal İçeriği

```txt
Problem
The platform needed internal admin and partner-facing panels to manage operational workflows.

My Role
Developed admin and partner panel interfaces during a short-term contract.

Solution
Built responsive dashboard screens, panel flows and management interfaces based on project requirements.

Tech Stack
React, TypeScript, Dashboard UI, API Integration

Result
Delivered admin and partner panel interfaces within the contract period.
```

---

## 10. F-Ball İçeriği

F-Ball yaratıcı ve ürün bakışını gösteren bir proje. Ancak işveren için ilk sırada olmamalı.

### Kart İçeriği

```txt
F-Ball
Football Party Game Platform
A football-themed web game platform designed for friends to play guessing and challenge games together.
Next.js · TypeScript · Game Logic · UI Design
```

### Modal İçeriği

```txt
Problem
Football fans often play verbal guessing games with friends, but there are few simple web-based tools designed specifically for this experience.

My Role
Designed and developed the product concept, UI, game flows and frontend logic.

Solution
Built a football-themed game platform with multiple game modes, interactive flows and a playful visual identity.

Tech Stack
Next.js, TypeScript, UI Design, Game Logic

Result
Created a product-style web application that demonstrates UI thinking, game flow design and frontend implementation.
```

---

## 11. f-solve İçeriği

f-solve portfolio’da yer alabilir ama “web sitesi satarım” gibi değil, kişisel service brand / productized service denemesi gibi anlatılmalı.

### Kart İçeriği

```txt
f-solve
Premium Web & Product Studio Concept
A personal service brand focused on premium web interfaces, landing pages and product-focused frontend work.
Next.js · TypeScript · Branding · UI Design
```

### Modal İçeriği

```txt
Problem
I wanted to create a focused service brand to present my frontend, UI and product development work in a more premium way.

My Role
Designed and developed the brand identity, landing page, UI direction and service positioning.

Solution
Created a minimal and premium-looking web presence for frontend development, landing pages and product-focused digital experiences.

Tech Stack
Next.js, TypeScript, UI Design, Branding

Result
Built a personal service brand experiment that helped me clarify my positioning and presentation style.
```

---

## 12. Proje Sıralaması

Projeler teknik ve kariyer değeri yüksek olana göre sıralanmalı.

### Önerilen Sıra

1. Fit House — QR-Based Gym Attendance System
2. Galerie QR — Full-Stack Event Media Sharing Platform
3. Görmek Lazım — E-commerce Admin & Partner Panels
4. Balance Network — Crypto Exchange Interfaces
5. F-Ball — Football Party Game Platform
6. f-solve — Premium Web & Product Studio Concept

### Neden Bu Sıra?

- İlk iki proje gerçek işletme problemi çözüyor.
- Üçüncü proje admin/partner panel tecrübesini gösteriyor.
- Balance Network fintech/Web3 deneyimi için güçlü.
- F-Ball yaratıcılığı gösteriyor.
- f-solve kişisel marka denemesi olarak en sonda daha anlamlı.

---

## 13. About Sayfası Güncellemesi

### Mevcut Sorun

“Frontend Developer based in Istanbul” doğru ama çok genel.

### Yeni About Giriş Metni

```txt
I’m a frontend-heavy product engineer based in Istanbul, building dashboards, portals, automation flows and client-facing web applications with React, Next.js and TypeScript.
```

### Devam Metni

```txt
My experience includes admin panels, partner portals, Web3 interfaces, QR-based systems, media upload workflows and small backend integrations. I use AI tools to move faster, but I stay responsible for architecture, code review, edge cases and product quality.
```

### Skill Gruplama

Skills bölümü tek liste olmak yerine gruplara ayrılmalı:

```txt
Frontend
React, Next.js, TypeScript, JavaScript, Tailwind CSS, SCSS

Backend & Systems
Node.js, NestJS, REST APIs, PostgreSQL, Queue/Worker Flows, VPS Deployment

Product Work
Dashboards, Admin Panels, Client Portals, QR Systems, Media Upload Workflows

Integrations
Web3, Shopify Liquid, Email Automation, Analytics
```

---

## 14. Contact Sayfası Güncellemesi

### Mevcut Sorun

“Anything that helps me grow” ifadesi junior algısı oluşturabilir.

### Yeni Contact Metni

```txt
Open to remote frontend roles, product-focused web applications, dashboard projects and freelance collaborations.
```

### Alternatif

```txt
Have a frontend-heavy product, dashboard, portal or automation project in mind? Let’s talk.
```

---

## 15. Resume / CV Güncellemesi

### İngilizce Seviyesi

Mevcut seviye gerçek konuşma performansıyla tutarlı değilse fazla iddialı yazılmamalı.

Önerilen ifade:

```txt
English: Intermediate — actively improving for technical communication
```

İngilizce mülakat performansı güçlendikten sonra:

```txt
English: Professional Working Proficiency
```

olarak güncellenebilir.

### CV Pozisyon Başlığı

```txt
Frontend-heavy Product Engineer
```

veya

```txt
Frontend Developer | React, Next.js, TypeScript
```

Eğer daha güvenli durması istenirse ikinci seçenek kullanılabilir.

---

## 16. Blog Sayfası Dil Stratejisi

### Sorun

Site İngilizce, blog Türkçe ise bu bilinçli şekilde açıklanmalı.

### Blog Açıklama Önerisi

```txt
Technical notes in Turkish about frontend development, Next.js, security, tooling and real-world development problems.
```

### Alternatif

Eğer hedef yurt dışı iş ise ileride bazı yazılar İngilizceye çevrilebilir.

Öncelikli çevrilebilecek yazılar:

- Next.js Cheat Sheet
- Vercel Security Incident
- AI-assisted frontend workflow
- How I built a QR-based gym attendance system

---

## 17. SEO ve Accessibility Kontrol Listesi

### Yapılacaklar

- Her proje kartında gerçek text content olmalı.
- Görsel kartlara anlamlı `alt` text eklenmeli.
- Modal açan elementler `button` olmalı.
- `aria-label` kullanılmalı.
- Klavye ile modal açılıp kapanabilmeli.
- `Esc` ile modal kapanmalı.
- Modal açıldığında focus modal içine taşınmalı.
- Modal kapanınca focus eski karta dönmeli.
- Başlık hiyerarşisi düzgün olmalı:
  - `h1`: Projects
  - `h2`: Project names
- Hero’daki animasyonlu harfler SEO için gerçek metni bozuyorsa `aria-label` veya görünmeyen text kullanılmalı.
- Proje sayfasına JSON-LD eklenebilir.
- Her proje için Open Graph image kullanılabilir.

---

## 18. Data Structure Önerisi

Projeler hardcoded ise bile tek bir data array üzerinden yönetilmeli.

```ts
type Project = {
  title: string;
  type: string;
  shortDescription: string;
  problem: string;
  role: string;
  solution: string;
  stack: string[];
  infrastructure?: string;
  result: string;
  image: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  status?: string;
};
```

Örnek:

```ts
const projects: Project[] = [
  {
    title: "Galerie QR",
    type: "Full-Stack Event Media Sharing Platform",
    shortDescription:
      "QR-based photo and video sharing platform for weddings and private events.",
    problem:
      "Event guests need a simple way to share photos and videos in one shared gallery without installing an app.",
    role:
      "Designed and developed the full-stack web application, including frontend experience, backend flow, QR-based access, media upload logic and VPS deployment.",
    solution:
      "Built a QR-based event gallery platform where guests can join an event page, upload their media and view shared memories in a responsive gallery experience.",
    stack: ["Next.js", "TypeScript", "SCSS", "VPS", "Media Upload"],
    infrastructure:
      "Configured and deployed the application on a VPS environment and handled the production setup required for the project.",
    result:
      "Built as a functional full-stack event media sharing platform for weddings and private events.",
    image: "/projects/galerie-qr.webp",
    liveUrl: "https://www.galerieqr.com",
    status: "Functional full-stack project"
  }
];
```

---

## 19. Implementation Checklist

### Content

- [ ] Hero metni güncellendi.
- [ ] About metni yeniden yazıldı.
- [ ] Skills kategorilere ayrıldı.
- [ ] Projects alt başlığı değiştirildi.
- [ ] Proje sıralaması güncellendi.
- [ ] Her proje için kısa açıklama eklendi.
- [ ] Her proje için `Problem / My Role / Solution / Stack / Result` alanları eklendi.
- [ ] Galerie QR frontend-only açıklaması kaldırıldı.
- [ ] Galerie QR backend, VPS ve full-stack detayları eklendi.
- [ ] Contact metni daha profesyonel hale getirildi.
- [ ] Blog açıklaması dil stratejisine göre güncellendi.
- [ ] CV İngilizce seviyesi gerçekçi hale getirildi.

### UI

- [ ] Kartlarda proje adı görünür hale getirildi.
- [ ] Kartlarda proje türü görünür hale getirildi.
- [ ] Hover’daki `Click` metni `View Case Study` veya `Open Project Details` olarak değiştirildi.
- [ ] Modal içerik formatı standardize edildi.
- [ ] Tech stack badge’leri düzenlendi.
- [ ] Live link ve case study linkleri ayrıştırıldı.

### Accessibility

- [ ] Proje kartları `button` veya semantic clickable element olarak düzenlendi.
- [ ] `aria-label` eklendi.
- [ ] Görseller için anlamlı `alt` text eklendi.
- [ ] Modal focus management eklendi.
- [ ] `Esc` ile modal kapatma eklendi.
- [ ] Modal kapanınca focus önceki karta döndürüldü.
- [ ] Heading hiyerarşisi kontrol edildi.

### SEO

- [ ] Her sayfaya doğru `title` ve `description` eklendi.
- [ ] Project sayfasına daha açıklayıcı meta description eklendi.
- [ ] Proje isimleri DOM içinde gerçek text olarak yer aldı.
- [ ] Hero animasyonu SEO/accessibility açısından kontrol edildi.
- [ ] Open Graph title/image/description kontrol edildi.
- [ ] Sitemap ve robots ayarları kontrol edildi.

---

## 20. Cursor / AI Agent Prompt

Aşağıdaki prompt doğrudan Cursor/Codex gibi bir araca verilebilir.

```txt
Update my personal portfolio project presentation based on the following requirements.

Goal:
Reposition the site from a generic frontend portfolio to a stronger "Frontend-heavy Product Engineer" portfolio focused on dashboards, portals, automation systems, QR-based systems, media workflows and client-facing web applications.

Tasks:
1. Update the homepage hero copy:
   - Main: "I build frontend-heavy business systems, dashboards and client-facing web applications with React, Next.js and TypeScript."
   - Sub: "Experienced in admin panels, Web3 interfaces, QR-based systems, media workflows and automation-focused products."

2. Update the Projects page subtitle:
   - "Business-focused web applications, dashboards, portals and automation systems built with React, Next.js and TypeScript."

3. Refactor project data so each project includes:
   - title
   - type
   - shortDescription
   - problem
   - role
   - solution
   - stack
   - infrastructure optional
   - result
   - image
   - liveUrl optional
   - caseStudyUrl optional
   - status optional

4. Update project cards to show:
   - project title
   - project type
   - short description
   - stack preview
   Keep the visual image style, but make the cards more informative.

5. Replace hover text "Click" with "View Case Study" or "Open Project Details".

6. Standardize project modals with:
   - Problem
   - My Role
   - Solution
   - Tech Stack
   - Infrastructure if available
   - Result / Status
   - Links

7. Update Galerie QR:
   - Remove any text saying the backend is not implemented.
   - Present it as a full-stack event media sharing platform.
   - Include frontend, backend flow, QR-based access, media upload logic and VPS deployment.
   - Stack: Next.js, TypeScript, SCSS, VPS Deployment, Media Upload Flow.

8. Reorder projects:
   1. Fit House
   2. Galerie QR
   3. Görmek Lazım
   4. Balance Network
   5. F-Ball
   6. f-solve

9. Update About page:
   - Position me as a frontend-heavy product engineer based in Istanbul.
   - Mention dashboards, portals, automation flows, QR systems, media upload workflows, Web3 interfaces and small backend integrations.
   - Group skills into Frontend, Backend & Systems, Product Work and Integrations.

10. Update Contact page copy:
   - "Open to remote frontend roles, product-focused web applications, dashboard projects and freelance collaborations."

11. Improve accessibility:
   - Project cards should be semantic buttons or accessible clickable elements.
   - Add aria-labels.
   - Add meaningful alt text.
   - Ensure modal can be closed with Esc.
   - Manage focus when modal opens and closes.

12. Improve SEO:
   - Ensure project names and descriptions are real DOM text.
   - Add/update metadata for homepage, about, projects, blog and contact pages.
   - Check heading hierarchy.
   - Make sure animated hero text does not harm accessibility or SEO.

Keep the current visual style as much as possible. Do not redesign the entire website. Focus on stronger content, clearer positioning, better project presentation and accessibility/SEO improvements.
```

---

## 21. Acceptance Criteria

Bu değişiklikler bittiğinde site şu standartları karşılamalı:

- 10 saniyede Furkan’ın ne yaptığı anlaşılmalı.
- Projeler sadece logo/görsel değil, iş problemi çözen case study gibi görünmeli.
- Galerie QR artık yarım proje gibi değil, full-stack proje gibi anlatılmalı.
- Fit House ve Galerie QR ilk bakışta güçlü teknik/product işler gibi durmalı.
- Contact sayfası daha profesyonel ve iş odaklı görünmeli.
- Blog dil tercihi bilinçli görünmeli.
- Accessibility tarafında modal ve kart etkileşimleri klavye ile kullanılabilir olmalı.
- SEO tarafında proje isimleri ve açıklamaları gerçek text olarak okunabilir olmalı.
- Site Furkan’ı “web sitesi yapan frontendci” değil, “ürün ve iş akışı kurabilen frontend-heavy engineer” olarak göstermeli.
