class ExpertizesController < ApplicationController
  before_action :set_expertize, only: [:show, :edit, :update, :destroy]

  # GET /expertizes
  # GET /expertizes.json
  def index
    @expertizes = Expertize.all
    render json: @expertizes
  end

  # GET /expertizes/1
  # GET /expertizes/1.json
  def show
  end

  # GET /expertizes/new
  def new
    @expertize = Expertize.new
  end

  # GET /expertizes/1/edit
  def edit
  end

  # POST /expertizes
  # POST /expertizes.json
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

  # PATCH/PUT /expertizes/1
  # PATCH/PUT /expertizes/1.json
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

  # DELETE /expertizes/1
  # DELETE /expertizes/1.json
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
