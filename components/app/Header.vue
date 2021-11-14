<template>
  <header
    class="flex lg:items-center flex-col lg:flex-row bg-white border-b border-border lg:h-16 px-4 xl:px-8 transition-all duration-500"
    :class="[mobileMenuIsOpen ? '' : 'h-16']"
  >
    <div class="flex items-center mt-5 lg:mt-0">
      <img class="w-40 xl:w-52" src="~/assets/img/league-pepite-logo-horizontal.png">
    </div>
    <nav
      class="lg:flex lg:flex-row items-center flex-1 h-full gap-2 font-medium uppercase lg:text-xs xl:text-sm lg:ml-6 xl:ml-12"
      :class="[mobileMenuIsOpen ? 'flex flex-col text-sm my-4 lg:my-0' : 'hidden text-xs']"
    >
      <NuxtLink
        v-for="menu in menus"
        :to="menu.to"
        class="flex items-center px-2 py-1 h-full hover:text-orange-500"
        active-class="text-orange-500 border-b-2 border-orange-500"
      >
        {{ menu.label }}
      </NuxtLink>
      <BaseSpacer />
      <template v-if="!isLogged">
        <!--<BaseButton to="/auth/signup" class="mr-2">Rejoindre la League</BaseButton>-->
        <BaseButton to="/auth/signin" text>Se connecter</BaseButton>
      </template>
      <template v-else>
        <BaseMenu>
          <li class="h-full flex items-center normal-case font-medium text-sm cursor-pointer hover:text-orange-500">
            {{ user.username }}
          </li>
          <template #popper>
            <ul class="flex flex-col">
              <BaseLink 
                class="flex items-center pl-4 pr-8 py-4 cursor-pointer hover:text-orange-500 hover:bg-orange-100"
                tag="li"
                to="/profile/cvs"
              >
                <BaseIcon class="mr-4" name="document-text" />
                Mes fiches
              </BaseLink>
              <BaseLink 
                class="flex items-center pl-4 pr-8 py-4 cursor-pointer hover:text-orange-500 hover:bg-orange-100"
                tag="li"
                @click="onLogout"
              >
                <BaseIcon class="mr-4" name="logout" />
                Se déconnecter
              </BaseLink>
            </ul>
          </template>
        </BaseMenu>
      </template>
    </nav>
    <AppBurgerMenu />
  </header>
</template>

<script setup>
const { menus, mobileMenuIsOpen } = useHeader()
const { isLogged, onLogout } = useAuth()
const user = useState('user')
</script>