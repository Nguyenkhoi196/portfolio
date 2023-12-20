<template>
  <div class="dark:bg-primary overflow-hidden">
    <div id="about" class="container mx-auto">
      <div class="flex flex-col py-20 px-10">
        <div class="flex-col flex gap-3">
          <p class="text-dark dark:text-tertiary text-xl">About me</p>

          <hr class="w-20" />
        </div>
        <div class="max-w-full">
          <div class="h-full">
            <h2 class="text-5xl text-tertiary dark:text-dark">
              I am an enthusiastic web developer based in Hanoi, with over 1 year of experience in
              website development.
            </h2>
          </div>
        </div>
        <div class="container mx-auto pt-10">
          <div class="flex flex-col md:flex-row gap-20">
            <div class="lg:w-full">
              <h2 class="text-3xl text-dark dark:text-tertiary">
                Design and develop beautiful websites
              </h2>
            </div>
            <div class="flex flex-col gap-5">
              <div>
                <p class="text-dark text-xl">
                  With one year of experience in a product company I already have the skills of
                  understanding client requirement and work flow, features, technologies used by the
                  company in its project. Moreover, I have learned and updated on current hot trends
                  in technology.
                </p>
              </div>
              <div>
                <p class="text-dark text-xl"></p>
              </div>
              <div class="pt-2">
                <a href="/">
                  <button
                    class="group text-dark border-dark group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 dark:hover:border-tertiary duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-3 origin-left hover:decoration-2 hover:text-tertiary relative bg-transparent h-12 w-64 border text-left p-3 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-1 before:bg-secondary/20 before:rounded-full before:blur-lg after:absolute after:z-1 after:w-20 after:h-20 after:content[''] after:bg-tertiary after:right-8 after:top-3 after:rounded-full after:blur-md"
                  >
                    See more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="skill&experience" class="container mx-auto">
      <div class="grid grid-flow-row md:grid-flow-col px-10 py-20">
        <div class="flex flex-col gap-5">
          <h2 class="text-2xl text-dark dark:text-tertiary">Skill</h2>
          <hr class="w-20" />
          <div>
            <h4 class="font-medium">Front-end :</h4>
            <p>HTML, CSS, VueJs, NuxtJs, Bootstrap, TailWindCss</p>
          </div>
          <div>
            <h4 class="font-medium">Back-end :</h4>
            <p>Strapi, RestfulAPI, Socket.io</p>
          </div>
          <div>
            <h4 class="font-medium">Database :</h4>
            <p>PostgresQL</p>
          </div>
          <div>
            <h4 class="font-medium">Other :</h4>
            <p>Typescript, Git, Github, Jira/Scrum, Figma, Postman</p>
          </div>
          <div>
            <h4 class="font-medium">English :</h4>
            <p>
              TOEIC certificate ;<br />
              Can read and understand English documents
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <h2 class="text-2xl text-dark dark:text-tertiary">My Experience</h2>
          <hr class="w-20" />
          <div>
            <div class="flex flex-col pt-2 gap-2">
              <div class="p-2 px-3 rounded bg-primary/50 dark:bg-tertiary/50 w-fit">
                2/2023 - Now
              </div>
              <h4>VNELEARNING TECHNOLOGY SOLUTIONS JOINT STOCK COMPANY</h4>
              <h3 class="text-base font-medium">Front-end Developer</h3>
              <p>Participating projects :</p>
              <p class="list-inside list-item">Hoola HomePage</p>
              <p>
                Convert from design file to responsitive website interface. <br />Collaborate with
                other departments to create ideas and contents for each page.<br />Learn the
                company's products and workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
