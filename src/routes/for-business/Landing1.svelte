<!-- Page for business -->

<script>
  import JoinWaitlist from '../JoinWaitlist.svelte'
</script>

<div class="bg-neutral-900">
  <main class="container mx-auto flex h-screen flex-col items-center pt-52">
    <div class="max-w-xl">
      <h1 class="text-6xl font-bold text-emerald-500">Custom AI Solutions</h1>
      <p class="text-md mt-2 text-gray-400">
        Visual platform to build, manage, and deploy custom LLM agents with
        ease.
      </p>
      <p class="text-md text-nowrap text-gray-400">
        Enough with the simple chatbots, build fully-fledged AI agents that can
        automate your business.
      </p>
    </div>

    <div class="mt-32 flex flex-col items-center">
      <h2 class="mt-10 text-center text-xl font-bold text-gray-200">
        Sign up to register interest
      </h2>
      <div class="mt-2 flex flex-row items-center">
        <JoinWaitlist color="emerald" fromPage="business" />
      </div>
      <p class="text-md mt-2 text-center text-gray-400">
        Selected emails will be able to participate in the beta program.
      </p>
    </div>
  </main>
</div>
