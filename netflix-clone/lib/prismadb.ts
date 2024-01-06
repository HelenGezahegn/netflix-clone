import { PrismaClient } from "@prisma/client";

// We do this because of NextJs's hot reloading. We don't want to recreate a bunch of prisma client instances so we create this global file
// as global files aren't affected by hot reloading.
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV == "production") global.prismadb = client;

export default client;
