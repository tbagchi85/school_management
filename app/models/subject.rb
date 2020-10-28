class Subject < ApplicationRecord
  has_many :academics
  has_many :students, :through => :academics, :source => :subjectable,
           :source_type => 'Student'
  has_many :teachers, :through => :academics, :source => :subjectable,
           :source_type => 'Teacher'

  validates :name, presence: true
end
