class AlternativesController < ApplicationController
  def index
    @alternatives = Alternative.where(expertize_id: params[:expertize])
    render json: @alternatives
  end

  def create
    @alternative = Alternative.create(name: params[:name], expertize_id: params[:expertise])
    render json: @alternative
  end

  def destroy
    alternative = Alternative.find(params[:id])
    alternative.destroy
    render json: {status: true} if alternative
  end


end
