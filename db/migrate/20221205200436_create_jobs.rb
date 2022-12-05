class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.belongs_to :location, null: false, foreign_key: true
      t.string :desciption
      t.string :job_name

      t.timestamps
    end
  end
end
