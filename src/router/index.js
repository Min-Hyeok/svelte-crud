import Home from 'Pages/Home.svelte';
import NotFound from 'Pages/NotFound.svelte';
import Signin from 'Pages/Signin.svelte';
import Signup from 'Pages/Signup.svelte';
import Write from 'Pages/Write.svelte';
import View from 'Pages/View.svelte';

export default {
  '/': Home,
  '/signin': Signin,
  '/signup': Signup,
  '/write': Write,
  '/view/:idx': View,
  '*': NotFound,
}