subjects_name = %w{ English Maths Hindi Science History Philosophy Economics Geography Psychology Sociology Chemistry Physics }
FactoryBot.define do
  factory :subject do
    name        { subjects_name.sample }
    description { Faker::Lorem.paragraph }
  end
end
