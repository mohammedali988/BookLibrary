import { Client as workflowClient } from "@upstash/workflow";
import config from "./config";

export const workflowClient = new workflowClient({
  baseUrl: config.env.upstash.qStashUrl,
  token: config.env.upstash.qStashToken,
});
