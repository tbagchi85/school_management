Subject.all.each do |subject|
  teacher_ids = Teacher.ids.sample([1, 2, 3].sample)
  Teacher.where(id: teacher_ids).each do |teacher|
    subject.teachers << teacher
  end

  student_ids = Student.ids.sample([2, 3, 4, 5, 6].sample)
  Student.where(id: student_ids).each do |student|
    subject.students << student
  end
end
