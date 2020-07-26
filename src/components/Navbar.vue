  <template>
    <div class="hidden">
      <vs-sidebar
        absolute
        hover-expand
        reduce
        v-model="active"
        open
        >
        <template #logo>
          <!-- ...img logo -->
        </template>

        <vs-sidebar-item id="home">
          <template #icon>
            <i class='bx bx-home'></i>
          </template>
          <router-link class="btn btn-primary" to="/">Home</router-link>
        </vs-sidebar-item>

        <vs-sidebar-item id="market">
          <template #icon>
            <i class='bx bx-grid-alt'></i>
          </template>
          <router-link class="btn btn-primary" to="/blog">Blog</router-link>
        </vs-sidebar-item>

        <vs-sidebar-group>

          <template #header>

            <vs-sidebar-item arrow>
              <template #icon>
                <i class='bx bx-group'></i>
              </template>
              Social media
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="Instagram">
            <template #icon>
              <i class='bx bxl-instagram'></i>
            </template>
            Linkedin
          </vs-sidebar-item>

          <vs-sidebar-item id="Facebook">
            <template #icon>
              <i class='bx bxl-facebook' ></i>
            </template>
            Facebook
          </vs-sidebar-item>

        </vs-sidebar-group>

        <vs-sidebar-group>
          <template #header>

            <vs-sidebar-item arrow>
              <template #icon>
                <i class='bx bx-code-alt' ></i>
              </template>
              Coding
            </vs-sidebar-item>

          </template>

          <vs-sidebar-item id="github">
            <template #icon>
              <i class='bx bxl-github' ></i>
            </template>
            Github
          </vs-sidebar-item>

          <vs-sidebar-item id="codepen">
            <template #icon>
              <i class='bx bxl-codepen'></i>
            </template>
            Codepen
          </vs-sidebar-item>


          <vs-sidebar-item id="Javascript">
            <template #icon>
              <i class='bx bxl-javascript' ></i>
            </template>
            Native
          </vs-sidebar-item>

          <vs-sidebar-item id="git">
            <template #icon>
              <i class='bx bxl-git' ></i>
            </template>
            Netlify
          </vs-sidebar-item>

        </vs-sidebar-group>


        <vs-sidebar-item id="donate">
          <template #icon>
            <i class='bx bxs-donate-heart' ></i>
          </template>
          <router-link class="btn btn-primary" to="/giveme">Donate a coffe</router-link>
        </vs-sidebar-item>



        <vs-sidebar-item id="chat">
          <template #icon>
            <i class='bx bx-chat' ></i>
          </template>
          Chat
        </vs-sidebar-item>


        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class='bx bx-bell' ></i>

              <template #badge>
                1337
              </template>
            </vs-avatar>

            <vs-avatar>
              <img src="/avatars/avatar-5.png" alt="">
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
    </div>
  </template>



  <script>
  export default {
    data:() => ({
      active: 'navbar',
    })
  }
  </script>