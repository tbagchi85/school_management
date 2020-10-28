class CreateStudents < ActiveRecord::Migration[5.1]
  def change
    create_table :students do |t|
      t.string :name
      t.string :roll_number
      t.text :house

      t.timestamps
    end
  end
end
