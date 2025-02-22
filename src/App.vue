<script setup lang="ts">
import { ref } from 'vue'
import { CheckCircleIcon, QrCodeIcon, ChartBarIcon, CheckBadgeIcon } from '@heroicons/vue/24/solid'

const features = [
  'Informacione të menjëhershme ushqyese',
  'Rekomandime të personalizuara shëndetësore',
  'Paralajmërime për alergjenët',
  'Ndjekja e objektivave',
  'Integrimi i listës së blerjeve',
  'Mbështetje nga komuniteti'
]

const email = ref('')

const handleSubmit = () => {
  alert('Faleminderit për interesin tuaj! Do t\'ju mbajmë të informuar.')
  email.value = ''
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white shadow-sm fixed w-full z-10">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <span class="text-2xl font-bold bg-gradient-to-r from-brand-orange via-brand-violet to-brand-green bg-clip-text text-transparent">Ha mirë</span>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#features" class="text-gray-600 hover:text-brand-violet">Veçoritë</a>
            <a href="#how-it-works" class="text-gray-600 hover:text-brand-violet">Si Funksionon</a>
            <a href="#contact" class="text-gray-600 hover:text-brand-violet">Kontakt</a>
          </div>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <div class="pt-20">
      <div class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <div class="lg:grid lg:grid-cols-12 lg:gap-8">
              <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 lg:col-span-6">
                <div class="sm:text-center lg:text-left">
                  <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span class="block">Bëj zgjedhje</span>
                    <span class="block bg-gradient-to-r from-brand-orange via-brand-violet to-brand-green bg-clip-text text-transparent">më të shëndetshme</span>
                  </h1>
                  <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Skano produktet gjatë blerjeve për të marrë informacion të menjëhershëm për vlerat ushqyese dhe si përputhen me objektivat tuaja shëndetësore.
                  </p>
                  <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow">
                      <a href="#contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-brand-orange via-brand-violet to-brand-green hover:from-brand-orange-dark hover:via-brand-violet-dark hover:to-brand-green-dark md:py-4 md:text-lg md:px-10">
                        Merr Qasje të Hershme
                      </a>
                    </div>
                  </div>
                </div>
              </main>
              <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <img
                    class="w-full rounded-lg"
                    src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800"
                    alt="Ushqim i shëndetshëm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div id="features" class="py-12 bg-gradient-to-b from-white to-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Gjithçka që ju nevojitet për të ngrënë më mirë
            </h2>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Aplikacioni ynë ju ndihmon të merrni vendime të informuara për zgjedhjet tuaja ushqimore.
            </p>
          </div>

          <div class="mt-10">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div v-for="feature in features" :key="feature" class="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <CheckCircleIcon class="h-6 w-6 text-brand-violet" />
                <span class="ml-3 text-lg text-gray-900">{{ feature }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- How it Works Section -->
      <div id="how-it-works" class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Si Funksionon
            </h2>
          </div>
          <div class="mt-10">
            <div class="grid grid-cols-1 gap-10 sm:grid-cols-3">
              <div class="text-center">
                <div class="flex items-center justify-center h-16 w-16 rounded-xl bg-brand-orange text-white mx-auto transform transition-transform hover:scale-110">
                  <QrCodeIcon class="h-8 w-8" />
                </div>
                <h3 class="mt-4 text-lg font-medium text-gray-900">Skano Produktet</h3>
                <p class="mt-2 text-base text-gray-500">
                  Thjesht skano kodin e çdo produkti gjatë blerjeve
                </p>
              </div>
              <div class="text-center">
                <div class="flex items-center justify-center h-16 w-16 rounded-xl bg-brand-violet text-white mx-auto transform transition-transform hover:scale-110">
                  <ChartBarIcon class="h-8 w-8" />
                </div>
                <h3 class="mt-4 text-lg font-medium text-gray-900">Merr Informacion</h3>
                <p class="mt-2 text-base text-gray-500">
                  Merr informacion të detajuar ushqyes dhe rekomandime shëndetësore
                </p>
              </div>
              <div class="text-center">
                <div class="flex items-center justify-center h-16 w-16 rounded-xl bg-brand-green text-white mx-auto transform transition-transform hover:scale-110">
                  <CheckBadgeIcon class="h-8 w-8" />
                </div>
                <h3 class="mt-4 text-lg font-medium text-gray-900">Bëj Zgjedhje më të Mira</h3>
                <p class="mt-2 text-base text-gray-500">
                  Zgjidh ushqime që përputhen me objektivat tuaja shëndetësore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Section with Image -->
      <div id="contact" class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <img
                class="w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800"
                alt="Varietete ushqimesh të shëndetshme"
              />
            </div>
            <div class="mt-10 lg:mt-0">
              <div class="lg:text-left">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Regjistrohu në Listën e Pritjes
                </h2>
                <p class="mt-4 text-xl text-gray-500">
                  Bëhu ndër të parët që do të përjetojnë të ardhmen e blerjeve të shëndetshme
                </p>
              </div>
              <div class="mt-8">
                <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-6">
                  <div>
                    <label for="email" class="sr-only">Adresa e emailit</label>
                    <input
                      id="email"
                      v-model="email"
                      type="email"
                      required
                      class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand-violet focus:border-brand-violet border-gray-300 rounded-md"
                      placeholder="Shkruani emailin tuaj"
                    >
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-brand-orange via-brand-violet to-brand-green hover:from-brand-orange-dark hover:via-brand-violet-dark hover:to-brand-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-violet"
                    >
                      Merr Qasje të Hershme
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="bg-white">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div class="flex justify-center space-x-6 md:order-2">
            <p class="text-center text-base text-gray-400">
              © {{ new Date().getFullYear() }} Ha mirë. Të gjitha të drejtat e rezervuara.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>