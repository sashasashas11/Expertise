class CreateAlternatives < ActiveRecord::Migration
  def change
    create_table :alternatives do |t|
      t.string :name
      t.integer :expertize_id

      t.timestamps
    end
  end
end
