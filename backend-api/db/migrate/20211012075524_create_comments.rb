class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments, id: false do |t|
      t.string :id
      t.string :ideaId
      t.string :content

      t.timestamps
    end
  end
end
