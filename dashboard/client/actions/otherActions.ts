"use server"
export async function getSecretKey() {
    return process.env["SECRET_KEY"]
}