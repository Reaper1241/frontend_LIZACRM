<template>
  <div class="min-h-screen flex items-center justify-center bg-pink-50">
    <div class="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
      <h1 class="text-3xl font-semibold text-pink-600 text-center mb-6">Вход в кабинет</h1>

      <form @submit.prevent="onSubmit" class="space-y-5">
        <!-- Email -->
        <div>
          <label class="block text-pink-700 mb-1">Email</label>
          <input
              v-model.trim="form.email"
              type="email"
              required
              placeholder="you@example.com"
              @blur="touch('email')"
              class="w-full rounded-lg border border-pink-200 focus:border-pink-400 focus:ring focus:ring-pink-200 focus:ring-opacity-50 px-4 py-2 outline-none"
          />
          <p v-if="touched.email && errors.email" class="text-red-500 text-sm mt-1">
            {{ errors.email }}
          </p>
        </div>

        <!-- Password -->
        <div>
          <label class="block text-pink-700 mb-1">Пароль</label>
          <div class="relative">
            <input
                v-model.trim="form.password"
                :type="showPass ? 'text' : 'password'"
                required
                minlength="6"
                placeholder="••••••••"
                @blur="touch('password')"
                class="w-full rounded-lg border border-pink-200 focus:border-pink-400 focus:ring focus:ring-pink-200 focus:ring-opacity-50 px-4 py-2 outline-none pr-12"
            />
            <button
                type="button"
                @click="showPass = !showPass"
                class="absolute inset-y-0 right-3 flex items-center text-pink-400 hover:text-pink-600"
                :aria-label="showPass ? 'Скрыть пароль' : 'Показать пароль'"
            >
              <span v-if="showPass">🙈</span>
              <span v-else>👁️</span>
            </button>
          </div>
          <p v-if="touched.password && errors.password" class="text-red-500 text-sm mt-1">
            {{ errors.password }}
          </p>
        </div>

        <!-- Submit -->
        <button
            type="submit"
            :disabled="submitting"
            class="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition disabled:opacity-60"
        >
          {{ submitting ? 'Входим…' : 'Войти' }}
        </button>

        <!-- Ошибка сервера -->
        <p v-if="serverError" class="text-red-500 text-center mt-2">
          {{ serverError }}
        </p>
      </form>

      <p class="text-center text-pink-600 mt-6">
        Нет аккаунта?
        <a href="/register" class="font-semibold hover:underline">Зарегистрируйтесь</a>
      </p>
    </div>
  </div>
</template>

<script setup>

import { computed, reactive, ref } from 'vue'

const form = reactive({ email: '', password: '' })
const touched = reactive({ email: false, password: false })
const showPass = ref(false)
const submitting = ref(false)
const serverError = ref('')

const config = useRuntimeConfig()
const apiUrl = config.public.apiBaseUrl

function touch(field) {
  touched[field] = true
}

const errors = computed(() => {
  const e = { email: '', password: '' }
  if (!form.email) e.email = 'Укажите email'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) e.email = 'Некорректный email'
  if (!form.password) e.password = 'Введите пароль'
  else if (form.password.length < 6) e.password = 'Минимум 6 символов'
  return e
})

const isValid = computed(() => !errors.value.email && !errors.value.password)

async function onSubmit() {
  touched.email = true
  touched.password = true
  serverError.value = ''

  if (!isValid.value) return

  submitting.value = true

  try {
    const {data, error} = await useFetch(apiUrl + '/login', {
      method: 'POST',
      body: {
        email: form.email,
        password: form.password
      }
    })

    if (error.value) {
      serverError.value = 'Неверный email или пароль'
      return
    }

    const token = useCookie('auth_token')
    token.value = data.value.token

    // Successful login
    await navigateTo('/')

  } catch (err) {
    serverError.value = 'Произошла ошибка при входе'
    console.error('Login error:', err)
  } finally {
    submitting.value = false
  }
}
</script>