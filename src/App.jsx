import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Welcome from "./pages/Welcome"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Account from "./pages/Account"

function App() {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const storedUser = localStorage.getItem("user")

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    setLoading(false)

  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Welcome />} />

        <Route
          path="/signup"
          element={<Signup setUser={setUser} />}
        />

        <Route
          path="/login"
          element={<Login setUser={setUser} />}
        />

        <Route
          path="/account"
          element={
            user ? (
              <Account user={user} setUser={setUser} />
            ) : (
              <Login setUser={setUser} />
            )
          }
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App