class MethodsController < ApplicationController
  def index
    @methods = Methods.all
    render json: @methods
  end

  def update
    method = Methods.find(params[:id])
    method.update(text: params[:text])
  end
end
