class CreateGameIdeas < ActiveRecord::Migration[6.1]
  def change
    create_table :game_ideas do |t|
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
