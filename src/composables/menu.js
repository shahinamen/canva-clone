import { ref } from 'vue';

export default function useMenu() {
  const menuItem = ref([
    {
      name: 'Home',
      icon: 'HomeIcon',
    },
    {
      name: 'Help Center',
      icon: 'HelpIcon',
    }
  ]);
  return { menuItem };
}