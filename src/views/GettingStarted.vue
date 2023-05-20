<template>
  <div class=" w-full">
    <section class="container mx-auto max-w-screen-xl">
      <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="max-w-xl">
          <h2 class="text-3xl font-bold sm:text-4xl">Product still in development 🛠</h2>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 ">
          <div class="flex items-start gap-4 bg-white">
            <div
              class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 lg:min-h-[300px]">
              <div class="pt-4 text-gray-500">
                <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  Join our mailing list to be notified when we launch
                </h3>

                <!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

                <div class="mt-5">
                  <label for="name" class="block text-sm font-medium text-gray-700">
                    Name
                  </label>

                  <input type="email" id="name" placeholder="Name"
                    class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-1 " />
                </div>
                <div class="mt-3">
                  <label for="UserEmail" class="block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input type="email" id="UserEmail" placeholder="john@rhcp.com"
                    class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-1 " />
                </div>
                <div class="flex justify-end mt-10">
                  <button
                    class="block w-full mt-4 rounded-full bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                    Join mailing list
                  </button>
                </div>

              </div>


            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutView",
}
</script>

<style scoped lang="scss"></style>
