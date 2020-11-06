FactoryBot.define do
  factory :academic do
    for_student # default to the :for_student trait if none is specified
    subject

    trait :for_student do
      association :subjectable, factory: :student
    end

    trait :for_teacher do
      association :subjectable, factory: :teacher
    end
  end
end
