<script lang="ts">
  export let color: 'emerald' | 'indigo' | 'blue' = 'emerald'

  const colorVariants = {
    emerald: 'bg-emerald-600 hover:bg-emerald-500',
    indigo: 'bg-indigo-600 hover:bg-indigo-500',
    blue: 'bg-blue-600 hover:bg-blue-500'
  }
</script>

<footer
  class="{colorVariants[
    color
  ]} px-4 py-6 text-center text-white transition-colors duration-500"
>
  Beta program coming soon...
</footer>
