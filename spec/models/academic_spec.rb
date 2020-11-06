require 'rails_helper'

RSpec.describe Academic, type: :model do
  context 'associations' do
    it { should belong_to(:subject) }
    it { should belong_to(:subjectable) }
  end

  describe 'validate record' do
  	let(:student_association) { create(:academic, :for_student) }
  	let(:teacher_association) { create(:academic, :for_teacher) }

    it 'has one student record' do
      expect(student_association.subject).to be_a(Subject)
    end

    it 'has one student record' do
      expect(student_association.subjectable_type).to eq('Student')
    end

    it 'has one teacher record' do
      expect(teacher_association.subjectable_type).to eq('Teacher')
    end
  end
end
