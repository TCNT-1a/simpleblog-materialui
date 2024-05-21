import { Button, TextInput } from "flowbite-react";

export default function LoginPage() {
  return (
    <div className="container mx-auto  flex flex-col">
      <div className="w-150 mx-auto text-center space-y-2 mt-20">
        <h1 className="bg-black">Login</h1>
        <TextInput
          id="email"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
        <TextInput
          id="password"
          type="password"
          placeholder="Password"
          required
        />
        <div className="flex justify-center">
          <Button color={"blue"}>Login</Button>
        </div>
      </div>
    </div>
  );
}
