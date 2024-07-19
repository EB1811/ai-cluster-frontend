<script>
  export let color

  let email = ''

  let success = false
  let error = ''

  const joinWaitlist = async () => {
    console.log('Joining waitlist with email:', email)

    if (!email) {
      error = 'Error: Email is required'
      return
    }

    try {
      const res = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email})
      })

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
      class="w-80 bg-neutral-700 p-2 text-gray-200 focus:outline-none"
    />
    <button
      on:click={joinWaitlist}
      class="ml-2 bg-{color}-500 p-2 px-6 text-white">Join</button
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
