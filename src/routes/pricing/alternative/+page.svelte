<script lang="ts">
  import IconArrowRight from "~icons/mdi/arrow-right";
  import IconCheck from "~icons/mdi/check-circle";

  const items = [
    {
      package: "Liten",
      description:
        "Liten gir deg en landingsside som har alt innholdet på én side. Nettsiden er selvfølgelig søkomotoroptimalisert og med ditt unike design.",
      features: ["1 side", "Kontaktskjema"]
    },
    {
      package: "Medium",
      description:
        "Medium gir deg mulighet til å presentere innholdet ditt over flere sider – som tjenester, priser eller menyer.",
      features: ["Opptil 5 sider", "Meny og prisliste", "Kontaktskjema"]
    },
    {
      package: "Stor",
      description:
        "Har du behov for flere sider eller ønsker å skrive artikler på nettsiden din? Med Stor får du ubegrenset antall artikler og mulighet til å redigere alt selv.",
      features: [
        "Opptil 10 sider",
        "Blogg / Nyheter",
        "Rediger selv",
        "Gratis opplæring",
        "Meny og prisliste",
        "Kontaktskjema"
      ]
    }
  ];
</script>

<section class="max-w-screen-xl mx-auto">
  <h1 class="h1 mb-8">Velg en nettsidepakke som passer for deg</h1>
  <p class="text-xl opacity-80 dark:text-slate-300 mb-16">
    Alle nettsidene er designet etter prinsippene for universell utforming, skinner like godt på
    desktop, tablet og mobil og inkluderer en generell informasjon om personvern. Vi hjelper deg med
    å skrive tekst til sidene, og sørger for at du får et design som står i stil med din bedrift.
  </p>

  <div class="grid gap-8 xl:grid-cols-3 ">
  {#each items as item}
    <div
      class="flex flex-col justify-between rounded-xl border-4 border-gray-400 p-4 dark:border-gray-500"
    >
      <div>
        <h2 class="h2 mb-4">{item.package}</h2>

        <p class="text-xl opacity-80 dark:text-slate-300">{item.description}</p>

        <h3 class="h4 my-4">{item.package} gir deg tilgang til</h3>

        <div class="my-4 space-y-2 text-gray-700 dark:text-gray-300">
          {#each item.features as feature}
            <p class="flex gap-2 text-lg">
              <IconCheck />
              {feature}
            </p>
          {/each}
        </div>
      </div>

      <div>
        <button class="btn btn-lg variant-filled-primary mt-4 flex w-full justify-between">
          Be om tilbud
          <IconArrowRight />
        </button>
      </div>
    </div>
  {/each}    
  </div>
  

</section>
