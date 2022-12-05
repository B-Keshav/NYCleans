class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :password_digest
      t.string :bio
      t.belongs_to :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
