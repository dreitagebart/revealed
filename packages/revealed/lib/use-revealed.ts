import { createContext, useContext } from "react";
import type Reveal from "reveal.js";

type RevealedCtx = Reveal.Api | null;

export const RevealedContext = createContext<RevealedCtx>(null);

export const useRevealed = () => {
	return useContext(RevealedContext);
};
