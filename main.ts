import { prisma } from './generated/prisma'

async function main() {
    const user = await prisma.createUser({
        name: 'Denis',
        gender: 'MALE'
    })

    console.log(user.gender)
}

main()
