class Api::V1::TeachersController < ApplicationController
  before_action :find_teacher, only: [:show]

  def index
  	@teachers = Teacher.all.order(created_at: :desc)
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

  def find_teacher
    @teacher = Teacher.find(params[:id])
  end
end
