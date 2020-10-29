class Api::V1::SubjectsController < ApplicationController
  before_action :find_student, only: [:show]

  def index
  	@subjects = Subject.all.order(created_at: :desc)
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
    @subject = Subject.find(params[:id])
  end
end
