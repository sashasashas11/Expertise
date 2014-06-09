class AddFildsToExpertize < ActiveRecord::Migration
  def change
    add_column :expertizes, :goal, :text
  end
end
