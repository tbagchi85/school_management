class Teacher < ApplicationRecord
  enum education: { Graduate: 'graduate', Masters: 'master' }

  has_many :academics, as: :subjectable
  has_many :subjects, through: :academics

  validates :name, presence: true
  validates :education, inclusion: { in: educations.keys }

  def students
    subject_ids = subjects.ids.uniq
    student_ids = Academic.where(subjectable_type: 'Student', subject_id: subject_ids).map(&:subjectable_id).uniq
    Student.where(id: student_ids)
  end
end
