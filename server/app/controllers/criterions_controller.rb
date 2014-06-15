class CriterionsController < ApplicationController
  def index
    @criterions = Criterion.where(expertize_id: params[:expertize])
    render json: @criterions
  end

  def create
    @criterion = Criterion.create(name: params[:name], expertize_id: params[:expertise])
    render json: @criterion
  end

  def destroy
    @criterions = Criterion.find(params[:id])
    @criterions.destroy
    render json: {status: true} if @criterions
  end
end
