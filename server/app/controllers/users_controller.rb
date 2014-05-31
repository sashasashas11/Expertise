class UsersController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token
  skip_before_filter :verify_authenticity_token, :only => :create

	def new
		@user = User.new
		#@user.build_address
  end



end
