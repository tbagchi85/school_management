require 'rails_helper'

RSpec.describe Student, type: :model do
  context 'validations' do
    it "is valid with valid attributes" do
      expect(build(:student)).to be_valid
    end

    it "is not valid without a name" do
      student = build(:student, name: nil)
      expect(student).to_not be_valid
    end

    it "is not valid without a roll_number" do
      student = build(:student, roll_number: nil)
      expect(student).to_not be_valid
    end

    it "is not valid without a uniq roll_number" do
      create(:student, roll_number: '12345')
      student = build(:student, roll_number: '12345')
      expect(student).to_not be_valid
    end
  end

  context 'associations' do
    it { should have_many(:academics) }
    it { should have_many(:subjects).through(:academics) }
  end
end
