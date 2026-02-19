<template>
  <div class="min-h-screen bg-[var(--wmc-bg)] text-[var(--wmc-text)]">
    <header class="sticky top-0 z-40 border-b border-emerald-100 bg-white/95 backdrop-blur">
      <div class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-3 sm:h-20 sm:px-6">
        <div class="flex min-w-0 items-center gap-2 sm:gap-3">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--wmc-primary)] text-[var(--wmc-primary)] sm:h-12 sm:w-12">
            <span class="text-lg font-extrabold">W</span>
          </div>
          <div class="min-w-0 leading-tight">
            <p class="hidden text-xs text-emerald-700 sm:block sm:text-sm">โรงพยาบาลเวิลด์เมดิคอล</p>
            <p class="truncate text-sm font-bold text-emerald-900 sm:text-lg">บริการรถพยาบาลฉุกเฉิน</p>
          </div>
        </div>

        <nav class="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          <a href="#" class="transition hover:text-[var(--wmc-primary)]">หน้าหลัก</a>
          <a href="#service" class="transition hover:text-[var(--wmc-primary)]">บริการรถพยาบาล</a>
          <a href="#packages" class="transition hover:text-[var(--wmc-primary)]">ข้อมูลบริการ</a>
          <a href="#contact" class="transition hover:text-[var(--wmc-primary)]">ติดต่อเรา</a>
        </nav>

        <a
          href="tel:023407777"
          class="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-800 sm:px-5 sm:text-sm"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.64 2.6a2 2 0 0 1-.45 2.11L9.1 10.62a16 16 0 0 0 4.28 4.28l1.19-1.2a2 2 0 0 1 2.11-.45c.83.31 1.7.52 2.6.64A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span class="hidden sm:inline">02 340 7777</span>
          <span class="sm:hidden">โทร</span>
        </a>
      </div>
    </header>

    <section class="relative isolate h-[360px] w-full overflow-hidden sm:h-[520px]">
      <Transition name="fly-left" mode="out-in">
        <img
          :key="heroSlides[activeHeroSlide]"
          :src="heroSlides[activeHeroSlide]"
          alt="รถพยาบาลฉุกเฉิน"
          class="h-full w-full object-cover"
        />
      </Transition>
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-900/45 via-emerald-400/25 to-emerald-300/35"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(255,255,255,0.28),transparent_45%),radial-gradient(circle_at_82%_24%,rgba(110,231,183,0.25),transparent_42%),linear-gradient(to_bottom,rgba(16,185,129,0.18),rgba(255,255,255,0.06))]"></div>

      <div class="absolute inset-0 mx-auto flex h-full w-full max-w-7xl items-center px-3 sm:px-6">
        <div class="max-w-3xl rounded-2xl border border-white/35 bg-white/8 p-4 text-white shadow-[0_8px_40px_rgba(16,185,129,0.2)] backdrop-blur-md sm:p-8">
          <p class="text-[11px] font-semibold tracking-[0.2em] text-emerald-200 sm:text-sm sm:tracking-[0.25em]">บริการฉุกเฉินตลอด 24 ชั่วโมง</p>
          <h1 class="mt-2 text-3xl font-extrabold leading-tight sm:mt-3 sm:text-6xl">บริการรถพยาบาลฉุกเฉิน</h1>
          <p class="mt-3 max-w-2xl text-sm leading-relaxed text-emerald-50/90 sm:mt-4 sm:text-lg">
            บริการรับส่งผู้ป่วยโดยทีมบุคลากรทางการแพทย์ พร้อมอุปกรณ์ช่วยชีวิตมาตรฐาน รองรับพื้นที่กรุงเทพฯ และปริมณฑล
          </p>

          <div class="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
            <a href="#contact" class="inline-flex w-full items-center justify-center rounded-xl bg-[var(--wmc-accent)] px-5 py-2.5 text-sm font-bold text-emerald-950 transition hover:brightness-95 sm:w-auto sm:px-6 sm:py-3">
              เรียกรถพยาบาลทันที
            </a>
            <a href="#service" class="inline-flex w-full items-center justify-center rounded-xl border border-white/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:px-6 sm:py-3">
              ดูรายละเอียดบริการ
            </a>
          </div>
        </div>
      </div>
    </section>

    <main>
      <section id="service" class="relative overflow-hidden bg-[#f7f8f7] py-16 sm:py-20">
        <div class="pointer-events-none absolute inset-0 opacity-70">
          <div class="plus-shape left-[4%] top-[18%]"></div>
          <div class="plus-shape left-[22%] top-[64%]"></div>
          <div class="plus-shape left-[78%] top-[22%]"></div>
          <div class="plus-shape left-[90%] top-[58%]"></div>
          <div class="plus-shape left-[52%] top-[76%]"></div>
        </div>

        <div class="relative mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
          <div class="lg:col-span-6">
            <p class="text-base font-semibold text-slate-700">บริการสำหรับผู้ป่วย</p>
            <h2 class="mt-3 text-3xl font-extrabold leading-tight text-emerald-900 sm:text-6xl">บริการรถฉุกเฉิน</h2>
            <p class="mt-5 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
              เพราะเราพร้อมสำหรับการบริการสำหรับลูกค้าทุกท่าน เราจึงเตรียมสิ่งอำนวยความสะดวกไว้อย่างครบครัน
              ไม่ว่าจะเป็นสถานที่จอดรถที่กว้างขวาง สะดวกสบาย รวมถึงรักษาความปลอดภัย
            </p>

            <a
              href="#contact"
              class="mt-7 inline-flex items-center rounded-lg bg-emerald-700 px-7 py-3 text-base font-semibold text-white transition hover:bg-emerald-800"
            >
              ดูรายละเอียด
            </a>
          </div>

          <div class="lg:col-span-6">
            <div class="relative">
              <div class="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-black/6"></div>
              <img
                src="/rectangle_1015.jpg"
                alt="บริการรถพยาบาลฉุกเฉิน"
                class="relative h-[230px] w-full rounded-2xl object-cover shadow-sm sm:h-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="packages" class="bg-[#f7f8f7] py-14 sm:py-20">
        <div class="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <h3 class="text-2xl font-extrabold leading-tight text-emerald-900 sm:text-5xl">
            โรงพยาบาลไทยนครินทร์ มีรถพยาบาลฉุกเฉิน (Ambulance) ที่มีบุคลากร
            และอุปกรณ์ทางการแพทย์ที่พร้อมให้การช่วยเหลือผู้ป่วยอย่างมีคุณภาพ ด้วยมาตรฐานวิชาชีพ
          </h3>
          <p class="mt-5 text-base leading-relaxed text-slate-800 sm:text-lg">
            มีการทำงานเป็นทีม และการประสานงานอย่างรวดเร็วและปลอดภัย กรณีผู้ป่วยวิกฤติต่อเนื่องที่บ้านมีเหตุฉุกเฉิน
            ผู้ดูแลสามารถเรียกใช้บริการรถฉุกเฉิน ดังนี้
          </p>

          <ul class="mt-8 space-y-4 text-base leading-relaxed text-slate-800 sm:text-lg">
            <li class="flex gap-3">
              <span class="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500"></span>
              ชื่อ - สกุล ผู้แจ้ง พร้อมหมายเลขโทรศัพท์ เพื่อให้โรงพยาบาลสามารถติดต่อกลับได้ รวมทั้งให้คำแนะนำเบื้องต้น
            </li>
            <li class="flex gap-3">
              <span class="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500"></span>
              โรค อาการ การหายใจและชีพจรของผู้ป่วย เพื่อให้ผู้ป่วยได้รับการมาถึงอย่างรวดเร็วพร้อมทั้งจัดเตรียมแพทย์ เครื่องมือ และอุปกรณ์ประจำรถ
            </li>
            <li class="flex gap-3">
              <span class="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500"></span>
              สถานที่พักอาศัยของผู้ป่วย เพื่อให้รถฉุกเฉินมารับได้สะดวกและรวดเร็ว
            </li>
          </ul>
        </div>
      </section>
    </main>

    <footer id="contact" class="bg-[#e9e9e9]">
      <div class="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <p class="text-2xl font-extrabold text-emerald-900">ไทยนครินทร์</p>
          <p class="mt-4 text-base leading-relaxed text-slate-700">
            345 ถนนเทพรัตน ตร.3.5 แขวงบางนาเหนือ เขตบางนา กรุงเทพฯ 10260
          </p>
          <p class="mt-4 text-base text-slate-700">โทร 0 2340 7777 , 02 361 2727</p>
          <p class="mt-1 text-base text-slate-700">Email: info@thainakarin.co.th</p>
        </div>

        <div>
          <h4 class="text-2xl font-bold text-emerald-900">บริการของเรา</h4>
          <ul class="mt-4 space-y-2 text-base text-slate-700">
            <li>ศูนย์และคลินิกบริการ</li>
            <li>แพ็กเกจสุขภาพ</li>
            <li>โปรโมชั่น</li>
            <li>นัดหมายแพทย์</li>
          </ul>
        </div>

        <div>
          <h4 class="text-2xl font-bold text-emerald-900">เกี่ยวกับเรา</h4>
          <ul class="mt-4 space-y-2 text-base text-slate-700">
            <li>รู้จักไทยนครินทร์</li>
            <li>นักลงทุนสัมพันธ์</li>
            <li>ผู้บริหารโรงพยาบาล</li>
            <li>ข่าวสารไทยนครินทร์</li>
          </ul>
        </div>

        <div>
          <h4 class="text-2xl font-bold text-emerald-900">ติดต่อเรา</h4>
          <ul class="mt-4 space-y-2 text-base text-slate-700">
            <li>ติดต่อเรา</li>
            <li>ร่วมงานกับเรา</li>
          </ul>
          <div class="mt-6 flex gap-3">
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">f</span>
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">ig</span>
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">yt</span>
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">ln</span>
          </div>
        </div>
      </div>

      <div class="bg-emerald-900 text-white">
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 text-xs sm:px-6 md:flex-row md:items-center md:justify-between">
          <div class="flex flex-wrap gap-4 text-white/90">
            <span>นโยบายคุกกี้</span>
            <span>นโยบายความเป็นส่วนตัว</span>
            <span>นโยบายความเป็นส่วนตัวสำหรับผู้ใช้บริการและลูกค้าทั่วไป</span>
            <span>นโยบายความเป็นส่วนตัวสำหรับหน่วยงานภายนอกและผู้มาติดต่อทางธุรกิจ</span>
          </div>
          <span class="text-white/90">© 2026 All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue"

const heroSlides = [
  "/IMG_3356-1040x693-1.jpg",
  "/ablvan1.jpg",
  "/rectangle_1015.jpg",
]

const activeHeroSlide = ref(0)
let heroSliderTimer: ReturnType<typeof setInterval> | null = null

const nextHeroSlide = () => {
  activeHeroSlide.value = (activeHeroSlide.value + 1) % heroSlides.length
}

onMounted(() => {
  heroSliderTimer = setInterval(nextHeroSlide, 3000)
})

onBeforeUnmount(() => {
  if (heroSliderTimer) clearInterval(heroSliderTimer)
})
</script>

<style scoped>
:root {
  --wmc-primary: #006b4f;
  --wmc-accent: #f5c252;
  --wmc-bg: #f1f8f5;
  --wmc-text: #0f172a;
}

.plus-shape {
  position: absolute;
  width: 76px;
  height: 76px;
}

.plus-shape::before,
.plus-shape::after {
  content: "";
  position: absolute;
  background: transparent;
  border: 2px solid rgba(15, 23, 42, 0.06);
  border-radius: 4px;
}

.plus-shape::before {
  left: 30px;
  top: 0;
  width: 16px;
  height: 76px;
}

.plus-shape::after {
  left: 0;
  top: 30px;
  width: 76px;
  height: 16px;
}

.fly-left-enter-active,
.fly-left-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.fly-left-enter-from {
  transform: translateX(-16%);
  opacity: 0;
}

.fly-left-leave-to {
  transform: translateX(16%);
  opacity: 0;
}

.fly-left-enter-to,
.fly-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
