import { store } from "./store"
import { setUser } from "./store/features/auth/authSlice"

export const userHandle = data => {
    store.dispatch(setUser(data))
}

