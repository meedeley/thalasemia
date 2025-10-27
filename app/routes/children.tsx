import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Heart, Eye, Star, ArrowUp, Volume2, VolumeX } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Chapter {
    id: number;
    title: string;
    icon: LucideIcon;
}

const RafiStory = (): React.ReactElement => {
    const [activeChapter, setActiveChapter] = useState<number>(1);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Create audio element
        const audio = new Audio('/assets/music/children.mp3');
        audioRef.current = audio;
        
        // Set volume to 50%
        audio.volume = 0.3;
        
        // Set to loop
        audio.loop = true;

        // Auto-play when component mounts
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.catch((error) => {
                console.log("Autoplay prevented:", error);
            });
        }

        // Cleanup function
        return () => {
            audio.pause();
            audio.src = "";
        };
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.volume = 0.5;
            } else {
                audioRef.current.volume = 0;
            }
            setIsMuted(!isMuted);
        }
    };

    const chapters: Chapter[] = [
        { id: 1, title: 'Mengenal Thalasemia', icon: BookOpen },
        { id: 2, title: 'Memahami Anemia', icon: Heart },
        { id: 3, title: 'Observasi Dini', icon: Eye },
        { id: 4, title: 'Komitmen Berobat', icon: Star }
    ];

    const scrollToChapter = (chapterId: number): void => {
        setActiveChapter(chapterId);
        const element = document.getElementById(`chapter${chapterId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div lang="id" className="bg-white min-h-screen font-['Comic_Sans_MS','Comic_Neue',cursive] relative pb-20">
            {/* Sound Control Button */}
            <button
                onClick={toggleMute}
                className="fixed top-4 right-4 z-50 bg-pink-500 p-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors text-white"
                title={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? (
                    <VolumeX size={24} />
                ) : (
                    <Volume2 size={24} />
                )}
            </button>
            
            {/* Floating Navigation */}
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-pink-500 rounded-full shadow-2xl p-2 flex gap-2">
                {chapters.map((chapter) => {
                    const Icon = chapter.icon;
                    return (
                        <button
                            key={chapter.id}
                            onClick={() => scrollToChapter(chapter.id)}
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                                activeChapter === chapter.id 
                                    ? 'bg-white text-pink-500 scale-110' 
                                    : 'bg-pink-400 text-white hover:bg-pink-300'
                            }`}
                            title={chapter.title}
                        >
                            <Icon size={20} />
                        </button>
                    );
                })}
            </div>

            {/* Chapter 1 */}
            <section id="chapter1" className="min-h-screen pt-32 px-4 py-8 bg-pink-50">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl border-4 border-pink-100 p-6 mb-6 transform rotate-1">
                        <div className="bg-pink-500 text-white rounded-2xl p-4 mb-4 -rotate-1">
                            <h2 className="text-2xl font-black text-center">CHAPTER 1</h2>
                            <h3 className="text-3xl font-black text-center mt-2">Mengenal Thalasemia</h3>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl border-4 border-pink-100 p-6 mb-6">
                        <div className="mb-6">
                            <img src="/assets/images/children-section/pict4.png" alt="Ilustrasi Pemeriksaan Dokter" className="w-full rounded-2xl border-4 border-pink-100" />
                        </div>

                        <div className="bg-yellow-100 border-4 border-yellow-100 rounded-2xl p-4 mb-4">
                            <p className="text-xl leading-relaxed">
                                 Suatu pagi yang cerah, Rafi berlari kecil di halaman sambil membawa bola kesayangannya. Dia ingin bermain dengan teman-teman. Tapi, baru saja berlari sebentar, napasnya jadi berat. Rafi terduduk di rumput sambil memegangi dadanya. 
                            </p>
                        </div>

                        <div className="bg-pink-50 rounded-2xl p-6 border-4 border-pink-100 my-6">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="bg-pink-400 text-white rounded-full px-4 py-2 font-black shrink-0">Rafi</div>
                                <div className="bg-white rounded-2xl p-3 border-2 border-pink-100 flex-1">
                                    <p className="text-lg">"Bu, mengapa aku cepat lelah, ya?"</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-purple-400 text-white rounded-full px-4 py-2 font-black shrink-0">Ibu</div>
                                <div className="bg-white rounded-2xl p-3 border-2 border-pink-100 flex-1">
                                    <p className="text-lg">"Nak, kita perlu pergi ke dokter untuk tahu penyebabnya!"</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-100 border-4 border-blue-100 rounded-2xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="bg-blue-500 text-white rounded-full px-4 py-2 font-black">Dokter Nia</div>
                            </div>
                            <p className="text-lg leading-relaxed">
                                "Rafi, di dalam tubuh kita ada darah yang bekerja keras membawa oksigen! 🩸 Kadang, sel darahmu sedikit lebih lemah. Itu disebut <span className="bg-yellow-300 px-2 py-1 rounded">THALASEMIA</span>. Tapi jangan khawatir! Dengan perawatan yang tepat, kamu tetap bisa tumbuh sehat!"
                            </p>
                        </div>
                    </div>

                   
                </div>
            </section>

            {/* Chapter 2 */}
            <section id="chapter2" className="min-h-screen px-4 py-8 bg-white">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl border-4 border-pink-100 p-6 mb-6 transform -rotate-1">
                        <div className="bg-pink-500 text-white rounded-2xl p-4 mb-4 rotate-1">
                            <h2 className="text-2xl font-black text-center">CHAPTER 2</h2>
                            <h3 className="text-3xl font-black text-center mt-2">Memahami Anemia</h3>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl border-4 border-pink-100 p-6 mb-6">
                        <div className="mb-6">
                            <img src="/assets/images/children-section/pict2.png" alt="Ilustrasi Transfusi Darah" className="w-full rounded-2xl border-4 border-pink-100" />
                        </div>

                        <div className="bg-red-100 border-4 border-red-100 rounded-2xl p-4 mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="bg-blue-500 text-white rounded-full px-4 py-2 font-black">Dokter Nia</div>
                            </div>
                            <p className="text-lg leading-relaxed">
                                "Di dalam tubuh, ada <span className="bg-red-300 px-2 py-1 rounded">PASUKAN KECIL</span> bernama sel darah merah! 🔴 Mereka bekerja tanpa lelah membawa oksigen. Tapi suatu hari, pasukan itu mulai berkurang dan menjadi lemah... Akibatnya tubuh jadi cepat lelah. Itu namanya <span className="bg-yellow-300 px-2 py-1 rounded">ANEMIA</span>!"
                            </p>
                        </div>

                        <div className="bg-yellow-50 rounded-2xl p-6 border-4 border-yellow-100 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="bg-pink-400 text-white rounded-full px-4 py-2 font-black flex-shrink-0">Rafi</div>
                                <div className="bg-white rounded-2xl p-4 border-2 border-pink-100 flex-1">
                                    <p className="text-xl">"Jadi aku harus jadi teman yang baik untuk darahku, ya Dok?" 🤔</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <img src="/assets/images/children-section/pict6.png" alt="Ilustrasi Perawatan" className="w-full rounded-2xl border-4 border-pink-100" />
                        </div>

                        <div className="bg-pink-50 border-4 border-pink-100 rounded-2xl p-6">
                            <p className="text-center text-2xl font-black mb-4">💪 KOMITMEN RAFI 💪</p>
                            <p className="text-lg leading-relaxed text-center italic">
                                Rafi mengangguk pelan. Ia membayangkan sel-sel darah kecil di tubuhnya seperti prajurit pemberani! 🦸‍♂️ Sejak hari itu, Rafi berjanji akan jadi sahabat terbaik bagi darahnya!
                            </p>
                        </div>
                    </div>

                  
                </div>
            </section>

            {/* Chapter 3 */}
            <section id="chapter3" className="min-h-screen px-4 py-8 bg-pink-50">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl border-4 border-pink-100 p-6 mb-6 transform rotate-1">
                        <div className="bg-pink-500 text-white rounded-2xl p-4 mb-4 -rotate-1">
                            <h2 className="text-2xl font-black text-center">CHAPTER 3</h2>
                            <h3 className="text-3xl font-black text-center mt-2">Observasi Dini</h3>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl border-4 border-pink-100 p-6 mb-6">
                        <div className="mb-6">
                            <img src="/assets/images/children-section/pict3.png" alt="Ilustrasi Dukungan Keluarga" className="w-full rounded-2xl border-4 border-pink-100" />
                        </div>

                        <div className="bg-blue-100 border-4 border-blue-100 rounded-2xl p-4 mb-6">
                            <p className="text-xl leading-relaxed">
                                Suatu pagi, Rafi melihat tubuhnya di cermin. Kulitnya tampak lebih pucat 😨 dan bibirnya berwarna kebiruan seperti langit sebelum hujan ☁️
                            </p>
                        </div>

                        <div className="bg-pink-50 rounded-2xl p-6 border-4 border-pink-100 mb-6">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="bg-purple-400 text-white rounded-full px-4 py-2 font-black flex-shrink-0">Ibu</div>
                                <div className="bg-white rounded-2xl p-3 border-2 border-pink-100 flex-1">
                                    <p className="text-lg">"Nak, tubuhmu butuh bantuan dokter lagi. Tapi jangan khawatir ya!"</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-pink-400 text-white rounded-full px-4 py-2 font-black flex-shrink-0">Rafi</div>
                                <div className="bg-white rounded-2xl p-3 border-2 border-pink-100 flex-1">
                                    <p className="text-lg">"Aku mau kuat seperti darah yang berani, Bu!" 💪</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border-4 border-yellow-100 rounded-2xl p-6">
                            <p className="text-xl font-black text-center mb-3">✨ DI RUMAH SAKIT ✨</p>
                            <p className="text-lg leading-relaxed text-center">
                                Rafi melihat banyak anak lain yang juga sedang berobat. Mereka tersenyum meski duduk di kursi infus! 😊 Saat itu Rafi tersadar — <span className="bg-pink-300 px-2 py-1 rounded">IA TIDAK SENDIRIAN!</span>
                            </p>
                        </div>
                    </div>

                   
                </div>
            </section>

            {/* Chapter 4 */}
            <section id="chapter4" className="min-h-screen px-4 py-8 bg-white">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl border-4 border-pink-100 p-6 mb-6 transform -rotate-1">
                        <div className="bg-pink-500 text-white rounded-2xl p-4 mb-4 rotate-1">
                            <h2 className="text-2xl font-black text-center">CHAPTER 4</h2>
                            <h3 className="text-3xl font-black text-center mt-2">Komitmen Berobat</h3>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl border-4 border-pink-100 p-6 mb-6">
                        <div className="mb-6">
                            <img src="/assets/images/children-section/pict8.png" alt="Ilustrasi Anak Bersemangat" className="w-full rounded-2xl border-4 border-pink-100" />
                        </div>

                        <div className="bg-green-100 border-4 border-green-100 rounded-2xl p-4 mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="bg-blue-500 text-white rounded-full px-4 py-2 font-black">Dokter Nia</div>
                            </div>
                            <p className="text-lg leading-relaxed">
                                "Setiap kali kamu berobat, kamu sedang bertambah kuat, Rafi! 💉 Jangan takut ya. Ini bagian dari perjalananmu jadi <span className="bg-yellow-300 px-2 py-1 rounded">PAHLAWAN KECIL!</span> 🦸‍♂️"
                            </p>
                        </div>

                        <div className="bg-yellow-100 border-4 border-yellow-100 rounded-2xl p-4 mb-6">
                            <p className="text-xl font-black text-center mb-3">⚡ SETELAH TRANSFUSI ⚡</p>
                            <p className="text-lg leading-relaxed text-center">
                                Tubuh Rafi terasa hangat dan penuh tenaga! Ia berlari kecil ke arah ibunya sambil berseru:
                            </p>
                        </div>

                        <div className="bg-pink-50 rounded-2xl p-6 border-4 border-pink-100 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="bg-pink-400 text-white rounded-full px-4 py-2 font-black flex-shrink-0">Rafi</div>
                                <div className="bg-white rounded-2xl p-4 border-2 border-pink-100 flex-1">
                                    <p className="text-2xl">"Bu! Aku nggak capek lagi! Aku mau terus kuat!" 🎉</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-100 border-4 border-red-100 rounded-2xl p-6">
                            <p className="text-xl font-black text-center mb-3">⭐ JANJI RAFI ⭐</p>
                            <p className="text-lg leading-relaxed text-center">
                                Sejak hari itu, Rafi memegang janjinya erat-erat — untuk selalu berani datang berobat dan menjaga kesehatannya dengan semangat seorang PAHLAWAN SEJATI! 💪✨
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="bg-pink-500 text-white inline-block px-6 py-2 rounded-full font-black text-xl transform rotate-2 shadow-lg">
                            🎬 TAMAT 🎬
                        </div>
                    </div>
                </div>
            </section>

            {/* Epilog */}
            <section id="epilog" className="px-4 py-8 bg-pink-50">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl border-4 border-pink-100 p-6 mb-6">
                        <div className="bg-pink-500 text-white rounded-2xl p-6 mb-6">
                            <h2 className="text-5xl font-black text-center mb-4">TAMAT! 🎉</h2>
                            <p className="text-2xl font-black text-center italic">
                                "Berani berobat, berarti berani sehat!" 💪
                            </p>
                        </div>

                        <div className="bg-yellow-50 border-4 border-yellow-100 rounded-2xl p-6 mb-6">
                            <p className="text-lg leading-relaxed">
                                Kisah Rafi kini jadi cerita penuh semangat! 🌟 Setiap kali darah baru mengalir ke tubuhnya, Rafi membayangkan pasukan kecil berwarna merah berlari membawa kekuatan! 🩸✨
                            </p>
                        </div>

                        <div className="bg-pink-50 border-4 border-pink-100 rounded-2xl p-6">
                            <p className="text-xl font-black text-center mb-4">💖 PESAN PENTING 💖</p>
                            <p className="text-lg leading-relaxed text-center">
                                Keberanian bukan berarti tidak takut, tapi tetap tersenyum dan mau berobat meski sedang berjuang! 😊 Kekuatan sejati datang dari keberanian merawat diri sendiri!
                            </p>
                        </div>

                        <div className="text-center mt-8">
                            <button 
                                onClick={() => scrollToChapter(1)}
                                className="bg-pink-500 text-white px-8 py-4 rounded-full font-black text-lg shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all"
                            >
                                <ArrowUp className="inline mr-2" size={20} />
                                BACA LAGI DARI AWAL!
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RafiStory;