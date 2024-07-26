<script lang="ts">
  export let fromPage: string
  export let color: 'emerald' | 'indigo' | 'blue' = 'emerald'

  const colorVariants = {
    emerald: 'bg-emerald-600 hover:bg-emerald-500',
    indigo: 'bg-indigo-600 hover:bg-indigo-500',
    blue: 'bg-blue-600 hover:bg-blue-500'
  }

  let email = ''

  let success = false
  let error = ''

  const joinWaitlist = async () => {
    console.log('Joining waitlist with email:', email)

    if (!email) {
      error = 'Error: Email is required'
      return
    }

    if (!email.includes('@') || !email.includes('.')) {
      error = 'Error: Invalid email'
      return
    }

    try {
      const res = await fetch(
        'https://lefv2u7s27wmo25osdr5cygfia0zcney.lambda-url.eu-west-1.on.aws/',
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, fromPage})
        }
      )

      if (res.status === 200) {
        success = true
        error = ''
      } else {
        error = 'Error: Failed to join waitlist'
      }
    } catch (err) {
      error = 'Error: Failed to join waitlist'
    }
  }
</script>

<div class="flex flex-col">
  <div class="flex flex-row items-center">
    <input
      bind:value={email}
      type="text"
      placeholder="Email"
      class="bg-neutral-700 p-2 text-gray-200 focus:outline-none lg:w-80"
    />
    <button
      on:click={joinWaitlist}
      class="{colorVariants[color]} ml-2 p-2 px-6 text-white">Join</button
    >
    <svg
      class="ml-1 h-6 w-6 text-green-500 opacity-0"
      class:opacity-100={success}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  </div>
  {#if error}
    <p class="text-sm text-red-500">{error}</p>
  {/if}
</div>
