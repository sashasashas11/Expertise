class Expertize < ActiveRecord::Base
  has_many :alternatives
  has_many :criterions
end
