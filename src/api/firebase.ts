import { initializeApp } from 'firebase/app';
import { v4 as uuid } from 'uuid';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, get, remove } from 'firebase/database';
import { UserType, Product } from '../components/Types';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
  return signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  return signOut(auth).catch(console.error);
}

interface UserStateChangeCallbackParam extends UserType {
  isAdmin?: boolean;
}
type UserStateChangeCallback = (
  user: UserStateChangeCallbackParam | null,
) => void;

export function onUserStateChange(callback: UserStateChangeCallback) {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      const user: UserType = {
        displayName: firebaseUser.displayName || '',
        uid: firebaseUser.uid,
        email: firebaseUser.email || '',
        provider: firebaseUser.providerData[0]?.providerId || '',
        photoURL: firebaseUser.photoURL || '',
      };
      const updatedUser = await adminUser(user);
      callback(updatedUser);
    } else {
      callback(null);
    }
  });
}

async function adminUser(user: UserType): Promise<UserType> {
  return get(ref(database, 'admins')) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

interface ProductInput extends Omit<Product, 'id' | 'image'> {
  options?: string[] | string;
  description?: string;
  quantity: number;
  option: string;
}

export async function addNewProduct(product: ProductInput, image: string) {
  const id = uuid();

  let optionsArray = product.options;

  // If options is a string, convert it to an array
  if (typeof product.options === 'string') {
    optionsArray = product.options.split(',').map((option) => option.trim());
  }

  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: product.price,
    image,
    options: optionsArray,
  });
}

export async function getProducts() {
  return get(ref(database, 'products')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val()) as Product[];
    }
    return [];
  });
}

export async function getCart(userId: string) {
  return get(ref(database, `carts/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items) as Product[];
    });
}

export async function addOrUpdateToCart(userId: string, product: Product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId: string, productId: string) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}
