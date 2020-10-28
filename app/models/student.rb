class Student < ApplicationRecord
  has_many :academics, as: :subjectable
  has_many :subjects, through: :academics

  validates :name, :roll_name, presence: true
  validates :roll_name, uniqueness: true
end
