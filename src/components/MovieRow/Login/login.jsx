import "./login.css";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { supabase } from "../supabase";

const user = undefined;

function Toast() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  );
}
