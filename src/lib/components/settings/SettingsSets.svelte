<script lang="ts">
import { timerStore, totalWorkoutTime } from "$lib/stores/timerStore";
import NumberInput from "$lib/components/settings/NumberInput.svelte";
import SettingsDisplayCard from "$lib/components/settings/SettingsDisplayCard.svelte";
import { fade } from "svelte/transition";
</script>

<SettingsDisplayCard displayMode="setsMode" displayNumber={$totalWorkoutTime} />
<form in:fade>
  <div class="grid justify-center lg:grid-cols-3 gap-4 mx-12 md:mx-auto">
    <NumberInput
      id="sets"
      label="Number of Sets"
      bind:value={$timerStore.sets}
      on:update={(e) => ($timerStore.sets = e.detail)}
      disabled={$timerStore.workoutStarted} />
    <NumberInput
      id="time"
      label="Time per set"
      bind:value={$timerStore.workTime}
      on:update={(e) => ($timerStore.workTime = e.detail)}
      disabled={$timerStore.workoutStarted} />
    <NumberInput
      id="rest"
      label="Rest time"
      bind:value={$timerStore.restTime}
      on:update={(e) => ($timerStore.restTime = e.detail)}
      disabled={$timerStore.workoutStarted} />
  </div>
</form>
