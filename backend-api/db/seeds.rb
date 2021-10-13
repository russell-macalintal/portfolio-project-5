# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ideas = [
    {
        uid: "10x",
        title: "Super Mario",
        content: "Mustachioed plumber saves a princess from an evil turtle."
    },
    {
        uid: "11x",
        title: "Halo",
        content: "Enhanced super soldier battles religious aliens and zombie-like monster infestations to save humanity from extinction."
    },
    {
        uid: "12x",
        title: "God of War",
        content: "Spartan battles beasts and gods to enact vengeance on Ares, the Greek God of War."
    },
]

ideas.each do |idea|
    GameIdea.create(uid: idea[:uid], title: idea[:title], content: idea[:content])
end

comments = [
    {
        uid: "1a",
        ideaId: "10x",
        content: "Mamma-mia! That's a great idea!"
    },
    {
        uid: "1b",
        ideaId: "10x",
        content: "That's just peachy."
    },
    {
        uid: "2a",
        ideaId: "11x",
        content: "That idea is out of this world!"
    },
    {
        uid: "3a",
        ideaId: "12x",
        content: "I'm conflicted. On one hand, I like fighting games, but on the other, I don't like mythology."
    },
    {
        uid: "3b",
        ideaId: "12x",
        content: "I'm conflicted. On one hand, I like mythology, but on the other, I don't like fighting games."
    },
    {
        uid: "3c",
        ideaId: "12x",
        content: "This is awesome! I love mythology and fighting games. This is perfect!"
    }
]

comments.each do |comment|
    Comment.create(uid: comment[:uid], ideaId: comment[:ideaId], content: comment[:content])
end