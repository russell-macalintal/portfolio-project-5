class CreateGameIdeas < ActiveRecord::Migration[6.1]
  def change
    create_table :game_ideas, id: false do |t|
      t.string :id
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
