import { useState, useRef } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "app/components/ui/button";
import HTMLFlipBook from "react-pageflip";

interface PageData {
  title: string;
  subtitle?: string;
  content: string;
  isCover?: boolean;
  isEnd?: boolean;
}

export default function RafiStoryBook() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const bookRef = useRef<any>(null);

  const pages: PageData[] = [
    {
      title: "Anak Pemberani & Kekuatan Darah",
      subtitle: "Kisah inspiratif tentang Rafi, si Anak Pemberani",
      content:
        "Sebuah panduan visual untuk kesehatan dan semangat yang tak terbatas.",
      isCover: true,
    },
    {
      title: "Petualangan Rafi",
      subtitle: "Kenapa Rafi Cepat Lelah, ya?",
      content:
        'Suatu pagi yang cerah, Rafi berlari kecil di halaman sambil membawa bola kesayangannya. Dia ingin bermain dengan teman-teman. Tapi, baru saja berlari sebentar, napasnya jadi berat. Rafi terduduk di rumput sambil memegangi dadanya.\n\n"Bu, kenapa ya aku cepat capek?" tanya Rafi dengan wajah penasaran. Ibu tersenyum dan mengusap kepalanya. "Mungkin kita harus ke dokter untuk mencari tahu kenapa kamu cepat lelah."',
    },
    {
      title: "Kunjungan ke Dokter",
      content:
        'Keesokan harinya, Rafi pergi ke rumah sakit. Dokter Nia menyambutnya dengan senyum hangat.\n\n"Rafi, dalam tubuh kita ada darah yang membawa oksigen ke seluruh tubuh," kata dokter. "Tapi sel darahmu sedikit kurang kuat. Ini disebut talasemia. Jadi kamu harus mendapatkan perawatan supaya tetap kuat dan bisa bermain lagi."',
    },
    {
      title: "Cerita Baru Rafi",
      subtitle: "Darah yang Butuh Bantuan",
      content:
        'Dokter Nia: "Di dalam tubuh, ada pasukan kecil bernama sel darah merah yang bekerja tanpa lelah membawa oksigen ke seluruh tubuh. Namun suatu hari, pasukan itu mulai berkurang jumlahnya dan menjadi lemah. Akibatnya, tubuh pun merasa cepat lelah dan lesu. Itulah yang disebut anemia — saat pasukan pembawa oksigen tidak cukup kuat untuk menjalankan tugas pentingnya."',
    },
    {
      title: "Rafi Menjadi Berani",
      content:
        'Beberapa hari kemudian, Rafi harus dipasang jarum kecil supaya tubuhnya sehat. Awalnya Rafi takut, tapi Ibu pegangan tangannya dan bilang, "Rafi hebat! Jarum ini membantu darahmu jadi kuat."\n\nRafi mengangguk pelan. Dalam hatinya, ia membayangkan sel-sel darah kecil di tubuhnya sedang bekerja keras seperti prajurit pemberani.',
    },
    {
      title: "Saat Tubuh Rafi Minta Diperhatikan",
      content:
        'Rafi tarik napas dalam sembari berkata, "Aku berani, Bu! Aku mau cepat sembuh supaya bisa main bola lagi."\n\nJarum dipasang pelan-pelan. Rafi memegangi boneka kecil. Ibu pun tersenyum lembut sambil membelai rambut Rafi. Ibu berkata: "Nak, jangan khawatir, ya." Rafi mengangguk penuh semangat. Rafi menjawab: "Aku mau kuat seperti darah yang berani, Bu!"',
    },
    {
      title: "Bertemu Teman Baru",
      subtitle: "Perjalanan Rafi Menjadi Pemberani",
      content:
        'Rafi melihat anak seusianya yang juga terpasang infus sembari tersenyum, seolah berkata bahwa mereka sedang berjuang bersama. Saat itu, Rafi tersadar — ia tidak sendirian.\n\nDokter Nia datang dengan wajah ramah dan berkata lembut, "Rafi, setiap kali kamu berobat, kamu jadi lebih kuat, ya. Jangan takut, ini langkah kecilmu jadi pahlawan."',
    },
    {
      title: "Rafi Si Pahlawan Kecil",
      content:
        'Sejak hari itu, Rafi pegang janji — selalu berani berobat, dengarkan tubuhnya, dan jaga kesehatan seperti pahlawan kecil.\n\nSetelah transfusi darah selesai, tubuh Rafi terasa hangat dan penuh tenaga. Ia segera berlari kecil ke arah ibunya sambil berseru, "Bu! Aku nggak capek lagi! Aku mau terus kuat!"',
    },
    {
      title: "Pesan dari Rafi",
      content:
        'Dia tahu, dengan keberanian dan semangat, ia bisa melewati semua ini. Rafi pun semakin rajin menjaga diri, makan makanan sehat, dan selalu beristirahat cukup. Dia percaya suatu hari nanti, dia akan kembali bermain bola dengan bebas dan bahagia bersama teman-temannya.\n\n"Berani berobat, berarti berani sehat."\n\nRafi bayangkan pasukan merah kecil lari-lari bom-bom di tubuhnya. Suntik? Ah, itu kayak pelukan dari teman-teman kecil!',
      isEnd: true,
    },
  ];

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  const renderPageContent = (page: PageData) => {
    const paragraphs = page.content ? page.content.split("\n\n") : [];

    return (
      <div className="flex flex-col h-full p-12 bg-white book-page">
        <h1 className="text-xl font-bold mb-2 text-pink-600">{page.title}</h1>
        {page.subtitle && (
          <h2 className="text-xl italic mb-4 text-pink-500">{page.subtitle}</h2>
        )}
        <div className="text-lg text-gray-700 leading-relaxed space-y-4 overflow-y-auto">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 mt-20 overflow-hidden bg-transparent">
      <div className="container mx-auto z-10 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Book Title */}
          <div className="text-center z-11 mb-12">
            <h1 className="text-xl font-bold text-pink-600 mb-3 flex items-center justify-center gap-3">
              Kisah Rafi Si Anak Pemberani
            </h1>
            <p className="text-gray-600 text-lg italic">
              Petualangan menuju kesehatan dan keberanian
            </p>

            <p className="py-3 px-4 border-pink-100 border-2 shadow-pink-500 inline-block mt-2 rounded-md bg-white italic text-sm font-semibold">
              Seret Untuk Membaca Buku
            </p>
          </div>
          <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>{" "}
          {/* Book Container */}
          <div className="flex justify-center mb-8">
            <div className="book-wrapper transform rotate-3 duration-500 shadow-2xl">
              <HTMLFlipBook
                style={{}}
                width={800}
                height={1200}
                size="stretch"
                minWidth={400}
                maxWidth={800}
                minHeight={400}
                maxHeight={800}
                maxShadowOpacity={0.5}
                showCover={true}
                ref={bookRef}
                mobileScrollSupport={true}
                onFlip={onFlip}
                className="demo-book"
                usePortrait={true}
                startPage={0}
                drawShadow={true}
                flippingTime={1000}
                useMouseEvents={true}
                swipeDistance={30}
                clickEventForward={true}
                showPageCorners={true}
                disableFlipByClick={false}
                startZIndex={0}
                autoSize={true}
              >
                {pages.map((page, index) => (
                  <div key={index} className="page">
                    <div className="decorative-corner-top"></div>
                    <div className="decorative-corner-bottom"></div>{" "}
                    <div className="page-number">
                      {index + 1} / {pages.length}
                    </div>
                    {renderPageContent(page)}
                  </div>
                ))}
              </HTMLFlipBook>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
