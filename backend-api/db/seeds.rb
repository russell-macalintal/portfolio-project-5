# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
    {
        uid: "a10",
        username: "bungie",
        password: "masterchief"
    },
    {
        uid: "b20",
        username: "miyamoto",
        password: "mario"
    },
    {
        uid: "c20",
        username: "santa_monica",
        password: "cjgta"
    },
    {
        uid: "111",
        username: "regular_joe",
        password: "cupojoe"
    },
    { 
        uid: "g17",
        username: "rude_gamer",
        password: "rayray"
    },
    {
        uid: "ggaaw",
        username: "light-night",
        password: "afraidofthedark"
    }
]

users.each do |user|
    User.create(uid: user[:uid], username: user[:username], password: user[:password])
end

ideas = [
    {
        uid: "10x",
        userId: "b20",
        title: "Super Mario",
        content: "Mustachioed plumber saves a princess from an evil turtle."
    },
    {
        uid: "11x",
        userId: "a10",
        title: "Halo",
        content: "Enhanced super soldier battles religious aliens and zombie-like monster infestations to save humanity from extinction."
    },
    {
        uid: "12x",
        userId: "c20",
        title: "God of War",
        content: "Spartan battles beasts and gods to enact vengeance on Ares, the Greek God of War."
    },
]

ideas.each do |idea|
    GameIdea.create(uid: idea[:uid], userId: idea[:userId], title: idea[:title], content: idea[:content])
end

comments = [
    {
        uid: "1a",
        userId: "ggaaw",
        ideaId: "10x",
        content: "Mamma-mia! That's a great idea!"
    },
    {
        uid: "1b",
        userId: "g17",
        ideaId: "10x",
        content: "That's just peachy."
    },
    {
        uid: "2a",
        ideaId: "11x",
        userId: "111",
        content: "That idea is out of this world!"
    },
    {
        uid: "3a",
        userId: "111",
        ideaId: "12x",
        content: "I'm conflicted. On one hand, I like fighting games, but on the other, I don't like mythology."
    },
    {
        uid: "3b",
        userId: "g17",
        ideaId: "12x",
        content: "I'm conflicted. On one hand, I like mythology, but on the other, I don't like fighting games."
    },
    {
        uid: "3c",
        userId: "ggaaw",
        ideaId: "12x",
        content: "This is awesome! I love mythology and fighting games. This is perfect!"
    }
]

comments.each do |comment|
    Comment.create(uid: comment[:uid], userId: comment[:userId], ideaId: comment[:ideaId], content: comment[:content])
end

