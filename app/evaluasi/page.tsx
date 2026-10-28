"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Award,
  Sparkles,
  ArrowRight,
  BookOpen,
  Bike,
  ShieldCheck,
  Check,
  X,
  AlertCircle,
  Printer,
  ChevronRight,
  Clock,
  HeartPulse,
  Activity,
  Flame,
} from "lucide-react";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

interface QuestionOption {
  key: "A" | "B" | "C" | "D";
  text: string;
}

interface QuestionItem {
  id: number;
  category: string;
  categoryBadge: string;
  categoryColor: string;
  question: string;
  options: QuestionOption[];
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
}

const quizQuestions: QuestionItem[] = [
  {
    id: 1,
    category: "Pertolongan Pingsan (Sinkop)",
    categoryBadge: "bg-blue/10 text-blue border-blue/20",
    categoryColor: "text-blue",
    question:
      "Bagaimana posisi tubuh yang tepat saat memberikan pertolongan pertama pada korban pingsan tanpa dugaan cedera tulang?",
    options: [
      { key: "A", text: "Didudukkan tegak dan langsung diberikan minuman manis hangat" },
      { key: "B", text: "Dibaringkan telentang dan kedua tungkai ditinggikan sekitar 30 cm" },
      { key: "C", text: "Ditengkurapkan agar jalan napas terbuka lebar" },
      { key: "D", text: "Digendong berdiri dan diajak berjalan perlahan" },
    ],
    correctAnswer: "B",
    explanation:
      "Baringkan korban telentang pada permukaan datar, lalu tinggikan kedua tungkai sekitar 30 cm (lebih tinggi dari jantung) jika tidak ada dugaan cedera tulang. Hal ini bertujuan meningkatkan aliran darah kembali ke otak (perfusi serebral global) sesuai prinsip penanganan sinkop (Susyanti, Gustina, & dkk, 2026).",
  },
  {
    id: 2,
    category: "Perdarahan Eksternal",
    categoryBadge: "bg-red/10 text-red border-red/20",
    categoryColor: "text-red",
    question: "Apa tindakan utama pada perdarahan eksternal?",
    options: [
      { key: "A", text: "Memberikan minuman" },
      { key: "B", text: "Memberikan tekanan langsung pada sumber perdarahan" },
      { key: "C", text: "Membiarkan luka terbuka tanpa tindakan" },
      { key: "D", text: "Memijat area luka" },
    ],
    correctAnswer: "B",
    explanation:
      "Tindakan utama dan paling krusial pada luka perdarahan luar adalah memberikan penekanan langsung (direct pressure) dengan kain kassa steril atau kain bersih tepat di atas sumber perdarahan secara konstan hingga perdarahan terkendali.",
  },
  {
    id: 3,
    category: "Pertolongan Fraktur",
    categoryBadge: "bg-green/10 text-green-dark border-green/30",
    categoryColor: "text-green-dark",
    question:
      "Apa tindakan pertolongan pertama yang TIDAK boleh dilakukan saat mencurigai korban mengalami patah tulang (fraktur)?",
    options: [
      { key: "A", text: "Meminta korban tetap diam dan tidak menggerakkan bagian cedera" },
      {
        key: "B",
        text: "Mencoba meluruskan tulang atau memasukkan kembali tulang yang menonjol",
      },
      {
        key: "C",
        text: "Memasang bidai melewati sendi di atas dan di bawah patahan jika terlatih",
      },
      { key: "D", text: "Memeriksa apakah jari tetap hangat dan berwarna merah muda" },
    ],
    correctAnswer: "B",
    explanation:
      "Jangan pernah mencoba meluruskan tulang atau memasukkan kembali tulang yang menonjol. Tindakan tersebut dapat merusak pembuluh darah dan saraf di sekitarnya serta memicu perdarahan fatal dan nyeri hebat.",
  },
  {
    id: 4,
    category: "Larangan Saat Pingsan",
    categoryBadge: "bg-yellow/20 text-yellow border-yellow/40",
    categoryColor: "text-yellow",
    question:
      "Tindakan manakah yang dilarang keras dilakukan saat korban belum sadar penuh setelah pingsan?",
    options: [
      { key: "A", text: "Melonggarkan pakaian yang ketat seperti kerah atau ikat pinggang" },
      { key: "B", text: "Menampar, mengguyur air, atau memberi makan dan minum" },
      { key: "C", text: "Memiringkan tubuh korban jika korban tampak muntah" },
      { key: "D", text: "Memastikan korban mendapat udara segar dan tidak dikerumuni" },
    ],
    correctAnswer: "B",
    explanation:
      "Jangan menampar, mengguyur dengan air, atau memberi makan dan minum selama korban belum sadar penuh. Memberi cairan atau makanan pada korban yang tidak sadar berisiko tinggi menyebabkan tersedak (aspirasi) ke saluran napas.",
  },
  {
    id: 5,
    category: "Fraktur Terbuka vs Tertutup",
    categoryBadge: "bg-lavender/30 text-ink border-lavender",
    categoryColor: "text-lavender",
    question:
      "Bagaimana langkah penanganan yang tepat pada fraktur terbuka yang disertai perdarahan?",
    options: [
      { key: "A", text: "Menekan kuat ujung tulang yang menonjol agar masuk ke dalam luka" },
      { key: "B", text: "Mengompres es langsung tanpa kain pembungkus pada luka terbuka" },
      {
        key: "C",
        text: "Menutup luka dengan kain bersih/kassa dan menekan lembut di sekitar luka tanpa menekan tulang",
      },
      { key: "D", text: "Memaksa korban untuk segera berdiri dan berjalan" },
    ],
    correctAnswer: "C",
    explanation:
      "Pada fraktur terbuka, tutup luka dengan kain bersih atau kassa steril. Jika berdarah, tekan lembut di sekitar luka tanpa menekan ujung tulang yang menonjol. Segera hubungi layanan darurat 112 atau 119 karena fraktur terbuka berisiko tinggi infeksi dan perdarahan hebat.",
  },
];

export default function EvaluasiPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, "A" | "B" | "C" | "D">>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [showAllQuestions, setShowAllQuestions] = useState<boolean>(true);

  // Answer handler
  const handleSelectOption = (questionId: number, optionKey: "A" | "B" | "C" | "D") => {
    if (isSubmitted) return; // Prevent changing after submit until reset
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  // Submit evaluation
  const handleSubmit = () => {
    setIsSubmitted(true);
    // Scroll to results summary
    const resultsElement = document.getElementById("quiz-results");
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reset quiz
  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setActiveQuestionIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate score
  const totalQuestions = quizQuestions.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = quizQuestions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);
  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  // Status message based on score
  const getFeedbackDetails = () => {
    if (scorePercentage === 100) {
      return {
        title: "Luar Biasa! Pemahaman Sempurna",
        badge: "Driver Siaga Teladan ⭐",
        desc: "Anda menguasai seluruh konsep inti pertolongan pertama kedaruratan jalan raya dengan tepat!",
        color: "text-green-dark",
        bgColor: "bg-green-light/50 border-green/30",
      };
    }
    if (scorePercentage >= 80) {
      return {
        title: "Sangat Bagus! Kesiapsiagaan Tinggi",
        badge: "Driver Siaga Terverifikasi 👍",
        desc: "Pemahaman Anda sudah sangat solid. Tinjau kembali pembahasan untuk soal yang belum tepat.",
        color: "text-blue",
        bgColor: "bg-blue-light/50 border-blue/20",
      };
    }
    if (scorePercentage >= 60) {
      return {
        title: "Cukup Baik! Perlu Penguatan",
        badge: "Perlu Pemantapan Modul 📘",
        desc: "Anda telah memahami sebagian prinsip dasar. Pelajari kembali materi untuk mengoptimalkan aksi penyelamatan.",
        color: "text-yellow",
        bgColor: "bg-yellow-light/60 border-yellow/40",
      };
    }
    return {
      title: "Perlu Mengulang Modul",
      badge: "Ulas Kembali Materi 🔄",
      desc: "Jangan berkecil hati! Luangkan waktu sejenak membaca ulang modul kedaruratan agar makin siap di jalan raya.",
      color: "text-red",
      bgColor: "bg-red-light/50 border-red/20",
    };
  };

  const feedback = getFeedbackDetails();

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-cream text-ink">
        <Navbar />

        <main className="pt-28 pb-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-ink-lighter mb-8">
              <Link href="/" className="hover:text-red transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <span className="font-semibold text-ink">Evaluasi Pembelajaran</span>
            </nav>

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-ink border border-ink/10 shadow-sm mb-4">
                <Bike className="w-3.5 h-3.5 text-red" />
                <span>Evaluasi Formatif Kedaruratan</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink mb-4">
                Kuis Evaluasi{" "}
                <span className="font-handwritten text-red text-5xl sm:text-6xl inline-block -rotate-1">
                  Kesiapsiagaan
                </span>
              </h1>
              <p className="text-base sm:text-lg text-ink-light leading-relaxed">
                Setelah mempelajari seluruh materi, pengguna dapat diberikan kuis sederhana ini untuk menguji
                pemahaman dan respon taktis terhadap kondisi darurat di jalan raya.
              </p>
            </div>

            {/* Progress & Quick Stats Card */}
            <div className="mb-10 rounded-3xl bg-white border border-ink/8 p-6 sm:p-7 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-sm font-bold text-ink flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow" />
                    Status Pengerjaan Kuis
                  </h3>
                  <p className="text-xs text-ink-lighter mt-0.5">
                    {isSubmitted
                      ? `Kuis Selesai! Skor Anda: ${correctCount} dari ${totalQuestions} benar (${scorePercentage}%)`
                      : `${answeredCount} dari ${totalQuestions} pertanyaan telah dijawab`}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {isSubmitted && (
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-ink/5 hover:bg-ink/10 text-xs font-bold text-ink transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Ulangi Kuis
                    </button>
                  )}
                  <span className="px-3 py-1.5 rounded-xl bg-cream border border-ink/10 text-xs font-mono font-bold text-ink">
                    5 Soal Pilihan Ganda
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-cream h-2.5 rounded-full overflow-hidden border border-ink/5">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    isSubmitted
                      ? scorePercentage >= 80
                        ? "bg-green-dark"
                        : scorePercentage >= 60
                        ? "bg-yellow"
                        : "bg-red"
                      : "bg-red"
                  }`}
                  style={{
                    width: isSubmitted
                      ? `${scorePercentage}%`
                      : `${(answeredCount / totalQuestions) * 100}%`,
                  }}
                />
              </div>

              {/* Question Navigation Bubbles */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-5 border-t border-ink/5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-ink-lighter mr-1">Lompat ke Soal:</span>
                  {quizQuestions.map((q, idx) => {
                    const isAnswered = selectedAnswers[q.id] !== undefined;
                    const isCorrect = isSubmitted && selectedAnswers[q.id] === q.correctAnswer;
                    const isWrong = isSubmitted && isAnswered && !isCorrect;

                    return (
                      <a
                        key={q.id}
                        href={`#soal-${q.id}`}
                        className={`w-8 h-8 rounded-xl text-xs font-bold flex items-center justify-center transition-all ${
                          isSubmitted
                            ? isCorrect
                              ? "bg-green-dark text-white shadow-sm"
                              : isWrong
                              ? "bg-red text-white shadow-sm"
                              : "bg-gray-100 text-gray-400 border border-gray-200"
                            : isAnswered
                            ? "bg-ink text-white"
                            : "bg-cream text-ink-light border border-ink/10 hover:border-ink/20"
                        }`}
                      >
                        {idx + 1}
                      </a>
                    );
                  })}
                </div>

                <div className="text-xs text-ink-lighter font-medium">
                  {isSubmitted ? (
                    <span className="text-green-dark font-bold">
                      ✓ Penilaian Selesai • Tinjau Pembahasan di Bawah
                    </span>
                  ) : (
                    <span>Pilih salah satu opsi (A, B, C, atau D) pada setiap pertanyaan</span>
                  )}
                </div>
              </div>
            </div>

            {/* Quiz Result Banner (Appears after submission) */}
            {isSubmitted && (
              <div
                id="quiz-results"
                className={`mb-10 rounded-3xl border p-6 sm:p-8 shadow-sm animate-fadeIn ${feedback.bgColor}`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-ink/10 flex items-center justify-center shrink-0 shadow-sm">
                      <Award className={`w-8 h-8 ${feedback.color}`} />
                    </div>
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-ink/10 mb-2">
                        {feedback.badge}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
                        {feedback.title}
                      </h2>
                      <p className="text-sm text-ink-light mt-1 max-w-xl">
                        {feedback.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 sm:p-5 border border-ink/10 shadow-sm shrink-0 min-w-[170px] text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-lighter mb-1">
                      Skor Akhir
                    </span>
                    <span className="text-4xl font-extrabold text-ink font-mono">
                      {scorePercentage}
                      <span className="text-lg text-ink-lighter">/100</span>
                    </span>
                    <span className="text-xs text-ink-light font-semibold mt-1">
                      {correctCount} dari {totalQuestions} Soal Benar
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-ink/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-4 text-ink-light">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-3 h-3 rounded-full bg-green-dark inline-block" />
                      Jawaban Benar: {correctCount}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-3 h-3 rounded-full bg-red inline-block" />
                      Jawaban Kurang Tepat: {totalQuestions - correctCount}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-ink/10 text-xs font-semibold text-ink hover:bg-cream transition-colors"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      Cetak Lembar Evaluasi
                    </button>
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-ink text-white text-xs font-semibold hover:bg-red transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Coba Lagi
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-8 mb-12">
              {quizQuestions.map((q, idx) => {
                const userChoice = selectedAnswers[q.id];
                const isAnswered = userChoice !== undefined;
                const isCorrect = isSubmitted && userChoice === q.correctAnswer;
                const isWrong = isSubmitted && isAnswered && !isCorrect;

                return (
                  <div
                    key={q.id}
                    id={`soal-${q.id}`}
                    className={`rounded-3xl border transition-all p-6 sm:p-8 bg-white shadow-sm ${
                      isSubmitted
                        ? isCorrect
                          ? "border-green/40 ring-1 ring-green/30"
                          : "border-red/30 ring-1 ring-red/20"
                        : isAnswered
                        ? "border-ink/20"
                        : "border-ink/8 hover:border-ink/15"
                    }`}
                  >
                    {/* Question Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-ink/5">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-xl bg-ink text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold border ${q.categoryBadge}`}
                        >
                          {q.category}
                        </span>
                      </div>

                      {isSubmitted && (
                        <div className="flex items-center gap-1.5">
                          {isCorrect ? (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-green-light text-green-dark border border-green/30">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Benar (+20 Poin)
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-red-light text-red-dark border border-red/20">
                              <XCircle className="w-3.5 h-3.5" />
                              Kurang Tepat
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Question Text */}
                    <h3 className="text-lg sm:text-xl font-bold text-ink leading-snug mb-6">
                      {q.question}
                    </h3>

                    {/* Options (A, B, C, D) */}
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {q.options.map((opt) => {
                        const isSelected = userChoice === opt.key;
                        const isThisCorrect = q.correctAnswer === opt.key;

                        let optionStyle =
                          "border-ink/10 bg-cream/30 text-ink hover:bg-cream hover:border-ink/20";
                        let badgeStyle = "bg-white text-ink-light border-ink/15";

                        if (isSubmitted) {
                          if (isThisCorrect) {
                            optionStyle =
                              "border-green/60 bg-green-light/40 text-ink font-semibold shadow-sm";
                            badgeStyle = "bg-green-dark text-white border-green-dark";
                          } else if (isSelected && !isThisCorrect) {
                            optionStyle =
                              "border-red/50 bg-red-light/40 text-ink-light line-through decoration-red";
                            badgeStyle = "bg-red text-white border-red";
                          } else {
                            optionStyle = "border-ink/5 bg-gray-50/50 text-ink-lighter opacity-60";
                            badgeStyle = "bg-gray-100 text-gray-400 border-gray-200";
                          }
                        } else if (isSelected) {
                          optionStyle =
                            "border-ink bg-ink/5 text-ink ring-2 ring-ink/10 font-semibold shadow-sm";
                          badgeStyle = "bg-ink text-white border-ink";
                        }

                        return (
                          <button
                            key={opt.key}
                            type="button"
                            disabled={isSubmitted}
                            onClick={() => handleSelectOption(q.id, opt.key)}
                            className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all flex items-center justify-between gap-4 cursor-pointer disabled:cursor-default ${optionStyle}`}
                          >
                            <div className="flex items-center gap-3.5 flex-1">
                              <span
                                className={`w-8 h-8 rounded-xl font-extrabold text-xs flex items-center justify-center shrink-0 border transition-colors ${badgeStyle}`}
                              >
                                {opt.key}
                              </span>
                              <span className="text-sm sm:text-base leading-relaxed">
                                {opt.text}
                              </span>
                            </div>

                            {/* Option status icon */}
                            {isSubmitted ? (
                              isThisCorrect ? (
                                <span className="inline-flex items-center gap-1 text-xs font-bold text-green-dark bg-white px-2.5 py-1 rounded-lg border border-green/30 shrink-0">
                                  <Check className="w-3.5 h-3.5 text-green-dark" />
                                  Kunci Jawaban
                                </span>
                              ) : isSelected ? (
                                <span className="inline-flex items-center gap-1 text-xs font-bold text-red bg-white px-2.5 py-1 rounded-lg border border-red/20 shrink-0">
                                  <X className="w-3.5 h-3.5 text-red" />
                                  Pilihan Anda
                                </span>
                              ) : null
                            ) : (
                              isSelected && (
                                <span className="w-5 h-5 rounded-full bg-ink text-white flex items-center justify-center shrink-0">
                                  <Check className="w-3 h-3" />
                                </span>
                              )
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Box (Visible after submit) */}
                    {isSubmitted && (
                      <div className="rounded-2xl border border-ink/8 bg-cream/40 p-5 mt-4 space-y-2 animate-fadeIn">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                          <HelpCircle className="w-4 h-4 text-blue" />
                          <span>
                            Pembahasan Jawaban Resmi (Kunci: Opsi {q.correctAnswer})
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                          {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Action Card */}
            <div className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-9 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-ink">
                  {isSubmitted
                    ? "Evaluasi Anda Telah Tercatat"
                    : "Siap Menyelesaikan Evaluasi?"}
                </h3>
                <p className="text-xs sm:text-sm text-ink-light mt-1 max-w-xl">
                  {isSubmitted
                    ? "Anda dapat meninjau kembali seluruh pembahasan di atas atau mengulang kuis untuk mematangkan refleks kedaruratan di jalan."
                    : answeredCount < totalQuestions
                    ? `Perhatian: Masih ada ${
                        totalQuestions - answeredCount
                      } soal yang belum dijawab. Pastikan semua opsi telah terpilih sebelum mengirim.`
                    : "Seluruh 5 soal telah Anda jawab. Klik tombol di samping untuk memeriksa skor dan pembahasan lengkap."}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                {isSubmitted ? (
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-ink text-white font-bold text-sm hover:bg-red transition-all shadow-md active:scale-95"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Ulangi Kuis
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={answeredCount === 0}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-md active:scale-95 ${
                      answeredCount === totalQuestions
                        ? "bg-red text-white hover:bg-red-dark hover:shadow-lg"
                        : "bg-ink text-white hover:bg-ink-light disabled:opacity-50 disabled:cursor-not-allowed"
                    }`}
                  >
                    <span>Kirim & Periksa Jawaban</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Quick Learning Review Section */}
            <div className="rounded-3xl border border-ink/10 bg-gradient-to-br from-cream to-white p-8 sm:p-10 mb-16">
              <div className="flex items-center gap-2.5 mb-3">
                <ShieldCheck className="w-5 h-5 text-green-dark" />
                <span className="text-xs font-bold uppercase tracking-wider text-ink-light">
                  Ikhtisar 5 Poin Kritis Kedaruratan
                </span>
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">
                Prinsip Tindakan Penyelamatan di Aspal
              </h3>
              <p className="text-xs sm:text-sm text-ink-lighter mb-6 leading-relaxed">
                Ingat selalu 5 prinsip dasar yang diujikan dalam kuis evaluasi ini saat Anda bertugas di jalan raya:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-ink/5 shadow-2xs">
                  <span className="w-7 h-7 rounded-xl bg-blue/10 text-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Baringkan & Elevasi Tungkai 30 cm</h4>
                    <p className="text-xs text-ink-lighter mt-1 leading-relaxed">
                      Pada korban pingsan tanpa cedera tulang, baringkan telentang dan tinggikan kedua kaki 30 cm untuk memulihkan perfusi serebral global.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-ink/5 shadow-2xs">
                  <span className="w-7 h-7 rounded-xl bg-red/10 text-red font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Balut Tekan Langsung (Direct Pressure)</h4>
                    <p className="text-xs text-ink-lighter mt-1 leading-relaxed">
                      Lakukan penekanan langsung di atas luka perdarahan luar secara mantap dengan kain bersih tanpa melepas kain lapisan pertama.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-ink/5 shadow-2xs">
                  <span className="w-7 h-7 rounded-xl bg-green/10 text-green-dark font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Imobilisasi Fraktur Tanpa Meluruskan Tulang</h4>
                    <p className="text-xs text-ink-lighter mt-1 leading-relaxed">
                      Jangan pernah meluruskan tulang atau memasukkan tulang yang menonjol. Pasang bidai melewati 2 sendi dan periksa kehangatan ujung jari.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-ink/5 shadow-2xs">
                  <span className="w-7 h-7 rounded-xl bg-yellow/20 text-yellow font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Larangan Saat Pingsan & Fraktur</h4>
                    <p className="text-xs text-ink-lighter mt-1 leading-relaxed">
                      Dilarang menampar/memberi makan-minum saat pingsan belum sadar, dan jangan menggerakkan leher/punggung yang dicurigai cedera saraf.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation to Other Resources */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/materi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white font-semibold text-sm hover:bg-red transition-all shadow-md active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>Pelajari Materi Lengkap</span>
              </Link>
              <Link
                href="/lkpd"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-ink/15 text-ink font-semibold text-sm hover:bg-cream transition-all shadow-sm active:scale-95"
              >
                <span>Buka Lembar Kasus LKPD</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </SmoothScroll>
  );
}
