ActiveAdmin.register User do

  
  # See permitted parameters documentation:
  # https://github.com/gregbell/active_admin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  #permit_params :last_name, :first_name, :email

  form do |f|
    f.inputs "User" do
      f.input :first_name
      f.input :last_name
      f.input :email
      f.inputs do
        f.has_many :roles, :allow_destroy => true, :heading => false do |cf|
          cf.input :role_id, :as => :name
        end
      end
    end

    #f.has_many :role do |item|
    #  item.input :name
    #end

    f.actions
  end
  #
  # or
  #
  #permit_params do
  #  permitted = [:permitted, :attributes]
  #  permitted << :other if resource.something?
  #  permitted
  #end
  
end
