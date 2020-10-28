class Teacher < ApplicationRecord
  enum education: { Graduate: 'graduate', Masters: 'master' }

  has_many :academics, as: :subjectable
  has_many :subjects, through: :academics

  validates :name, presence: true
  validates :education, inclusion: { in: educations.values }
end
