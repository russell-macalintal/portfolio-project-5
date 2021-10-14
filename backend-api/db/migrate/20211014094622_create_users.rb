class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users, id: false, primary_key: :uid do |t|
      t.string :uid
      t.string :username

      t.timestamps
    end
  end
end
