require 'rails_helper'

RSpec.describe Subject, type: :model do
  context 'validations' do
    it "is valid with valid attributes" do
      expect(build(:subject)).to be_valid
    end

    it "is not valid without a name" do
      subject = build(:subject, name: nil)
      expect(subject).to_not be_valid
    end

    it "is not valid without a uniq name" do
      create(:subject, name: 'subject_name')
      subject = build(:subject, name: 'subject_name')
      expect(subject).to_not be_valid
    end
  end

  context 'associations' do
    it { should have_many(:academics) }
    it { should have_many(:students) }
    it { should have_many(:teachers) }
  end
end
