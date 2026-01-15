import { loginService } from "@/api/login.service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function LoginPage() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (email: string, password: string) => {
    try {
      setLoading(true)

      const data = await loginService(email, password)

      if (!data.success || !data.result) {
        throw new Error(data.error ?? "Login failed")
      }

      const { access_token, refresh_token } = data.result

      localStorage.setItem("access_token", access_token)
      localStorage.setItem("refresh_token", refresh_token)

      toast.success("Login Successful", {
        position: "top-center",
      })

      navigate("/mytimesheet")

    } catch (err: any) {
      toast.error("Login Failed", {
        description: err.response.data.error,
        position: "top-center",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#00bcd4] w-screen h-screen flex justify-center">
      <div className="text-white pt-30 flex flex-col items-center w-full">
        <div className="text-3xl font-bold">Timesheet</div>
        <div className="my-5 bg-white text-black md:w-1/4 lg:1/2 sm:1/2 p-4 shadow-xl border rounded-xl">
          <div className="w-full">
            <Label className="py-3 px-2">Email</Label>
            <Input type="email" placeholder="Email"
              onChange={e => { setEmail(e.target.value) }}
            />
          </div>

          <div className="w-full my-2">
            <Label className="py-3 px-2">Password</Label>
            <Input type="password" placeholder="Password"
              onChange={e => { setPassword(e.target.value) }}
            />
          </div>

          <Button
            className="w-full my-3 bg-[#3f51b5] hover:cursor-pointer"
            onClick={() => { handleSubmit(email, password) }}
          >
            {loading ? <Spinner /> : "Login"}
          </Button>
        </div>

        <div className="text-sm">© 2026 Timesheet. <span className="font-bold">Version</span> 4.3.0.0 [20261201]</div>
      </div>
    </div>
  )
}

export default LoginPage;
