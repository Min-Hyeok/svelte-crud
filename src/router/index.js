import Home from 'Pages/Home.svelte';
import NotFound from 'Pages/NotFound.svelte';
import Signin from 'Pages/Signin.svelte';
import Signup from 'Pages/Signup.svelte';

export default {
  '/': Home,
  '/signin': Signin,
  '/signup': Signup,
  '*': NotFound,
}