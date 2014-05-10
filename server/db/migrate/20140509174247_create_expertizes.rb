class CreateExpertizes < ActiveRecord::Migration
  def change
    create_table :expertizes do |t|
      t.string :name
      t.string :method

      t.timestamps
    end
  end
end
