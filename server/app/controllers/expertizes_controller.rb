class ExpertizesController < ApplicationController
  before_action :set_expertize, only: [:show, :edit, :update, :destroy]
  before_filter :authenticate_user!, :only => [:index]


  def index
    @expertizes = Expertize.all
    #render json: @expertizes
  end

  def show
  end

  def new
    @expertize = Expertize.new
  end

  def edit
  end

  def create
    @expertize = Expertize.new(expertize_params)

    respond_to do |format|
      if @expertize.save
        format.html { redirect_to @expertize, notice: 'Expertize was successfully created.' }
        format.json { render action: 'show', status: :created, location: @expertize }
      else
        format.html { render action: 'new' }
        format.json { render json: @expertize.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @expertize.update(expertize_params)
        format.html { redirect_to @expertize, notice: 'Expertize was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @expertize.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @expertize.destroy
    respond_to do |format|
      format.html { redirect_to expertizes_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_expertize
      @expertize = Expertize.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def expertize_params
      params[:expertize]
    end
end
