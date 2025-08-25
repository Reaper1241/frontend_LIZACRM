<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white border border-blue-900/20 rounded-2xl p-8">
      <h1 class="text-3xl font-semibold text-blue-900 text-center mb-6">Вход в кабинет</h1>

      <form @submit.prevent="onSubmit" class="space-y-5">
        <!-- Email -->
        <div>
          <label class="block text-blue-900 mb-1">Email</label>
          <input
              v-model.trim="form.email"
              type="email"
              required
              placeholder="you@example.com"
              @blur="touch('email')"
              class="w-full rounded-lg border border-blue-600 focus:border-blue-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50 px-4 py-2 outline-none"
          />
          <p v-if="touched.email && errors.email" class="text-red-500 text-sm mt-1">
            {{ errors.email }}
          </p>
        </div>

        <!-- Password -->
        <div>
          <label class="block text-blue-900 mb-1">Пароль</label>
          <div class="relative">
            <input
                v-model.trim="form.password"
                :type="showPass ? 'text' : 'password'"
                required
                minlength="6"
                placeholder="••••••••"
                @blur="touch('password')"
                class="w-full rounded-lg border border-blue-600 focus:border-blue-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50 px-4 py-2 outline-none pr-12"
            />
            <button
                type="button"
                @click="showPass = !showPass"
                class="absolute inset-y-0 right-3 flex items-center text-blue-500 hover:text-blue-700"
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
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-60"
        >
          {{ submitting ? 'Входим…' : 'Войти' }}
        </button>

        <!-- Ошибка сервера -->
        <p v-if="serverError" class="text-red-500 text-center mt-2">
          {{ serverError }}
        </p>
      </form>

      <p class="text-center text-blue-700 mt-6">
        Нет аккаунта?
        <a href="/register" class="font-semibold hover:underline text-blue-900">Зарегистрируйтесь</a>
      </p>
    </div>
  </div>
</template>

<script setup>

import { computed, reactive, ref } from 'vue'
import axios from 'axios'
import { navigateTo } from '#app'

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
    const res = await axios.post(apiUrl + '/login', {
      email: form.email,
      password: form.password
    })

    const token = useCookie('auth_token', {
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'strict'
    })
    token.value = res.data.token

    const router = useRouter()
    router.push('/')

  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response?.status === 401) {
        serverError.value = 'Неверный email или пароль'
      } else {
        serverError.value = 'Ошибка сервера: ' + (err.response?.data?.message || err.message)
      }
    } else {
      serverError.value = 'Произошла ошибка при входе'
    }
    console.error('Login error:', err)
  } finally {
    submitting.value = false
  }
}
</script>