class Api::V1::StudentsController < ApplicationController
  before_action :find_student, only: [:show]

  def index
  	@students = Student.all.order(created_at: :desc)
  	respond_to do |format|
      format.json{ render layout: false }
    end
  end

  def show
  	respond_to do |format|
      format.json{ render layout: false }
    end
  end

  private

  def find_student
    @student = Student.find(params[:id])
  end
end
