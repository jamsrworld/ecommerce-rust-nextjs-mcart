"use client";

import { type AuthRegisterInput } from "@/api";
import { registerMutation } from "@/api/@tanstack/react-query.gen";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@jamsr-ui/react";
import { onRHFInvalid, RHFInput, RHFProvider } from "@repo/components/rhf";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schema";

type FormValues = AuthRegisterInput;
type Props = {
  onSuccess: (data: FormValues) => void;
};

export const RegisterForm = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { onSuccess } = props;
  const defaultValues: FormValues = {
    fullName: "",
    confirmPassword: "",
    email: "",
    password: "",
  };
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(registerSchema),
  });

  const mutation = useMutation({
    ...registerMutation(),
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(
      {
        body: data,
      },
      {
        onSuccess() {
          onSuccess(data);
        },
      },
    );
  }, onRHFInvalid);

  return (
    <RHFProvider
      methods={methods}
      onSubmit={onSubmit}
      isPending={mutation.isPending}
      className="flex flex-col justify-center gap-4"
    >
      <RHFInput<FormValues>
        name="fullName"
        size="lg"
        label="Full Name"
        labelPlacement="inside"
      />
      <RHFInput<FormValues>
        name="email"
        size="lg"
        label="Email Address"
        type="email"
        labelPlacement="inside"
      />
      <RHFInput<FormValues>
        name="password"
        size="lg"
        label="Password"
        isSecuredText
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        labelPlacement="inside"
      />
      <RHFInput<FormValues>
        name="confirmPassword"
        size="lg"
        label="Confirm Password"
        isSecuredText
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        labelPlacement="inside"
      />
      <Button
        color="primary"
        variant="solid"
        fullWidth
        size="lg"
        type="submit"
        isLoading={mutation.isPending}
      >
        Register
      </Button>
    </RHFProvider>
  );
};