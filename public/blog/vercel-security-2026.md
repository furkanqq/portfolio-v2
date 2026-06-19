# Vercel Güvenlik Olayı (Nisan 2026): Environment Variable'larınız Risk Altında Olabilir.

Nisan 2026'da Vercel, belirli müşterileri etkileyen bir güvenlik olayı yaşandığını duyurdu. Olay özellikle Next.js ve Vercel kullanan geliştiriciler arasında büyük yankı uyandırdı çünkü bazı environment variable'ların (ENV) potansiyel olarak erişilmiş olabileceği açıklandı.

Bu yazıda olayın nasıl gerçekleştiğini, hangi verilerin risk altında olduğunu ve geliştiricilerin hangi önlemleri alması gerektiğini inceleyeceğiz.

---

# Olay Nasıl Gerçekleşti?

İlk bakışta Vercel'in doğrudan hacklendiği düşünülebilir. Ancak olayın başlangıç noktası Vercel altyapısındaki bir açık değil, üçüncü taraf bir AI servisiydi.

Vercel'in paylaştığı bilgilere göre saldırganlar, Context.ai isimli bir AI platformunu hedef aldı. Bu süreçte ele geçirilen OAuth erişimleri sayesinde bir Vercel çalışanının Google Workspace hesabına erişim sağlandı.

Bu erişim daha sonra bazı Vercel dahili sistemlerine ulaşmak için kullanıldı. Olay bu nedenle klasik bir sistem açığından çok bir OAuth ve tedarik zinciri (supply chain) saldırısı olarak değerlendiriliyor.

---

# Hangi Veriler Risk Altındaydı?

Vercel'in açıklamasına göre aşağıdaki türde bilgiler risk altında olabilir:

* API anahtarları
* JWT secret'ları
* Database bağlantı bilgileri
* SMTP kullanıcı adı ve şifreleri
* Üçüncü parti servis token'ları
* Cloud sağlayıcı erişim anahtarları

Ancak burada önemli bir detay bulunuyor:

Vercel, yalnızca **Sensitive Environment Variables** olarak işaretlenmemiş environment variable'ların risk altında olabileceğini belirtti.

Sensitive olarak işaretlenen değişkenlerin okunabildiğine dair herhangi bir kanıt bulunmadığı açıklandı.

---

# Neden Herkese Secret Rotation Önerildi?

Birçok geliştirici şu soruyu sordu:

> "Benim projem etkilenmemiş olabilir, neden yine de secret değiştirmem gerekiyor?"

Bunun sebebi güvenlik dünyasında sık kullanılan şu prensiptir:

> Erişilip erişilmediğini kesin olarak kanıtlayamıyorsanız, erişilmiş kabul edin.

Bu nedenle Vercel aşağıdaki bilgilerin yenilenmesini (rotation) önerdi:

* API Key'ler
* Access Token'lar
* Database şifreleri
* JWT Secret'ları
* AWS erişim anahtarları
* Cloudflare token'ları
* Deployment Protection Token'ları

Özellikle sensitive olarak işaretlenmemiş tüm gizli bilgilerin potansiyel olarak ele geçirilmiş kabul edilmesi gerektiği belirtildi.

---

# Secret Rotation Nedir?

Secret rotation, bir erişim bilgisinin yenilenmesi işlemidir.

Örneğin eski JWT secret'ınız şu olsun:

```env
JWT_SECRET=old-secret-key
```

Yeni secret:

```env
JWT_SECRET=new-secret-key
```

Bu değişiklikten sonra eski secret ile oluşturulmuş token'lar geçersiz hale gelir.

Aynı mantık:

* API anahtarları
* SMTP şifreleri
* Database kullanıcı bilgileri
* AWS erişim anahtarları

için de uygulanabilir.

---

# Vercel Kullanıyorsanız Ne Yapmalısınız?

## 1. Environment Variable'larınızı Gözden Geçirin

Dashboard üzerinden tüm environment variable'ları kontrol edin.

Özellikle:

* API Keys
* Database Credentials
* JWT Secrets
* SMTP Şifreleri

gibi bilgileri tespit edin.

---

## 2. Secret Rotation Yapın

Mümkün olan tüm kritik bilgileri yenileyin.

Öncelik sırası:

1. Cloud Provider Anahtarları
2. Database Şifreleri
3. JWT Secret'ları
4. SMTP Bilgileri
5. Üçüncü Parti API Anahtarları

---

## 3. Sensitive Environment Variables Özelliğini Kullanın

Vercel'in sunduğu "Sensitive Environment Variables" özelliği sayesinde secret değerler okunamaz şekilde saklanabilir.

Yeni oluşturacağınız tüm kritik değişkenleri sensitive olarak işaretlemek iyi bir güvenlik pratiğidir.

---

## 4. OAuth Yetkilerini Kontrol Edin

Bu olayın en önemli derslerinden biri OAuth erişimlerinin ne kadar kritik olduğudur.

Google Workspace veya GitHub hesabınıza bağlı:

* AI araçları
* Browser eklentileri
* Üçüncü taraf servisler

düzenli olarak gözden geçirilmelidir.

Kullanılmayan erişimler kaldırılmalıdır.

---

# Bu Olaydan Çıkarılacak Dersler

Bu olay aslında Vercel'in altyapısındaki bir güvenlik açığından çok modern yazılım dünyasının yeni risklerinden birini gösteriyor:

* OAuth izinleri
* AI araçları
* Üçüncü taraf entegrasyonlar
* Tedarik zinciri saldırıları

Artık sadece kendi sisteminizi korumak yeterli değil. Erişim verdiğiniz servislerin güvenliği de sizin güvenlik seviyenizin bir parçası haline geliyor.

Özellikle geliştiriciler için en önemli ders şu:

> Environment variable'larınızı koruyun, OAuth izinlerinizi düzenli denetleyin ve tüm kritik secret'lar için rotation planınız hazır olsun.

---

# Ben bunu neden ciddiye aldım? (kişisel hikaye)

Vercel'in yaptığı açıklamaları takip ettiğim dönemde, çalıştığım projelerde kullandığımız kritik erişim bilgilerini gözden geçirmeye karar verdim. İlk olarak şirket projelerindeki ve kişisel projelerimdeki API anahtarlarını, token'ları ve diğer secret'ları yeniledim.

Ancak bu süreçte gözden kaçırdığım bir detay vardı.

Daha önce geliştirmeye başlayıp yarım bıraktığım bir projede, Gmail SMTP erişimi için oluşturduğum bir uygulama şifresi (App Password) hâlâ aktif durumdaydı. Proje artık kullanılmıyordu ancak erişim bilgileri geçerliliğini koruyordu.

Bir süre sonra Gmail hesabımın gönderilmiş öğeler klasörünü kontrol ederken yüzlerce spam e-posta gönderildiğini fark ettim. Mesajlar DHL adına hazırlanmış sahte teslimat bildirimleri içeriyordu.

Örnek içerik şu şekildeydi:

> Dear Customer,
>
> Your package is currently held at customs. A payment is required to complete the clearance process and release your shipment for final delivery. Please act as soon as possible to prevent additional delays.

Aşağıdaki ekran görüntüsü gönderilen spam e-postalardan birine ait örneği göstermektedir.

![DHL Spam Mail Örneği](/dhl-spam.webp)

Bu noktada erişim bilgilerinin hangi aşamada ele geçirildiğini kesin olarak tespit etmek mümkün değildi. Ancak kullanılmayan bir projede aktif kalan SMTP erişiminin ciddi bir risk oluşturduğu açıktı.

Sorunu çözmek için:

* Gmail üzerindeki tüm uygulama şifrelerini iptal ettim.
* Yeni uygulama şifreleri oluşturdum.
* Kullandığım projelerdeki SMTP yapılandırmalarını güncelledim.
* Gönderim yapılan kişilere hesabımın erişim bilgilerinin kötüye kullanılmış olabileceğini ve gelen mesajları dikkate almamaları gerektiğini bildirdim.

Bu olay bana önemli bir ders verdi:

> Kullanmadığınız bir proje bile eğer vercelden yayınlanmış ise aktif bir saldırı yüzeyi olabilir.

Bir secret'ın kullanıldığı uygulama artık çalışmıyor olsa bile, erişim bilgisi geçerliliğini koruyorsa güvenlik riski devam eder.

Bu nedenle yalnızca secret rotation yapmak değil, düzenli aralıklarla kullanılmayan erişimleri tamamen kaldırmak da güvenlik sürecinin önemli bir parçasıdır.

---

# Sonuç

Nisan 2026 Vercel güvenlik olayı, doğrudan bir Vercel açığından değil; üçüncü taraf bir AI servisinin ele geçirilmesiyle başlayan bir OAuth tedarik zinciri saldırısından kaynaklandı.

Vercel, sınırlı sayıda müşterinin sensitive olarak işaretlenmemiş environment variable'larının risk altında olabileceğini açıkladı ve tüm kullanıcılarına secret rotation yapmalarını tavsiye etti.

Bu olay, modern yazılım geliştirme süreçlerinde OAuth izinlerinin ve üçüncü taraf entegrasyonların ne kadar kritik hale geldiğini gösteren önemli bir örnek olarak güvenlik tarihindeki yerini aldı.
