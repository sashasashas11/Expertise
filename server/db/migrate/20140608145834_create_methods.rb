class CreateMethods < ActiveRecord::Migration
  def change
    create_table :methods do |t|
      t.string :title
      t.text :text
      t.integer :parent

      t.timestamps
    end
  end
end
