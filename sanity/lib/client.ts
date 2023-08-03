import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
  "skbUhii73SPk5oRzA6z1mzJgrbMg7RJBno2ubvuLjwIiXvKoBUmzAxcU3SdYJUIp1T720GzPLJoQMHuV5laGuqmWfUPc6F7aou66h92mFHPcjCCqsDmbzEGffRhXvHzRLy4Eeb44CJhroEE3aC8LULFYDkb14Wrka2UhfgxJzPOC1PlqQ7Wc",
})
