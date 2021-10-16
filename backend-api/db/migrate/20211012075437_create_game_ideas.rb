class CreateGameIdeas < ActiveRecord::Migration[6.1]
  def change
    create_table :game_ideas, id: false, primary_key: :uid do |t|
      t.string :uid
      t.string :userId
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
