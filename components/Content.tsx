import { Stack } from "@chakra-ui/react";

interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <Stack w={"full"} minH="100vh" padding={"2em"}>
      {children}
    </Stack>
  );
}
