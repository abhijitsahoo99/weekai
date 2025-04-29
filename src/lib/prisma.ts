import { PrismaClient } from "../generated/prisma";

declare global {
  var prisma: PrismaClient | undefined;
}

// Create a single instance of PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ["query"],
  });
};

// Use the global object to store the PrismaClient instance
const prisma = global.prisma ?? prismaClientSingleton();

// In development, store the PrismaClient instance on the global object
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export { prisma };
