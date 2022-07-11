import { getAuth, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';
import { defineStore } from "pinia";

// const auth = getAuth();

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        userData: null as User | null,
        isAuthenticated: false,
    }),
    getters: {
        getCurrentUser: (state) => state.userData,
    },
    actions: {
        async logoutUser() {
            this.userData = null;
            this.isAuthenticated = false;

            const auth = getAuth();
            await signOut(auth);
        },
        async loginUser(email: string, password: string) {
            try {
                const auth = getAuth();

                const user = await signInWithEmailAndPassword(auth, email, password);
                this.isAuthenticated = true;
                
                return true;
            } catch (error) {
                return false;
            }
        },
        setUser(userData: User) {
            this.userData = userData;
        }
    }
});