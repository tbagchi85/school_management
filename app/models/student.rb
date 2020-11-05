class Student < ApplicationRecord
  has_many :academics, as: :subjectable
  has_many :subjects, through: :academics

  validates :name, :roll_number, presence: true
  validates :roll_number, uniqueness: true

  def teachers
    subject_ids = subjects.ids.uniq
    teacher_ids = Academic.where(subjectable_type: 'Teacher', subject_id: subject_ids).map(&:subjectable_id).uniq
    Teacher.where(id: teacher_ids)
  end
end
