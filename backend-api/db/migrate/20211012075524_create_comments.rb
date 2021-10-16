class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments, id: false, primary_key: :uid do |t|
      t.string :uid
      t.string :userId
      t.string :ideaId
      t.string :content

      t.timestamps
    end
  end
end
