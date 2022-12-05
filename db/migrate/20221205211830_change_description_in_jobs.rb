class ChangeDescriptionInJobs < ActiveRecord::Migration[7.0]
  def change
    rename_column :jobs, :desciption, :description
  end
end
