# Next.js Cheat Sheet (2026)

Bu rehber, modern Next.js geliştiricilerinin günlük hayatta en çok kullandığı özellikleri tek bir yerde topluyor. Özellikle App Router, Server Components, Server Actions ve performans optimizasyonlarına odaklanıyor.

---

# 1. Proje Yapısı

Yeni bir Next.js projesi oluşturmak için:

```bash
npx create-next-app@latest
```

Önemli klasörler:

```txt
app/
├── page.tsx
├── layout.tsx
├── loading.tsx
├── error.tsx
```

* `page.tsx` → Sayfa
* `layout.tsx` → Ortak layout
* `loading.tsx` → Yüklenme ekranı
* `error.tsx` → Hata yakalama ekranı

---

# 2. App Router

Next.js'in artık önerdiği yapı App Router'dır.

Örnek:

```txt
app/
├── about/
│   └── page.tsx
├── blog/
│   └── [slug]/
│       └── page.tsx
```

Avantajları:

* Nested Layouts
* Daha iyi veri çekme
* Server Components desteği
* Streaming desteği

---

# 3. Server Components vs Client Components

## Server Component (Varsayılan)

```tsx
export default async function Page() {
  const data = await fetch(...)
}
```

### Avantajları

* Daha az JavaScript gönderir
* SEO dostudur
* Daha performanslıdır

## Client Component

```tsx
"use client";
```

### Gerektiği Durumlar

* useState
* useEffect
* Event Handler'lar
* Browser API'leri

### Temel Kural

> Önce Server Component düşün, mecbur kalırsan Client Component kullan.

---

# 4. Veri Çekme (Data Fetching)

Server Component içerisinde doğrudan fetch kullanılabilir.

```tsx
const users = await fetch(...)
```

## Cache Kullanımı

### Statik Cache

```tsx
fetch(url, {
  cache: "force-cache"
})
```

### Her İstekte Yeniden Çek

```tsx
fetch(url, {
  cache: "no-store"
})
```

### ISR (Incremental Static Regeneration)

```tsx
fetch(url, {
  next: {
    revalidate: 60
  }
})
```

### Açıklamalar

* `force-cache` → Cache kullan
* `no-store` → Her istekte yeniden veri çek
* `revalidate` → Belirtilen saniye sonunda cache'i yenile

---

# 5. Server Actions

API route yazmadan backend işlemleri gerçekleştirebilirsin.

```tsx
"use server";

export async function createUser() {
  ...
}
```

## Kullanım Alanları

* Form gönderme
* CRUD işlemleri
* Mutation işlemleri

Server Actions birçok durumda API endpoint yazma ihtiyacını azaltır.

---

# 6. Route Handlers (API Routes)

Backend endpoint oluşturmak için:

```txt
app/api/users/route.ts
```

Örnek:

```tsx
export async function GET() {
  return Response.json(...)
}
```

Express.js route mantığına benzer şekilde çalışır.

---

# 7. Middleware

İstek sayfaya ulaşmadan önce çalışır.

```ts
middleware.ts
```

## Kullanım Alanları

* Authentication kontrolü
* Redirect işlemleri
* Role bazlı erişim
* Çoklu dil yönlendirmeleri

---

# 8. Image Optimizasyonu

Next.js Image bileşeni:

```tsx
import Image from "next/image";
```

## Avantajları

* Lazy Loading
* Otomatik WebP dönüşümü
* Responsive görseller
* Daha iyi performans

---

# 9. SEO ve Metadata

Metadata yönetimi:

```tsx
export const metadata = {
  title: "Home",
  description: "..."
}
```

## Desteklenen Özellikler

* SEO Title
* Meta Description
* Open Graph
* Twitter Cards
* Dynamic OG Images

---

# 10. İleri Seviye Özellikler

## Parallel Routes

Aynı sayfada birden fazla route'u eş zamanlı render etmeyi sağlar.

```txt
@app
@modal
@sidebar
```

### Kullanım Senaryoları

* Dashboard uygulamaları
* Modal yapıları
* Karmaşık layout'lar

---

## Intercepting Routes

URL değiştirirken aynı zamanda modal veya özel ekranlar açılmasını sağlar.

### Kullanım Senaryoları

* Instagram tarzı modal detay sayfaları
* Dashboard popup ekranları
* İç içe navigasyon yapıları

---

# En Önemli Çıkarımlar

Modern bir Next.js projesinde:

✅ App Router kullan

✅ Server Components'i varsayılan kabul et

✅ Gerektiğinde `"use client"` kullan

✅ Veri çekme işlemlerini mümkün olduğunca server tarafında yap

✅ Form ve mutation işlemlerinde Server Actions kullan

✅ `next/image` ile performans optimizasyonu yap

✅ Metadata API ile SEO'yu güçlendir

✅ Middleware ile auth ve yönlendirmeleri merkezi yönet

---

# Öğrenme Önceliği

Eğer orta seviye bir Next.js geliştiricisiysen şu sırayla ilerlemek faydalı olacaktır:

1. App Router
2. Server Components
3. Data Fetching ve Cache Stratejileri
4. Server Actions
5. Middleware
6. Route Handlers
7. Metadata API
8. Parallel Routes
9. Intercepting Routes

Bu konulara hakim olmak seni modern Next.js ekosisteminde ileri seviyeye taşıyacaktır.
