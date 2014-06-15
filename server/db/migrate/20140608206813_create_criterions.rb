class CreateCriterions < ActiveRecord::Migration
  def change
    create_table :criterions do |t|
      t.string :name
      t.integer :expertize_id

      t.timestamps
    end
  end
end
