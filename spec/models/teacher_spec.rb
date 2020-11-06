require 'rails_helper'

RSpec.describe Teacher, type: :model do
	context 'enum' do
    it do
    	should define_enum_for(:education).
    	  with_values(Graduate: 'graduate', Masters: 'master').
    	  backed_by_column_of_type(:string)
    end
  end

  context 'validations' do
  	let(:valid_teacher) { build(:teacher) }

    it "is valid with valid attributes" do
      expect(valid_teacher).to be_valid
    end

    it "is not valid without a name" do
      teacher = build(:teacher, name: nil)
      expect(teacher).to_not be_valid
    end
  end

  context 'associations' do
    it { should have_many(:academics) }
    it { should have_many(:subjects).through(:academics) }
  end
end
