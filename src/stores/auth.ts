import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        userData: null,
    }),
    getters: {
        getCurrentUser: (state) => state.userData,
    },
    actions: {
        async logoutUser() {
            this.userData = null;
            const auth = getAuth();
            await signOut(auth);
        },
        async loginUser(email: string, password: string) {
            try {
                const auth = getAuth();

                await signInWithEmailAndPassword(auth, email, password);
                return true;
            } catch (error) {
                return false;
            }
        }
    }
});